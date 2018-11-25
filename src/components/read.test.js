import React from 'react';
import {shallow} from 'enzyme';

import {Read} from './read';

describe('<Read />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<Read dispatch={callback} />);
    });
});
