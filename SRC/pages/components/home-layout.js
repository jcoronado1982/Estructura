import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Content from '../../components/content.js';


function HomeLayout(props){
return(
  <section className="Back">
   <div className = "HomeLayout"> 
     <Header/>  
     <Content/>
     <Footer/>
   </div>
   
  </section>
)

}
export default HomeLayout;