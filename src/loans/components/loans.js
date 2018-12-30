import React, { Component} from 'react';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
class Loans extends Component{
    constructor(props){
        super(props);
       let data={campos:['nombre','apellido','cedula','precio','color'],anchos:['20px','50px','cedula','precio','color']}
    }
   
    render(){
        return(
            <div className="loansContent">
                <div className="loansTitle">
                    Borrows money in Bogota
                </div>
                <div>
                    <Grid />
                </div>
            </div>  
            
        )
    }
}
export default Loans;