import React,{useState} from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 
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
 const filterProduct=selectProduct.length===0?womanData:womanData.filter((fiData)=>selectProduct.includes(fiData.brand))
 
 
return (
<>
  <Navbar />
  <div className='pageSection'>
  <div className="row">
      <div className="col-2">

          <div className='filtersC mx-2'>
        <h3>Fillter</h3>
            {womanData.map((phone)=>{
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
    
           <div className='pageImg mt-4' key={item.id}>
             <Link to={`/women/${item.id}`}>
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

export default MobilePage