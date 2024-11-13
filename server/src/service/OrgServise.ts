
import Org from '../models/OrgMode'

export const getOrgByName = async(name:string)=>{
    return await Org.find({name})

}

