import React, { Component} from 'react';
import Banner from './banner.js';
import Info from './loan.js';
class Content extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              border: '1px solid black',
              margin:10,
            }
          }
        return(
            <div style = {styles.container}>
            <h3>Informacion de Contactos</h3>
            <p>lista</p>
            <p>de</p>
            <p>contactos</p>
            </div>
        )
    }
}
export default Content;