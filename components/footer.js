import React, { Component} from 'react';

class Footer extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              height:200,
              border: '1px solid black'
            }
          }
        return(
            <div style = {styles.container}>
            <footer>esto es un footer</footer>
            </div>
                
          
        )
    }
}
export default Footer;