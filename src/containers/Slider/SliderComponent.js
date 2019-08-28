import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import arrow from './arrow.png';
import spezalogo from './Speza.svg';
import {
    FormattedMessage,
} from 'react-intl';

const content = [
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/4sJuogv.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'https://i.imgur.com/2GLC9X9.jpg',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id="page.landing.slider.description" />,
		button:<FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/odooe9c.jpg',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/4sJuogv.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'https://i.imgur.com/2GLC9X9.jpg',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id="page.landing.slider.description" />,
		button:<FormattedMessage id="page.header.navbar.signIn" />,
		image: 'https://i.imgur.com/odooe9c.jpg',
	},
];


class SliderComponent extends Component {

    render() {
		
		function handleClick(e) {
			e.preventDefault();
			const applogic = window.env.api.applogicUrl;
			const signUpLink = `${applogic.substring(0, applogic.length - 15)}referralreward`;
			window.location.assign(signUpLink);
		  }
		

        return (
            <div className="wrapper">
                    
                    <Slider className="slider-wrapper" autoplay={4000} infinite={true}>
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
									 <div className={(item.image === "https://i.imgur.com/4sJuogv.jpg") ? 'SliderInvite' : (item.image === "https://i.imgur.com/2GLC9X9.jpg") ? 'SliderSino' : (item.image === "https://i.imgur.com/odooe9c.jpg") ? 'SliderSummit' : 'kk'} >
										{/* {(item.image === "https://i.imgur.com/Qds1jAs.jpg" ) ? (<img style={{ margin: 'auto' , }} className="bannerimg" src={spezalogo} alt="clock-Logo"/>) : null}
                                    		<h3>{item.title}</h3>
											<p>{item.description}</p> */}
											<div id="SliderSinoContent">
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
											</div>
											
											

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