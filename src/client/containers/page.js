'use strict';

import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Content from './content';

require('./style/page.scss');

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