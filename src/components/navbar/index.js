import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navBarElements";

const Navbar = () => {
    return (
 
        

        <div className="NavBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">MDZS API</a>
                    </div>
                    <ul class="nav navbar-nav">

                    <NavLink to="/" activeStyle>
                        Random Char
                    </NavLink>
                     <NavLink to="/lan" activeStyle>
                        Gusu Lan Charater (Random)
                    </NavLink>
                    <NavLink to="/jiang" activeStyle>
                        Yunmeng Jiang Charater (Random)
                    </NavLink>
                    <NavLink to="/jin" activeStyle>
                        Lanling Jin Charater (Random)
                    </NavLink>
                    <NavLink to="/nie" activeStyle>
                        Qinghe Nie Charater (Random)
                    </NavLink>
                    <NavLink to="/wen" activeStyle>
                        Qishan Wen Charater (Random)
                    </NavLink>
                    <NavLink to="/location" activeStyle>
                        Location (Random)
                    </NavLink>
                   
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar;