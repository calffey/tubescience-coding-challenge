import React, { Component } from 'react';

const withData = (WrappedComponent) => {
    class WithData extends Component {
        constructor(props){
            super(props);
            this.state = {
                isToggleOn: true,
                isPanelToggleOn: false,
                headerData: [],
                contentA: "",
                contentB: "",
            }

            this.handleClick = this.handleClick.bind(this);
            this.panelClick = this.panelClick.bind(this);

        }

        componentDidMount(){
            fetch('data.json')
            .then(res => res.json())
            .then(data => this.setState({
                headerData: data.headerData,
                contentA: data.contentA,
                contentB: data.contentB
            }))
        }

        handleClick(){
            this.setState( state => ({
                isToggleOn: !state.isToggleOn,
            }));
        }

        panelClick(){
            this.setState( state => ({
                isPanelToggleOn: !state.isPanelToggleOn
            }));
        }
         
        render() {
            return <WrappedComponent 
                        {...this.state}
                        handleClick={this.handleClick}
                        panelClick={this.panelClick}
                    />
        }
    }
    return WithData
}

export default withData;
