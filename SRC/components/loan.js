import React, { Component} from 'react';

class Info extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              height:200,
              margin: 10,
              border: '1px solid red'
            }
          }
        return(
            <div style = {styles.container}>
            <h3>Informacion de Prestamos</h3>
            </div>
                
          
        )
    }
}
export default Info;