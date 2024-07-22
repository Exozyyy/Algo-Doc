// import axios, {isCancel, AxiosError} from 'axios';
import React from 'react';
import AuthForm from './AuthAndReg/AuthForm';
import RegForm from './AuthAndReg/RegForm'
import MainPage from './site/MainPage';
import './App.css'; 
const App: React.FC = () => {
  return (
    <div className="App">
      <AuthForm />
      <RegForm />
      <MainPage />
    </div>
  );
};

export default App;

