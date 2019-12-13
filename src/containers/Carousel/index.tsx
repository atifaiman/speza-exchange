import * as React from 'react';
import { FormattedMessage, InjectedIntlProps } from 'react-intl';
import { connect, MapStateToProps } from 'react-redux';
import { RouteProps, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import {
    RootState,
    selectCurrentLanguage,
} from '../../modules';

type Props = RouteProps & InjectedIntlProps;

const CarouselComponent: React.FC<Props> = props => {
    console.log(props);
    const [images] = React.useState([]);

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
        pauseOnHover: true,
        touchThreshold: 1000,
    };

    return (
        <div className="carousel-slider-container">
            <Slider {...settings}>
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
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider1.line1" /><br /><FormattedMessage id="page.body.carousel.slider1.line2" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider1.line3" /><br /><FormattedMessage id="page.body.carousel.slider1.line4" /></span>
                                    </p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254012-SPEZA-DAX-Public-Beta-Is-Now-Live" target="_blank" rel="noopener noreferrer"><div className="carousel-button"><FormattedMessage id="page.body.carousel.slider1.button" /></div></a>
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
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider2.line1" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider2.line2" /><br /><FormattedMessage id="page.body.carousel.slider2.line3" /></span>
                                    </p>
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
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider3.line1" /><br /><FormattedMessage id="page.body.carousel.slider3.line2" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider3.line3" /><br /><FormattedMessage id="page.body.carousel.slider3.line4" /></span>
                                    </p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360032950831-Spread-Your-Love-for-SVT" target="_blank" rel="noopener noreferrer"><div className="carousel-button"><FormattedMessage id="page.body.carousel.slider3.button" /></div></a>
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
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider4.line1" /><br /><FormattedMessage id="page.body.carousel.slider4.line2" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider4.line3" /><br /><FormattedMessage id="page.body.carousel.slider4.line4" /></span>
                                    </p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254432-Localized-Payment-Options" target="_blank" rel="noopener noreferrer"><div className="carousel-button"><FormattedMessage id="page.body.carousel.slider4.button" /></div></a>
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
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider5.line1" /><br /><FormattedMessage id="page.body.carousel.slider5.line2" /><br /><FormattedMessage id="page.body.carousel.slider5.line3" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider5.line4" /></span>
                                    </p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254092-SPEZA-Lists-NEM" target="_blank" rel="noopener noreferrer"><div className="carousel-button"><FormattedMessage id="page.body.carousel.slider5.button" /></div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-nem" />
                                </div>
                            </div>
                            <div className="carousel-content-row-3" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-banner-container" id="zero-trading-fee">
                        <div className="carousel-banner-background" />
                        <div className="carousel-banner-overlay" />
                        <div className="carousel-content-body" >
                            <div className="carousel-content-row-1" />
                            <div className="carousel-content-row-2">
                                <div className="carousel-content-col-1">
                                    <p>
                                        <span className={props.i18n === 'zh' ? 'text-light text-regular-zh' : 'text-light'}><FormattedMessage id="page.body.carousel.slider6.line1" /><br /><FormattedMessage id="page.body.carousel.slider6.line2" /><br /></span>
                                        <span className="text-bold"><FormattedMessage id="page.body.carousel.slider6.line3" /></span>
                                    </p>
                                    <a href="https://speza.zendesk.com/hc/en-us/articles/360037254092-SPEZA-Lists-NEM" target="_blank" rel="noopener noreferrer"><div className="carousel-button"><FormattedMessage id="page.body.carousel.slider6.button" /></div></a>
                                </div>
                                <div className="carousel-content-col-2">
                                    <div className="carousel-logo" id="logo-zero" />
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

const mapStateToProps: MapStateToProps<{}, {}, RootState> = state => ({
    i18n: selectCurrentLanguage(state),
});

// tslint:disable-next-line:no-any
const Carousel = withRouter(connect(mapStateToProps)(CarouselComponent) as any) as any;

export {
    Carousel,
};
