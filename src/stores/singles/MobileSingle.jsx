import React from 'react'
import { mobileData } from '../data/mobiles'
import { useParams} from 'react-router-dom'
import { useState } from 'react'
import{useCart} from '../context/CartContext'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from '@material-ui/core'
 

const MobileSingle = () => {
  
const{addToCart,cartItems}=useCart()
const[name,setName]=useState("Add to Cart")
const[cart,setCart]=useState(" ")
const[rating,setRating]=useState(null)
const[rateColor,setrateColor]=useState(null)


const {id}=useParams();
const products=mobileData.find((item)=>item.id===id)
// console.log(products);
 
return(
<>
  <Navbar />
  <h5 className=' addCart text-dark  text-center'>{cart}</h5>

  <div className="singleCard" key={products.id}>
    <p>{products.product}</p>
    <div className="row ">
      <div className="col-3 imgCard">
        <img className='imgCard1' src={products.image} alt="" />
        <div className="smallImg">
          <div className="row">
            <Link to='/mobiles' className="col"> <img src={mobileData[0].image} alt="" /></Link>
            <Link className="col"> <img src={mobileData[1].image} alt="" /></Link>
            <Link className="col"> <img src={mobileData[2].image} alt="" /></Link>
            <Link className="col"> <img src={mobileData[3].image} alt="" /></Link>
          </div>
        </div>
      </div>
      <div className=" col productDetails">
        
        <h3>{products.company},{products.model}</h3>
        {/* Rating */}
        {[...Array(5)].map((star,index)=>{
          const currentRate=index+1;
          return(
<>
            <label>
            <input style={{display:"none"}} type="radio" name='rate' value={currentRate} onClick={()=>setRating(currentRate)} /> 
            <FontAwesomeIcon icon={faStar}  color={ currentRate<=(rateColor||rating) ? "yellow":"gray"}/>  
            {/* <faStar/> */}
        
        </label>
       
        </>       
        
            )
        })}
           &nbsp;<span style={{color:"green"}}> Plase Rate The Product</span>

        <h4>&#8377;{products.price}</h4>
        <p>{products.description}</p>

        <button className='Added mt-3 btn btn-success' onClick={()=>{
          // alert("You'r item add to cart")
        //   if(products.id === cartItems.id ){
        //     alert('Item Already Added')
        //   }
        //   else{
        //   addToCart(products)
        // }
        addToCart(products)
          console.log('items', cartItems);
          setName("Added")
          setCart("your item added to cart")
          setTimeout(() => {
          setCart(false)
          }, 2000);

          }}>{name}
          </button>
       
      </div>
      <div className="col-4 sideAdds">
        <h1 className='text-center'>Recent Lunched </h1>
        <p className='text-center Scroll'>Scroll Down</p>
        <div className='pageSection'>
      <div className="col pageCard recent-pageCard ">
      {mobileData.map((item)=>{
       return(
        <>
               <div className='pageImg'key={item.id}>
             <Link to={`/mobiles/${item.id}`}>
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

export default MobileSingle