import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not define")
}
if(!process.env.JWT_TOKEN){
    throw new Error("JWT_TOKEN is not define")
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_TOKEN: process.env.JWT_TOKEN
}


export default config;