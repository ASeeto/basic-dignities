'use strict';

import React from 'react';
import { Link } from 'react-router';

import { email } from '../../constants/';

require('./styles.scss');

const Footer = ((props) => {
	return (
		<footer>
			<div className="col-sm-12 col-md-6 contact">
				<h4>Contact Us</h4>
				<p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a href={`mailto:${email}`}>{email}</a></p>
				<p><i className="fa fa-phone" aria-hidden="true"></i> 847.308.8120</p>
				<p><i className="fa fa-map-marker" aria-hidden="true"></i> 1318 Baylor Ct Naperville, IL 60565</p>
			</div>
			<div className="col-sm-12 col-md-6 info">
				<p>FEIN: 81-2549201</p>
				<p>Basic Dignities Corp is an authorized 501(c)(3) non-profit</p>
			</div>
			<div className="credits">
				<span><i className="fa fa-copyright" aria-hidden="true"></i> 2016 by Basic Dignities Corp</span><br />
				<span>Designed and Developed by <a target="_blank" href="http://www.alexseeto.com">Alexander Seeto</a></span>
			</div>
		</footer>
	)
});

export default Footer;