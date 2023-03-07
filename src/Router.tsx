import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Index";
import { Header } from "./layouts/Header";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartIndex } from "./pages/Cart/Index";

export function Router(){

    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}></Route>
               
                <Route path="/cart" element={<CartIndex/>}></Route> 
            </Route>
            
        </Routes>
    )
}