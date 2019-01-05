import React, { Component} from 'react';
import '../css/grid.css';

class Grid extends Component{
    constructor(props){
        super(props);
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        document.documentElement.style.setProperty("--columns", this.props.data.columns.length);
        document.documentElement.style.setProperty("--rows", this.props.data.columns.length);   
       
    }
    dataList = () => {
        let result = []
        let data = this.props.data.data;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].row.length; j++) {
                result.push( <div className="grid-td"><div className="grid-td-padd">{data[i].row[j]}</div></div>)
            }
        }
        return result
    }
    componentDidMount = () => {
        let id=this.props.data.key;
        document.getElementById("grid-th-"+id).style.gridTemplateColumns="repeat("+this.props.data.columns.length+",1fr)";
        document.getElementById("grid-td-"+id).style.gridTemplateColumns="repeat("+this.props.data.columns.length+",1fr)";
      }
    render(){
        let id=this.props.data.key;
        let columns = this.props.data.columns;
        let gridTd="grid-td-"+id;
        let gridTh="grid-th-"+id;
        return(
         <div className="contenedor">
            <div className="grid">
                <div className="grid-content-th" id={gridTd}>
                     {columns.map(columns => <div className="grid-th"><div className="grid-th-padd">{columns}</div></div>)}
                </div>
                <div className="grid-content-td" id={gridTh}>
                     {this.dataList()}
                </div>
            </div>
        </div>
        )
    }
}
export default Grid;