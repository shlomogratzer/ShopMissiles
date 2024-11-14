import {ReactNode, createContext, useState} from 'react'
interface ILoginUser{
    name:string
    login:boolean
    org:string
}
interface Props {
    children: ReactNode;
}
interface UserProps{
    loginUser:ILoginUser
    setLoginUser:React.Dispatch<React.SetStateAction<ILoginUser>>
  }
export const UserLoginContext = createContext<UserProps | null>(null)

const UserProvider = ({children}:Props) => {
    const [loginUser,setLoginUser] = useState<ILoginUser| null>(null)
  return (
    <UserLoginContext.Provider value={{loginUser,setLoginUser}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserProvider