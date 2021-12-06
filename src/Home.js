import Button from "@restart/ui/esm/Button";
import { Outlet, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <Button>create</Button>
        <Button name="mybtn" onClick={(e) => {
          console.log(e.target.name)
          navigate("/personList/persons")}}>List </Button>
        <Button>Delete</Button>
      </nav>
      <Outlet />
    </>
  );
}
