import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import './css/loan_detail.css';
class LoanDetail extends Component{
constructor(){
    super();
    this.state={

    }
}
//funciones van aqui
render(){
    return(
        <div>
            <div className="detailGrid">
                <div className="loanInfo">
                    <div className="infoLoan">Información del prestamo</div>
                    <div className="LoanInfoItem">Nombre:</div>
                    <div className="LoanInfoItem">Juan Perez</div>
                    <div className="LoanInfoItem">Cantidad a prestar:</div>
                    <div className="LoanInfoItem">$100.00</div>
                    <div className="LoanInfoItem">Fecha de Publicación:</div>
                    <div className="LoanInfoItem">10/05/2018</div>
                    <div className="LoanInfoItem">Intereses:</div>
                    <div className="LoanInfoItem">10%</div>
                    <div className="LoanInfoItem">Tiempo de Credito:</div>
                    <div className="LoanInfoItem">3 meses</div>
                    <div className="LoanInfoItem">Reputación del prestamista:</div>
                    <div className="LoanInfoItem">Buena</div>
                    <div className="LoanInfoItem">Numero de prestamos:</div>
                    <div className="LoanInfoItem">+100</div>
                    <div className="LoanInfoItem">Correo verificado:</div>
                    <div className="LoanInfoItem">Verificado</div>
                    <div className="LoanInfoItem">Telefono verificado:</div>
                    <div className="LoanInfoItem">verificado</div>
                    <div className="LoanInfoItem">Identificacion,pasaporte o permiso de conducir:</div>
                    <div className="LoanInfoItem">verificado</div>
                    <div className="LoanInfoItem">Confianza:</div>
                    <div className="LoanInfoItem">+50</div>
                    <div className="LoanInfoItem">Bloqueos:</div>
                    <div className="LoanInfoItem">0</div>
                </div>
                <div className="guarantee">
                    <div className="guaranteeBox">
                        <div className="guaranteeBoxtitle"><center>Garantias</center></div>
                        <div className="guaranteeBoxItem">Oro</div>
                        <div className="guaranteeBoxItem">Plata</div>
                        <div className="guaranteeBoxItem">Iphone 7 en adelante y Samsing 7 en adelante.</div>
                    </div>
                    <div><button>Pedir prestado</button></div>
                    <div><button>Contrato</button></div>
                </div>
                <div className="loanHistory"> 
                    LoanHistoryGrid
                </div>
                <div className="comments">
                    <div>20 de Abrilde 2018 a las 07:37</div>
                    <div>Excelente atención</div>
                    <div>28 de Febrero de 2018 a las 18:33</div>
                    <div>Muy rapido en las operaciones</div>
                    <div>8 de Marzo de 2018 a las 10:00</div>
                    <div>Fino</div>
                    <div>3 de Noviembre de 2017 a las 15:43</div>
                    <div>Muy atentos</div>
                </div>
            </div>

            
        </div>

    )
}
}export default LoanDetail;