import React from 'react';
import {shallow} from 'enzyme';

import {Input} from './input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<Input focus={callback} />);
    });
});
