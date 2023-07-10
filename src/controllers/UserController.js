import { Types } from "mongoose";
import { UserModel } from "../Models/UserModel.js";
import { jwtSecretKey } from "../config/index.js";
import jwt from "jsonwebtoken";

export const UserRegister = async (req, res) => {
  try {
    const body = req.body;

    const data = new UserModel(body);

    const result = await data.save();

    console.log(result);

    let responseData = { message: "register successfullly", data: result };
    res.send(201, responseData);
  } catch (error) {
    console.log(error);
    res.send(500, error);
  }
};

export const UserLoginRequest = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      if (user?.password === password) {
        const token = jwt.sign({ user_id: user._id, email }, jwtSecretKey, {
          expiresIn: "24h",
        });

        let result = { message: "successfully logged in", token };
        res.send(result);
        next();
      } else {
        let errors = {
          errors: [{ params: "password", message: "password is incorrect" }],
        };
        res.send(errors);
        next();
      }
    } else {
      let errors = {
        errors: [{ params: "email", message: "email is incorrect" }],
      };
      res.send(errors);
      next();
    }
  } catch (error) {
    res.send(error);
    next();
  }
};

export const HomeUserRequst = (req, res) => {
  try {
    let title = { name: "My Dashboard" };

    res.send(title);
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
};

export const UsersListRequest = async (req, res) => {
  try {
    let users = await UserModel.find({});

    let result = { message: "successfully users data loaded", data: users };

    console.log(result);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const SingleUsersRequest = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);

    let user = await UserModel.findOne({ _id: new Types.ObjectId(id) });

    let result = { message: "successfully users data loaded", data: user };

    console.log(result);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
