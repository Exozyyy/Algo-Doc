// import axios, {isCancel, AxiosError} from 'axios';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthForm from './AuthForm';
import RegForm from './RegForm'
import MainPage from './site/MainPage';

const router = createBrowserRouter([
  // { path: '/', element: <AuthForm/>},
  { path: '/', element: <AuthForm/>},
  { path: "/register", element: <RegForm />}, 
  { path: "/algo-doc", element: <MainPage/>}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={router} />

  </div>
)
