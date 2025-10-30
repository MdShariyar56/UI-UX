
import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import MySkills from "../../Pages/MySkills/MySkills";
import MyService from "../../Pages/MyService/MyService";




const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
    },
    {
        path:'/about',
        Component: About,
    },
    {
        path:'/skills',
        Component: MySkills
    },
    {
        path:'service',
        Component: MyService
    }
])

export default router