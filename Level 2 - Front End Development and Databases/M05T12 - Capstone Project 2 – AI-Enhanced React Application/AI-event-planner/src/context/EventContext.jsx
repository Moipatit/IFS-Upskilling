import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const EventContext = createContext(null);

export function EventProvider({ children }){
    const [events, setEvents] = useState([]);
    const { currentUser } = useAuth();

    function addEvent(eventData){
        if (!currentUser) return; 

        const newEvent = { ...eventData, id: crypto.randomUUID(), userId: currentUser.userId };

        setEvents(prev => [...prev, newEvent]);
    }

    function updateEvent(id, updatedData){
        if (!currentUser) return;

        setEvents(prev => 
            prev.map(event => 
                String(event.id) === String(id) && 
                event.userId === currentUser.userId
                  ? { ...event, ...updatedData, id: event.id, userId: event.userId } 
                  : event
                )
            );
    }

    function deleteEvent(id){
        if (!currentUser) return;

        setEvents(prev => 
            prev.filter(event => 
                String(event.id) !== (id) ||
            event.userId !== currentUser.userId
        ));
    }

    return (
        <EventContext.Provider value ={{ events, addEvent, updateEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    )

}



export function useEvents(){
    const context = useContext(EventContext);

    if (context === null){
        throw new Error("useEvents must be used inside EventProvider");
    }

    return context;
}