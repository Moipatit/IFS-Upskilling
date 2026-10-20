import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventForm from "./EventForm";
import EventCard from "./EventCard";

function Dashboard(){
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login", { replace: true });
    };

    function handleSubmit(formData){
        if (editingEvent){
            setEvents(prev => 
                prev.map(event => 
                    event.id === editingEvent.id ? { ...event, ...formData } : event
            ))

            setEditingEvent(null);

        } else {
            const newEvent = {
                id: crypto.randomUUID(),
                ...formData
            };

            setEvents(prev => [...prev, newEvent]);
        }
    }

    function handleEdit(event){
        setEditingEvent(event);
    }

    function handleDelete(id){
        setEvents(prev => prev.filter(event => event.id !== id));

        if (editingEvent?.id === id){
            setEditingEvent(null);
        }
    }

    function handleCancelEdit(){
        setEditingEvent(null);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {currentUser?.name}</h2>
            <button onClick={handleLogout}>Log Out</button>

            
            <main>
                <h2>My Events</h2>
                <EventForm
                 onSubmit={handleSubmit}
                 editingEvent={editingEvent}
                 onCancelEdit={handleCancelEdit}
                />

                <section>
                    <h2>Upcoming Events</h2>
                    {events.length === 0 ? (
                        <p>No events have been added yet</p>
                    ): (
                        events.map(event => (
                            <EventCard
                             key={event.id}
                             event={event}
                             onEdit={handleEdit}
                             onDelete={handleDelete}
                            /> 
                            
                        ))
                    )}
                </section>

            </main>

    
        </div>
    );
}
export default Dashboard;