import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./layouts/Header";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}></Route>
            </Route>
            
        </Routes>
    )
}