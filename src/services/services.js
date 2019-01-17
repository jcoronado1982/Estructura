import React, { Component} from 'react';
//'http://jsonplaceholder.typicode.com/users'
function Services(props){
    
      function llamado1(id) {
        fetch('http://jsonplaceholder.typicode.com/users')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
             console.log(data)
          })
      }
      function llamado2(id) {
        fetch('http://jsonplaceholder.typicode.com/users')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
             console.log(data)
          })
      }
      function llamado3(id) {
        fetch('http://jsonplaceholder.typicode.com/users')
          .then((response) => {
            return response.json()
          })
          .then((data) => {
             console.log(data)
          })
      }
    
          return (
            <div >
              {llamado1()}     
              {llamado2()}  
              {llamado3()}  
            </div>
          )
        
    
// request1(){
//     axios.get('http://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                return map(response.data.name)
//             }) 
// }

}
export default Services;