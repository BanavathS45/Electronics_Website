import React from 'react'
import { booksData } from '../data/books'

const Mobiles = () => {
const firstFiveImg=booksData.slice(0,5)
return (
<div className='computerSec mt-3'>
<div className="more mb-2 ">
            <button className='btn btn-warning text-white '>View All</button>
        </div>
<h3 className='mt-3'>Books</h3>
    <div className='proSection'>
        {firstFiveImg.map((item)=>{
        return(
        <div className="imgBox text-center">
            <img className="proImg" src={item.image} alt={item.company+" mobile Image"} />
            <p>{item.title},{item.author}</p>

        </div>
        )
        })}
        
    </div>
</div>
)
}

export default Mobiles