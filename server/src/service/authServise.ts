import User,{ IUser } from "../models/UserModel"


export const createUser = async (user:IUser) =>{
    const newUser = new User(user)
    return await newUser.save()
}
export const loginUser = async (loginuser: IUser)=>{
    const {username,password} = loginuser
    const user = await User.findOne({username})

    if(!user || !(await user.comparePassword(password))){
        return 'username or password is not correct'
    }
    return 'login secssesfully'
}