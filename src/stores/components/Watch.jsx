import React from 'react'
import {watchData  } from '../data/watch'
import { Link } from 'react-router-dom'
 

const Mobiles = () => {
const firstFiveImg=watchData.slice(0,5)
return (
    <div className='landingSec mt-3'>
    {/* View All */}
<div className="more mb-2 ">
<Link to='/watch' className='btn btn-warning text-white '>View All</Link>
</div>
{/* Mobiles Details Looping  */}
<h3 className='mt-3'>WATCHES</h3>
<div className='proSection'>
{firstFiveImg.map((item)=>{
return(
<Link to={`/watch/${item.id}`} className="imgBox text-center">
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