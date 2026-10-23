import { useParams } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import EventForm from "./EventForm";

function EditEvent(){
    const { id } = useParams();
    const { events } = useEvents();
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");


    const eventToEdit = currentUser ? events.find(event => String(event.id) === id && event.userId === currentUser.userId) : null;

    if (!eventToEdit){
        return <p>Event not found</p>;
    }

    return <EventForm eventToEdit={eventToEdit} />;
}

export default EditEvent;