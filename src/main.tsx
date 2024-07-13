import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthForm from './AuthForm';
import RegForm from './RegForm'

const router = createBrowserRouter([
  { path: '/', element: <AuthForm/>},
  { path: "/register", element: <RegForm />}, 
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={router} />

  </div>
)
