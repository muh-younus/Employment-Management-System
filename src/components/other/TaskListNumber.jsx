import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className="flex screen gap-5  justify-between mt-10">
        <div className="h-40 w-[30%] bg-red-400 py-6 px-9 rounded-xl">
            <h2 className="text-3xl">{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className="h-40 w-[30%] bg-blue-400 py-6 px-9 rounded-xl">
            <h2 className="text-3xl">{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className="h-40 w-[30%] bg-green-400 py-6 px-9 rounded-xl">
            <h2 className="text-3xl">{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className="h-40 w-[30%] bg-yellow-400 py-6 px-9 rounded-xl">
            <h2 className="text-3xl">{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
