const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Update user by ID
exports.updateUserById = async (req, res, next) => {
    try {
        // Find the user by ID
        let user = await User.findById(req.params.id);

        // If the user doesn't exist, return 404
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user fields
        user.set(req.body);

       
        user.__v += 1;

        // Save the updated user
        await user.save();

        res.json(user);
    } catch (err) {
        next(err);
    }
};



// Delete user by ID
exports.deleteUserById = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
