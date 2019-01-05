import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
class Loans extends Component{
    constructor(props){
        super(props);
       
        const gridLoans={
            key:1,
            columns:[
                        {title: 'Lender', id:'title1'},
                        {title: 'Loan Method', id:'title2'},
                        {title: 'Payment Deadline', id:'title3'},
                        {title: 'Amount', id:'title4'},
                        {title: '', id:'title5'}
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
                        {title: 'Lender', id:'title6'},
                        {title: 'Client', id:'title7'},
                        {title: 'AmounLoan Methodt', id:'title8'},
                        {title: 'Amount', id:'title9'},
                        {title: '', id:'title10'}
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
                        {title: 'Lender', id:'title11'},
                        {title: 'Reputation', id:'title12'},
                        {title: 'Amount', id:'title13'},
                        {title: 'Quantity', id:'title14'}
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
                        {title: 'Client', id:'title15'},
                        {title: 'Reputation', id:'title16'},
                        {title: 'Amount', id:'title17'},
                        {title: 'Quantity', id:'title118'}
                    ]
            ,
            data:[
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','8']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','5']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','4']
                    }
                ]
            };
        let gridLastLoans={
            key:5,
            columns:[
                        {title: 'Lender', id:'title19'},
                        {title: 'Client', id:'title20'},
                        {title: 'Amount', id:'title21'}
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
        gridLastLoans: gridLastLoans
       }
       
    }
   
    render(){
        return(
            <div className="appContent">
               



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