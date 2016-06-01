'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./style/footer.scss');

const Footer = ((props) => {
	return (
		<footer>
			<div className='box left'>FEIN: 81-2549201</div>
			<div className='box center'><Link to="/contact">Contact Us</Link></div>
			<div className='box right'>Basic Dignities Corp is an authorized 501(c)(3) non-profit</div>
		</footer>
	)
});

export default Footer;