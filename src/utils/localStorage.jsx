import {useEffect} from 'react'
const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "a@a.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create UI design for login page",
        date: "2026-02-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue",
        date: "2026-02-03",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Update project README file",
        date: "2026-01-28",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Ahmed",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate login API with frontend",
        date: "2026-02-02",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Create daily database backup script",
        date: "2026-02-05",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Performance Optimization",
        description: "Improve page load speed",
        date: "2026-01-30",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Unit Testing",
        description: "Write unit tests for auth module",
        date: "2026-02-06",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Client Meeting",
        description: "Discuss project requirements",
        date: "2026-02-01",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UI Review",
        description: "Review UI components",
        date: "2026-02-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy Application",
        description: "Deploy app to production server",
        date: "2026-02-07",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
  {
    id: 2,
    email: "admin2@example.com",
    password: "123",
  },
];



export const setLocalStorage = () =>{

   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin)) 
   
}
const hello = ()=>{
  useEffect(()=>{
  setLocalStorage()
},[])


}


export const getLocalStorage = () =>{

JSON.parse(localStorage.getItem('employees'))
 JSON.parse(localStorage.getItem('admin'))

 console.log("EMPLOYEES:", employees);
  console.log("ADMIN:", admin);

return {employees,admin}
}


