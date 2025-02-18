import "./Login.css"
import { Link } from "react-router-dom";

export function LoginPage(){

   return(
        <div className="log-container">
                <div className="log-text">
                    <h1>Логин</h1>
                </div>
                <div className="log-content">

                    <input className="log-input" type="text" placeholder="Логин..."/>
                    <input className="log-input" type="password" placeholder="Пароль..."/>

                    <div className="log-link-text">
                        <a href="#" className="log-forgot-pass">Забыли пароль?</a>
                        <Link className="log-reg-link" to={`/registration`}>Регистрация</Link>
                    </div>

                    <div className="log-btn-div">
                        <button className="log-btn">Войти</button>
                    </div>
                </div>
        </div>

)}
