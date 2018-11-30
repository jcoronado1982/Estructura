import React, { Component} from 'react';

class Header extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              height:100,
              border: '1px solid black'
            }
          }
        return(
            <div style = {styles.container}>
                <center>
                    <h3>esto es un header</h3>
                </center>
            </div>              
        )
    }
}
export default Header;