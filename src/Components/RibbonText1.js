import React, { Component } from 'react';

class RibbonText1 extends Component {

    get heading() {return this.props.heading}
    get body() {
        return (this.props.body.map((textBlock, i) => {
            return (
                <p key={i}>test</p>
            )
        }))
    }

    render() {
        return(
            <div id="TextRibbon1" className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        {this.heading}
                        {this.body}
                    </div>
                </div>

            </div>)
    }
}

export default RibbonText1