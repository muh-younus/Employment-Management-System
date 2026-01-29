import React from "react";
import AcceptTask from './AcceptTest'
import NewTask from './NewTask'
import CompletedTask from './CompleteTask'
import FailedTask from './FailedTask'
function TaskList({data}) {
  console.log( "ali",data)
  return (
    <div
      id="tasklist"
      className=" w-full flex-nowrap overflow-x-auto flex items-center justify-start gap-5 py-5 mt-10 h-[50%]"
    >
      {/* <AcceptTask/>
      <NewTask/>
      <CompletedTask/>
      <FailedTask/> */}
      {data.tasks.map((item)=>{
        console.log('The item is ',item)
      })}
      
      
    </div>
  );
}

export default TaskList;
