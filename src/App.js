import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/Header'
import Content from './components/Content'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            isPanelToggleOn: false,
            jsonData: {
                    headerData: ["30%", "$2000000", "85%"],
                    contentA: "This should be displayed in Panel A. This is visible by default",
                    contentB: "This should be displayed in Panel B. This should be hidden by default"
            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.panelClick = this.panelClick.bind(this);

    }

    handleClick(){
        console.log('hit')
        this.setState( state => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

    panelClick(){
        console.log('panel')
        this.setState( state => ({
            isPanelToggleOn: !state.isPanelToggleOn
        }));
    }
    
    render(){
        const { headerData, contentA, contentB } = this.state.jsonData
        return(
            <div className="App">
                <Header 
                    headerData={headerData} 
                    isToggleOn={this.state.isToggleOn}
                    handleClick={this.handleClick}
                />
                <Content 
                    contentAData={contentA} 
                    contentBData={contentB}
                    isToggleOn={this.state.isToggleOn}
                    isPanelToggleOn={this.state.isPanelToggleOn}
                    panelClick={this.panelClick}
                />
            </div>
        )
    }
};

export default hot(module)(App);