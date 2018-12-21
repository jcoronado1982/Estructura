import React, { Component} from 'react';
import '../css/grid.css';

let htmlStyles = window.getComputedStyle(document.querySelector("html"));

class Grid extends Component{
    
    render(){
        return(
            <div className="contentGrid">
                <div>
                    <div className="title">ADD ITEM ROW (TITLE)</div>
                    <div>
                        <div>
                            buscador 1
                        </div>
                        <div>
                            buscador 1
                        </div>
                        <div>
                            buscador 1
                        </div>
                    </div>
                </div>
               <div></div>
                <div className="name">name</div>
                <div className="email">e-mail</div>
                <div className="borrow">borrow</div>
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
                <div className="amountSearch">
                    <div className="amount">amountbox</div>
                    <div className="country">countryselecter</div>
                    <div className="active">activeselecter</div>
                </div>

            </div>  
            
        )
    }
}
export default Grid;