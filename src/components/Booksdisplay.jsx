/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Deletebooks } from "../api/Booksapi";
import { updateinfo } from "../reducers/booksreducer";
import { useNavigate } from "react-router-dom";

const Booksdisplay=()=>{

    const {info}=useSelector((state)=>state.Bookdata.data)
    const dispatch= useDispatch()
    const navigate=useNavigate()

    const deletebtn=(id)=>{
        
        Deletebooks(id).then((data)=>{
         const restbooks=info.filter((books)=>books.id!=id)
         dispatch(updateinfo(restbooks))
        })

    }


    return(
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 p-5">
        {info&& info?.map((data,idx)=>(
           <div className="card w-96 bg-base-100 shadow-xl image-full" key={idx}>
           <figure><img src={data.coverpic} alt={data.title} /></figure>
           <div className="card-body">
             <h2 className="card-title"> <kbd className="kbd">Title:{data.title}</kbd></h2>
             <h3 className="card-title"><kbd className="kbd">Author:{data.author}</kbd> </h3>
             <h2 ><kbd className="kbd">Date Published:{data.publicationdate}</kbd> </h2>
             <h2><kbd className="kbd">ISBN No:{data.isbn}</kbd> </h2>
             <div className="card-actions justify-end">
               <button className="btn btn-accent" onClick={()=>navigate(`/booksedit/${data.id}`)}>Edit </button>
               <button className="btn btn-error" onClick={()=>deletebtn(data.id)}>Delete</button>
             </div>
           </div>
         </div>
        ))}
       </div>
    )

}

export default Booksdisplay;