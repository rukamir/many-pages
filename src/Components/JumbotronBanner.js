import React, { Component } from 'react';

class JumbotronBanner extends Component {

    get mainHeading() {
        return (this.props.mainHeading)
    }

    get subheading() {
        return (this.props.subheading)
    }

    render() {
        return(
            <div id="TitleBanner" className="jumbotron text-center">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>{this.props.mainHeading}</h1>
                        <h3>{this.props.subheading}</h3>
                    </div>
                </div>

            </div>)
    }
}

export default JumbotronBanner