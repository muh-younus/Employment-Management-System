import React, { useContext } from 'react'
import {AuthContext} from "../../context/AuthProvider"
import { getLocalStorage } from '../../utils/localStorage'


function AllTask() {
   

    const apiData = useContext(AuthContext)
    
    
  return (
    <div className="bg-zinc-900 p-5 w-full mt-5 h-60 rounded  ">
        <div className='bg-red-400 mb-2 py-2 flex gap-2 justify-between rounded px-4  text-center '>
            <div className='w-1/5 '>Employee Name</div>
            <div className='w-1/5 '>New Task</div>
            <div className='w-1/5 '>Active Task</div>
            <div className='w-1/5 '>Completed</div>
            <div className='w-1/5 '>Failed</div>

            

        </div>
        <div className='h-[80%] alltask-scroll overflow-auto'>

       {apiData.employees.map(function(data,index ){

        return <div key={index} className="mb-4 px-4 text-center py-2 flex border-2 border-emerald-600 justify-between rounded">
             <div className='w-1/5 text-white-600'>{data.firstName}</div>
            <div className='w-1/5 text-blue-600'>{data.taskNumbers.newTask}</div>
            <div className='w-1/5 text-yellow-300'>{data.taskNumbers.active}</div>
            <div className='w-1/5 te00'>{data.taskNumbers.completed}</div>
            <div className='w-1/5 text-red-600'>{data.taskNumbers.failed}</div>
        </div>
        })}
        </div>

        
       
       
      
    </div>
  )
}

export default AllTask
