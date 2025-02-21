import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import UserDashboard from "./screens/UserDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
