import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEvents } from "../context/EventContext";

function Dashboard(){
    const navigate = useNavigate();
    const { events, deleteEvent } = useEvents();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));


    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login", { replace: true });
    };

   

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {currentUser?.name}</h2>
            <button onClick={handleLogout}>Log Out</button>

            
            <main>
                <section>
                    <h2>Upcoming Events</h2>
                    {events.length === 0 ? (
                        <p>No events have been added yet</p>
                    ): (
                        events.map(event => (
                          <article key={event.id}>
                            <h2>{event.name}</h2>
                            <p>Date: {event.date}</p>
                            <p>Time: {event.time}</p>
                            <p>Description: {event.description}</p>
                            <p>Location: {event.location}</p>

                            <button type="button" onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</button>
                            <button type="button" onClick={() => deleteEvent(event.id)}>Delete</button>
                          </article>
                            
                        ))
                    )}
                </section>

            </main>

    
        </div>
    );
}
export default Dashboard;