import React from 'react'

const CompleteTask = ({data}) => {
  console.log("complete data",data)
  console.log("the complete title data is",data.title)
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl">

        <div className="flex justify-between  items-center">

          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
          
        </div>

        <h2 className="mt-5 text-xl font-bold">{data.title}</h2>
        <p className='text-sm mt-2'>

          {data.description}
        </p>
        <div className="mt-4">
            <button className="bg-green-600 px-2 rounded">Completed Task</button>
        </div>
      </div>
  )
}

export default CompleteTask
