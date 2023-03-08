import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Order } from "./pages/Cart/Cart";

export function Router(){

    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/order" element={<Order/>}></Route> 
                <Route path="/orderConfirmed"></Route>
            </Route>
            
        </Routes>
    )
}