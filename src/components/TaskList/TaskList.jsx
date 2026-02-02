import React from "react";
import AcceptTask from './AcceptTest'
import NewTask from './NewTask'
import CompletedTask from './CompleteTask'
import FailedTask from './FailedTask'
function TaskList({data}) {
  
  return (
    <div
      id="tasklist"
      className=" w-full flex-nowrap overflow-x-auto flex items-center justify-start gap-5 py-5 mt-10 h-[50%]"
    >
      {/* <AcceptTask/>
      <NewTask/>
      <CompletedTask/>
      <FailedTask/> */}
      {data.tasks.map((item,ind)=>{
        

        if(item.active){
          return <CompletedTask key={ind} data={item}/>
        }

        if(item.newTask){
          return <NewTask key={ind} data={item}/>
        }

        if(item.completed){
          return <CompletedTask key={ind} data={item}/>
        }

        if(item.failed){
         return <FailedTask key={ind} data={item}/>
        }

      })}
      
      
    </div>
  );
}

export default TaskList;
