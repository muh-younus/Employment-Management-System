import React from 'react'

const NewTask = ({name}) => {
  return (
     <div className="h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl">

        <div className="flex justify-between  items-center">

          <h3 className="bg-yellow-600 px-3 py-1 text-sm rounded">{name.category}</h3>
          <h4 className="text-sm">{name.date}</h4>
          
        </div>

        <h2 className="mt-5 text-xl font-bold">{name.title}</h2>
        <p className='text-sm mt-2'>

          {name.description}
        </p>
        <div className="mt-4">
        <button className='bg-green-500 px-2 rounded'>Accepted Task</button>
        </div>
      </div>
  )
}

export default NewTask
