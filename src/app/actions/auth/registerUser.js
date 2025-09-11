"use server";

import dbConnect from "@/lib/dbConnection";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  try {
    const userCollection = dbConnect("users");
    const existingUser = await userCollection.findOne({ email: payload.email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const userData = { ...payload, password: hashedPassword };
    const result = await userCollection.insertOne(userData);
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    return { success: false, message: "Registration failed" };
  }
};
