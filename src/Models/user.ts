import { model, Schema } from "mongoose";
import { User } from "../Interfaces/User";

const UserSchema = new Schema<User>(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const UserModel = model("Users", UserSchema);

export default UserModel;