import React, { Component} from 'react';
import '../styles/home-layout.css';
class Banner extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              height:200,
              margin: 10,
              border: '1px solid blue'
            }
          }
        return(
            <div style = {styles.container}>
            <h1>Esto es un Banner</h1>
            </div>                    
        )
    }
}
export default Banner;