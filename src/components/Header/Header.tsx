import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return (
        <div>
                <header>
                    <div className="Header">
                        <Link to={"/main"}>
                        <div className="ImageLogoDiv">
                            <img className="ImageLogo" src="https://i.imgur.com/M6hsHDC.png"/>
                        </div>
                        </Link>

                        <div className="Search">
                            <div className="searchBar">
                                <input type="text" placeholder="Search.." />
                                {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> */}
                            </div>

                            <div>
                                <img className="ImageCrecker" src="https://akkond.ru/upload/iblock/870/k56kameevkqm72s4hzmiqpc2yjkf54xe.png" alt="" />
                            </div>
                        </div>
                        

                        <button className="SignIn">
                            <div className="SignInSection">
                                <Link to={`/login`} className="SignInText">Sign in</Link>
                            </div>
                        </button>
                    </div>
                </header>      
                        
        </div>
    )
}