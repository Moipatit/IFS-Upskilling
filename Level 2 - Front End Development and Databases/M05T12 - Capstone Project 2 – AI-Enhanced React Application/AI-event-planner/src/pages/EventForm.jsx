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
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiError, setAiError] = useState("")

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

async function handleGenerateDescription() {
  if (!formData.name.trim()) {
    setAiError("Please enter an event title first.");
    return;
  }

  setIsGenerating(true);
  setAiError("");

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
        },
        body: JSON.stringify({
          model: "YOUR_MODEL_SLUG",
          messages: [
            {
              role: "system",
              content:
                "Write a clear, engaging event description in 2-4 sentences. " +
                "Use the supplied event details and do not invent missing facts."
            },
            {
              role: "user",
              content: `Create a description for this event:
                Title: ${formData.name}
                Date: ${formData.date || "Not specified"}
                Time: ${formData.time || "Not specified"}
                Location: ${formData.location || "Not specified"}`
            }
          ],
          max_tokens: 180
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message || "Unable to generate a description."
      );
    }

    const description = data.choices?.[0]?.message?.content;

    if (!description) {
      throw new Error("The AI returned an empty description.");
    }

    setFormData(prev => ({
      ...prev,
      description: description.trim()
    }));
  } catch (error) {
    setAiError(error.message || "Something went wrong.");
  } finally {
    setIsGenerating(false);
  }
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

                    <button type="button" onClick={handleGenerateDescription} disabled={isGenerating}>{isGenerating ? "Generating..." : "Generate description"}</button>
                    {aiError && <p role="alert">{aiError}</p>}

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