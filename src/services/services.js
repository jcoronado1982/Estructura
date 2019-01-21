import React, { Component} from 'react';
//'http://jsonplaceholder.typicode.com/users'
class Services extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
        
    }
    componentDidMount() {
        // Child passes its method to the parent
        this.props.shareMethods(this.prueba.bind(this),this.prueba2.bind(this),this.llamado1.bind(this))
      }  
    prueba=()=>{
       alert("entro1");
    }
    prueba2=()=>{
        alert("entro2");
     }
    llamado1() {
        alert("ir al llamado");
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    llamado2() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    llamado3() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {
        return (false);
    }
    

}
export default Services;