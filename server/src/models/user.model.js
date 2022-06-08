import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import Jwt from "jsonwebtoken";
import bcrypt from bcrypt;
import enviroments from "../../config/enviroments.js";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'First name is required'],
        },
        lastName: {

        }
    }
)