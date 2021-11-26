import React, { Component, createContext } from "react";

export const LanguageContext = createContext(); //This const is exported. 

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "english" }//The default language on page load
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        this.setState({ language: event.target.value });
      }

    render() {
        return (
            <LanguageContext.Provider
                value={{ ...this.state, changeLanguageFunc: this.changeLanguage /*The state and the function are exported.*/}}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;