
import { useNavigate } from "react-router-dom";
export default function Navigate(){

    const navigate =useNavigate();
    return(
        <nav>
            <button onClick={()=>navigate('/class') } >class Component</button>
            <button onClick={()=>navigate('/function') }>Function Component </button>
            <button onClick={()=>navigate('/people') }>get people </button>
        </nav>
    )

}