// import axios, {isCancel, AxiosError} from 'axios';
import React from 'react';
import AuthForm from './AuthForm';
import RegForm from './RegForm'
import MainPage from './site/MainPage';
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

