import React from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent";
import FooterComponent from "../components/footer/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;