import React, { Component} from 'react';
import '../css/grid.css';

class Grid extends Component{
    constructor(props){
        super(props);
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        document.documentElement.style.setProperty("--columns", this.props.data.title.length);
        document.documentElement.style.setProperty("--rows", this.props.data.title.length);    
    }
    dataList = () => {
        let result = []
        let data = this.props.data.data;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].data.length; j++) {
                result.push( <div className="grid-td"><div className="grid-td-padd">{data[i].data[j]}</div></div>)
            }
        }
        return result
    }
    render(){
        let title = this.props.data.title;
        return(
         <div className="contenedor">
            <div className="grid">
                <div className="grid-content-th">
                     {title.map(title => <div className="grid-th"><div className="grid-th-padd">{title}</div></div>)}
                </div>
                <div className="grid-content-td">
                     {this.dataList()}
                </div>
            </div>
        </div>
        )
    }
}
export default Grid;