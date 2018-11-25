import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from './dashboard';

describe('<Dashboard/>', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<Dashboard dispatch={callback} />);
    });
});
