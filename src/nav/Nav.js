import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElement";
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                TODO LIST
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/HOME">
                    HOME
                </NavLink>
                <NavLink to="/DONE">
                    DONE
                </NavLink>
                <NavLink to="/UNDONE">
                    UNDONE
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;