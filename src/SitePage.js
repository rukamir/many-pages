import React, { Component } from 'react';
import JumbotronBanner from './Components/JumbotronBanner';
import RibbonText1 from './Components/RibbonText1';

class SitePage extends Component {

    get allComponents() {
        return (this.props.sections.map( (elem, i) => {
            let componentBluePrint = {
                "RibbonText1" : <RibbonText1 heading={elem.heading} body={elem.body}/>,
                "JumbotronBanner" : <JumbotronBanner mainHeading={elem.mainHeading} subheading={elem.subheading} />
            }
            return componentBluePrint[elem.moduleType]
        }))
    }

    render() {
        return (
            <div>
                {this.allComponents}
            </div>
        )
    }
}

export default SitePage;