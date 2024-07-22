import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthForm from './AuthAndReg/AuthForm';
import RegForm from './AuthAndReg/RegForm';
import MainPage from './site/MainPage';
import './index.css';  // Импортируйте ваш CSS файл с директивами Tailwind

const router = createBrowserRouter([
  { path: '/', element: <AuthForm /> },
  { path: "/register", element: <RegForm /> },
  { path: "/algo-doc", element: <MainPage /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
