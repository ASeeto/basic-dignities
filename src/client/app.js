'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';

import Home from './containers/home/';
import Team from './containers/team/';
import Projects from './containers/projects/';
import News from './containers/news/';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
	<Router history={appHistory}>
		<Route path="/" component={Home} />
		<Route path="team" component={Team} />
		<Route path="projects" component={Projects} />
		<Route path="news" component={News} />
		<Route path="*" component={Home} />
	</Router>
), document.getElementById('app'));