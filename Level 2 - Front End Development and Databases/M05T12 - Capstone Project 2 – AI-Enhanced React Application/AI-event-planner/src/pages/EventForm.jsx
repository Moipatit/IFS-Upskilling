import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function EventForm({ onSubmit, editingEvent, onCancelEdit }){
    const emptyForm = {
        name: "",
        data: "",
        time: "",
        description: "",
        location: ""
    };

    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        if (editingEvent){
            setFormData({
                name: editingEvent.name,
                data: editingEvent.date,
                time: editingEvent.time,
                description: editingEvent.description,
                location: editingEvent.location
            });
        } else {
            setFormData(emptyForm);
        }
    }, [editingEvent]);

    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formData);
        setFormData(emptyForm);

    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>{editingEvent ? "Edit Event" : "Add New Event"}</h2>
                    <label htmlFor="name">Event Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="date">Date:</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="name">Time</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="name">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="name">Location</label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        {editingEvent? "Save Changes" : "Add Event"}
                    </button>

                    {editingEvent && (
                        <button type="button" onClick={onCancelEdit}>
                            Cancel
                        </button>
                    )}
                </form>
            </div>
    )
}

export default EventForm;