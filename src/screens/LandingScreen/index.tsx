import * as React from 'react';
import Iframe from 'react-iframe';
import { FormattedHTMLMessage ,FormattedMessage  } from 'react-intl';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import QuickBuy from '../../containers/QuickBuy/QuickBuy';
// import { MasterCard } from '../../containers';

import { Carousel } from '../../containers/Carousel';
import News from '../../containers/Header/newsHeadline';
// // import MasterCardComponent from '../../containers/Mastercard/MasterCard';
// import MobileSliderComponent from '../../containers/Slider/MobileSliderComponent';
// import SliderComponent from '../../containers/Slider/SliderComponent';


/*
import SmallBanner1 from '../../containers/Slider/SmallBanner1';
import SmallBanner2 from '../../containers/Slider/SmallBanner2';
import SmallBanner3 from '../../containers/Slider/SmallBanner3';
*/
import { setDocumentTitle } from '../../helpers';

const ThreeBanners: React.FC = () => {
    return (
    <div className="container_banners" style={{minWidth:'1200px'}}>
        <div className="three-banner-container" >
            <div className="three-banner-item" id="banner-1">
                <div className="three-banner-background" />
                <div className="three-banner-overlay-container">
                    <div className="three-banner-overlay-image" />
                </div>
                <div className="three-banner-content">
                    <div className="content-col-1">
                        <div className="content-logo" />
                    </div>
                    <div className="content-col-2">
                        <div className="content-row-1">
                            <p>List your Tokens on<br /><span>SPEZA Digital Asset Exchange</span></p>
                        </div>
                        <div className="content-row-2">
                            <div className="content-button">Get Started</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="three-banner-item" id="banner-2">
                <div className="three-banner-background" />
                <div className="three-banner-overlay-container">
                    <div className="three-banner-overlay-image" />
                </div>
                <div className="three-banner-content">
                    <div className="content-col-1">
                        <div className="content-logo" />
                    </div>
                    <div className="content-col-2">
                        <div className="content-row-1">
                            <p><span>SPEZA</span><br />Partner Recruitment Program</p>
                        </div>
                        <div className="content-row-2">
                            <div className="content-button">Get Started</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="three-banner-item" id="banner-3">
                <div className="three-banner-background" />
                <div className="three-banner-overlay-container">
                    <div className="three-banner-overlay-image" />
                </div>
                <div className="three-banner-content">
                    <div className="content-col-1" />
                    <div className="content-col-2">
                    <div className="content-row-1">
                        <div id="logo-speza-wallet" />
                        <p>Revolutionizing Payments</p>
                    </div>
                        <div className="content-row-2">
                            <div className="content-button">Get Started</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};


class LandingComponent extends React.Component<RouterProps> {


    public componentDidMount() {
        // if (window.localStorage)
        // {
        //   if (!localStorage.getItem('firstLoad'))
        //   {
        //     localStorage['firstLoad'] = true;
        //     window.location.reload();
        //   }
        //   else
        //     localStorage.removeItem('firstLoad');
        // }
        setDocumentTitle('Home');
    }

    public Fb = () => {
        window.open('https://www.facebook.com/spezaworld', '_blank');
    };
    public Li = () => {
        window.open('https://www.linkedin.com/company/speza', '_blank');
    };
    public Ms = () => {
        window.open('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F356791751702540%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink', '_blank');
    };
    public Tl = () => {
        window.open('https://t.me/SPEZAWorld', '_blank');
    };
    public In = () => {
        window.open('https://www.instagram.com/spezaworld/', '_blank');
    };
    public goBack = () => {
        this.props.history.goBack();
    };
    public goReff = () => {
        const url = `${window.env.api.tradeUrl.substring(0,window.env.api.tradeUrl.length - 13)}referral/`;
        window.open(url, '_self');
    };
    public handleClick1 = () => {
         window.open('https://speza.zendesk.com/hc/en-us/articles/360032950831-Spread-Your-Love-for-SVT', '_blank');
    };

    public handleClick2 = () => {
         window.open('https://play.google.com/store/apps/details?id=com.exchange.speza&hl=en', '_blank');
    };

    public handleClick3 = () => {
         window.open('https://speza.zendesk.com/hc/en-us/articles/360032597872-Launch-Your-Own-Digital-Asset-Token-Offering', '_blank');
    };
    public handleClick4 = () => {
        // window.open('http://google.com', '_blank');
    };
    public handleClick5 = () => {
        const url = `${window.env.api.tradeUrl.substring(0,window.env.api.tradeUrl.length - 13)}trading/`;
        window.open(url, '_blank');
    };
    public render() {
        return (
            <div className="pg_landing">
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Carousel/>
            </div>
            <div className="row container_banners" style={{height:'200px'}} >
                <div id="Samplebar"/>
                <div id="SamplebarMobile"/>
            </div>
            <div className="row" style={{background:'#FEFEFE'}}>
            <div className="bannerThreeSlider">
                <div className="row bannerThreeSpace">
                    <div className="container_banners" style={{display: 'none'}}>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4 bannerOne ThreeBannerLeft smallbannerMobile" style={{ paddingBottom:'7%' ,cursor:'pointer', borderRadius:'10px' }}>
                                <div id="Leftbanner">
                                    <p>Spread</p>
                                    <p>Your Love for</p>
                                    <h3>SVT</h3>
                                    <button id="LeftB" onClick={this.handleClick1}>sads</button>
                                </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4  bannerTwo ThreeBannerCenter smallbannerMobile" style={{ paddingBottom:'7%' ,cursor:'pointer', borderRadius:'10px'}} >
                            <div id="Centerbanner">
                                    <p>SPEZA</p>
                                    <p>Digital Asset</p>
                                    <p>Exchange</p>
                                    <h3>Mobile App</h3>
                                    <button onClick={this.handleClick1}>asdasd</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4  ThreeBannerRight smallbannerMobile" style={{paddingBottom:'7%',cursor:'pointer', borderRadius:'10px'}}>
                            <div id="Rightbanner" >
                                    <p>Launch Your Own</p>
                                    <h3>Digital Asset Token Offering</h3>
                                    <button onClick={this.handleClick1}>aasd</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row" style={{background:'#FEFEFE', display: 'none'}} >
                <div className="container_banners" style={{minWidth:'1200px'}}>
                    <div className="col-xl-4 col-md-4 col-l-4 col-sm-12"  style={{ paddingLeft: '0'}}>
                        <div className="col-12 ThreeBannerLeft ThreebannersMobile" style={{ borderRadius:'10px' }}>
                            <div className="ThreeBanner_TextContainer" id="Leftbanner">
                                <div className="TopSegment">
                                    <p style={{ lineHeight: 1.3, fontWeight: 300 }}>Spread <br/>Your Love for</p>
                                    <p style={{ fontWeight: 700, fontSize: 40, fontStyle: 'italic' }}>SVT</p>
                                </div>
                                <div className="BottomSegment">
                                    <input type="button" value="Get Started" className="Button" onClick={this.handleClick1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-l-4 col-sm-12" style={{ paddingRight: '1px', paddingLeft: '1px'}}>
                        <div className="col-12 ThreeBannerCenter ThreebannersMobile" style={{borderRadius:'10px'}} >
                            <div className="ThreeBanner_TextContainer" id="Centerbanner">
                                <div className="TopSegment">
                                    <p style={{ lineHeight: 1.3, fontWeight: 300 }}>SPEZA<br/> Digital Asset<br/> Exchange</p>
                                    <p style={{ fontWeight: 900, fontStyle: 'italic' }}>Mobile App</p>
                                </div>
                                <div className="BottomSegment">
                                    <input type="button" value="Get Started" className="Button" onClick={this.handleClick2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-l-4 col-sm-12"  style={{ paddingRight: '0'}}>
                        <div className="col-12  ThreeBannerRight ThreebannersMobile" style={{ borderRadius:'10px'}}>
                            <div className="ThreeBanner_TextContainer" id="Rightbanner" >
                                <div className="TopSegment">
                                    <p style={{ lineHeight: 1, fontWeight: 300, marginBottom: 0 }}>Launch Your Own</p>
                                    <p style={{ fontWeight: 900, fontStyle: 'regular', lineHeight: 1.3 }}>Digital Asset Token<br/> Offering</p>
                                </div>
                                <div className="BottomSegment">
                                    <input type="button" value="Learn More" className="Button" onClick={this.handleClick3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{background:'#FEFEFE'}} >
                <ThreeBanners />
            </div>
            <div>
                <div className="row container_banners" >
                    <News/>
                </div>
            </div>
            <div className="row">
                <div id="SlideGraph"/>
            </div>
            <div className="row" style={{background:'#FAFAFA'}}>
                <div id="Markets" className="MarketComponent container_banners" style={{borderRadius:'5px'}}/>
            </div>
            <div className="row" style={{background:'#FEFEFE'}} >
            <div className="container_banners">
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12">
                    <div className="col-12 ThreeBannerLeft ThreebannersMobileButtomPage" style={{ borderRadius:'10px' }}>
                        <div className="ThreeBanner_TextContainer" id="Leftbanner">
                            <div className="TopSegment">
                                <p style={{ lineHeight: 'normal', fontWeight: 300 }}>Spread <br/>Your Love for</p>
                                <p style={{ fontWeight: 700, fontSize: 40, fontStyle: 'italic', lineHeight: 'normal'}}>SVT</p>
                            </div>
                            <div className="BottomSegment">
                                <input type="button" value="Get Started" className="Button" onClick={this.handleClick1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12">
                    <div className="col-12 ThreeBannerCenter ThreebannersMobileButtomPage" style={{borderRadius:'10px'}} >
                        <div className="ThreeBanner_TextContainer" id="Centerbanner">
                            <div className="TopSegment">
                                <p style={{ lineHeight: 'normal', fontWeight: 300 }}>SPEZA <br/>Digital Asset<br/> Exchange</p>
                                <p style={{ fontWeight: 900,fontStyle: 'italic' ,lineHeight: 'normal' }}>Mobile App</p>
                            </div>
                            <div className="BottomSegment">
                                <input type="button" value="Get Started" className="Button" onClick={this.handleClick2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12"  >
                    <div className="col-12  ThreeBannerRight ThreebannersMobileButtomPage" style={{ borderRadius:'10px'}}>
                        <div className="ThreeBanner_TextContainer" id="Rightbanner" >
                            <div className="TopSegment">
                                <p style={{ lineHeight: 'normal', fontWeight: 300, marginBottom: 0 }}>Launch Your Own</p>
                                <p style={{ fontWeight: 900, lineHeight: 'normal', fontStyle: 'regular'}}>Digital Asset Token<br/> Offering</p>
                            </div>
                            <div className="BottomSegment">
                                <input type="button" value="Learn More" className="Button" onClick={this.handleClick3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div style={{background:'#FEFEFE'}}>
            <div className="row container_banners">
            <div className="row buttomGraph_Banner">
    <div className="" onClick={this.handleClick4} style={{cursor:'pointer' , width: '49%' , marginLeft: '-1%'}}>
        <div className="row quikBuySize"  style={{height:'100%'}}>
            <div className="col-xl-11 col-md-11 col-l-11 col-sm-12  quickBuyBanner">
                <div className="ComingSoonTag"><img className="ComingSoonTagimg" src={require('./coming soon tag.png')}/></div>
                <img src={require('./banner_trading_icon.png')}  className="buttomGraph_BannerImage"/>
                <div className="buttomGraph_BannerData">
                    <h1>Quick Buy</h1>
                    <p>Your simple access to crypto</p>
                </div>
            </div>
        </div>
    </div>
    <div className="" onClick={this.handleClick5} style={{cursor:'pointer' ,width: '48%' , marginRight: '-2%'}}>
        <div className="row tradeBannerSize" style={{height:'100%'}}>
            <div className="col-xl-11 col-md-11 col-l-11 col-sm-12 tradeBanner">
                <div><img src={require('./banner_quick buy_icon.png')} className="buttomGraph_BannerImage"/></div>
                    <div className="buttomGraph_BannerData">
                        <h1>Trading</h1>
                        <p>Unlock the power of Digital Assets</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
            <div className="row landpage-Banners" style={{ background:'#141622' , display:'none'}}>
                <div className="col-12 container_banners">
                <div style={{}}>
                <div className="row" style={{ color: '#fff'}}>
                    <div className="col-xl-4 col-md-12 col-l-4 col-sm-12"  style={{margin: 'auto' }}>
                    <div className="row">
                        <div  style={{ display:'flex' , flexFlow:'column' , paddingBottom:'40px'}} className="stayConnected">
                        <h3 style={{fontSize:'48px', paddingTop: '15%' , margin: '0' , textAlign: 'left'}}><FormattedMessage id="page.landing.paneldark.col1.title"/></h3>
                        <p  style={{fontSize:'14px', maxWidth:'400px'}}><FormattedMessage id="page.landing.paneldark.col1.description"/></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-5 col-md-12 col-l-5 col-sm-12"  style={{margin:'auto' , padding:'25px'}}>
                    <div className="row" style={{height: '360px'}}>
                    <div className="grpelem shared_content" id="u192093" data-content-guid="u192093_content"  style={{margin: 'auto' , height: '360px'}}>
                        <Iframe id="JotFormIFrame-91061490714453"  url="https://form.jotform.me/92692324063457"  scrolling="no" className="StayConnectedForm"/>
                    </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-md-12 col-l-3 col-sm-12" style={{margin:'auto'}}>
                    <div className="row" style={{  height:'100px' }} >
                        <div style={{  margin:'auto' , display:'flex' }}>
                             <div id="Fb" onClick={this.Fb} style={{ height:'30px' ,width:'15px' , margin:'0 10px', padding:'0 10px'}}/>
                             <div id="Li" onClick={this.Li} style={{ height:'30px' ,width:'30px' , margin:'0 10px', padding:'0 15px'}}/>
                             <div id="Ms" onClick={this.Ms} style={{ height:'30px' ,width:'30px' , margin:'0 10px', padding:'0 15px'}}/>
                             <div id="Tl" onClick={this.Tl} style={{ height:'24px' ,width:'30px' , margin:'0 10px', padding:'0 15px'}}/>
                             <div id="In" onClick={this.In} style={{ height:'27px' ,width:'27px' , margin:'0 10px', padding:'0 15px'}}/>
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="landpage-Banners">
            <div className="spezaButtomBanner" style={{ background:'#212328'}}>
                <div className="row">
                    <div className="row container_banners" style={{maxHeight:'400px'}}>
                        <div className="col-5" style={{height:'400px' , background:'#212328', display:'flex'}}>
                            <div style={{margin:'110px -10px', display:'flex' , flexDirection:'column' , textAlign:'left' , lineHeight:'12px'}} >
                                <img src={require('./Speza_logo_full_beta.gif')} style={{ height:'55px', marginBottom:'-10px'}}/>
                                <h3 style={{fontSize:'14px' , color:'#fff' , marginTop:'30px', fontWeight:'bold'}}>HAVE QUESTIONS?</h3>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></p>
                                <p><span style={{color: '#fff'}}>+603 7490 7707</span></p>
                        </div>
                        </div>
                        <div className="col-1.2" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}} >
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>COMPANY</h3>
                                <ul style={{ listStyleType: 'none' , padding: '0' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>About Us</li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/articles/360033576071-Term-of-Service">Terms</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank"  href="https://speza.zendesk.com/hc/en-us/articles/360032045111-Privacy-Policy">Privacy</a></li>
                                <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Fees</li>
                                <li style={{fontSize:'12px' , color:'#fff' , cursor: 'pointer'}}><a className="buttomFotter" onClick={this.goReff}>Referral</a></li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-2-1" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>PRODUCTS</h3>
                                <ul style={{ listStyleType: 'none',  padding: '0' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-exchange.html">Regulated Exchange Platform</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-token-offering.html">Regulated Asset Backed Tokenization</a></li>
                                {/* <li style={{fontSize:'12px' , color:'#1E252F'}}>Offshore Virtual Currency</li> */}
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/ovce.html">Exchange License</a></li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-1.5" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>RESOURCES</h3>
                                <ul style={{ listStyleType: 'none' , padding: '0' , lineHeight: '20px'}}>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/blog.html">Blog</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/sections/360003652372-Announcements">Announcements</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}><a className="buttomFotter" target="_blank" href="https://app.swaggerhub.com/apis-docs/SpezaOrg/SpezaExchange/2.0.39">API Docs</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/categories/360001478292-FAQ">FAQ</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us">Support Center</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Contact Us</li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-1.3" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px',flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff' , fontWeight:'bold'}}>CAREERS</h3>
                                <ul style={{ listStyleType: 'none',  padding: '0' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/careers.html">Careers</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/apply-to-speza.html">Apply to SPEZA</a></li>
                                </ul>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="MobileLandingPage" style={{display: 'none'}}>
                <div className="row" style={{background:'#fff'}}>
                    <div style={{paddingBottom: '80px', paddingTop:'20px', margin:'auto' , display: 'flex' , flexFlow: 'column' , width: '100%'}}>
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#de1mo"  style={{ margin: '5px' , background: 'transparent', border:'none'}}><h3 style={{fontSize:'24px' , color:'#141622'}}>COMPANY&#x2192;</h3></button>
                            <div id="de1mo"  className="collapse">
                                <div style={{marginTop:'20px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}}>
                                    <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '35px'}}>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>About Us</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Terms</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Fees</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Referral</li>
                                    </ul>
                                </div>
                            </div>
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#de2mo"style={{ margin: '5px', background: 'transparent', border:'none'}}><h3 style={{fontSize:'24px' , color:'#141622'}}>PRODUCTS&#x2192;</h3></button>
                            <div id="de2mo"  className="collapse">
                                <div style={{marginTop:'20px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}}>
                                    <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '35px'}}>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Regulated Exchange Platform</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Regulated Asset Backed Tokenization</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Offshore Virtual Currency</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Exchange License</li>
                                    </ul>
                                </div>
                            </div>
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#de3mo" style={{ margin: '5px', background: 'transparent', border:'none'}}><h3 style={{fontSize:'24px' , color:'#141622'}}>RESOURCES&#x2192;</h3></button>
                            <div id="de3mo" className="collapse">
                                <div style={{marginTop:'20px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}}>
                                    <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '35px'}}>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Blog</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Announcements</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>API Docs</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>FAQ</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Support Center</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#de4mo" style={{ margin: '5px', background: 'transparent', border:'none'}}><h3 style={{fontSize:'24px' , color:'#141622'}}>CAREERS&#x2192;</h3></button>
                            <div id="de4mo" className="collapse">
                                <div style={{marginTop:'20px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}}>
                                    <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '35px'}}>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Careers</li>
                                        <li style={{fontSize:'18px' , color:'#1E252F'}}>Apply to SPEZA</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

// tslint:disable-next-line:no-any
const LandingScreen = withRouter(LandingComponent as any);

export {
    LandingScreen,
};
/*
line 87 , Quickbuy Component
<div className="row">
    <div className="col-12" style={{height:'580px', marginLeft: 'auto' , marginRight: 'auto' , width: '100%' }}>
        <QuickBuy/>
    </div>
</div>
<form style={{display:'flex', margin:'auto'}} className="stayconnected">
    <label style={{fontSize:'14px', padding:'10px'}} >
        <FormattedMessage id="page.landing.paneldark.col2.name"/><br/>
        <input type="text" name="name" style={{padding:'15px', height:'40px' , marginTop:'5px'}} className="stayconnectedInput"/>
    </label>
    <label style={{fontSize:'14px', padding:'10px'}}>
        <FormattedMessage id="page.landing.paneldark.col2.email"/><br/>
        <input type="email" name="email" style={{padding:'15px', height:'40px' , marginTop:'5px'}} className="stayconnectedInput"/>
    </label>
    <input type="submit" value="submit" style={{background: 'linear-gradient(270deg, #513A92 0%, #892D78 100%)' , height:'44px' , fontSize:'14px' , color:'#fff', padding:'10px' , marginTop:'30px' , marginLeft:'10px' , border: 'none'}} className="stayconnectedInput" />
</form>
<div className="row">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item">
        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
    </li>
    </ul>
    <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Raw denim you
        probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
        cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
        keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
        placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi
        qui.</div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie
        locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
        blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
        Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
        PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS
        salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
        sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
        stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape
        wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack
        lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
        squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
        etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
        stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
    </div>
</div>
<div className="row">
    <div className="col-12" style={{height:'100%', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}}>
        <div id="demo"/>
    </div>
    <div className="col-12" style={{height:'100%' , background:'#fff', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}}>
        <div id="de1mo" style={{color: '#000'}}/>
    </div>
</div>
<img src={require('./icon_facebook.png')} style={{ height:'37px' , padding:'0 15px'}}/>
<img src={require('./icon_linkedin.png')} style={{ height:'37px', padding:'0 15px'}}/>
<img src={require('./icon_messenger.png')} style={{ height:'37px', padding:'0 15px'}}/>
<img src={require('./icon_telegram.png')} style={{ height:'37px', padding:'0 15px'}}/>
*/
