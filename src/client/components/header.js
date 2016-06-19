'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./style/header.scss');

const Header = ((props) => {
	return (
		<header>
			<nav className="navbar">
				<div id="logo">
					<img src="http://placehold.it/150x50" />
				</div>
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<div id="donate">
					<form action="https://secure.ibcgateway.com/cart/cart.php" method="POST">
						<input type="hidden" name="key_id" value="6927325" />
						<input type="hidden" name="action" value="process_variable" />
						<input type="hidden" name="order_description" value="Donate" />
						<input type="hidden" name="language" value="en" />
						<input type="hidden" name="url_finish" value="http://www.basicdignities.org/" />
						<input type="hidden" name="customer_receipt" value="true" />
						<input type="hidden" name="hash" value="action|order_description|c674a193db8f3b1fd200ece6334d70df" />
						<input type="submit" name="submit" value="Donate Now!" />
					</form>
				</div>
				<div id="nav" className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="team">Team</Link></li>
						<li><Link to="projects">Projects</Link></li>
					</ul>
				</div>
			</nav>
		</header>
	)
});

export default Header;