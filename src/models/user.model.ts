import mongoose from "mongoose";

import { ERole } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    age: { type: Number, required: false },
    role: { type: String, enum: ERole, default: ERole.USER },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = mongoose.model<IUser>("users", userSchema);
