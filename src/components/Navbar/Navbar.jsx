import React, { Component } from 'react'

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";


class Navbar extends Component {

    state = {
        sideDrawerOpen: false
    };


    drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };
    
    render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
    
        return (
          <div>
            <Toolbar isOpen={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
        );
    }
    
}

export default Navbar;