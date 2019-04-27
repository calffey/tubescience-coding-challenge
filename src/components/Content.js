import React, { Component } from 'react';
import PanelA from './PanelA';
import PanelB from './PanelB';
import '../App.css';

class Content extends Component {

    render(){
        return(
            <div className={this.props.isToggleOn ? "Content-show": "Content-hide"}>
               <PanelA 
                    contentAData={this.props.contentAData}
                    isPanelToggleOn={this.props.isPanelToggleOn}
                />
                <PanelB 
                    contentBData={this.props.contentBData}
                    isPanelToggleOn={this.props.isPanelToggleOn}
                    panelClick={this.props.panelClick}
                />
            </div>
        )
    }
};

export default Content;