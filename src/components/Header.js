import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    
    render(){
        const headerElements = this.props.headerData.map( (elem , i) => {
            return (
                    <li key={i} id="headerElements">
                        {elem}
                    </li>
            )
        })
            return(
                <div className="Header">
                    <ul className="headerList">
                        {headerElements}
                    </ul>
                    <button 
                        className="plusMinus" 
                        onClick={this.props.handleClick}
                    >
                        {this.props.isToggleOn ? "-" : "+"}
                    </button>
                </div>
                
            )
        }
};


export default Header;