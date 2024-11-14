import express ,{Request,Response} from "express";
import { IUser } from "../models/UserModel";
import {addAountWapons, getOrgByName, getWeaponsByOrgName, ifYuCenPay,} from '../service/OrgServise'
import { IOrg } from "../models/OrgMode";
import { IMissile } from "../models/MissileModel";
import { getMissileByName } from "../service/missileService";
import { Router } from "express";

interface IOrder{
    missile:string
    org : string
    amount:number
}

interface AuthUser{
    org:string
}
interface IOrgDto{
    org:IOrg
}
const router:Router = express.Router()

router.post('/mydata', async(req:Request,res:Response):Promise<void> =>{
    try {
        
        const user:AuthUser = req.body
        console.log('mydata');
        const org = await getOrgByName(user.org)

        res.json(org)
    } catch (error:any) {
        console.error(error.messege)
    }
})
router.post('/bynew', async(req:Request,res:Response):Promise<void> =>{
    try {
        
        const order:IOrder = req.body
        console.log(order);
        
        const org:any = await getOrgByName(order.org)
        console.log(org);
        
        const weapons = await getWeaponsByOrgName(org,order.missile)
        console.log(weapons);
        
        if(weapons.length < 1) {
            res.json({message:"yur not heve authorsation to by this missile"})
            return
        }
        const missile = await getMissileByName(order.missile)
        console.log(missile);
        
        const sum = await ifYuCenPay(order)
        if(!sum){
            res.json({message:"you heve not ennuf mony"})
            return
        }
        const byWapons = addAountWapons(order.amount,9000)

        res.json(byWapons)
    } catch (error:any) {
        console.error(error.messege)
    }
})

export default router