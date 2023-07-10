import {
  HomeUserRequst,
  SingleUsersRequest,
  UserLoginRequest,
  UserRegister,
  UsersListRequest,
} from "../controllers/UserController.js";
import { LoginAuthMiddleware } from "../middlewares/LoginAuthmiddleware.js";

export const appRoutes = (app) => {
  app.post("/register", UserRegister);

  app.post("/login", UserLoginRequest);

  app.get("/", LoginAuthMiddleware, HomeUserRequst);

  app.get("/users", LoginAuthMiddleware, UsersListRequest);

  app.get("/users/:id", LoginAuthMiddleware, SingleUsersRequest);

  app.get("*", LoginAuthMiddleware, SingleUsersRequest);
};
