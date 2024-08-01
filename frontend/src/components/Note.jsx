import React from "react";
import "../styles/Note.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <p className="note-title"><Link to={`/notes/${note.id}`}>{note.title}</Link></p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>

        </div>
    );
}

export default Note