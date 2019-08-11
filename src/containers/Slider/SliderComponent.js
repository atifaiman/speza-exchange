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
		image: 'http://i.imgur.com/HUhlwqm.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description: <FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'http://i.imgur.com/HUhlwqm.jpg',
	},
	{
		title: <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id="page.landing.slider.description" />,
		button:<FormattedMessage id="page.header.navbar.signIn" />,
		image: 'http://i.imgur.com/HUhlwqm.jpg',
	},
	{
		title:  <FormattedMessage id="page.landing.slider.title" />,
		description:<FormattedMessage id='page.landing.slider.description' />,
		button: <FormattedMessage id='page.header.navbar.signIn' />,
		image: 'http://i.imgur.com/HUhlwqm.jpg',
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
									{(item.image === "http://i.imgur.com/HUhlwqm.jpg" ) ? (<img style={{ height: '114px' , margin: 'auto' , }} src={spezalogo} alt="clock-Logo"/>) : null}
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    {/* {(item.image === "http://i.imgur.com/HUhlwqm.jpg" ) ? (<button onClick={handleClick}><img style={{float: 'left', height: '13px' , margin: 'auto' , paddingLeft: '15px',paddingTop: '2px' }} src={arrow} alt="clock-Logo"/><span style={{fontSize: '17px' , marginLeft: '-15px'}}>{item.button}</span></button>) : null} */}
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        );
    }
}

export default SliderComponent;