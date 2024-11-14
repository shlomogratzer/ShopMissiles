
import { IMissile } from '../models/MissileModel'
import Org, { IOrg } from '../models/OrgMode'
import { getMissileByName } from './missileService'

interface IOrder{
    missile:string
    org : string
    amount:number
}
export const getOrgByName = async(name:string)=>{
    return await Org.findOne({name:name})
}

export const getWeaponsByOrgName = async (org:IOrg, missileComand:string)=>{
    return org.resources.filter(missile => missile.name === missileComand)
}

export const ifYuCenPay = async(order:IOrder) =>{
    const org:any = await getOrgByName(order.org) 
    const missile:any = await getMissileByName(order.missile)

    const sum = order.amount * missile.price
    if(sum > org.budget){
        return false
    }
    return sum
}
export const addAountWapons = (amount:number,sum:number) =>{
    return "order is complit"
}