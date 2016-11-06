'use strict';

import React, { Component } from 'react';
import Page from '../page/';

require('./styles.scss');

const News = ((props) => {
	const YOUTUBE = `
		<iframe width="476" height="268" src="https://www.youtube.com/embed/xkey957KSSk" frameborder="0" allowfullscreen></iframe>
	`;
	return (
		<Page>
			<div id="news">
				<h1>News</h1>
				<div className="row">
					<div className="iframe-wrapper" dangerouslySetInnerHTML={{__html:YOUTUBE}}></div>
				</div>
			</div>
		</Page>
	);
});

export default News;