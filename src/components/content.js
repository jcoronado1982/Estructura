import React, { Component} from 'react';
import Banner from '../banner/components/banner';
import '../styles/content.css';
class Content extends Component{

    render(){
       
        return(
            <div className="item contenido">
                <Banner/>
                <div className="item contenido2">
                    hola<br></br>
                    hola<br></br>
                    hola<br></br>
                </div>
            </div>
                
        )
    }
}
export default Content;