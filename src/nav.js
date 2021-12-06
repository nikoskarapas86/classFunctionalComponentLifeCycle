
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function Navigate(){

    const navigate =useNavigate();
    return(
        <nav>
            <Button onClick={()=>navigate('/class') } >class Component</Button>
            <Button onClick={()=>navigate('/function') }>Function Component </Button>
            <Button onClick={()=>navigate('/people') }>get people </Button>
            <Button onClick={()=>navigate("/personList")}>get persons</Button>
        </nav>
    )

}