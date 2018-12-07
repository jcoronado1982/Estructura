import React, { Component} from 'react';
import Banner from '../banner/components/banner';
import '../styles/content.css';
import Loans from '../loans/components/loans';
class Content extends Component{

    render(){

        return(
            <div className="item contenido">
                <Banner/>
                <div className="item contenido2">
                   <Loans/>
                </div>
            </div>    
        )
    }
}
export default Content;