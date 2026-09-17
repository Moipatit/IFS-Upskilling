// Greeting component to display a message with the user's name
// Receives 'name' as a prop from App component
const Greeting = ({ name }) => {
  return <h2 style={{ color: "teal", marginTop: "20px" }}>Hello, {name}!</h2>;
};

export default Greeting;
