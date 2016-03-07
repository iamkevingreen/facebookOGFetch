import React from 'react'
import {mount} from 'react-mounter'

import {App} from './app.jsx'
import {Index} from './views/index/index.jsx'

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Index />
    });
  }
});
