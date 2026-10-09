import { Router } from "express";
import { register } from "../controlllers/authController.js";

const Route= Router();

Route.post("/register",register);



export default Route;