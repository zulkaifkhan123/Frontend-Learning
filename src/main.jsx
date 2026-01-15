import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Router/Layout'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import Github from './Router/Github'
import { getInfo } from './Router/Github'
import Context_Provider from './context/Context_Provider'

let router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      } ,
      {
        path : "about" ,
        element : <About  />
      },
      {
        path : "contact" ,
        element : <Contact  />
      },
      {
        loader : getInfo ,
        path : "github" ,
        element : <Github  />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context_Provider>
    <RouterProvider router={router}/>
    </Context_Provider>
  </StrictMode>,
)
