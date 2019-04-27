import React, { Component } from 'react';
import '../App.css';

class PanelA extends Component {
    render(){
        return(
            <div 
                className={this.props.isPanelToggleOn ? "PanelHide" : "PanelShow"}
            >
               <h1 id="panelA-h1">{this.props.contentAData}</h1>
            </div>
        )
    }
};

export default PanelA;