import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AuthForm.css';
import { Link } from "react-router-dom";
export default function AuthForm() {
  

  interface RegFormProps {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }
  const {register, handleSubmit} = useForm<RegFormProps>()


  const submitForm: SubmitHandler<RegFormProps> = async data => {
    if (data.password!== data.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    try {
      await axios.post('сюда апишку ставь' ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        , {
        username: data.username,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка:', error.response?.data);
      } else {
        console.error('Непредвиденная ошибка:', error);
      }
    }
  };
  return (
    <div className="container">
      <div className="form-main">
        <h2>Добро пожаловать!</h2>
        <h3 className="name-doc">AlgoDoc</h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
          <input type="text" id="username" required placeholder="Username"
              {...register('username')}
            />
            <input type="email" id="email"required placeholder="Email"
            {...register('email')}/>
          </div>
          <div>
            <input type="password" id="password" required placeholder="Пароль"
            {...register('password')}/>
            <input type="password" id="confirm-password" required placeholder="Подтвердите Пароль"/>
          </div>
          <button className="submit" type="submit">Зарегистрироваться</button>
        </form>
        <div className="spacer"></div>
        <Link to="/" className="link-register">Есть аккаунт? <strong>Войти</strong></Link>
      </div>
    </div>
  );
}