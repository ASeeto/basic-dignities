'use strict';

import React, { Component } from 'react';
import Page from '../containers/page';
import cx from 'classnames';
import _ from 'lodash';

require('./style/home.scss');

class Home extends Component {
	constructor() {
		super();
		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			windowTop: window.scrollY,
			windowBottom: window.scrollY + window.innerHeight
		};
		this.updateWindow = this.updateWindow.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.updateWindow);
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.updateWindow);
		window.addEventListener('resize', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateWindow);
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindow);
		window.removeEventListener('resize', this.handleScroll);
	}

	updateWindow(event) {
		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			windowTop: window.scrollY,
			windowBottom: window.scrollY + window.innerHeight
		});
	}

	handleScroll(event) {
		let { windowWidth, windowHeight, windowTop, windowBottom } = this.state;
		let $elements = _.remove([this.refs.slide1, this.refs.slide2, this.refs.slide3], undefined);
		_.each($elements, ($element) => {
			let elementHeight = $element.clientHeight;
			let elementTop = $element.offsetTop;
			let elementBottom = elementHeight + elementTop;
			$element.className = cx({
				'animation-element': true,
				'slide-from-left': ~$element.className.indexOf('slide-from-left'),
				'slide-from-right': ~$element.className.indexOf('slide-from-right'),
				'column': true,
				'col-xs-12': true,
				'col-md-push-6': ~$element.className.indexOf('col-md-push-6'),
				'col-md-6': ~$element.className.indexOf('col-md-6'),
				'in-view': elementBottom >= windowTop && elementTop <= windowBottom
			});
		});
	}

	render() {
		let p1 = `Basic Dignities Corp is founded on the core concept that every person deserves a solid basis upon which to build their lives. This includes access to clean water, appropriate clothing & shelter, a basic education, food, and health care. Without getting involved in politics and variable social norms, we believe that these are the very least assurances that should be provided to every individual.`;
		let p2 = `Leveraging our team skills in civil and environmental engineering, plus fundraising, project management, and training, we intend to identify and undertake one significant project at a time to provide a sustainable, self-managed system to address one or more of these "Basic Dignities" for communities that are committed to improving the well-being for all their residents. We will consistently work in partnership with local leaders and workers with the goal of improving the local economy while introducing a customized, sustainable, and locally-maintainable system to address one or more basic dignity.`;
		let p3 = `If you, your church, your company, or your organization is interested in becoming involved with our current or a future project, please send us an email with the size of your group, the type of project in which you'd like to be involved (nationally or internationally), and your vision of your group's involvement (fundraising, mission trip, planning, sharing of expertise, etc.). While we cannot make any guaranties, if your project concept fits within our mission, we'll be glad to discuss how we can work together to build a better world for all!`;
		return (
			<Page>
				<div id="main">
					<div className="text-container">
						<p>Every person deserves a solid basis upon which to build their lives.</p>
					</div>
				</div>
				<div id="about">
					<div className="row">
						<div ref="slide1" className="animation-element slide-from-left column col-xs-12 col-md-6">
							<img className='about-img' src='img/slider1.jpg' />
						</div>
						<div className="column col-xs-12 col-md-6">
							<div className="text-container">
								<span className="title">Who We Are</span>
								<p>{p1}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div ref="slide2" className="animation-element slide-from-right column col-xs-12 col-md-push-6">
							<img className='about-img' src='img/slider4.jpg' />
						</div>
						<div className="column col-xs-12 col-md-pull-6">
							<div className="text-container">
								<span className="title">What We Do</span>
								<p>{p2}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div ref="slide3" className="animation-element slide-from-left column col-xs-12 col-md-6">
							<img className='about-img' src='img/slider6.jpg' />
						</div>
						<div className="column col-xs-12 col-md-6">
							<div className="text-container">
								<span className="title">Work With Us</span>
								<p>{p3}</p>
							</div>
						</div>
					</div>
				</div>
			</Page>
		)
	}
};

export default Home;