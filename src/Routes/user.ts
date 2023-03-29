import { Request, Response, Router } from "express";
import { getUsers, postUser } from "../Controllers/User";
import { User } from "../Interfaces/User";

const router = Router();

router.get('/users', getUsers);
router.post('/users', postUser)

export { router };