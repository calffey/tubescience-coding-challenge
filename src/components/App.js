import React from 'react';
import Header from './Header'
import Content from './Content'
import withData from '../containers/withData';
import '../App.css';

const App = ({ handleClick, panelClick, ...props}) => (
    <div className="App">
        <Header {...props} handleClick={handleClick} />
        <Content {...props} panelClick={panelClick} />
    </div>
);

export default withData(App);
