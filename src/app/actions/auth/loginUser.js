"use server";

import dbConnect from "@/lib/dbConnection";
import bcrypt from "bcryptjs";

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload;
    const userCollection = dbConnect("users");

    const user = await userCollection.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const isPasswordOk = await bcrypt.compare(password, user.password);
    if (!isPasswordOk) {
      return { success: false, message: "Invalid password" };
    }

    return {
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
};
