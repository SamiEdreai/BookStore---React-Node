import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './header.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Sidebar from '../sidebar/Sidebar.component';

const Header = () => {
    const [sidebarClass, setSidebarClass] = useState('');

    const showSidebar = () => setSidebarClass('show');

    const hideSidebar = () => setSidebarClass('');

    return (
        <header className="main-header">
            <h1>
                <Link to="/">Bookstore</Link>
            </h1>

            <button className="hamburger-btn" onClick={"/"}>
                <FontAwesomeIcon icon={faBars}>hello</FontAwesomeIcon>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            {sidebarClass && <Sidebar className={sidebarClass} hideSidebar={hideSidebar} />}




        </header>
    )
};

export default Header;