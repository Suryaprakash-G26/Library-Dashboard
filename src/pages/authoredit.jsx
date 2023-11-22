import { useParams } from "react-router-dom"
import Workspace from "../components/Workspace"
import Editauthordata from "../components/editauthor"

const Authoreditpage =()=>{
    const { id } =useParams()

    return(
        <Workspace>
            <Editauthordata  editid={id}/>    
        </Workspace>
    )

}
export default Authoreditpage