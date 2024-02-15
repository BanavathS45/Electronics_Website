import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
 
const MobilePage = () => {
  const [selectProduct,setSelectProduct]=useState([]);

  const companyHolder=(selectpr)=>{
        if(selectProduct.includes(selectpr)){
            setSelectProduct(selectProduct.filter(item=>item!== selectpr))
          }
        else{
             setSelectProduct([...selectProduct,selectpr])
         }
 }
 const filterProduct=selectProduct.length===0?computerData:computerData.filter((fiData)=>selectProduct.includes(fiData.company))
 
 
return (
<>
  <Navbar />
  <div className='pageSection'>
  <div className="row">
      <div className="col-2 ">

          <div className='filtersC mx-2'>
        <h3>Fillter</h3>
            {computerData.map((phone)=>{
              return(
                <div> 
                    <label>
                      <input type="checkbox" className='mx-1'  checked={selectProduct.includes(phone.company)} onChange={()=>companyHolder(phone.company)}/>
                       {phone.company}
                    </label>
                </div>
    
                 )
               })}
          </div>
       </div>
      <div className="col  pageCard ">
      {filterProduct.map((item)=>{
       return(
        <div >
    
           <div className='pageImg' key={item.id}>
             <Link to={`/computers/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
               <div className="proDetails  ">
                  <h6>{item.company},{item.model}</h6>
                 <p>&#8377;{item.price}</p>
              </div>
          </div>

        </div>
         )
         })}
      </div>
    </div>
  </div>
</>
)}
 

export default MobilePage