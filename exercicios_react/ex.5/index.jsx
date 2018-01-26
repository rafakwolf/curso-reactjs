/*jshint ignore:start */

import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Wolf'>
        <Member name='Rafael' />
        <Member name='Aline' />
        <Member name='Maria' />
        <Member name='Olivia' />
    </Family>, 
  document.getElementById('app'));

/*jshint ignore:end */