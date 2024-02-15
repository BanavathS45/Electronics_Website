import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
 
const computers = () => {
const firstFiveImg=acData.slice(0,5)
return (
<div className='landingSec mt-3'>
                     {/* View All */}
    <div className="more mb-2 ">
        <Link to='/ac' className='btn btn-warning text-white '>View All</Link>
    </div>
                {/* Mobiles Details Looping  */}
         <h3 className='mt-3'>AC's</h3>
         <div className='proSection'>
             {firstFiveImg.map((item)=>{
                return(
                 <Link to={`/ac/${item.id}`} className="imgBox text-center">
                     <img className="proImg" src={item.image} alt={item.company+" mobile Image"} />
                     <p>{item.company},{item.model}</p>
        </Link>
        )
        })}

    </div>
</div>
)
}

export default computers