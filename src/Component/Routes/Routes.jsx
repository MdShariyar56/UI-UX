 // ✅ react-router-dom
import Layout from "../../Layout/Layout"; // Navbar + Outlet
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import MyService from "../../Pages/MyService/MyService";
import Contact from "../../Pages/Contact/Contact";
import MySkills from "../../Pages/MySkills/MySkills";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Layout parent
    children: [
      { path: "", element: <Home /> },       // Default page
      { path: "about", element: <About /> }, // Notice no leading /
      { path: "skills", element: <MySkills /> },
      { path: "service", element: <MyService /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
