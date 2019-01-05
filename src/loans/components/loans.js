import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
import Searcher from './searcher';
class Loans extends Component{
    constructor(props){
        super(props);
        
        
        const gridLoans={
            key:1,
            columns:[
                        {title: 'Lender'},
                        {title: 'Loan Method'},
                        {title: 'Payment Deadline'},
                        {title: 'Amount'},
                        {title: ''}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','Three months','$5.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Have a good reputation','One week','$1.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Have a good reputation','Two weeks','$2.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','One month','$3.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    }
                ]
            };
        const gridExchangeLoans={
            key:2,
            columns:[
                        {title: 'Lender'},
                        {title: 'Client'},
                        {title: 'Loan Methodt'},
                        {title: 'Amount'},
                        {title: ''}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Loan with guarantee','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Request Transfer</button></NavLink>]
                    }
                ]
            };
        const gridTopLenders={
            key:3,
            columns:[
                        {title: 'Lender'},
                        {title: 'Reputation'},
                        {title: 'Amount'},
                        {title: 'Quantity'}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','30']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','24']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','3']
                    }
                ]
            };
        let gridTopCustomers={
            key:4,
            columns:[
                        {title: 'Client'},
                        {title: 'Reputation'},
                        {title: 'Amount'},
                        {title: 'Quantity'}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','30']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','30']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','30']
                    }
                ]
            };
        let gridLastLoans={
            key:5,
            columns:[
                        {title: 'Lender'},
                        {title: 'Client'},
                        {title: 'Amount'}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','Jesús Alberto Coronado','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','Jesús Alberto Coronado','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','Jesús Alberto Coronado','$10.000.000']
                    }
                ]
            };
       this.state={
        gridLoans: gridLoans,
        gridExchangeLoans: gridExchangeLoans,
        gridTopLenders: gridTopLenders,
        gridTopCustomers: gridTopCustomers,
        gridLastLoans: gridLastLoans,
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
                    <Grid data={this.state.gridLoans} key={this.state.gridLoans.key}/>
                </div>
                <div className="appTitle marginGrid2">
                    Exchange of loans in Bogota
                </div>
                <div>
                    <Grid data={this.state.gridExchangeLoans} key={this.state.gridExchangeLoans.key}/>
                </div>
                <div className="gridDoble">
                    <div>
                        <div className="appTitle">
                            Top of lenders
                        </div>
                        <div>
                            <Grid data={this.state.gridTopLenders} key={this.state.gridTopLenders.key}/>
                        </div>
                    </div>
                    <div>
                        <div className="appTitle">
                            Top of customers
                        </div>
                        <div>
                            <Grid data={this.state.gridTopCustomers} key={this.state.gridTopCustomers.key}/>
                        </div>
                    </div>
                </div>
                <div className="appTitle marginGrid2">
                    Last loans
                </div>
                <div>
                    <Grid data={this.state.gridLastLoans} key={this.state.gridLastLoans.key}/>
                </div>
            </div>  
            
        )
    }
}
export default Loans;