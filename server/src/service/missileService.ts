import Missil from '../models/MissileModel'

export const getMissileByName = async(name:string) =>{
    return await Missil.findOne({name:name})
}