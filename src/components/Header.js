import React from 'react';
import '../App.css';

const Header = ({ headerData, handleClick, isToggleOn}) => (
    <div className="Header">
        <ul className="headerList">
            {headerData.map((elem , i) => (
                <li key={i} id="headerElements">
                    {elem}
                </li>
            ))}
        </ul>
        <button className="plusMinus" onClick={handleClick}>
            {isToggleOn ? "-" : "+"}
        </button>
    </div>
);

export default Header;