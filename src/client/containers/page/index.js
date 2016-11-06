'use strict';

import React from 'react';

import Header from '../header/';
import Footer from '../footer/';
import Content from '../content/';

require('./styles.scss');

const Page = ((props) => {
	return (
		<div>
			<Header />
			<Content>
				{props.children}
			</Content>
			<Footer />
		</div>
	)
});

export default Page;