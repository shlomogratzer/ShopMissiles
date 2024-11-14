import {Router,Request,Response } from "express";
import { IUser } from "../models/UserModel";
import {createUser, loginUser} from '../service/authServise'


const router = Router()
router.post('/register', async(req:Request,res:Response):Promise<void> =>{
    try {
        const user:IUser = req.body
        console.log(user);
        
        const newUser = await createUser(user)
        console.log(newUser);
        res.json(newUser)
    } catch (error:any) {
        console.error(error.messege)
    }
})
router.post('/login', async(req:Request,res:Response):Promise<void> =>{
    try {
        const user:IUser = req.body
        const login = await loginUser(user)
        res.json(login)
    } catch (error:any) {
        console.error(error.messege)
    }
})

export default router