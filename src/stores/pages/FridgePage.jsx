import React,{useState} from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 
const FridgePage = () => {
  const [selectProduct,setSelectProduct]=useState([]);

  const companyHolder=(selectpr)=>{
        if(selectProduct.includes(selectpr)){
            setSelectProduct(selectProduct.filter(item=>item!== selectpr))
          }
        else{
             setSelectProduct([...selectProduct,selectpr])
         }
 }
 const filterProduct=selectProduct.length===0?fridgeData:fridgeData.filter((fiData)=>selectProduct.includes(fiData.brand))
 
 
return (
<>
  <Navbar />
  <div className='pageSection'>
  <div className="row">
      <div className="col-2">

          <div className='filtersC mx-2'>
        <h3>Fillter</h3>
            {fridgeData.map((phone)=>{
              return(
                <div> 
                    <label>
                      <input type="checkbox" className='mx-1'  checked={selectProduct.includes(phone.brand)} onChange={()=>companyHolder(phone.brand)}/>
                       {phone.brand}
                    </label>
                </div>
    
                 )
               })}
          </div>
       </div>
      <div className="col pageCard ">
      {filterProduct.map((item)=>{
       return(
        <>
    
           <div className='pageImg' key={item.id}>
             <Link to={`/fridge/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
               <div className="proDetails text-center">
                  <h6>{item.brand},{item.model}</h6>
                 <p>&#8377;{item.price}</p>
              </div>
          </div>

        </>
         )
         })}
      </div>
    </div>
  </div>
</>
)} 

export default FridgePage