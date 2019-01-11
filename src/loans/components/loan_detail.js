import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../css/loan_detail.css';
import Grid from '../../widgets/grid/components/grid';

class LoanDetail extends Component{
constructor(){
    super();
    const gridLoanDetail={
        key:6,
        columns:[
                    {title: 'Deudor'},
                    {title: 'Monto de pago'},
                    {title: 'Acciones'},
                ]
        ,
        data:[
                {
                    row: ['Esteban Garcia','$100',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Rengifo Colmenares','$100',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Susana Noruega','$100',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                },
                {
                    row: ['Maria torres','$100',<NavLink to="/loan_detail" activeClassName="is-selected"><button>Ver historial</button></NavLink>]
                }
            ]
        };

    this.state={
        gridLoanDetail:gridLoanDetail,
    }
}
//funciones van aqui
render(){
    return(
            <div className="detailGrid">
                <div className="loanInfo">
                    <div className="infoLoan">Información del prestamo</div>
                    <div className="LoanInfoTitle">Nombre:</div>
                    <div className="LoanInfoItem">Juan Perez</div>
                    <div className="LoanInfoTitle">Cantidad a prestar:</div>
                    <div className="LoanInfoItem">$100.00</div>
                    <div className="LoanInfoTitle">Fecha de Publicación:</div>
                    <div className="LoanInfoItem">10/05/2018</div>
                    <div className="LoanInfoTitle">Intereses:</div>
                    <div className="LoanInfoItem">10%</div>
                    <div className="LoanInfoTitle">Tiempo de Credito:</div>
                    <div className="LoanInfoItem">3 meses</div>
                    <div className="LoanInfoTitle">Reputación del prestamista:</div>
                    <div className="LoanInfoItem">Buena</div>
                    <div className="LoanInfoTitle">Numero de prestamos:</div>
                    <div className="LoanInfoItem">+100</div>
                    <div className="LoanInfoTitle">Correo verificado:</div>
                    <div className="LoanInfoItem">Verificado</div>
                    <div className="LoanInfoTitle">Telefono verificado:</div>
                    <div className="LoanInfoItem">verificado</div>
                    <div className="LoanInfoTitle">Identificacion,pasaporte o permiso de conducir:</div>
                    <div className="LoanInfoItem">verificado</div>
                    <div className="LoanInfoTitle">Confianza:</div>
                    <div className="LoanInfoItem">+50</div>
                    <div className="LoanInfoTitle">Bloqueos:</div>
                    <div className="LoanInfoItem">0</div>
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
                <div className="appTitle marginLoanHistory">Historial del prestamo</div>
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