import { Outlet } from "react-router-dom";
import Footer from "./LayoutComponent/Footer";
import Navbar from "./LayoutComponent/MainNav";
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )

}


export default Layout;