import React from 'react';
import {shallow} from 'enzyme';

import {List} from './list';

describe('<List />', () => {
    it('Renders without crashing', () => {
        const mistakes = [
            {
                "title" : "Picked the wrong college major",
                "description" : "x",
                "question1" : "x",
                "question2" : "x",
                "question3" : "x",
                "user" : "5bd7b255fb326a2594800125",
                "date" : "2018-10-30T23:32:08.624Z",
                "comments" : [ 
                    {
                        "_id" : "5bfbcda236141435b00d1a28",
                        "comment" : "b",
                        "date" : "2018-11-26T10:40:34.656Z"
                    }
                ],
                "__v" : 45
            }
        ]
        shallow(<List mistakes={mistakes} />);
    });
});
