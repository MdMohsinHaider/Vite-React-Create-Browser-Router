import {lazy} from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./components/Layout";

const Home = lazy(()=> import("./pages/Home"))
const About = lazy(()=> import("./pages/About"))
const Conact = lazy(()=> import("./pages/Contact"))
const Services = lazy(()=> import("./pages/Services"))

// import Home from "./pages/Home"
// import About from "./pages/About"
// import Conact from "./pages/Contact"
// import Services from "./pages/Services"

const App = () => {

    let myRouters = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    // path:"/",
                    index: true,
                    element:<Home/>
                },
                {
                    path:"/services",
                    element:<Services/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contacts",
                    element:<Conact/>
                },
            ]
        },
    ])

    return <RouterProvider router={myRouters}></RouterProvider>
};

export default App
