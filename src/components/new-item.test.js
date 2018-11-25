import React from 'react';
import {shallow} from 'enzyme';

import {NewItem} from './new-item';

describe('<NewItem />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<NewItem handleSubmit={callback} />);
    });
});
