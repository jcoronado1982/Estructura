import React, { Component} from 'react';
import '../css/loans.css';
import Grid from '../../widgets/grid/components/grid';
class Loans extends Component{
    constructor(props){
        super(props);
       
        let result=[{
                    data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000',' borrow']
                   },{
                    data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                   },{
                    data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                   },{
                    data: ['Jesús Alberto Coronado','Loan with guarantee','Have a good reputation','$10.000.000','borrow']
                   }];
        let data={
            title:['Lender','Loan Method','Requirements','Amount',''],
            data:result
        };
       this.state={
        data: data
       }
    }
   
    render(){
        return(
            <div className="appContent">
                <div className="appTitle marginGrid1">
                    Borrows money in Bogota
                </div>
                <div>
                    <Grid data={this.state.data}/>
                </div>
                <div className="appTitle marginGrid2">
                    Exchange of loans in Bogota
                </div>
                <div>
                    <Grid data={this.state.data}/>
                </div>
                <div>
                    <div>
                        <div className="appTitle">
                            Top of lenders
                        </div>
                        <div>
                            <Grid data={this.state.data}/>
                        </div>
                    </div>
                    <div>
                        <div className="appTitle">
                            Top of customers
                        </div>
                        <div>
                            <Grid data={this.state.data}/>
                        </div>
                    </div>
                    <div className="appTitle marginGrid2">
                        Last loans
                    </div>
                    <div>
                        <Grid data={this.state.data}/>
                    </div>
                </div>
            </div>  
            
        )
    }
}
export default Loans;