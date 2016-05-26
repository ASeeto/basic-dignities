(function() {

	'use strict';

	var Header = ((props) => {
		return (
			<header>
				<div className='box left'>Donate</div>
			</header>
		)
	});

	var Content = ((props) => {
		return (
			<section>
				<div className='content'>
					<div className='contentbox'>
						<h1>Thank you for visiting. Our site is currently under construction.</h1>
						<p>
							Basic Dignities Corp is founded on the core concept that every person deserves a solid basis upon which to build their lives. This includes access to clean water, appropriate clothing & shelter, a basic education, food, and health care. Without getting involved in politics and variable social norms, we believe that these are the very least assurances that should be provided to every individual.
						</p>
						<p>
							Leveraging our team skills in civil and environmental engineering, plus fundraising, project management, and training, we intend to identify and undertake one significant project at a time to provide a sustainable, self-managed system to address one or more of these “Basic Dignities” for communities that are committed to improving the well-being for all their residents. We will consistently work in partnership with local leaders and workers with the goal of improving the local economy while introducing a customized, sustainable, and locally-maintainable system to address one or more basic dignity.
						</p>
						<p>
							If you, your church, your company, or your organization is interested in becoming involved with our current or a future project, please send us an email with the size of your group, the type of project in which you’d like to be involved (nationally or internationally), and your vision of your group’s involvement (fundraising, mission trip, planning, sharing of expertise, etc.). While we cannot make any guaranties, if your project concept fits within our mission, we’ll be glad to discuss how we can work together to build a better world for all!
						</p>
					</div>
				</div>
			</section>
		)
	});

	var Footer = ((props) => {
		return (
			<footer>
				<div className='box left'>FEIN: 81-2549201</div>
				<div className='box center'>Contact Us</div>
				<div className='box right'>Basic Dignities Corp is an authorized 501(c)(3) non-profit</div>
			</footer>
		)
	});

	var Container = ((props) => {
		return (
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		)
	});

	function render() {
		ReactDOM.render(<Container />, document.getElementById('app'));
	};

	render();

})();