import Button from "@restart/ui/esm/Button";
import { Outlet,  useNavigate } from "react-router";


export default function Home() {
    const navigate =useNavigate();
  return (
      <>
    <nav>
      <Button>create</Button>
      <Button onClick={()=>navigate("/personList/persons")}>List </Button>
      <Button>Delete</Button>
    </nav>
     <Outlet/>
     </>
  );
}
