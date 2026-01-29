import React from 'react'

const FailedTask = () => {
  return (
    <div>
      <div className="h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl">

        <div className="flex justify-between  items-center">

          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
          <h4 className="text-sm">20 January 2026</h4>
          
        </div>

        <h2 className="mt-5 text-xl font-bold">Make a youtube video</h2>
        <p className='text-sm mt-2'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum possimus est hic consectetur repudiandae tempora?
        </p>
        <div className="mt-4">
            <button className="bg-red-500 px-2">Failed Task</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
