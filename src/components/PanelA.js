import React from 'react';
import '../App.css';

const PanelA = ({ isPanelToggleOn, contentA }) => (
    <div className={isPanelToggleOn ? "PanelHide" : "PanelShow"}>
        <h1>{contentA}</h1>
    </div>
);

export default PanelA;