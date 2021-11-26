import React, { Component } from "react"
import '../styles/PageContentStyles.css';

class PageContent extends Component {
    render() {
        return (
            <div className="PageContent">
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;