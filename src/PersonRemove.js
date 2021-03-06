import axios from "axios";
import { Component } from "react";

export default class PersonRemove extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onSubmitForm(event) {
    event.preventDefault();

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log(res);
       
      });
  }
  handleChange(event) {
    this.setState({ id: event.target.value });
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>id</label>
        <input type="number" name="id" value={this.state.id} onChange={this.handleChange} />
        <button type="submit">DELETE</button>
      </form>
    );
  }
}

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// export default function PersonRemove(){
//     const [id, setId] = useState({});
//     const navigate = useNavigate();
//     const onSubmitForm = (event) => {
//       event.preventDefault();

//       axios
//         .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((res) => {
//             console.log(res)
//           if(res.status ==200){
//               navigate("/personList/persons")
//           }
//           });
//     };

//     return (
//       <form onSubmit={onSubmitForm}>
//         <label>id</label>
//         <input
//           type="number"
//           name="id"
//           onChange={(event) => setId(event.target.value)}
//         />
//         <button type="submit">DELETE</button>
//       </form>
//     );

// }
