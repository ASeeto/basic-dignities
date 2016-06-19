'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';

import Home from './components/home';
import Team from './components/team';
import Projects from './components/projects';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
	<Router history={appHistory}>
		<Route path="/" component={Home} />
		<Route path="team" component={Team} />
		<Route path="projects" component={Projects} />
		<Route path="*" component={Home} />
	</Router>
), document.getElementById('app'));