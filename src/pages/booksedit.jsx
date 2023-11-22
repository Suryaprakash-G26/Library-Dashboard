import { useParams } from "react-router-dom";
import Workspace from "../components/Workspace";
import Editbooks from "../components/editbooks";


const Bookseditpage=()=>{
    const { id } =useParams()

    return(
        <Workspace>
            <Editbooks editid={id}/>
        </Workspace>
    )

}
export default Bookseditpage;