import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Content from '../../components/content.js';
import '../../styles/grid.css';

function HomeLayout(props) {
  return (
    <section className="Back">
      <div className = "container"> 
      
    <div className="item">item #1</div>
    <div className="item">item #2</div>
    <div className="item"><Header/> </div>
    <div className="item"><Content/></div>
    <div className="item"><Footer/></div>
  
      </div>
   </section>
  )
}
export default HomeLayout;