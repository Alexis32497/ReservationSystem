import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listReservations } from './graphql/queries';
import { createReservation as createReservationMutation, deleteReservation as deleteNoteMutation } from './graphql/mutations';



const initialFormState = {name: '', phone: '', date: '', time: '', numberofPeople: '', email: ''}

function App() {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listReservations });
        setNotes(apiData.data.listReservations.items);
    }

    async function createReservationForm() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createReservationMutation, variables: { input: formData } });
        setNotes([...notes, formData]);
        setFormData(initialFormState);
    }

    async function deleteNote({ id }) {
        const newNotesArray = notes.filter(note => note.id !== id);
        setNotes(newNotesArray);
        await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    }

    return (
        <div className="App">
            <h1>Team 11: Reservation System</h1>

 {/*Reservation[ANY USER] Part of the Code */}
            <input
            onChange={e => setFormData({...formData,'name':e.target.value})}
            placeholder = "Name"
            value={formData.name}
            />

            <div>
            </div>

            <input
                onChange={e => setFormData({ ...formData, 'phone': e.target.value })}
                placeholder="Phone"
                value={formData.phone}
            />

            <div>
            </div>

            <input
                onChange={e => setFormData({ ...formData, 'date': e.target.value })}
                placeholder="Date"
                value={formData.date}
            />

            <div>
            </div>

            <input
                onChange={e => setFormData({ ...formData, 'time': e.target.value })}
                placeholder="Time"
                value={formData.time}
            />

            <div>
            </div>

            <input
                onChange={e => setFormData({ ...formData, 'numberofPeople': e.target.value })}
                placeholder="Number of People"
                value={formData.numberofPeople}
            />

            <div>
            </div>

            <input
                onChange={e => setFormData({ ...formData, 'email': e.target.value })}
                placeholder="Email"
                value={formData.email}
            />

            <div>
            </div>

            <button onClick={createReservationForm}>Create Reservation</button>

            <div>
            </div>

{/*View Points[REGULAR USERS ONLY] Part of the Code*/}

            <button onClick={createReservationForm}>View Points</button>

            <div>
            </div>

 {/*View Reservations Part of the Code [ADMIN USERS]*/}

            <button onClick={createReservationForm}>View Reservations</button>


            <div style={{ marginBottom: 30 }}>
                
            </div>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);