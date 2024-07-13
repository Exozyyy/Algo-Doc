import './AuthForm.css';
import { Link } from "react-router-dom";
export default function AuthForm() {
  
  return (
    <div className="container">
      <div className="form-main">
        <h2>Добро пожаловать!</h2>
        <h3 className="name-doc">AlgoDoc</h3>
        <form>
          <div>
            <input type="email" id="email" name="email" required placeholder="Email"/>
          </div>
          <div>
            <input type="password" id="password" name="password" required placeholder="Пароль" />
            <input type="password" id="confirm-password" name="password" required placeholder="Подтвердите Пароль" />
          </div>
          <button className="submit" type="submit">Зарегистрироваться</button>
        </form>
        <div className="spacer"></div>
        <Link to="/" className="link-register">Есть аккаунт? <strong>Войти</strong></Link>
      </div>
    </div>
  );
}