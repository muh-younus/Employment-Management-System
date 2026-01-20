import React, { useSyncExternalStore } from 'react'
import {useState} from 'react'


function login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const submitHandler = (e) =>{

        e.preventDefault()
        setEmail("")
        setPassword("")
    }
  return (
    <>
 <div className="flex items-center justify-center min-h-screen">

    <div className="border-2 border-emerald-600 rounded-xl p-20">

        <form
        onSubmit={(e)=>{
         submitHandler(e)
        }}
        className="flex flex-col gap-3 items-center justify-center">

            <input
            value={email}
            className="border-2 bg-transparent outline-none border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-500"
            type="text"
            placeholder="Enter Your Email" 
            onChange={(e)=>{
              setEmail(e.target.value)
                
            }}
            />

            <input
            value={password}
             className="border-2  bg-transparent outline-none border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-500"
            type="text"
            placeholder="Enter Your Passwords"
            onChange={(event)=>{

                setPassword(event.target.value)
            }}
            />

            <button className=" text-white  outline-none bg-emerald-600 py-2 mt-1  px-7 rounded-full placeholder:text-white" >Log In</button>

        </form>

    </div>

 </div>
    </>
  )
}

export default login
