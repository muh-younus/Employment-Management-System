import { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {AuthContext} from "./context/AuthProvider"
// imp}ort { getLocalStorage } from "./utils/localStorage";
function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("This is invalid credentials");
    }
  };
  const data = useContext(AuthContext)
  console.log("the context data is: ",data);
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
