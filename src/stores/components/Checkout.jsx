import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className=' text-center'>
      <h2>Your Order Placed <b className='text-success'>Successfully!!!</b></h2>
     <h4>
      <Link to="/">Goto Shoping..</Link>
     </h4>
      
    </div>
  )
}

export default Checkout