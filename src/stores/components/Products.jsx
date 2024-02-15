import React from 'react'
import Mobiles from './Mobiles'
import Computers from './computers'
import AC from './acs'
import Women from './Woman'
import Kitchen from './Kitchen'
import Speaker from './Speaker'
import Watch from './Watch'
import Tv from './Tv'
import Men from './Men'
import Books from './Books'
import Fridge from './Fridge'
import Furniture from './Furniture'
const Products = () => (
<div>
  <div className="row ">
    <div className="fillter col-2 col-sm-2 col-md-2 col-lg-2">
      <h3>Adds</h3>
    </div>
    <div className="menu  col-sm-12 col-md-12 col-lg-10">
      <Mobiles />
      <Computers />
      <Tv />
      <Watch />
      <Speaker />
      <Kitchen />
      <Fridge />
      <AC />
      <Women />
      <Men />
      <Furniture />
      {/* <Books /> */}
    </div>
  </div>
</div>




)

export default Products