import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listTodos } from './graphql/queries';
import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from './graphql/mutations';



const initialFormState = { name: '', description: '' }

function App() {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listTodos });
        const notesFromAPI = apiData.data.listTodos.items;
        await Promise.all(notesFromAPI.map(async note => {
            if (note.image) {
                const image = await Storage.get(note.image);
                note.image = image;
            }
            return note;
        }))
        setNotes(apiData.data.listTodos.items);
    }

    async function createNote() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setNotes([...notes, formData]);
        setFormData(initialFormState);
    }

    async function deleteNote({ id }) {
        const newNotesArray = notes.filter(note => note.id !== id);
        setNotes(newNotesArray);
        await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchNotes();
    }

    return (
        <div className="App">
            <h1>Team 11: Reservation System</h1>

            {/*Button to view account points*/}
            <button onClick={createNote}>Create Reservation</button>

            {/*Button to create a reservation*/}
            <button onClick={createNote}>View Points</button>


            <div style={{ marginBottom: 30 }}>
                {
                    notes.map(note => (
                        <div key={note.id || note.name}>
                            <h2>{note.name}</h2>
                            <p>{note.description}</p>
                            <button onClick={() => deleteNote(note)}>Delete note</button>
                            {
                                note.image && <img src={note.image} alt=" " style={{ width: 400 }} />
                            }
                        </div>
                    ))
                }
            </div>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);