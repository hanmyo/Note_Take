import React from "react";
import "../styles/Note.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function NoteDetail({ note, onDelete, onEdit }) {
    const formattedCreatedDate = new Date(note.created_at).toLocaleDateString("en-US")
    const formattedEditedDate = new Date(note.last_edited).toLocaleDateString("en-US")
    return (
        <div>
            <p className="note-date">Created on: {formattedCreatedDate}</p>
            <p className="note-date">Last Edited on: {formattedEditedDate}</p>
            
            <div className="note-container">
                <h2 className="note-title">{note.title}</h2>
                <p className="note-content">{note.content}</p>
                
                <button className="edit-button" onClick={() => onEdit(note.id)}>
                    Edit
                </button>
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>

            </div>
        </div>
       
    );
}

export default NoteDetail