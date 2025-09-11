"use server";

import dbConnect from "@/lib/dbConnection";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  try {
    const userCollection = dbConnect("users");

    // check existing user
    const existingUser = await userCollection.findOne({ email: payload.email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // hash password
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    // user data with default role
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      role: payload.role || "student",
      createdAt: new Date(),
    };

    // insert new user
    const result = await userCollection.insertOne(userData);

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed" };
  }
};
