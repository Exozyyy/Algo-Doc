import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function MainPage() {

  interface NavElement {
    name: string;
    url: string;  
  }
  const [navElement, setNavElement] = useState<NavElement[]>([]); // для получения категорий со стороны бекенда, закомментировано в хедере
  const [userName, setUserName] = useState('');


  function logout() {
    localStorage.removeItem('user');
    window.location.href = '/auth';
  }
  function login() {
    window.location.href = '/auth';
  }

  axios.get('апишку сюда')
  .then(response => {
    setNavElement(response.data);
    localStorage.setItem('navElements', JSON.stringify(response.data));
  })
  .catch(error => {
    console.error('Ошибка при получении навигационных данных', error);
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.username) {
      setUserName(user.username);
    } else {
      setUserName('');
    }
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <div className="min-h-screen p-6 bg-gray-900">
  <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-white">
        {userName ? (
          <div className="main-data">
          <Link to="/settings">{userName}</Link>
          <button 
          onClick={logout} 
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Выйти
        </button>
        </div>
        ) : (
          <button 
          onClick={login} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Войти
        </button>
        )}
      </h3>

    </div>
    <div className="flex space-x-4"> 
       {/* {navElement.map((element, index) => (
            <a key={index} href={element.url} className="text-blue-400 hover:underline">{element.name}</a>
          ))} */} 
      <a href="#" className="text-blue-400 hover:underline">для верстки</a>
      <a href="#" className="text-blue-400 hover:underline">для верстки</a>
      <a href="#" className="text-blue-400 hover:underline">для верстки</a>
      <a href="#" className="text-blue-400 hover:underline">для верстки</a>
    </div>
  </div>
  <div className="bg-gray-800 shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold mb-4 text-white animate-fade-in">Добро пожаловать в AlgoDoc!</h1>
    <h2 className="text-2xl font-semibold mb-2 text-white animate-fade-in animation-delay-1">Что это такое?</h2>
    <p className="mb-4 text-gray-300 animate-fade-in animation-delay-2">
      AlgoDoc - это платформа для изучения алгоритмов, обмена знаниями и (в будущем) обсуждений в комментариях.
    </p>
    <h2 className="text-2xl font-semibold mb-2 text-white animate-fade-in animation-delay-3">Как это работает?</h2>
    <p className="text-gray-300 animate-fade-in animation-delay-4">
      скоро будет
    </p>
  </div>
</div>

  );
}
