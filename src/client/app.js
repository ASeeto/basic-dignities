'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import Main from './containers/main';
import About from './containers/about';
import Error from './containers/error';

ReactDOM.render((
	<Router>
		<Route path="/" component={Main} />
		<Route path="about" component={About} />
		<Route path="*" component={Error} />
	</Router>
), document.getElementById('app'));