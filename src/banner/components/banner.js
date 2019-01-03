import React, { Component} from 'react';
import './css/banner.css'
class Banner extends Component{

    render(){
        return(
            <div className="item banner">
                <img className="imgBanner" src="../../../img/banner/banner1.jpg" />
            </div>              
        )
    }
}
export default Banner;