'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./style/header.scss');

const Header = ((props) => {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
				<Link to="team">Team</Link>
				<Link to="projects">Projects</Link>
				<div>Donate</div>
			</nav>
		</header>
	)
});

export default Header;