import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddNote from "./pages/addnote/AddNote";
import UpdateNote from "./pages/updatenote/UpdateNote";
// import NoPage from "./pages/nopage/NoPage";
import Profile from "./pages/profile/Profile";
import MyState from "./context/data/myState";
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addnote" element={
            // <ProtectedRoute>
              <AddNote />
            // </ProtectedRoute>
          } />
          <Route path="/updatenote" element={
            // <ProtectedRoute>
              <UpdateNote />
            // </ProtectedRoute> 
          } />
          <Route path="/profile" element={
            // <ProtectedRoute>
              <Profile />
            // </ProtectedRoute> 
          } />
          {/* <Route path="/*" element={<NoPage />} /> */}
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.setItem('token')
  if (token) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}
