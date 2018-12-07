import React, {Component} from 'react';
import Help from '../../help/components/help';
import HandleError from '../../error/containers/handle-error';

class HelpContainer extends Component{
    state = {
        modalVisible: false,
      }
      
    render(){
        return(
            <HandleError>
                <Help/>
            </HandleError>           
        )
    }
}
export default HelpContainer;