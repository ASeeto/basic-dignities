'use strict';

import React from 'react';
import Page from '../page/';

import TeamMember from '../../components/team_member/';

require('./styles.scss');

const BRITTANY = {
	description: `Brittany is an environmental engineer who specializes in water and wastewater treatment, distribution, and collection.  She attended the University of Illinois for both her bachelors and masters degree in civil and environmental engineering.  As a graduate student, she began volunteering for a local non-profit located in Uganda to bring clean water to the village.  This sparked her interest in working in the non-profit sector.  Since then, she has worked on several international projects to bring clean water to remote locations in Kenya, Uganda, Mexico and Mali.  Basic Dignities allows Brittany to pursue her passion of bringing clean water to people around the world while also working with other professionals to improve the overall quality of life for the locations in which Basic Dignities works.`,
	image: `/img/brittany.jpg`,
	name: `Brittany Sterling`,
	title: `President`
};

const MICHAEL = {
	description: `Michael is a Civil Engineer who received his bachelor's degree from Northeastern University in 2015. During his time as an undergraduate, he worked in both the public and private sector focusing mainly on roadway infrastructure projects. Today he works for Autodesk, where he tackles issues and teaches others about the software that he's been using throughout his engineering career. Despite helping people on a daily basis, he is excited about the opportunity to use his background in CAD, surveying, hydrology, and construction management to help people on a more fundamental level through Basic Dignities.`,
	image: `/img/michael.jpg`,
	name: `Michael Hurtado`,
	title: `Secretary`
};

const PATRICIA = {
	description: `Patricia has been working in the non-profit sector since 2007 when she started a Northern-Illinois organization called Normal Moments, which provides supportive services for parents with critically ill and/or medically complex children. Not content to limit her work to just her immediate community, Basic Dignities offered an opportunity to impact lives on a more national and international level. By trade, Fragen is a business consultant who teaches others how to start, run, and grow their businesses, making her a strong administrator for both Basic Dignities internal operations and as it relates to project management.`,
	image: `/img/patricia.jpg`,
	name: `Patricia Fragen`,
	title: `Treasurer`
};

const Team = ((props) => {
	return (
		<Page>
			<div id="team">
				<h1>Our Team</h1>
				<TeamMember {...BRITTANY} />
				<TeamMember {...MICHAEL} />
				<TeamMember {...PATRICIA} />
			</div>
		</Page>
	)
});

export default Team;