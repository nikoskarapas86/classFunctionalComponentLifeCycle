import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function PersonRemove(){
    const [id, setId] = useState({});
    const navigate = useNavigate();
    const onSubmitForm = (event) => {
      event.preventDefault();

      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            console.log(res)
          if(res.status ==200){
              navigate("/personList/persons")
          }
          });
    };
  
    return (
      <form onSubmit={onSubmitForm}>
        <label>id</label>
        <input
          type="number"
          name="id"
          onChange={(event) => setId(event.target.value)}
        />
        <button type="submit">DELETE</button>
      </form>
    );

}