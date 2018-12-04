import React, { Component} from 'react';
import Banner from '../banner/components/banner';
import Info from '../loans/components/loan';
import '../styles/content.css';
class Content extends Component{

    render(){
       
        return(
            <div class="ContentBox">
                <Banner/>
                <Info/>
            </div>
                
        )
    }
}
export default Content;