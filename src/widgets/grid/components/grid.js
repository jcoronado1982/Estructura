import React, { Component} from 'react';
import '../css/grid.css';

class Grid extends Component{
    constructor(props){
        super(props);
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        document.documentElement.style.setProperty("--columns", this.props.data.columns.length);
        document.documentElement.style.setProperty("--rows", this.props.data.columns.length);   
    }
   
    componentDidMount = () => {
        let id=this.props.data.key;
        document.getElementById("grid-th-"+id).style.gridTemplateColumns="repeat("+this.props.data.columns.length+",1fr)";
        document.getElementById("grid-td-"+id).style.gridTemplateColumns="repeat("+this.props.data.columns.length+",1fr)";
      }
    render(){
        let id=this.props.data.key;
        const columns = this.props.data.columns;
        const data = this.props.data.data;
        let grid="grid"+id;
        let gridTd="grid-td-"+id;
        let gridTh="grid-th-"+id;
        return(
         <div className="contenedor">
            <div className="grid" id={grid}>
                <div className="grid-content-th" id={gridTd}>
                    {columns.map((columns, index) => <div className="grid-th" key={index}><div className="grid-th-padd">{columns.title}</div></div>)}
                </div>
                <div className="grid-content-td" id={gridTh}>
                    {data.map(data => 
                        data.row.map((row, index) => 
                            <div className="grid-td" key={index}><div className="grid-td-padd">{row}</div></div>
                        )
                    )}
                </div>
            </div>
            
        </div>
        
        )
    }
}
export default Grid;