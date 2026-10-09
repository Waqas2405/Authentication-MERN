import model from "../model/user.model.js";
import config from "../config/config.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {

    const { name, email, password } = req.body;

    const isalreadyExit = await model.findOne({
        $or: [
            { name },
            { email }
        ]
    })

    if (isalreadyExit) {
        res.status(409).json({
            message: "name and emil alredy exit"
        })
    }

    const passwordhash = crypto.createHash("sha256").update(password).digest("hex");

    const user = await model.create({
        name,
        email,
        password: passwordhash
    }
    )

    const token= jwt.sign(
    {id:user._id},
    config.JWT_TOKEN,{
        expiresIn:"1d"
    }
    
    )

    res.status(201).json({
        message:"User register Succesfully",
        user:{
         name:user.name,
         email:user.email
        },
        token
    })



}
