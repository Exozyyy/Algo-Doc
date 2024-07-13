import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AuthForm.css';
import { Link } from "react-router-dom";
export default function AuthForm() {


interface AuthFormProps {
  username: string;
  password: string;
}

const {register, handleSubmit} = useForm<AuthFormProps>()

const submitForm: SubmitHandler<AuthFormProps> = async data => {
  try {
    await axios.get('сюда апишку ставь' ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      , {
      params: {
        email: data.username,
        password: data.password,
      }
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
        <h2>Добро пожаловать</h2>
        <h3 className="name-doc">AlgoDoc</h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
          <input type="text" id="username" required placeholder="Username or Email"
              {...register('username')}
            />
          </div>
          <div>
            <input type="password" id="password" required placeholder="Пароль"
            {...register('password')} />
          </div>
          <button className="submit" type="submit">Войти</button>
        </form>
        <div className="spacer"></div>
        <Link to="/register" className="link-register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}
