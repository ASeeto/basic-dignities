'use strict';

import React from 'react';

import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

require('./style/main.scss');

const Main = ((props) => {
	return (
		<div>
			<Header />
			<Content />
			<Footer />
		</div>
	)
});

export default Main;