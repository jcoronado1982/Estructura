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
      
       this.state={
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
                    Borrows money in Bogota 
                </div>
                <div>
                    <Grid data={this.state.gridLoans} key={this.state.gridLoans.id}/>
                </div>
                <div className="appTitle marginGrid2">
                    Exchange of loans in Bogota
                </div>
                <div>
                    <Grid data={this.state.gridExchangeLoans} key={this.state.gridExchangeLoans.id}/>
                </div>
                <div className="gridDoble">
                    <div>
                        <div className="appTitle">
                            Top of lenders
                        </div>
                        <div>
                            <Grid data={this.state.gridTopLenders} key={this.state.gridTopLenders.id}/>
                        </div>
                    </div>
                    <div>
                        <div className="appTitle">
                            Top of customers
                        </div>
                        <div>
                            <Grid data={this.state.gridTopCustomers} key={this.state.gridTopCustomers.id}/>
                        </div>
                    </div>
                </div>
                <div className="appTitle marginGrid2">
                    Last loans
                </div>
                <div>
                    <Grid data={this.state.gridLastLoans} key={this.state.gridLastLoans.id}/>
                </div>
            </div>  
            
        )
    }
}
export default Loans;