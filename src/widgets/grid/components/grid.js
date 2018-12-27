import React, { Component} from 'react';
import '../css/grid.css';



class Grid extends Component{
    constructor(){
        super();
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        document.documentElement.style.setProperty("--columns", 10);
        document.documentElement.style.setProperty("--rows", 10);
    }
    render(){
        return(
         <div className="contenedor">
            <div className="grid nuevageneral">
                <div className="grid-content-th">
                    <div className="grid-th">
                        Title
                    </div>
                    <div className="grid-th">
                        name
                    </div>
                    <div className="grid-th">
                        borrow
                    </div>
                    <div className="grid-th">
                        borrow
                    </div>
                    <div className="grid-th">
                        borrow
                    </div>
                    <div className="grid-th">
                        Title
                    </div>
                    <div className="grid-th">
                        name
                    </div>
                    <div className="grid-th">
                        borrow
                    </div>
                    <div className="grid-th">
                        borrow
                    </div>
                    <div className="grid-th">
                        borrow 
                    </div>
                    
                </div>
                <div className="grid-content-td nuevaclase" id="contenido">
                    <div className="grid-td">
                       1
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                  
                   
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>

                    <div className="grid-td">
                    2
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                  
                   
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>



                    <div className="grid-td">
                    3
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                  
                   
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>


                    <div className="grid-td">
                    4
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                  
                   
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>
                    <div className="grid-td">
                    JESUS ALBERTO CORONADO
                    </div>






                </div>
              
            </div>
        </div>

            
        )
    }
}
export default Grid;