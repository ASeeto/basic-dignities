'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

require('./styles.scss');

class Header extends Component {
	constructor() {
		super();
		this.state = {
			windowTop: window.scrollY
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleScroll);
	}

	handleScroll(event) {
		this.setState({
			windowTop: window.scrollY
		});
	}

	render() {
		let className = this.state.windowTop === 0 ? "hide-header-background" : "show-header-background";
		return (
			<header className={className}>
				<nav className="navbar">
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
							<li><Link className="link" to="/">Home</Link></li>
							<li><Link className="link" to="team">Team</Link></li>
							<li><Link className="link" to="projects">Projects</Link></li>
							<li><Link className="link" to="news">News</Link></li>
							<li>
								<a href="https://www.facebook.com/basicdignities/" target="_blank">
									<i className="fb-icon fa fa-facebook-square" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
};

export default Header;