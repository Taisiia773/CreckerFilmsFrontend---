import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmPage } from "./FilmPage/FilmPage";
import {HistoryContextProvider} from "./context/historyContext"
import { ActorPage } from "./ActorPage/ActorPage";
import { LoginPage } from "./Login/Login";
import { RegistrationPage } from "./Registration/Registration";
import { AdminPage } from "./AdminPage/AdminPage";



export function AppComponent(){
    return (
        <div>
            <HistoryContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>
                        <Route path="/main" element={<Main></Main>}></Route>
                        <Route 
                                path="/film/:id"
                                element={<FilmPage></FilmPage>}
                        ></Route>
                        <Route path="/actor" element={<ActorPage></ActorPage>}></Route>
                        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                        <Route path="/registration" element={<RegistrationPage></RegistrationPage>}></Route>

                        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HistoryContextProvider>
        </div>
    )
}