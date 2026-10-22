import { useParams, Navigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import EventForm from "./EventForm";

function EditEvent(){
    const { id } = useParams();
    const { events } = useEvents();

    const eventToEdit = events.find(event => event.id === id);

    if (!eventToEdit){
        return <Navigate to="/dashboard" replace />;
    }

    return <EventForm eventToEdit={eventToEdit} />;
}

export default EditEvent;