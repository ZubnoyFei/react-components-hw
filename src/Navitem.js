import React from 'react';

const Navitem = () => {
    return <nav>
        <ul className="nav-list">
            <li className="nav-list__item">
                <a href="/">
                    Home
                </a>
            </li>
            <li className="nav-list__item">
                <a href="/#about">
                    About us
                </a>
            </li>
            <li className="nav-list__item">
                <a href="/#contact">
                    Contact us
                </a>
            </li>
            <li className="nav-list__item">
                <a href="/#help">
                    Help page
                </a>
            </li>
        </ul>
    </nav>
}

export default Navitem;