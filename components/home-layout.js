import React from 'react';
import '../estilos/home-layout.css';
import Header from './header.js';
import Footer from './footer.js';



function HomeLayout(props){
return(
  <section className="HomeLayout">
        <Header/>
        <Footer/>
  </section>
)

}
export default HomeLayout;