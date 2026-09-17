// Import React and useState for managing component state
import { useState } from "react";
// Import the Greeting component to display the name greeting
import Greeting from "./components/Greeting";

const App = () => {
  // State to manage the name entered in the input field
  const [name, setName] = useState("");
  // State to manage the submitted name to be passed to Greeting
  const [submittedName, setSubmittedName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    setSubmittedName(name); // Update submittedName to the entered name
    setName(""); // Clear the input field after submission
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Main header for the app */}
      <h1>Welcome to the Greeting App</h1>

      {/* Form to capture the user's name */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on input change
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        {/* Button to submit the form */}
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Greet Me
        </button>
      </form>

      {/* Conditionally render Greeting component if a name has been submitted */}
      {submittedName && <Greeting name={submittedName} />}
    </div>
  );
};

export default App;
