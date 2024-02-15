import React, { useState } from 'react'
import { mobileData } from '../data/mobiles';

const PageNation = () => {
    // console.log(data1);
 
    const[currentPage,setCurrentPage]=useState(1);
    const recrodsPage=1;
    const lastIndex=currentPage*recrodsPage;
    const firstIndex=lastIndex-recrodsPage;
    const recrods=mobileData.slice(firstIndex,lastIndex);
    const nPage=Math.ceil(mobileData.length/recrodsPage);
    const numbers=[...Array(nPage + 1).keys()].slice(1)
    console.log(recrods);

    const prePage =()=>{
      if(currentPage !== 1){
        setCurrentPage(currentPage-1)
      }
      }
      function changeCpage (id){
          setCurrentPage(id)
      }
      const nextPage =()=>{
        if(currentPage !== nPage){
          setCurrentPage(currentPage+1)
        }   
      }
  return (
    <div>
         
      <nav>
  <ul class="pagination">
    <li class="page-item  ">
      <a class="page-link" href="#" onClick={prePage} >Previous</a>
    </li>
   
    {
        numbers.map((n,i)=>{
 <li className={`page-item ${currentPage === n ? 'active':""}`} key={i}>
    <a href="#" className='page-link' onClick={changeCpage(n)}>{n}</a>

 </li>
        })
    }
  
    
    <li class="page-item">
      <a class="page-link" href="#" onClick={nextPage}>Next</a>
    </li>
  </ul>
</nav>
 
    </div>
  )
}

export default PageNation