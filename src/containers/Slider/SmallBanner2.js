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
		title:  <FormattedMessage id="page.landing.smallbanner2.title" />,
		description:<FormattedMessage id='page.landing.smallbanner2.description' />,
		button: <FormattedMessage id='page.landing.smallbanner2.button' />,
        image: 'https://i.imgur.com/WTlBvPV.png',
	},
];


class SmallBanner2 extends Component {

    render() {
		
		function handleClick(e) {
			e.preventDefault();
			const applogic = window.env.api.applogicUrl;
			const signUpLink = `${applogic.substring(0, applogic.length - 15)}referralreward`;
			window.location.assign(signUpLink);
		  }
		

        return (
            <div className="wrapper">
                    
                    <Slider className="smallbanner-slider-wrapper" autoplay={4000} infinite={true}>
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="smallbanner-slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="smallbanner-inner" id="Centerbanner">
									{/* {(item.image === "http://i.imgur.com/HUhlwqm.jpg" ) ? (<img style={{ height: '114px' , margin: 'auto' , }} src={spezalogo} alt="clock-Logo"/>) : null} */}
                                    <p>SPEZA</p>
                                    <p>Digital Asset</p>
                                    <p>Exchange</p>
                                    <h3>Mobile App</h3>
                                    <button onClick={handleClick}>{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        );
    }
}

export default SmallBanner2;