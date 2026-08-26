import { useEffect, useState } from "react";
import "./NoteApplication.css";

function NoteApplication(){
    const [noteText, setNoteText] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect (() => {
        
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        
         if (savedNotes){
         setNotes(savedNotes);
         }
           
        
    }, []);

    useEffect(() => {
        
        if( notes.length > 0){
        localStorage.setItem("notes", JSON.stringify(notes));
        }
        
    }, [notes]);

    function addNote(){
        setNotes([...notes, noteText]);
        setNoteText("");
    }

    function deleteeNote(index){
       const updatedNotes = notes.filter((note, i) => i !== index);
       setNotes(updatedNotes);
       localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }



return(
    <>
 <h1>📝 Note Application</h1>
 <textarea value = {noteText} onChange ={(e) => setNoteText(e.target.value)}> </textarea> <br/>
 <button className = "addbtn" onClick = {addNote} >➕Add Note</button>

 {notes.map((note, index)=> ( 
    <div className = "note" key = {index}>
         <p>{note}</p>
         
         <button className = "delbtn" onClick = {() => deleteeNote(index)} >🗑️ Delete</button>
         </div>  ))}



 </>

);


}

export default NoteApplication;