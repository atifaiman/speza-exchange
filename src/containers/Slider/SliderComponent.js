import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import arrow from './arrow.png';
import spezalogo from './Speza.svg';
import {
    FormattedMessage,
} from 'react-intl';
import { publicDecrypt } from 'crypto';
////i.imgur.com/yhgdXUH.jpg
const content = [
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/yhgdXUH.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'https://i.imgur.com/Kn8HXTg.png',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id="page.landing.slider.description" />,
		button:<FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/XzMbJFN.png',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/yhgdXUH.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'https://i.imgur.com/Kn8HXTg.png',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id="page.landing.slider.description" />,
		button:<FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/XzMbJFN.png',
	},
];

class SliderComponent extends Component {

	Fb = () => {
		window.open('https://www.facebook.com/spezaworld', '_blank');
	};
	 Li = () => {
		window.open('https://www.linkedin.com/company/speza', '_blank');
	};
	Ms = () => {
		window.open('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F356791751702540%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink', '_blank');
	};

    render() {

		function handleClick(e) {
			e.preventDefault();
			const applogic = window.env.api.applogicUrl;
			const signUpLink = `${applogic.substring(0, applogic.length - 15)}referral`;
			window.location.assign(signUpLink);
		  }

        return (
				<div className="wrapper">
						
					<Slider className="slider-wrapper" autoplay={6000} infinite={true}>
						{content.map((item, index) => (
							<div
								key={index}
								className="slider-content ffff"
								style={{ backgroundImage: `url('${item.image}')` , backgroundRepeat: 'no-repeat', width: '100%' , height: '100%'}}
							>
								<div className="inner">
									{/* <div className={(item.image === "https://i.imgur.com/d7tw39d.png") ? 'SliderInvite' : (item.image === "https://i.imgur.com/bxZVVtJ.png") ? 'SliderSino' : (item.image === "https://i.imgur.com/aJtX0t5.jpg") ? 'SliderSummit' : 'kk'} > */}
									<div className={(item.image === "https://i.imgur.com/yhgdXUH.jpg") ? 'SliderInvite' : (item.image === "https://i.imgur.com/Kn8HXTg.png") ? 'SliderSino' : (item.image === "https://i.imgur.com/XzMbJFN.png") ? 'SliderSummit' : 'kk'} >
										{/* {(item.image === "https://i.imgur.com/Qds1jAs.jpg" ) ? (<img style={{ margin: 'auto' , }} className="bannerimg" src={spezalogo} alt="clock-Logo"/>) : null}
											<h3>{item.title}</h3>
											<p>{item.description}</p> 
											<button>{item.button}</button>
										*/}
											{/* <div id="SliderSinoContent">
												<h3>SINO-PHIL ECONOMIC ZONE</h3>
												<p>DAX MANAGEMENT</p>	
											</div>
											<div id="SliderInviteContentLeft">
													<h3>Invite your friends</h3>
													<p>to register an account with</p>
													<p>Speza Exchange </p>	
											</div>
											<div id="SliderInviteContentRight">
												<p>and both of you</p>
												<p>will receive up to</p>
												<h3>15 MGT for free</h3>
											</div>
											<div id="SliderSummitContentLeft">
												<p>Offshore Exchange</p>
												<p>License Issuer SPEZA</p>
												<p>leading the panel on</p>
											</div>
											<div id="SliderSummitContentRight">
												<h3>World Blockchain</h3>
												<h3>Summit in Malaysia</h3>
											</div> */}
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
        );
    }
}

export default SliderComponent;