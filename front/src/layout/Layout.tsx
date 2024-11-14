import {ReactNode} from 'react'
import OrgProvider from '../context/OrgProvider'
import UserProvider, { UserLoginContext } from '../context/UserProvider'

interface Props{
    children: ReactNode
  }

const Layout = ({children}: Props) => {
  return (
    <div>
      <OrgProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </OrgProvider>
    </div>
  )
}

export default Layout
