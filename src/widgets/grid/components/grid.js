import React, { Component} from 'react';
import '../css/grid.css';

let htmlStyles = window.getComputedStyle(document.querySelector("html"));

let itemRows=1;
class Loans extends Component{
    add(props){
        let rowNum = parseInt(htmlStyles.getPropertyValue("--itemRowNum"));
        itemRows=itemRows+1;
        document.documentElement.style.setProperty("--itemRowNum", itemRows);
    }
    render(){
        return(
            <div className="contentGrid">
                <div className="title" onClick={this.add}>ADD ITEM ROW (TITLE)</div>
                <div className="name">name</div>
                <div className="email">e-mail</div>
                <div className="borrow">borrow</div>
                <div className="itemList">
                        <div className="property">itemname</div>
                        <div className="property">itemEmail</div>
                        <div className="property">itemBorrowButton</div>
                                           
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
export default Loans;