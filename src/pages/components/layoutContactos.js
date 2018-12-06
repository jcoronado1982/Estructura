import React from 'react';
import '../../styles/home-layout.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Help from '../../help/components/help.js';
import '../../styles/styles2.css';


function LayoutContactos(props){
return(
  <section className="Back">
   <div className = "container2"> 
   <div className="item"><Header/></div>
   <div className="item"><Help/></div>
   <div className="item"><Footer/> </div>
   </div>
   
  </section>
)

}
export default LayoutContactos;