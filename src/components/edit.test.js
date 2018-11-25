import React from 'react';
import {shallow} from 'enzyme';

import {Edit} from './edit';

describe('<Edit/>', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<Edit dispatch={callback} />);
    });
});
