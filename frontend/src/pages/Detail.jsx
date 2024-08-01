import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import api from "../api";
import NoteDetail from "../components/NoteDetail"
import "../styles/Note.css"

function Detail(){
    const { id } = useParams();
    const [note,setNote] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (id){
            getNote(id);
        }
    }, [id]);

    const getNote = (id) => {
        api 
            .get(`/api/notes/detail/${id}/`)
            .then((res)=>res.data)
            .then((data)=>{
                setNote(data);
            })
            .catch((err)=> alert(err));
    };
    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                navigate("/")
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div >
                <Link to={"/"}>
                <button className="home-button">
                Home
                </button >
                </Link>
                <NoteDetail note={note} onDelete={deleteNote} key={note.id}/>     
            </div> 
        </div>
    );
}

export default Detail;