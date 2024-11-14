import {ReactNode} from 'react'
import OrgProvider from '../context/OrgProvider'

interface Props{
    children: ReactNode
  }

const Layout = ({children}: Props) => {
  return (
    <div>
      <OrgProvider>
      {children}
      </OrgProvider>
    </div>
  )
}

export default Layout
