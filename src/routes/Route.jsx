import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import SendMoney from "../pages/SendMoney";
import CashOut from "../pages/CashOut";
import CashIn from "../pages/CashIn";
import TransactionHistory from "../pages/TransactionHistory";
import TransactionManagement from "../pages/TransactionManagement";


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
        },
        {
            path : '/cash-out',
            element: <CashOut />
        },
        {
            path : '/cash-in',
            element : <CashIn />
        },
        {
            path : '/transaction-history',
            element : <TransactionHistory />
        },
        {
            path : '/transaction-management',
            element : <TransactionManagement />
        },
        {
            path : '/transaction-history-agent',
            element : 
        }

    ]
    }
])

