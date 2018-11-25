import React from 'react';
import {shallow} from 'enzyme';

import {Item} from './item';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });
});
