import { useEffect } from "react";

import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";
function App() {
 
const handleLogin = (email,password)=>{
  const [user, setUser] = useState()

  if(email == 'admin@me.com' && password == '123'){

    console.log("This is Admin")

  }else if(email == 'user@me.com' && password == '123'){
    
    console.log("This is user")

  }else{
    
    alert('This is invalid credentials')
  }
}
  return (
    <>
      <Login  handleLogin={handleLogin}/>
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
