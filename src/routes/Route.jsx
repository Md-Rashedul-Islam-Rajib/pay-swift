import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";


createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout />,
        children: [
            {
            path: '/',
            element : <Home />
        },
        
    ]
    }
])

export default Route;