import React from 'react'
import {fridgeData  } from '../data/fridge'
import { Link } from 'react-router-dom'
 

const Mobiles = () => {
const firstFiveImg=fridgeData.slice(0,5)
return (
    <div className='landingSec mt-3'>
    {/* View All */}
<div className="more mb-2 ">
<Link to='/fridge' className='btn btn-warning text-white '>View All</Link>
</div>
{/* Mobiles Details Looping  */}
<h3 className='mt-3'>REFIGRATOR</h3>
<div className='proSection'>
{firstFiveImg.map((item)=>{
return(
<Link to={`/fridge/${item.id}`} className="imgBox text-center">
    <img className="proImg" src={item.image} alt={item.brand+" mobile Image"} />
    <p>{item.brand},{item.model}</p>
</Link>
)
})}

</div>
</div>
)
}

export default Mobiles