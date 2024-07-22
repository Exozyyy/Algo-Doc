import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

interface RegFormProps {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}

export default function AuthForm() {
  const { register, handleSubmit } = useForm<RegFormProps>();
  const navigate = useNavigate();

  const submitForm: SubmitHandler<RegFormProps> = async data => {
    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    const hashedPassword = CryptoJS.SHA256(data.password).toString(CryptoJS.enc.Hex);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      });
      navigate('/algo-doc');
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка:', error.response?.data);
      } else {
        console.error('Непредвиденная ошибка:', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-gray-500">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md text-center text-white">
        <h2 className="text-2xl mb-4 text-white">Добро пожаловать!</h2>
        <h3 className="text-4xl font-bold mb-4 text-white">AlgoDoc</h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <input 
              type="text" 
              id="username" 
              required 
              placeholder="Username"
              {...register('username')}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="Email"
              {...register('email')}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              id="password" 
              required 
              placeholder="Пароль"
              {...register('password')}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              id="confirm-password" 
              required 
              placeholder="Подтвердите Пароль"
              {...register('confirmPassword')}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <button className="w-full p-3 rounded text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
           focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
            font-size-20 px-5 py-3.5 text-center me-2 mb-2" type="submit">Зарегистрироваться</button>
   
        </form>
        <div className="mt-4">
          <Link to="/" className="text-purple-400 hover:underline">Есть аккаунт? <strong>Войти</strong></Link>
        </div>
      </div>
    </div>
  );
}
