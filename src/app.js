import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import BodyComponent from "./components/Body"
import FooterComponent from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import AboutComponent from "./components/About"
import ContactComponent from "./components/Contact"
import ErrorComponent from "./components/Error"


const APPLayoutComponent = () => {
   return (
   <div className="app">
        <Header/>
        <Outlet/>
        <FooterComponent/>
    </div>);
};
const configuration = [
{ 
    path:"/",
    element:<APPLayoutComponent/>,
    errorElement: <ErrorComponent/>,
    children:[{ 
        path:"/",
        element:<BodyComponent/>
    },{ 
        path:"/about",
        element:<AboutComponent/>
    },{ 
        path:"/contact",
        element:<ContactComponent/>
    }]
},
{ 
    path:"/about",
    element:<AboutComponent/>,
    errorElement: <ErrorComponent/>,
},
{ 
    path:"/contact",
    element:<ContactComponent/>,
    errorElement: <ErrorComponent/>,
}
// ,{
//     path: "*",
//     element: <ErrorComponent />, // Catch-all route for non-existing paths
//   },
];
const appRouter = createBrowserRouter( configuration );

const rootDiv = ReactDOM.createRoot(document.getElementById("root"));

// rootDiv.render(<APPLayoutComponent/>);
rootDiv.render(<RouterProvider router={appRouter}/>);

