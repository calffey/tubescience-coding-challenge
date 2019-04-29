import React from 'react';
import '../App.css';

const PanelB = ({ isPanelToggleOn, panelClick, contentB }) => (    
    <div 
        className={isPanelToggleOn ? "PanelShow" : "PanelHide"}
        onClick={panelClick}
    >
        <h1>{contentB}</h1>
    </div>
);

export default PanelB;