import React from 'react'

function Header({data}) {

  const loggedOut = ()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
  console.log('hell')


  }
  
  return (

    <div className="flex items-end justify-between">
      
      <h1 className='text-2xl font-medium'>Hello <br/> <span className="text-3xl font-semibold">Hello</span> </h1>
      <button onClick={loggedOut} className="bg-red-500 px-5 text-lg font-medium py-2 rounded-sm">Log Out</button>
    </div>
  )
}

export default Header
