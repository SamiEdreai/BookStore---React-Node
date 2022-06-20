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
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Last name is required']

        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Last name is required'],
            validator(value) {
                if (!isEmail(value)) {
                    throw new Error('Email is inValid')
                };
            }

        },
        password: {
            type: String,
            trim: true,
            lowercase: true,
            minlength: [8, 'Password must be at least 8 charcters'],
            maxlength: [12, 'Password must be max 12 charters'],
            required: [true, 'Last name is required'],
            validate(value) {
                if (!isStrongPassword) {
                    throw new Error('Password must contain at least 8 charachters, at least 1 uppercase letter, and at least one number')
                }
            }



        },
        tokens: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Last name is required']

        }
    }
)