import React, { Component} from 'react';

class Info extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              height:200,
              border: '1px solid red'
            }
          }
        return(
            <div style = {styles.container}>
            <p><h1>Aqui</h1></p>
            <p><h1>Va la </h1></p>
            <p><h1>informacion</h1></p>
            </div>
                
          
        )
    }
}
export default Info;