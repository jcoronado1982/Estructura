import React, { Component} from 'react';
import { SHOW_USERS } from '../utility/apiRestAction'
import Services from '../services/services'
class Utility extends Component{

    SetNames(){
        const names = Services.request1();
        key=names.id;
        console.log(names.name)
        console.log(names.name)
        console.log('hello')
    }
    
}
export default Utility;