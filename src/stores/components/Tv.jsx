import React from 'react'
import {tvData  } from '../data/tv'
import { Link } from 'react-router-dom'
 
const Mobiles = () => {
const firstFiveImg=tvData.slice(0,5)
return (
    <div className='landingSec mt-3'>
    {/* View All */}
<div className="more mb-2 ">
<Link to='/tv' className='btn btn-warning text-white '>View All</Link>
</div>
{/* Mobiles Details Looping  */}
<h3 className='mt-3'>TV's</h3>
<div className='proSection'>
{firstFiveImg.map((item)=>{
return(
<Link to={`/tv/${item.id}`} className="imgBox text-center">
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