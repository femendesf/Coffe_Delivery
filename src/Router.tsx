import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Order } from "./pages/Cart/Cart";
import { OrderConfirmed } from "./pages/OrderConfirmed/OrderConfirmed";
import { useContext } from "react";
import { CardsContext } from "./context/CardsContext";

export function Router(){

    const {listCoffees} = useContext(CardsContext)
    
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/order" element={<Order/>}></Route> 
                <Route path="/orderConfirmed" element={<OrderConfirmed/>}></Route>
            </Route>
            
        </Routes>
    )
}