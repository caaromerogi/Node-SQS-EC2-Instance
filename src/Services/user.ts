import { sender } from "../AWS/user.queue";
import { User } from "../Interfaces/User";
import UserModel from "../Models/user";

const insertUser = async (user:User) => {
    sender(user).then((ot) => console.log(ot))
    .catch(err => console.log(err));
    const responseInsert = await UserModel.create(user);
    return responseInsert
}

export {insertUser};