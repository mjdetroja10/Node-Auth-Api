import { config } from "dotenv";

config();

const { PORT, JWT_SECRET_KEY } = process.env;

export const port = PORT || 3002;

export const jwtSecretKey = JWT_SECRET_KEY;
