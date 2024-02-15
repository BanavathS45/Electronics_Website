import React, { useState } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
const serachItems=[
{id:1,serachName:"Mobile",path1:'/mobiles' },
{id:2,serachName:"Computer",path1:'/computers'},
{id:3,serachName:"Ac's",path1:'/ac'},
{id:4,serachName:"Tv's",path1:'/tv'},
{id:5,serachName:"Fridge",path1:'/fridge'},
{id:5,serachName:"Refrigrator",path1:'/fridge'},
{id:6,serachName:"Furniture",path1:'/furniture'},
{id:7,serachName:"Kitchen",path1:'/kitchen'},
{id:8,serachName:"Men's Wear",path1:'/men'},
{id:9,serachName:"Women's Wear",path1:'/women'},
{id:10,serachName:"Watch",path1:'/watch'},
{id:10,serachName:"Speakers",path1:'/speakers'},
]
const [serach,setSerach]=useState()
const [open,setOpen]=useState(false)
const [time,setTime]=useState("Not items Found")
const {cartItems} = useCart();
const userName=JSON.parse(localStorage.getItem("users")) 
const navigate=useNavigate()
const handlelogout=()=>{
  localStorage.removeItem('loggedin')
 navigate('/login')
}
return (
<nav>
  <div className="navbar-section bg-primary">
    <div className="nav-logo ">
      <Link to='/'>E-MART</Link>
    </div>
    <div className="serach">
      <input type="text" placeholder="serach..." className="form-control" value={serach}
        onChange={(e)=>setSerach(e.target.value)

      }
      />

      <div className="serItems">

        {
        (serach == 0 || !serachItems.filter(items=>items.serachName.toLowerCase().includes(serach))) ?
        <p style={{textAlign:"center"}}>{time}</p>:
        serachItems.filter(items=>items.serachName.toLowerCase().includes(serach)).map(items=>{
        return(

        <div className="serchItems1" key={items.id}>
          <Link to={items.path1} style={{color:"white"}}>{items.serachName}</Link>

        </div>
        )})}
      </div>

    </div>
    <div className="user  loginsig">
      <Link to="/" className="text-white">Home</Link>
    </div>
    <div className="user ">
      <Link>{"welcom, "+userName.name}
      {/* <img src={userName.file} alt="no image" /> */}
    
      </Link>
    </div>
    <div className="user ">
      <button className="btn btn-info" onClick={handlelogout}>Logout
    
      </button>
    </div>
    <div className="cart">
      <Link to='/cart'>
      <p className="text-white">
        <FontAwesomeIcon icon={faCartPlus} />
        <sup className="icon bg-dark p-1 rounded">
          {cartItems.length}
        </sup>
        
      </p>
      </Link>
      
    </div>
  </div>
{/* <div className="bars">
  <a href=""><FontAwesomeIcon icon={faBars} /></a>

</div> */}
  <div class={open ? "subMenu hide-show " : "subMenu"}>
    <ul>
    <div className="logins ">
   
      <NavLink to="/"> <li>Home</li> </NavLink>  
      <Link ><li>{"Hello, "+userName.name}</li> </Link>
   
   </div>
   <NavLink to='/mobiles' className="custom-a">
    <li>Mobiles</li>  
      </NavLink>  
      <NavLink to="/computers" className=" custom-a">
    <li>Computers  </li>  
      </NavLink>
      <NavLink to="/watch" className=" custom-a ">
     <li>Watches</li>  
      </NavLink>
      <NavLink to="/men" className=" custom-a">
      <li>Mens Wear</li> 
      </NavLink>
      <NavLink to="/women" className=" custom-a">
       <li> Woman Wear </li>
      </NavLink>
      <NavLink to="/furniture" className=" custom-a">
        <li>Furniture</li> 
      </NavLink>
      <NavLink to="/kitchen" className=" custom-a">
       <li>Kitchen</li> 
      </NavLink>
      <NavLink to="/fridge" className=" custom-a">
     <li>Refigrator</li> 
      </NavLink>
      {/* <NavLink to="/books" className=" custom-a">
        <li>Books</li>
      </NavLink> */}
      <NavLink to="/speakers" className=" custom-a">
        <li>Speakers</li> 
      </NavLink>
      <NavLink to="/tv" className=" custom-a">
        <li> TV's </li>
      </NavLink>
      <NavLink to="/ac" className=" custom-a">
      <li> AC </li>
      </NavLink>
   
  
      </ul>
    
 
    
  </div>
 
  <div className="bars" id="bars">
    <a href="#" onClick={()=>setOpen(!open)}><FontAwesomeIcon icon={faBars} />  </a>
              
        </div>

</nav>
);
};

export default Navbar;