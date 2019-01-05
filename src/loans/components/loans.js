import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
class Loans extends Component{
    constructor(props){
        super(props);
       
        let gridLoans={
            key:1,
            columns:['Lender','Loan Method','Requirements','Amount',''],
            data:[
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        row: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    }
                ]
            };
        let gridExchangeLoans={
            key:2,
            columns:['Lender','Client','Loan Method','Amount',''],
            data:[
                    {
                        row: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Loan with guarantee','$10.000.000',' Request Transfer']
                    }
                ]
            };
        let gridTopLenders={
            key:3,
            columns:['Lender','Reputation','Amount','Quantity'],
            data:[
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    }
                ]
            };
        let gridTopCustomers={
            key:4,
            columns:['Client','Reputation','Amount','Quantity'],
            data:[
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    },
                    {
                        row: ['Jesús Alberto Coronado','5','$10.000.000','$10.000.000']
                    }
                ]
            };
        let gridLastLoans={
            key:5,
            columns:['Lender','Client','Amount'],
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
                    <Grid data={this.state.gridLoans}/>
                </div>
                <div className="appTitle marginGrid2">
                    Exchange of loans in Bogota
                </div>
                <div>
                    <Grid data={this.state.gridExchangeLoans}/>
                </div>
                <div className="gridDoble">
                    <div>
                        <div className="appTitle">
                            Top of lenders
                        </div>
                        <div>
                            <Grid data={this.state.gridTopLenders}/>
                        </div>
                    </div>
                    <div>
                        <div className="appTitle">
                            Top of customers
                        </div>
                        <div>
                            <Grid data={this.state.gridTopCustomers}/>
                        </div>
                    </div>
                </div>
                <div className="appTitle marginGrid2">
                    Last loans
                </div>
                <div>
                    <Grid data={this.state.gridLastLoans}/>
                </div>
            </div>  
            
        )
    }
}
export default Loans;