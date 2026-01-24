import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/Createtask";
import Alltask from "../other/AllTask"

function AdminDashboard() {
  return (
    <>
      <div className="min-h-screen w-full bg-black p-8">
  <Header />
  
  <CreateTask/>
  <Alltask/>
 

  
</div>

    </>
  );
}
import Createtask from "../other/Createtask";

export default AdminDashboard;
