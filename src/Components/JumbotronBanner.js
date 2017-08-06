import React, { Component } from 'react';

class JumbotronBanner extends Component {

    get subheading() {
        return (<p>this.props.subheading</p>)
    }
    render() {
        return(
            <div id="TitleBanner" className="jumbotron text-center">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Welcome to {this.props.mainHeading}!</h1>
                        <h3>{this.props.subheading}</h3>
                    </div>
                </div>

            </div>)
    }
}

export default JumbotronBanner