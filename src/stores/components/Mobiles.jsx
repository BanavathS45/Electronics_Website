import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobiles = () => {
    
const firstFiveImg=mobileData.slice(0,5)
return (
<div className='landingSec mt-3'>
                     {/* View All */}
    <div className="more mb-2 ">
        <Link to='/mobiles' className='btn btn-warning text-white '>View All</Link>
    </div>
                {/* Mobiles Details Looping  */}
         <h3 className='mt-3'>Mobiles</h3>
         <div className='proSection'>
             {firstFiveImg.map((item)=>{
                return(
               
                 <Link to={`/mobiles/${item.id}`} className="imgBox text-center">
                     <img className="proImg" src={item.image} alt={item.company+" mobile Image"} />
                     <p>{item.company},{item.model}</p>
        </Link>
        )
        })}

    </div>
</div>
)}
export default Mobiles