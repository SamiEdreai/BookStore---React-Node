import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import isStrongPassword from "validator/lib/isStrongPassword.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import environments from "../../config/environments.js";

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
            validate(value) {
                if (!isEmail(value)) {
                    throw new Error('Email is inValid')
                };
            }

        },
        password: {
            type: String,
            trim: true,
            minlength: [8, 'Password must be at least 8 charcters'],
            // maxlength: [20, 'Password must be max 12 charters'],
            required: [true, 'Last name is required'],
            validate(value) {
                if (!isStrongPassword(value)) {
                    throw new Error('Password must contain at least 8 charachters, at least 1 uppercase letter, and at least one number')
                }
            }



        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;

    const token = jwt.sign({ _id: user._id }, environments.TOKEN_SECRET);

    user.tokens.push({ token: token });
    await user.save();

    return token;
};

userSchema.methods.toJSON = function () {
    const user = this;

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.tokens;
    delete userObj.__v;

    return userObj;
};

userSchema.statics.findByEmailandPassword = async (email, password) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("Login faild");
    }
    const compareUserPassword = await bcrypt.compare(password, user.password);

    if (!compareUserPassword) {
        throw new Error("Password incorrect")
    }

    return user;

};

userSchema.virtual('cart', {
    ref: 'Cart',
    localField: '_id',
    foreignField: 'ownerID',
});

const User = mongoose.model('User', userSchema);

export default User;
