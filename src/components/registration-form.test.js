import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from './registration-form';

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        const callback = jest.fn()
        shallow(<RegistrationForm handleSubmit={callback} />);
    });
});
