import React, { Component} from 'react';
import '../styles/home-layout.css';
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
                <center>
                 <footer>esto es un footer</footer>
                </center>
            </div>             
            )
    }
}
export default Footer;