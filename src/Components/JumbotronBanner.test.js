import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import JumbotronBanner from './JumbotronBanner';

describe("#JumbotronBanner", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<JumbotronBanner />, div);
    });

    it('mainHeading is returned', () => {
        const div = document.createElement('div');
        const jumbotron = shallow(<JumbotronBanner mainHeading={"Main Heading"}/>, div);

        expect(jumbotron.instance().mainHeading).toBe("Main Heading")
    });

    it('subheading is returned', () => {
        const div = document.createElement('div');
        const jumbotron = shallow(<JumbotronBanner subheading={"Sub Heading"}/>, div);

        expect(jumbotron.instance().subheading).toBe("Sub Heading")
    });
})


