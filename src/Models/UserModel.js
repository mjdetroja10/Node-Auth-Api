import { Schema, model } from "mongoose";

const collectionName = "users";

const UserSchema = new Schema({
  name: {
    type: String,
    required: "name can't be empty.",
  },
  email: {
    type: String,
    required: "email can't be empty.",
  },
  password: {
    type: String,
    required: "password can't be empty.",
  },
  mobile: {
    type: String,
    required: "mobile can't be empty.",
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    required: "userType name can't be empty.",
  },
});

export const UserModel = model(collectionName, UserSchema);
