import React from 'react'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
 
const Mobiles = () => {
const firstFiveImg=speakerData.slice(0,5)
return (
    <div className='landingSec mt-3'>
    {/* View All */}
<div className="more mb-2 ">
<Link to='/speakers' className='btn btn-warning text-white '>View All</Link>
</div>
{/* Mobiles Details Looping  */}
<h3 className='mt-3'>SPEAKERS</h3>
<div className='proSection'>
{firstFiveImg.map((item)=>{
return(
<Link to={`/speakers/${item.id}`} className="imgBox text-center">
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