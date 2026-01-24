import { useEffect } from "react";

import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";
function App() {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage()
    
  },[]);

  return (
    <>
      {/* <Login /> */}
      <AdminDashboard />
    </>
  );
}

export default App;
