import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mainPage.css';
import { Link } from "react-router-dom";

export default function MainPage() {

  interface NavElement {
    name: string;
    url: string;  
  }

  const [navElement, setNavElement] = useState<NavElement[]>([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.username) {
      setUserName(user.username);
    } else {
      setUserName('не пришел юзернейм');
    }
  }, []);
   

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.username) {
      setUserName(user.username);
    }
  })

  return (
    <div className="container-main-page">
      <div className="header">
        <div className="user-info">
          <h3>
            <Link to="/settings">{userName}</Link>
          </h3>
        </div>
        <div className="nav">
          <a href="">для верстки</a>
          <a href="">для верстки</a>
          <a href="">для верстки</a>
          <a href="">для верстки</a>
        </div>
      </div>
      <div className="main-content">
        <h1 className="fade-in">Добро пожаловать в AlgoDoc!</h1>

        <h2 className="fade-in delay-1">Что это такое?</h2>
        <p className="fade-in delay-2">
          AlgoDoc - это платформа, на которой у пользователей будет возможность подробнее изучить алгоритмы,<br /> так же на данной платформе вы сможете делится чем либо в виде записей, и (возможно в будущем) обсуждать что либо в комментариях под этими записями
        </p>

        <h2 className="fade-in delay-3">Как это работает?</h2>
        <p className="fade-in delay-4">
          скоро будет
        </p>
      </div>
    </div>
  );
}
