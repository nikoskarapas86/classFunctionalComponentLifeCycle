import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router";
export default function CreatePerson() {
  const [name, setName] = useState({});
  const navigate = useNavigate();
  const onSubmitForm = (event) => {
    event.preventDefault();
    let user = { name: name };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
          console.log(res.status)
        if(res.status ==201){
            navigate("/personList/persons")
        }
        });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>name</label>
      <input
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
