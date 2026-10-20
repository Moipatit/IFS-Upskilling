function EventCard({ event, onEdit, onDelete }){
    return (
        <article>
            <h3>{event.name}</h3>
            <p><strong>Date:</strong>{event.date}</p>
            <p><strong>Time:</strong>{event.time}</p>
            <p><strong>Description:</strong>{event.description}</p>
            <p><strong>Location:</strong>{event.location}</p>
            
            <button type="button" onClick={() => onEdit(event)}>Edit</button>
            <button type="button" onClick={() => onDelete(event.id)}>Delete</button>
        </article>
    )
}

export default EventCard