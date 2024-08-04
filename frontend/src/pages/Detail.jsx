import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import api from "../api";
import NoteDetail from "../components/NoteDetail"
import "../styles/Note.css"

function Detail(){
    const { id } = useParams();
    const [note,setNote] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        getNote(id);
        
    }, [id]);

    const getNote = (id) => {
        api 
            .get(`/api/notes/detail/${id}/`)
            .then((res)=>res.data)
            .then((data)=>{
                setNote(data);
                setTitle(data.title);
                setContent(data.content);
            })
            .catch((err)=> alert(err));
    };

    const handleEdit = () => {

        setIsEditing(true);
        
    }
    
    const handleCancel = () => {
        setTitle(note.title);
        setContent(note.content);
        setIsEditing(false);
    }

    const handleSave = () => {
        api 
            .put(`/api/notes/detail/${id}/`, {title, content})
            .then((res) => {
                setNote({
                    ...note,
                    title: res.data.title,
                    content: res.data.content 
                });
                setIsEditing(false);
            })
            .catch((err) => alert(err));
    }
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
                {!isEditing ? (
                    <NoteDetail note={note} 
                                onDelete={deleteNote} 
                                onEdit = {handleEdit} 
                                key={note.id}/> 
                ): (
                    <div>
                        <form onSubmit={handleSave}>
                            <label htmlFor="title">Title:</label>
                            <br/>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange= {(e)=>setTitle(e.target.value)}
                            />
                            <label htmlFor="content">Content:</label>
                            <br/>
                            <textarea
                                id = "content"
                                name = "content"
                                value = {content}
                                onChange={(e)=>setContent(e.target.value)}
                            >{content}</textarea>
                            <br/>
                            <input type="submit" value="Submit"></input>
                            <button onClick={handleCancel} >
                                Cancel Edit
                            </button>
                        </form>
                    </div>
                )}    
            </div> 
        </div>
    );
}

export default Detail;