import { ReactNode } from "react"
import "./Layout.css"
import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
interface ILayoutProps {
    children? : ReactNode
}


export function Layout(props:ILayoutProps){
    return(
        <div className="Layout">
            <Header></Header>
            <Outlet></Outlet>
            {props.children}
        </div>

    )   
}