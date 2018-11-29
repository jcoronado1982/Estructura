import React, { Component} from 'react';

class Header extends Component{

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
            <h1>esto es un header</h1>
            </div>
                
          
        )
    }
}
export default Header;