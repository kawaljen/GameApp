import {createBrowserRouter } from "react-router-dom";
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage";
import MastermindPage from "../Pages/MastermindPage/MastermindPage";
import JeuPlusMoinsPage from "../Pages/JeuPlusMoinsPage/JeuPlusMoinsPage";
import GamePage from "../Pages/GamePage/GamePage";

export const router= createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        children:[
            {path:"", element:<HomePage/>},
            {path:"jeuplusmoins/", element:<JeuPlusMoinsPage />},
            {path:"mastermind/", element:<GamePage />},
           // {path:"mastermind/", element:<MastermindPage />},

        ]
    }
])


