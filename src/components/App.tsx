import { Layout } from "./Layout/Layout";
import { UserContextProvider } from "../context/userContext";
import { Main } from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmPage } from "./FilmPage/FilmPage";
import {HistoryContextProvider} from "./context/historyContext"
import { ActorPage } from "./ActorPage/ActorPage";
import { LoginPage } from "./Login/Login";
import { RegisterPage } from "./Registration/Registration";
import { AdminGenrePage } from "./AdminGenrePage/AdminGenrePage";
import { AdminFilmPage } from "./AdminFilmPage/AdminFilmPage";
import { AdminGenre } from "./AdminGenrePage/AdminGenre/AdminGenre";
import { AdminFilm } from "./AdminFilmPage/AdminFilm/AdminFilm";



export function AppComponent(){
    return (
        <div>
            <HistoryContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout></Layout>}>
                            <Route path="/main" element={<Main></Main>}></Route>
                            <Route path="/film/:id" element={<FilmPage></FilmPage>}></Route>
                            <Route path="/actor" element={<ActorPage></ActorPage>}></Route>

                            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                            <Route path="/registration" element={<RegisterPage></RegisterPage>}></Route>

                            <Route path="/adminfilm" element={<AdminFilmPage></AdminFilmPage>}></Route>
                            <Route path="/adminfilm/:id" element={<AdminFilm/>}></Route>
                            {/* <Route path="/addfilm" element={<AdminFilm/>}></Route> */}

                            <Route path="/admingenre" element={<AdminGenrePage></AdminGenrePage>}></Route>
                            <Route path="/admingenre/:id" element={<AdminGenre/>}></Route>


                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </HistoryContextProvider>
        </div>
    )
}