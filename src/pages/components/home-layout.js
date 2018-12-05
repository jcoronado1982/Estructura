import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Content from '../../components/content.js';
import '../../styles/grid.css';
import Banner from '../../banner/components/banner';
import Info from '../../loans/components/loan';
function HomeLayout(props) {
  return (
    <section className="Back">
      <div className = "container"> 
      <div className="item"><Header/> </div>
    <div className="item">
      <div class="item"> <Banner/></div>
      <div class="item"> <Info/></div>
    </div>
    
    
    <div className="item"><Footer/></div>
  
      </div>
   </section>
  )
}
export default HomeLayout;