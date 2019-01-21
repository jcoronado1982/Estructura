import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loan_detail.css';
import Grid from '../../widgets/grid/components/grid';

class LoanDetail extends Component{
constructor(){
    super();
    const gridLoanDetail={
        columns:[
                    {title: 'Deudor'},
                    {title: 'Monto de pago'},
                    {title: 'Acciones'},
                ]
        ,
        data:[
                {
                    row: ['Esteban Garcia','$100.000.00',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Rengifo Colmenares','$500.000.00',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Susana Noruega','$500.000.00',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Maria torres','$1.000.000.00',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                }
            ]
        };
    const labels={
            label:
                    {
                        mainTitle: 'Loan information',
                        gridTitle:'Loan history',
                        name: 'Name',
                        loanAmount: 'Amount to pay',  
                        publicationDate: 'Publication date',
                        Interests: 'Interests',
                        creditTime: 'Credit Time',
                        ReputationLender: 'Reputation of the lender',
                        NumberLoans: 'Number of loans',
                        VerifiedMail: 'Verified Mail',
                        VerifiedPhone: ' Verified phone',
                        identification: 'Identification (passport or driving license)',
                        trustingUsers: '+3 users trust in the'
                    }
            
            };
    const datalender={
        infoRersonal:
                {
                    name: 'Jesús Alberto Coronado',
                    loanAmount: '$5.000.00',  
                    publicationDate: '10/01/2018',
                    Interests: '10%',
                    creditTime: '3 meses',
                    ReputationLender: 'Muy Buena',
                    NumberLoans: '4',
                    VerifiedMail: 'Verificado',
                    VerifiedPhone: 'Verificado',
                    identification: 'Verificado',
                    trustingUsers: '+3 users trust in the'
                }
            
        };
    this.state={
        labels:labels,
        datalender:datalender,
        gridLoanDetail:gridLoanDetail
    }
}

render(){
    return(
            <div className="detailGrid">
                <div className="loanInfo">
                    <div className="infoLoan">{this.state.labels.label.mainTitle}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.name}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.name}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.loanAmount}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.loanAmount}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.publicationDate}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.publicationDate}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.Interests}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.Interests}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.creditTime}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.creditTime}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.ReputationLender}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.ReputationLender}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.NumberLoans}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.NumberLoans}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.VerifiedMail}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.VerifiedMail}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.VerifiedPhone}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.VerifiedPhone}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.identification}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.identification}</div>
                    <div className="LoanInfoTitle">{this.state.labels.label.trustingUsers}:</div>
                    <div className="LoanInfoItem">{this.state.datalender.infoRersonal.trustingUsers}</div>
                </div>
                <div className="guarantee">
                    <div className="guaranteeBox">
                        <div className="guaranteeBoxInfo">
                            <div className="guaranteeBoxtitle">Garantias</div>
                            <div className="guaranteeBoxItem"><ul className="LoanD">Oro</ul></div>
                            <div className="guaranteeBoxItem"><ul className="LoanD">Plata</ul></div>
                            <div className="guaranteeBoxItem"><ul className="LoanD">Iphone 7 en adelante y Samsung 7 en adelante.</ul></div>
                        </div>                           
                    </div>
                    <div><button className="guaranteeButton">Pedir prestado</button></div>
                    <div><button className="guaranteeButton">Contrato</button></div>
                </div>
                <div className="loanHistory"> 
                <div className="appTitle marginLoanHistory">{this.state.labels.label.gridTitle}</div>
                    <Grid data={this.state.gridLoanDetail} key={this.state.gridLoanDetail.key}/>
                <div className="appTitle marginComments">Comentarios</div>
                </div>
                <div className="comments">
                    <div className="centerComments">
                        <div className="commentDate">20 de Abril de 2018 a las 07:37</div>
                        <div className="commentText">Excelente atención</div>
                        <div className="commentDate">28 de Febrero de 2018 a las 18:33</div>
                        <div className="commentText">Muy rapido en las operaciones</div>
                        <div className="commentDate">8 de Marzo de 2018 a las 10:00</div>
                        <div className="commentText">Fino</div>
                        <div className="commentDate">3 de Noviembre de 2017 a las 15:43</div>
                        <div className="commentText">Muy atentos</div>
                    </div>                  
                </div>
            </div>
     )
}
}export default LoanDetail;