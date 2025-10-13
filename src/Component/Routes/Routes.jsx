
import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";




const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
    },
    {
        path:'/about',
        Component: About,
    }
])

export default router