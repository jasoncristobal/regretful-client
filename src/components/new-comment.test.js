import React from 'react';
import {shallow} from 'enzyme';

import {NewComment} from './new-comment';

describe('<NewComment />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<NewComment handleSubmit={callback} />);
    });
});
