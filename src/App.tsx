import React from 'react';
import AuthForm from './AuthForm';
import RegForm from './RegForm'
const App: React.FC = () => {
  return (
    <div className="App">
      <AuthForm />
      <RegForm />
    </div>
  );
};

export default App;

