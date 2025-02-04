import {createRoot} from "react-dom/client"
import { AppComponent } from "./components/App"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(<AppComponent></AppComponent>)