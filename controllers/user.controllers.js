const User = require('../models/user.models');

const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

    try {
        const { authType, firstName, lastName, email, phone, password } = req.body;

        if (!authType || !['Admin', 'User', 'Emp'].includes(authType)) {
            return res.status(400).json({
                status: 400,
                error: 'Invalid authType. Must be one of: Admin, User, Emp.',
            });
        }

        if (!firstName || !lastName || !email || !phone || !password) {
            return res.status(400).json({
                status: 400,
                error: 'All fields (firstName, lastName, email, phone, password) are required.',
            });
        }

        // Check if the email is already taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                error: 'Email is already registered.',
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({
            authType,
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        if (!savedUser) {
            return res.status(400).json({
                status: 400,
                error: 'User is not created.',
            });
        }
        // Return the response
        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: savedUser,
        });
    } catch (error) {
        // Handle unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

const getAllUser = async (req, res) => {

    try {
        const allUsers = await User.find();

        if (!allUsers) {
            return res.status(400).json({
                status: 400,
                error: 'User data is not found.',
            });
        }
        // Return the response
        res.status(201).json({
            status: 201,
            message: 'User data is found',
            data: allUsers,
        });

    } catch (error) {
        // Handle unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

const getUserById = async (req, res) => {

    try {
        const { Id } = req.body;

        const userData = await User.findById(Id);

        if (!userData) {
            return res.status(400).json({
                status: 400,
                error: 'User data is not found.',
            });
        }
        // Return the response
        res.status(201).json({
            status: 201,
            message: 'User data is found',
            data: userData,
        });

    } catch (error) {
        // Handle unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};


const userUpdate = async (req, res) => {

    try {
        const userId = req.body.Id;
        const updateUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });

        if (!updateUser) {
            return res.status(400).json({
                status: 400,
                error: 'User update unsuccessfull.',
            });
        }
        // Return the response
        res.status(201).json({
            status: 201,
            message: 'User update sucessfull',
            data: updateUser,
        });

    } catch (error) {
        // Handle unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};

const deleteUser = async (req, res) => {

    try {
        const userId = req.body.Id;
      const userDelete = await User.findByIdAndDelete(userId);
        if (!userDelete) {
            return res.status(400).json({
                status: 400,
                error: 'User delete unsuccessfull.',
            });
        }
        // Return the response
        res.status(201).json({
            status: 201,
            message: 'User delete sucessfull',
            data: userDelete,
        });

    } catch (error) {
        // Handle unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
};
module.exports = {
    createUser,
    getAllUser,
    getUserById,
    userUpdate,
    deleteUser,
};