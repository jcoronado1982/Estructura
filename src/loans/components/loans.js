import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
import Searcher from './searcher';
class Loans extends Component{
    constructor(props){
        super(props);
        console.log(props);
        for(var i=0;i <props.data[0].data.length;i++){
            props.data[0].data[i].row[4]=<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>;
        }
       
        const labels={
            label:
                    {
                        gridTitleBorrowsMoney: 'Borrows money in Bogota',
                        gridTitleExchangeloan:'Exchange of loans in Bogota',
                        gridTitleToplenders:'Top of lenders',
                        gridTitleTopCustomers: 'Top of customers',
                        gridTitleLastLoans: 'Last loans'
                    }
            
            };

       this.state={
        labels:labels,
        gridLoans: props.data[0],
        gridExchangeLoans: props.data[1],
        gridTopLenders: props.data[2],
        gridTopCustomers: props.data[3],
        gridLastLoans: props.data[4],
        currency: 'COP',
        country: 'CO',
        method: 'ALL'
       }
       
    }
   
    render(){
        return(
            <div className="appContent">
                <Searcher  currency={this.state.currency} country={this.state.country} method={this.state.method}/>
                <div className="appTitle marginGrid1">
                    {this.state.labels.label.gridTitleBorrowsMoney}
                </div>
                <div>
                    <Grid data={this.state.gridLoans} key={this.state.gridLoans.id}/>
                </div>
                <div className="appTitle marginGrid2">
                    {this.state.labels.label.gridTitleExchangeloan}
                </div>
                <div>
                    <Grid data={this.state.gridExchangeLoans} key={this.state.gridExchangeLoans.id}/>
                </div>
                <div className="gridDoble">
                    <div>
                        <div className="appTitle">
                            {this.state.labels.label.gridTitleToplenders}
                        </div>
                        <div>
                            <Grid data={this.state.gridTopLenders} key={this.state.gridTopLenders.id}/>
                        </div>
                    </div>
                    <div>
                        <div className="appTitle">
                            {this.state.labels.label.gridTitleTopCustomers}
                        </div>
                        <div>
                            <Grid data={this.state.gridTopCustomers} key={this.state.gridTopCustomers.id}/>
                        </div>
                    </div>
                </div>
                <div className="appTitle marginGrid2">
                    {this.state.labels.label.gridTitleLastLoans}
                </div>
                <div>
                    <Grid data={this.state.gridLastLoans} key={this.state.gridLastLoans.id}/>
                </div>
            </div>  
            
        )
    }
}
export default Loans;