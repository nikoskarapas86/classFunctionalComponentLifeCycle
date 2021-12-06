import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
export default function PersonList() {
  const [persons, setPersons] = useState([]);
//   useEffect(async () => {
    useEffect( () => {
    // const { data } =await axios.get("https://jsonplaceholder.typicode.com/users"); 
    // setPersons(data);
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{
        setPersons(res.data)
    }) 
  },[]);


  return persons.length > 0 ? (
          <ul>
            {persons.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <Spinner animation="border" />
        );
}

// import axios from "axios";
// import { Component } from "react";
// import { Spinner } from "react-bootstrap";

// export default class PersonList extends Component {
//   state = {
//     persons: [],
//   };
//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }
//   render() {
//     return this.state.persons.length > 0 ? (
//       <ul>
//         {this.state.persons.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     ) : (
//       <Spinner animation="border" />
//     );
//   }
// }
