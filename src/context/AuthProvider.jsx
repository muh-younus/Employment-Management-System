
import React, { useEffect,useState } from 'react'
import  {createContext} from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  
  useEffect(()=>{

    const {employees,admin} = getLocalStorage()
    setUserData({employees,admin})
    

  },[])

//   useEffect(() => {
//   console.log("the data is", userData);
// }, [userData]);

  return (

   
   
   <AuthContext.Provider value={userData}> 
 
    {children}

   </AuthContext.Provider>
   

    
  )
}

export default AuthProvider
