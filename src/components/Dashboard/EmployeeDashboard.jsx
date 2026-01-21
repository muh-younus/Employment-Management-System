import React from 'react'
import Header from '../other/Header'
import EmployeeListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard() {
  return (
    <div>
        <div className="p-10 bg-[#1C1C1C] h-screen overflow-x-hidden">
            <Header />
            <EmployeeListNumber/>
            <TaskList/>
        </div>
      
    </div>
  )
}

export default EmployeeDashboard
