import "./Registration.css"
import { Link } from "react-router-dom";

export function RegistrationPage(){

   return(
        <div className="log-container">
                <div className="log-text">
                    <h1>Регестрация</h1>
                </div>
                <div className="log-content">

                    <input className="log-input" type="text" placeholder="Логин..."/>
                    <input className="log-input" type="text" placeholder="E-mail..."/>
                    <input className="log-input" type="password" placeholder="Пароль..."/>
                    <input className="log-input" type="password" placeholder="Повторите пароль..."/>

                    <div className="reg-link-text">
                        <p >Уже существует аккаунт? <Link className="log-reg-link" to={`/login`}>Логин</Link></p>
                    </div>

                    <div className="log-btn-div">
                        <button className="log-btn">Зарегестрироваться</button>
                    </div>
                </div>
        </div>

)}
