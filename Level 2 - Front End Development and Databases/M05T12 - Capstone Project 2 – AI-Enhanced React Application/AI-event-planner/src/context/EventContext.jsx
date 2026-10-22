import { createContext, useContext, useState } from "react";

const EventContext = createContext(null);

export function EventProvider({ children }){
    const [events, setEvents] = useState([]);

    function addEvent(eventData){
        const newEvent = { id: crypto.randomUUID(), ...eventData};

        setEvents(prev => [...prev, newEvent]);
    }

    function updateEvent(id, updatedData){
        setEvents(prev => prev.map(event => event.id === id ? { ...event, updatedData } : event));
    }

    function deleteEvent(id){
        setEvents(prev => prev.filter(event => event.id !== id));
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