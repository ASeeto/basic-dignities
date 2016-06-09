'use strict';

import React from 'react';
import Slider from 'react-slick';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = ((props) => {
	var settings = {
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		mobileFirst: true,
	};
	return (
		<div>
			<Header />
			<div style={{width: '100wh'}}>
				<Slider {...settings}>
					<div className="slide" style={{backgroundImage: "url('/img/slider1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="slide" style={{backgroundImage: "url('/img/slider2.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="slide" style={{backgroundImage: "url('/img/slider3.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="slide" style={{backgroundImage: "url('/img/slider4.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="slide" style={{backgroundImage: "url('/img/slider5.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="slide" style={{backgroundImage: "url('/img/slider6.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
				</Slider>
			</div>
			<Footer />
		</div>
	)
});

export default Home;