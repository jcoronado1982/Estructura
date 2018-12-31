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
                        <div className="grid-th-padd">
                            Lender    
                        </div>
                    </div>
                    <div className="grid-th">
                        <div className="grid-th-padd">
                            Loan Method     
                        </div>
                    </div>
                    <div className="grid-th">
                        <div className="grid-th-padd">
                            Requirements     
                        </div>
                    </div>
                    <div className="grid-th">
                        <div className="grid-th-padd">
                            Amount    
                        </div>
                    </div>
                    <div className="grid-th">
                        
                    </div>
                </div>
                <div className="grid-content-td nuevaclase" id="contenido">
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Jesús Alberto Coronado       
                        </div>
                     </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Loan with guarantee
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Have a good reputation
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            $10.000.000
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            <button>borrow</button>
                        </div>
                    </div> 

                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Jesús Alberto Coronado       
                        </div>
                     </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Loan with guarantee
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Have a good reputation
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            $10.000.000
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            <button>borrow</button>
                        </div>
                    </div> 

                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Jesús Alberto Coronado       
                        </div>
                     </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Loan with guarantee
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Have a good reputation
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            $10.000.000
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            <button>borrow</button>
                        </div>
                    </div> 

                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Jesús Alberto Coronado       
                        </div>
                     </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Loan with guarantee
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            Have a good reputation
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            $10.000.000
                        </div>
                    </div>
                    <div className="grid-td">
                        <div className="grid-td-padd">
                            <button>borrow</button>
                        </div>
                    </div> 
                                 

                </div>
              
            </div>
        </div>

            
        )
    }
}
export default Grid;