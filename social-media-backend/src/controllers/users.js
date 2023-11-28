const User = require('../models/user');

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, picturePath } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        //TODO: FileUpload profile

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picturePath,
        });

        await newUser.save();

        // remove hash before sending user back
        delete newUser.password;

        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createUser,
};

module.exports = { getUser, createUser };
