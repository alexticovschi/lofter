import React, { Component } from "react";
import "./DrawerToggleButton.scss";
import { HamburgerElastic } from 'react-animated-burgers';

class DrawerToggleButton extends Component {
    state = {
        isActive: false
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            isActive: nextProps.isOpen,
        };
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return (
            <div onClick={this.props.click} className="toggle-button">
                <HamburgerElastic
                    isActive={this.state.isActive} 
                    toggleButton={this.toggleButton} 
                    barColor="rgb(223, 198, 146)" />
            </div>
        );
    }
}


export default DrawerToggleButton;