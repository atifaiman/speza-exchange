import * as React from 'react';
import { RouteProps, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import Slider3 from './accepting-dcep.png';
import Slider1 from './blockchain-summit-bg.png';
import Slider2 from './invite-friends.png';

const CarouselComponent: React.FC<RouteProps> = () => {
    const [images] = React.useState([
        Slider1,
        Slider2,
        Slider3,
    ]);

    const settings = {
        customPaging: (i: number) => {
            return (
                <div>
                    <div className="carousel-thumb-hover" />
                    <div style={{ backgroundImage: `url(${images[i]})` }} className="carousel-thumb" />
                </div>

            );
        },
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        draggable: true,
        adaptiveHeight: true,
        dotsClass: 'slick-dots',
    };

    return (
        <div className="carousel-slider-container">
            <Slider {...settings}>
                {/* tslint:disable-next-line */}
                {/* <div>
                    <div className="carousel-banner-container" id="blockchain-summit">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>Offshore Exchange License<br />Issuer SPEZA leading the panel on<br /><span>World Blockchain<br />Summit in Malaysia</span></p>
                                    <Link to="https://www.google.com" className="carousel-button">Get started</Link>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo1-wbs" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="invite-friends">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <div id="friends-logo-content">
                                        <div className="carousel-logo" id="logo1-friends" />
                                        <p><span>Invite your friends</span><br />to register an account with<br />Speza Exchange</p>
                                    </div>
                                    <Link to="https://www.google.com" className="carousel-button">Get started</Link>
                                </div>
                                <div className="carousel-content-col-2">
                                    <p>and both of<br />you will receive up to<br /><span id="svt-highlight">15 SVT!</span></p>
                                </div>
                            </div>
                            <div className="carousel-content-row-3">
                                <p>* Log in to get your exclusive referral link to share with your friends</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="accepting-dcep">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <div id="container-logo1-speza-globe" >
                                        <div className="carousel-logo" id="logo1-speza-globe" />
                                    </div>
                                    <Link to="https://www.google.com" className="carousel-button">Get started</Link>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo1-dcep" />
                                    <p><span>SPEZA Accepting DCEP</span><br />World's First Sovereign Digital Currency</p>
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div> */}
                <div>
                    <div className="carousel-banner-container" id="dax-public-beta">
                        {/* tslint:disable-next-line */}
                        {/* <div className="carousel-banner-background-new" />
                        <div className="carousel-banner-slider-new" />
                        <div className="carousel-banner-overlay-new">
                            <div className="overlay-left" />
                            <div className="overlay-right" />
                        </div>
                        <div className="carousel-content-body-new" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>Offshore Exchange License<br />Issuer SPEZA leading the panel on<br /><span>World Blockchain<br />Summit in Malaysia</span></p>
                                    <Link to="https://www.google.com" className="carousel-button">Get started</Link>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo1-wbs" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div> */}
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>SPEZA Digital Asset Exchange<br />Public Beta is now open for trading<br /><span>SPEZA DAX<br />Public Beta Is Now Live</span></p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254012-SPEZA-DAX-Public-Beta-Is-Now-Live" target="_blank" rel="noopener noreferrer"><div className="carousel-button">Get Started</div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-beta" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="introduce-svt">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>Coming Soon<br /><span>Introducing the <br />SPEZA Vision Token</span></p>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-svt" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="spread-love">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>Invite your friends and<br />earn up to 15 SVT<br /><span>Spread your love<br />for SVT</span></p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360032950831-Spread-Your-Love-for-SVT" target="_blank" rel="noopener noreferrer"><div className="carousel-button">Get Started</div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-love" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="localised-payment">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>Utilize your local bank to purchase Digital<br />Assets using Bank-to-Bank Transfers<br /><span>Localized Payment<br />Options</span></p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254432-Localized-Payment-Options" target="_blank" rel="noopener noreferrer"><div className="carousel-button">Get Started</div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-transfer" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="nem-listing">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>SPEZA Digital Asset Exchange<br />have listed XEM Token and now<br /> it's available to trade<br /><span>SPEZA Lists NEM</span></p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254092-SPEZA-Lists-NEM" target="_blank" rel="noopener noreferrer"><div className="carousel-button">Get Started</div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-nem" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

// tslint:disable-next-line:no-any
const Carousel = withRouter(CarouselComponent as any) as any;

export {
    Carousel,
};
