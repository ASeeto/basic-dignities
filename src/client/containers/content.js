'use strict';

import React from 'react';

require('./style/content.scss');

const Content = ((props) => {
	return (
		<div className='content'>
			{props.children}
		</div>
	)
});

export default Content;