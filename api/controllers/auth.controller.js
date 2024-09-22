import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password || username === '' || email === '' || password === '') {
      return next(errorHandler(400, 'All fields are required'));
    }

    // Hash the password using bcryptjs
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user object with the hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the newly created user (remove sensitive data if needed)
    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });

  } catch (error) {
    // Log the error and send a response with an error message
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { signup };
