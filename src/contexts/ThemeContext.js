import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isDarkMode: true }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>{/*All components taht fall inside this.props.children will ahve access to the value. You can only have 1 value in here though. */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;