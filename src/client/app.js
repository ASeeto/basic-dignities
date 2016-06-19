'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';

import Home from './components/home';
import Team from './components/team';
import Projects from './components/projects';
import Contact from './components/contact';
import Error from './components/error';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
	<Router history={appHistory}>
		<Route path="/" component={Home} />
		<Route path="team" component={Team} />
		<Route path="projects" component={Projects} />
		<Route path="contact" component={Contact} />
		<Route path="*" component={Error} />
	</Router>
), document.getElementById('app'));