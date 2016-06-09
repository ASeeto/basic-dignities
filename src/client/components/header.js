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
				<div>
					<form action="https://secure.ibcgateway.com/cart/cart.php" method="POST">
						<input type="hidden" name="key_id" value="6927325" />
						<input type="hidden" name="action" value="process_variable" />
						<input type="hidden" name="order_description" value="Donate" />
						<input type="hidden" name="language" value="en" />
						<input type="hidden" name="url_finish" value="http://www.basicdignities.org/" />
						<input type="hidden" name="customer_receipt" value="true" />
						<input type="hidden" name="hash" value="action|order_description|c674a193db8f3b1fd200ece6334d70df" />
						<input type="submit" name="submit" value="Donate" />
					</form>
				</div>
			</nav>
		</header>
	)
});

export default Header;