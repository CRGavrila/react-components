import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { wInfo } from './utils';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

import { Button } from './Button';

storiesOf('Button', module)
    .addWithJSX(
        'with bg red',
        wInfo(`
            description

            ~~~js
            <Button>My Button</Button>
            ~~~
        `) (() => <Button bg="red">Hello</Button>),
    )
    .addWithJSX('with bg yellow', () => (
        <Button bg={text('yellow', 'green')}>Hello</Button>
    )
);
