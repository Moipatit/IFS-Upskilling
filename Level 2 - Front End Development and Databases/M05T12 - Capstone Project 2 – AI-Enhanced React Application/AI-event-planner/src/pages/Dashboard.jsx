import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { useAuth } from "../context/AuthContext";

function Dashboard(){
    const navigate = useNavigate();
    const { events, deleteEvent } = useEvents();
    const { currentUser } = useAuth();


    const myEvents = currentUser ? events.filter((event) => event.userId === currentUser.userId) : [];
   

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {currentUser?.name}</h2>
            <main>
                <section>
                    <h2>Upcoming Events</h2>
                    {myEvents.length === 0 ? (
                        <p>No events have been added yet</p>
                    ): (
                        myEvents.map(event => (
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