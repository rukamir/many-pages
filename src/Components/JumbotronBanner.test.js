import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import JumbotronBanner from './JumbotronBanner';

describe("#JumbotronBanner", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<JumbotronBanner />, div);
    });

    it('renders with mainHeading', () => {
        const div = document.createElement('div');
        const jumbotron = shallow(<JumbotronBanner mainHeading={"Main Heading"}/>, div);

    });

})


