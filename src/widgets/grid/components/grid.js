import React, { Component} from 'react';
import '../css/grid.css';

let htmlStyles = window.getComputedStyle(document.querySelector("html"));

class Grid extends Component{
    
    render(){
        return(
            <div className="Grid">
                <div className="title">
                    Title
                </div>
                <div className="name">
                    name
                </div>
                <div className="email">
                    e-mail  
                </div>
                <div className="borrow">
                    borrow
                </div>
                <div className="amountSearch">
                    <div className="amount">
                        amountbox
                    </div>
                    <div className="country">
                        countryselecter
                    </div>
                    <div className="active">
                        activeselecter
                    </div>
                </div>
                <div classNamr="itemGrid">
                    <div className="itemList">
                        <div className="property">Jesus Coronado</div>
                        <div className="property">jesus@gmail.com</div>
                        <div className="property">$20.00</div>
                    </div>
                    <div className="itemList">
                        <div className="property">Jesus Coronado</div>
                        <div className="property">jesus@gmail.com</div>
                        <div className="property">$20.00</div>
                    </div>
                    <div className="itemList">
                        <div className="property">Jesus Coronado</div>
                        <div className="property">jesus@gmail.com</div>
                        <div className="property">$20.00</div>
                    </div>
                    <div className="itemList">
                        <div className="property">Jesus Coronado</div>
                        <div className="property">jesus@gmail.com</div>
                        <div className="property">$20.00</div>
                    </div>
                </div>
            </div>

            
        )
    }
}
export default Grid;