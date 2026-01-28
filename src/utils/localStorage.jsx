const employees= [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Login Page",
          "description": "Create UI design for login page",
          "date": "2026-02-01",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Navbar Bug",
          "description": "Resolve responsive navbar issue",
          "date": "2026-02-03",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Documentation",
          "description": "Update project README file",
          "date": "2026-01-28",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },

    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "API Integration",
          "description": "Integrate login API with frontend",
          "date": "2026-02-02",
          "category": "Backend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Database Backup",
          "description": "Create daily database backup script",
          "date": "2026-02-05",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Performance Optimization",
          "description": "Improve page load speed",
          "date": "2026-01-30",
          "category": "Optimization",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Unit Testing",
          "description": "Write unit tests for auth module",
          "date": "2026-02-06",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },

    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Meeting",
          "description": "Discuss project requirements",
          "date": "2026-02-01",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "UI Review",
          "description": "Review UI components",
          "date": "2026-02-04",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy Application",
          "description": "Deploy app to production server",
          "date": "2026-02-07",
          "category": "Deployment",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]



const admin = [
  {
    id: 1,
    email: "admin1@example.com",
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

export const getLocalStorage = () =>{

const employee = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return {employees,admin}
}
