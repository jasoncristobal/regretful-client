import React from 'react';
import {shallow} from 'enzyme';

import {List} from './list';

describe('<List />', () => {
    it('Renders without crashing', () => {
        shallow(<List />);
    });
});
