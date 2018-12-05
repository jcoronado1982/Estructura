import React, {Component} from 'react';
import LayoutContactos from '../components/layoutContactos.js';
import HandleError from '../../error/containers/handle-error';

class ContactosContainer extends Component{
    render(){
        return(
            <HandleError>
                <LayoutContactos/>
            </HandleError>           
        )
    }
}
export default ContactosContainer;