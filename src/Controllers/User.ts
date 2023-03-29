import { Request, Response } from "express";
import { insertUser } from "../Services/user";
import { handleHttp } from "../Utils/error.handle";

const getUsers = (req:Request, res:Response) => {
    try{
        res.json("working get")
    }catch(e){
        handleHttp(res,'ERROR_GET_USER',e)
    }
}

const postUser = async ({ body }: Request, res:Response) => {
    try{

        const response = await insertUser(body);
        res.send(response)
    }catch(e){
        handleHttp(res,'ERROR_POST_USER', e)
    }
}

export {getUsers, postUser};