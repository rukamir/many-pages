import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import RibbonText1 from './RibbonText1';

describe("#RibbonText1", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RibbonText1 />, div);
    });

})


