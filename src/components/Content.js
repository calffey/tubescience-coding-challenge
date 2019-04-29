import React from 'react';
import PanelA from './PanelA';
import PanelB from './PanelB';
import '../App.css';

const Content = ({ isToggleOn, ...props }) => (
    <div className={isToggleOn ? "ContentShow": "ContentHide"}>
        <PanelA {...props} />
        <PanelB {...props} />
    </div>
);

export default Content;