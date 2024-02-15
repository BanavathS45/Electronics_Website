import React from 'react'
import Navbar from './Navbar'
import Products from './Products' 
import Footer from './Footer'
 
const Home = () => {
  return (
    <div className='landing'>

        <Navbar />
        <Products/>
        {/* <Footer /> */}
       
    </div>
  )
}

export default Home