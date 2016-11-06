'use strict';

import React from 'react';

require('./styles.scss');

const Team = ((props) => {
	return (
		<div className="team-row">
			<div className="row">
				<div className="col-md-4">
					<img src={props.image} />
				</div>
				<div className="col-md-8">
						<p className="name">{props.name}</p>
						<p className="title">{props.title}</p>
						<p className="description">{props.description}</p>
				</div>
			</div>
		</div>
	)
});

Team.PropTypes = {
	description: React.PropTypes.string,
	image: React.PropTypes.string,
	name: React.PropTypes.string,
	title: React.PropTypes.string
};

Team.defaultProps = {
	description: "",
	image: "",
	name: "",
	title: ""
};

export default Team;