import React from 'react';
import '../estilos/home-layout.css';
import Header from './header.js';
import Footer from './footer.js';
import Content from './content.js';


function HomeLayout(props){
return(
  <section className="HomeLayout">
   <div> <Header/><p></p>  
<Content/>
   <p></p> 
   <Footer/>
   </div>
   
  </section>
)

}
export default HomeLayout;