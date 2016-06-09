'use strict';

import React from 'react';

import Page from '../containers/page';

const Projects = ((props) => {
	return (
		<Page>
			<img src="/img/kisima.jpg" />
			<p>For our first project, we have decided to partner with the Ugandan non-profit agency, PresAID Uganda, and the local community of Kisima Island, on Lake Victoria, to bring safe drinking water to their residents. Here are some critical facts to know:</p>
			<ul>
				<li>Approximate population is 1,950 of which 80% are youth</li>
				<li>Every 15 seconds a child under the age of 5 dies from water-related illness.</li>
				<li>The lake water is currently used for drinking despite dangerous microbes, causing typhoid, dysentery, cholera, and other water-borne illnesses.</li>
				<li>Crocodiles (3rd most dangerous predator after hippos &amp; lions) live in Lake Victoria and have been known to each people, especially children entering the water early in the morning or late in the evening.</li>
				<li>Life expectancy: 54-55 years old</li>
			</ul>
			<p>Kisima Community Project Leader: 48 year old primary school teacher</p>
			<p>The proposed solution based on PresAID Uganda’s initial evaluation of the situation is to install a solar- powered Water Treatment System with a solar-powered pump at a cost of approx. $25,500 (which breaks down to a mere $13 per person), including not only the system installation and initialization itself, but sustainability training for local personnel, Health and Hygiene Training (to train local individuals who will then train the rest of the community), and a year of monitoring and evaluation with the assistance of PresAID Uganda. Ideally, we would like to send some or all of our team onsite during the next evaluation phase to offer professional insights to potentially improve system design for any or all of the following:</p>
			<ul>
				<li>Durability &amp; Reliability</li>
				<li>Decreased Cost</li>
				<li>Ease of Maintenance</li>
			</ul>
			<p>Once we have all agreed on the final system design, local workmen will be hired to install the system under the guidance of experienced staff from PresAID Uganda. Hopefully any system improvements we are able to recommend will be applicable to future projects undertaken by PresAID Uganda throughout the rest of the country.</p>
		</Page>
	)
});

export default Projects;