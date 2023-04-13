import React from 'react'
import Header from './headerComponent';
import Cart from './firstcartComponent';
import Cart2 from './secondcartComponent'
import Cart3 from './thirdcartComponent';
import Cart4 from './fourthcartComponent';
import Footer from './footerComponent';
function Home() {
  return (
    <div>
        <div class="position-fixed top-0" style={{width:100+'vw',zIndex:1000}}>
        <Header/>
        </div>
        <Cart/>
        <Cart2/>
        <Cart3/>
        <Cart4/>
        <div class="position-fixed bottom-0 mx-1">
          <Footer/>
        </div>
    </div>
  )
}

export default Home
