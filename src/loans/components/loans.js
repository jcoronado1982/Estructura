import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
class Loans extends Component{
    constructor(props){
        super(props);
       
        let gridLoans={
            title:['Lender','Loan Method','Requirements','Amount',''],
            data:[
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<button>Borrow</button>]
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<button>Borrow</button>]
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Borrow</button></NavLink>]
                    }
                ]
            };
        let gridExchangeLoans={
            title:['Lender','Client','Loan Method','Amount',''],
            data:[
                    {
                        data: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Loan with guarantee','$10.000.000',' Request Transfer']
                    }
                ]
            };
        let gridTopLenders={
            title:['Lender','Reputation','Amount','Quantity',''],
            data:[
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',' borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    }
                ]
            };
        let gridTopCustomers={
            title:['Client','Reputation','Amount','Quantity',''],
            data:[
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',' borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                    }
                ]
            };
        let gridLastLoans={
            title:['Lender','Client','Amount','',''],
            data:[
                    {
                        data: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Have a good reputation','$10.000.000',' borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Have a good reputation','$10.000.000','borrow']
                    },
                    {
                        data: ['Jesús Alberto Coronado','Jesús Alberto Coronado','Have a good reputation','$10.000.000','borrow']
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