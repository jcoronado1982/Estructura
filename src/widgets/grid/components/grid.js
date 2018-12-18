import React, { Component} from 'react';
import '../css/grid.css';
class Loans extends Component{
    render(){
        return(
            <div className="contentGrid">
                <div className="title">TITLE</div>
                <div className="name">name</div>
                <div className="email">e-mail</div>
                <div className="borrow">borrow</div>
                <div className="amountSearch">
                    <div className="amount">amountbox</div>
                    <div className="country">countryselecter</div>
                    <div className="active">activeselecter</div>
                </div>

            </div>  
            
        )
    }
}
export default Loans;