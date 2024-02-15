import React,{useState} from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
 
 
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
 const filterProduct=selectProduct.length===0?acData:acData.filter((fiData)=>selectProduct.includes(fiData.company))
 
 
return (
<>
  <Navbar />
  <div className='pageSection'>
  <div className="row">
      <div className="col-2   ">

          <div className='filtersC mx-2'>
        <h3>Fillter</h3>
            {acData.map((phone)=>{
              return(
                <div key={phone.id}> 
                    <label>
                      <input type="checkbox" className='mx-1'  checked={selectProduct.includes(phone.company)} onChange={()=>companyHolder(phone.company)}/>
                       {phone.company}
                    </label>
                </div>
    
                 )
               })}
          </div>
       </div>
      <div className="col-10 pageCard ">
      {filterProduct.map((item)=>{
       return(
        <div className='procard'>
           <div key={item.id} className='pageImg '>
             <Link to={`/ac/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
               <div className="proDetails text-center">
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
  <Footer />
</>
)} 

export default MobilePage