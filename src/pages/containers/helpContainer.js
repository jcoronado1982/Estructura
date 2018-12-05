import React, {Component} from 'react';
import LayoutContactos from '../components/layoutContactos.js';
import HandleError from '../../error/containers/handle-error';

class HelpContainer extends Component{
    render(){
        return(
            <HandleError>
                <LayoutContactos/>
            </HandleError>           
        )
    }
}
export default HelpContainer;