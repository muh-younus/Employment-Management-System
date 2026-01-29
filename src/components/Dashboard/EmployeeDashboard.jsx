import React from 'react'
import Header from '../other/Header'
import EmployeeListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard({data}) {
  // console.log("The login user data is",data)
  return (
    <div>
        <div className="p-10 bg-[#1C1C1C] h-screen overflow-x-hidden">
          {/* <h1>{data.id}</h1> */}
            <Header  data = {data}/>
            <EmployeeListNumber data={data}/>
            <TaskList data={data}/>
        </div>
      
    </div>
  )
}

export default EmployeeDashboard
