import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Contact from '../../components/contact.js';

function LayoutContactos(props){
return(
  <section className="Back">
   <div className = "HomeLayout"> 
     <Header/>  
     <Contact/>
     <Footer/>
   </div>
   
  </section>
)

}
export default LayoutContactos;