import React from "react";
import Header from "../other/Header";

function AdminDashboard() {
  return (
    <>
      <div className="h-screen w-full p-10">
        <Header />

        <div>
          <form action="" className="flex items-start justify-between">
            <div>
              <div>
                <h3>Task Title</h3>
                <input type="text " placeholder="Make a UI design" />
              </div>

              <div>
                <h3>Date</h3>
                <input type="date" />
              </div>

              <div>
                <h3>Assgn To</h3>
                <input type="text" placeholder="Employee Name" />
              </div>

              <div>
                <h3>Category</h3>
                <input type="text" placeholder="Design, Dev, etc" />
              </div>
            </div>

            <div>
              <h3>Description</h3>
              <textarea name="" id="" cols="30" row="10"></textarea>
            </div>

            <button>Create Task</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
