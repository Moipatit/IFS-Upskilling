import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { EventProvider } from "./context/EventContext"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/Navbar';
import Help from './pages/Help';
import EventForm from './pages/EventForm';
import EditEvent from './pages/EditEvent';

function App() {

  return (
  <BrowserRouter>
  <EventProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/edit-event/:id" element={<EditEvent/>}/>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/add-event" element={<EventForm/>}/>
      </Route>
    </Routes>

  </EventProvider>
  
  </BrowserRouter>
  )
}

export default App
