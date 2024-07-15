import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import SendMoney from "../pages/SendMoney";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout />,
        children: [
            {
            path: '/',
            element : <Home />
        },
        {
            path : '/send-money',
            element : <SendMoney />
        }

    ]
    }
])

