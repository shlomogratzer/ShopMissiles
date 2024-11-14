import { Route,Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from '../components/Register'
import DataOrg from "../components/DataOrg"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/shop" element={<DataOrg/>}/>
      </Routes>
    </div>
  )
}

export default Router
