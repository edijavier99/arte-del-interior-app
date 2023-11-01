import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import Login from "./pages/login"; 
import NewItem from "./pages/newitem"
import SingleItem from "./pages/singleitem"
import Userpage from "./pages/userpage"
import ForgotPassword from "./pages/forgotPassword";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import TopBar from "./component/topbar";
import Colchones from "./pages/colchones";
import Canapes from "./pages/canapes";
import Cabeceros from "./pages/cabeceros";
import CarritoPage from "./pages/carritopage";
import Mesas from "./pages/mesas";
import Armarios from "./pages/armarios";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <TopBar/>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Userpage />} path="/userpage" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<NewItem />} path="/new-item" />
                        <Route element={<ForgotPassword />} path="/forgot-password" />
                        <Route element={<Cabeceros />} path="/cabeceros" />
                        <Route element={<Canapes />} path="/canapes" />
                        <Route element={<Colchones />} path="/colchones" />
                        <Route element={<Armarios />} path="/armarios" />
                        <Route element={<Mesas />} path="/mesas" />
                        <Route element={<CarritoPage />} path="/carrito" />
                        <Route element={<SingleItem/>} path="/single-item/:id"/>
                        <Route element={<h1>Not found!</h1>} path="*"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

