
import { Outlet,Navigate } from 'react-router-dom'
 
const Protect = () => {
    const auth=localStorage.getItem("loggedin")
  return  auth?<Outlet/>:<Navigate to={'/login'}/>
}

export default Protect;