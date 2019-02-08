import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Header from '../components/common/Header';
import '../../public/css/Inter UI fonts/interui-fonts.css'

/*
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/

// Pages
storiesOf('Pages', module)
    .add('Claim Page', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('Pending Page', () => <Button onClick={action('clicked')}>Hello Button</Button>);


// Common Components
storiesOf('Common Components', module)
  .add('Header', () => <Header/>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
));




