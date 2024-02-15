import React,{useState} from "react";
import { computerData } from "../data/computers";
import { useParams,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useCart } from "../context/CartContext";

const ComputerSingle = () => {
  const{addToCart,cartItems}=useCart()
  const[name,setName]=useState("Add to Cart")
  const[cart,setCart]=useState(" ")
  const[rating,setRating]=useState(null)
  const[rateColor,setrateColor]=useState(null)
  
  
  const {id}=useParams();
  const products=computerData.find((item)=>item.id===id)
  console.log(products);
  return(
  <>
    <Navbar />
    <h5 className=' addCart text-danger  text-center'>{cart}</h5>
    <div className="singleCard">
      <p>{products.product}</p>
      <div className="row ">
        <div className="col-3 imgCard  ">
          <img src={products.image} alt="" />
          <div className="smallImg">
            <div className="row">
              <div className="col"> <img src={computerData[1].image} alt="" /></div>
              <div className="col"> <img src={computerData[2].image} alt="" /></div>
              <div className="col"> <img src={computerData[3].image} alt="" /></div>
              <div className="col"> <img src={computerData[4].image} alt="" /></div>
            </div>
          </div>
        </div>
        <div className=" col productDetails">
          
          <h3>{products.company},{products.model}</h3>
          {/* Rating */}
          {[...Array(5)].map((star,index)=>{
            const currentRate=index+1;
            return(
  
              <label>
              <input style={{display:"none"}} type="radio" name='rate' value={currentRate} onClick={()=>setRating(currentRate)} />
              <FontAwesomeIcon icon={faStar}  color={ currentRate<=(rateColor||rating) ? "yellow":"gray"}/>
              {/* <faStar/> */}
          
          </label>
              )
         
          })}
            &nbsp;<span style={{color:"green"}}> Plase Rate The Product</span>
          <h4>&#8377;{products.price}</h4>
          <p>{products.description}</p>
  
          <button className='mt-3 btn btn-success' onClick={()=>{
            // alert("You'r item add to cart")
            addToCart(products)
            setName("Added")
            setCart("your item added to cart")
            setTimeout(() => {
            setCart(false)
            }, 2000);
            }}>{name}</button>
         
        </div>
       
        <div className="col-4 sideAdds">
        <h1>Recent Lunched </h1>
        <p className='text-center Scroll'>Scroll Down</p>
        <div className='pageSection'>
      <div className="col  pageCard ">
      {computerData.map((item)=>{
       return(
        <>
               <div className='pageImg'key={item.id}>
             <Link to={`/computers/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
               <div className="proDetails text-center">
                  <h6>{item.company},{item.model}</h6>
                 <p>&#8377;{item.price}</p>
              </div>
          </div>
           

        </>
         )
         })}
    </div>
  
        </div>
        </div>
      </div>
      <div className="product_Details mt-5">
        <h3>Product Details</h3>
      </div>
    </div>
  </>
  )
  }
 

export default ComputerSingle;
