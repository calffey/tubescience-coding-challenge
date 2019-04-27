import React, { Component } from 'react';
import '../App.css';

class PanelB extends Component {
    render(){
        return(
            <div 
                className={this.props.isPanelToggleOn ? "PanelShow" : "PanelHide"}
                onClick={this.props.panelClick}
            >
               <h1>{this.props.contentBData}</h1>
            </div>
        )
    }
};

export default PanelB;