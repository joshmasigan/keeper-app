import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        });
    }

    function removeNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} setNotes={setNotes}/>
        {notes.map((note, index) =>{
            return <Note 
            key={index} 
            id={index} 
            title={note.title} 
            content={note.content}
            onDelete={removeNote}
            />
        })}
        <Footer />
      </div>
    );
  }

export default App;