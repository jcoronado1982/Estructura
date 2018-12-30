import React, { Component} from 'react';
import '../css/grid.css';



class Grid extends Component{
    constructor(){
        super();
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        document.documentElement.style.setProperty("--columns", 5);
        document.documentElement.style.setProperty("--rows", 5);
    }
    render(){
        return(
         <div className="contenedor">
            <div className="grid">
                <div className="grid-content-th">
                    <div className="grid-th">
                        Lender
                    </div>
                    <div className="grid-th">
                       Loan Method
                    </div>
                    <div className="grid-th">
                       Requirements
                    </div>
                    <div className="grid-th">
                        Amount
                    </div>
                    <div className="grid-th">
                        
                    </div>
                </div>
                <div className="grid-content-td nuevaclase" id="contenido">
                    <div className="grid-td">
                        Jesús Alberto Coronado
                    </div>
                    <div className="grid-td">
                        Loan with guarantee
                    </div>
                    <div className="grid-td">
                        Have a good reputation
                    </div>
                    <div className="grid-td">
                        $10.000.000
                    </div>
                    <div className="grid-td">
                        <button>borrow</button>
                    </div> 

                     <div className="grid-td">
                        Jesús Alberto Coronado
                    </div>
                    <div className="grid-td">
                        Loan with guarantee
                    </div>
                    <div className="grid-td">
                        Have a good reputation
                    </div>
                    <div className="grid-td">
                        $10.000.000
                    </div>
                    <div className="grid-td">
                        <button>borrow</button>
                    </div>

                     <div className="grid-td">
                        Jesús Alberto Coronado
                    </div>
                    <div className="grid-td">
                        Loan with guarantee
                    </div>
                    <div className="grid-td">
                        Have a good reputation
                    </div>
                    <div className="grid-td">
                        $10.000.000
                    </div>
                    <div className="grid-td">
                        <button>borrow</button>
                    </div>
                    <div className="grid-td">
                        Jesús Alberto Coronado
                    </div>
                    <div className="grid-td">
                        Loan with guarantee
                    </div>
                    <div className="grid-td">
                        Have a good reputation
                    </div>
                    <div className="grid-td">
                        $10.000.000
                    </div>
                    <div className="grid-td">
                        <button>borrow</button>
                    </div>                 

                </div>
              
            </div>
        </div>

            
        )
    }
}
export default Grid;