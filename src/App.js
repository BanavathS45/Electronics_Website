import React from 'react'; 
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './stores/components/Home';
import MobilePage from './stores/pages/MobilePage';
import AcPage from './stores/pages/AcPage'
import Comp from './stores/pages/CompPage'
import Fridge from './stores/pages/FridgePage'
import Furniture from './stores/pages/FurniturePage'
import Kitchen from './stores/pages/KitchenPage'
import Men from './stores/pages/MenPage'
import Watch from './stores/pages/WatchPage'
import Woman from './stores/pages/WomanPage'
import Tv from './stores/pages/TvPage'
import UserCart from './stores/UserCart';
import Checkout from './stores/components/Checkout';
import Speaker from './stores/pages/SpeakerPage'
// singles Pages
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from './stores/singles/AcSingle';
import ComputerSingle from './stores/singles/ComputerSingle';
import FurnitureSingle from './stores/singles/FurnitureSingle';
import MenSingle from './stores/singles/MenSingle';
import WomanSingle from './stores/singles/WomanSingle';
import KitchenSingle from './stores/singles/KitchenSingle';
import WatchSingle from './stores/singles/WatchSingle';
import FridgeSingle from './stores/singles/FridgeSingle';
import TvSingle from './stores/singles/TvSingle';
import SpeakerSingle from './stores/singles/SpeakerSingle';
import Login from './stores/components/Q11/Login';
import Registar from './stores/components/Q11/Registar';
import Footer from './stores/components/Footer';
import Protect from './stores/context/Protect';
 
 
  
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Protect/>}>
      <Route path='/' element={<Home/>}/>
   
     
      <Route path='/mobiles' element={<MobilePage/>}/>
      <Route path='/ac' element={<AcPage/>}/>
      <Route path='/computers' element={<Comp/>}/>
      <Route path='/fridge' element={<Fridge/>}/>
      <Route path='/furniture' element={<Furniture/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='/women' element={<Woman/>}/>
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/speakers' element={<Speaker/>}/>
   <Route path='/cart' element={<UserCart/>}/>
   <Route path='/check' element={<Checkout/>}/>
   {/* --------singles-------------- */}
      <Route path='/mobiles/:id' element={<MobileSingle/>}/>
      <Route path='/ac/:id' element={<AcSingle/>}/>
      <Route path='/computers/:id' element={<ComputerSingle/>}/>
      <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
      <Route path='/men/:id' element={<MenSingle/>}/>
      <Route path='/women/:id' element={<WomanSingle/>}/>
      <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
      <Route path='/watch/:id' element={<WatchSingle/>}/>
      <Route path='/tv/:id' element={<TvSingle/>}/>
      <Route path='/speakers/:id' element={<SpeakerSingle/>}/>
      <Route path='/fridge/:id' element={<FridgeSingle/>}/>
     
      </Route>
 
<Route path='/registar' element={<Registar/>}/>
 <Route path='/login' element={<Login isLoggedIn ={true}/>}/>
    </Routes>
    <Footer />
    </>
   
  )
}

export default App;
