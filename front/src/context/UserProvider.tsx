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
    loginUser:ILoginUser|{}
    setLoginUser:React.Dispatch<React.SetStateAction<ILoginUser>>
  }
export const OrgContext = createContext<UserProps>({
    loginUser:{},
    setLoginUser:()=>{}
})

const OrgProvider = ({children}:Props) => {
    const [loginUser,setLoginUser] =useState<string>('')
  return (
    <OrgContext.Provider value={{loginUser,setLoginUser}}>
        {children}
    </OrgContext.Provider>
  )
}

export default OrgProvider