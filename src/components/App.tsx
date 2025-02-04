import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmPage } from "./FilmPage/FilmPage";
import {HistoryContextProvider} from "./context/historyContext"



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
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HistoryContextProvider>
        </div>
    )
}