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
		title:  <FormattedMessage id="page.landing.smallbanner1.title" />,
		description:<FormattedMessage id='page.landing.smallbanner1.description' />,
		button: <FormattedMessage id='page.landing.smallbanner1.button' />,
        image: 'https://i.imgur.com/hyIQ8K7.png',
	},
];

function handleClick(e) {
    e.preventDefault();
    const applogic = window.env.api.applogicUrl;
    const signUpLink = `${applogic.substring(0, applogic.length - 15)}referralreward`;
    window.location.assign(signUpLink);
  }

class SmallBanner1 extends Component {
    // constructor(){
    //     super();
    //     let btn = document.getElementById("coolbutton");
    //     btn.addEventListener("click", (e) => this.handleClick());
    // }

    render() {
		
		

        return (
            <div className="wrapper">
                    
                    <Slider className="smallbanner-slider-wrapper" autoplay={4000} infinite={true}>
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="smallbanner-slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` , borderRadius:'3px' }}
                            >
                                <div className="smallbanner-inner" id="Leftbanner">
									{/* {(item.image === "http://i.imgur.com/HUhlwqm.jpg" ) ? (<img style={{ height: '114px' , margin: 'auto' , }} src={spezalogo} alt="clock-Logo"/>) : null} */}
                                    <p>Spread</p>
                                    <p>Your Love for</p>
                                    <h3>SVT</h3>
                                    {/* <input type="button" value="Click" id="coolbutton"></input> */}
                                    <button id="LeftB" onClick={handleClick}>{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        );
    }
}

export default SmallBanner1;