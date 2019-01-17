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
    llamado1() {
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
        // var { isLoaded, items } = this.state;
        // if (!isLoaded) {
        //     return <div>Loading...</div>;
        // }
        return (false
            // <div >
                
            //     <ul>
            //         {items.map(item => (
            //             <li key="{item.id}">
            //                 {console.log('Name: '+item.name)}
            //             </li>
            //         ))}
            //     </ul>
            // </div>
        );
    }
    
// request1(){
//     axios.get('http://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                return map(response.data.name)
//             }) 
// }

}
export default Services;