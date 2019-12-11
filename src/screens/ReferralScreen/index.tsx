import * as React from 'react';
import Iframe from 'react-iframe';
import { FormattedHTMLMessage ,FormattedMessage  } from 'react-intl';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import QuickBuy from '../../containers/QuickBuy/QuickBuy';
import { RefferalAccount } from '../../containers/ReferralAccount';
import { ReferralPage } from '../../containers/ReferralPage';
import { RefferalCommission } from '../../containers/RefferalCommission';
import { setDocumentTitle } from '../../helpers';
// import { Referraldata } from './Referraldata';

class ReferralComponent extends React.Component<RouterProps> {

    public componentDidMount() {
        setDocumentTitle('Referral');
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
        window.open(url, '_blank');
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
            <div className="row ReferralBanner Referralheight">
                <div className="col-7" style={{margin:'auto'}}>
                        <h1>
                        Invite your friends to SPEZA <br/>get up to 15 SVT commission!
                        </h1>
                        <p>Whenever your friends make a trade, you will earn a commission on their trading fees.</p>
                </div>
            </div>
            <div className="row px-1 py-5 ReferralSection" style={{background: '#fff'}}>
                <div className="container_banners">
                        <div className="col-xl-3 col-l-3 col-md-3 col-sm-3 col-xs-12 linkSegment" style={{minHeight:'150px'}}>
                            <img src={require('./apps.png')}  className="ReferralSectionImage1"/>
                        </div>
                        <div className="col-xl-4 col-l-4 col-md-9 col-sm-9" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <div>
                            <h1  style={{color:'#000'}}>How to invite your friends</h1>
                            <p style={{color:'#000'}}>Share your invitation link or QR code with your friends.</p>
                            <p style={{color:'#000'}}>When they complete registration using your referral code, you will receive a commission every time they trade!</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-l-5 col-md-12 col-sm-12" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                <div className="col-md-3 col-sm-3 d-xl-none d-lg-none">
                                    &nbsp;
                                </div>
                                <ReferralPage/>
                        </div>
                </div>
            </div>
            <div style={{background: '#fff'}}>
                <div className="container_banners">
                      <hr  style={{color:'#6C6C6C' , height:'1px' , margin:'0'}}/>
                </div>
            </div>
            <RefferalAccount/>
            <div style={{background: '#fff'}}>
                <div className="container_banners">
                      <hr  style={{color:'#6C6C6C' , height:'1px' , margin:'0'}}/>
                </div>
            </div>
            <RefferalCommission/>
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
                            <div style={{margin:'110px 0', display:'flex' , flexDirection:'column' , textAlign:'left' , lineHeight:'12px'}} >
                                <img src={require('./Speza_logo_full_white.gif')} style={{ height:'55px', marginBottom:'-10px'}}/>
                                <h3 style={{fontSize:'14px' , color:'#fff' , marginTop:'30px', fontWeight:'bold'}}>HAVE QUESTIONS?</h3>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></p>
                                <p><span style={{color: '#fff'}}>+603 7490 7707</span></p>
                        </div>
                        </div>
                        <div className="col-1.2" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}} >
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>COMPANY</h3>
                                <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>About Us</li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/articles/360033576071-Term-of-Service">Terms</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank"  href="https://speza.zendesk.com/hc/en-us/articles/360032045111-Privacy-Policy">Privacy</a></li>
                                <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Fees</li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" href="#" onClick={this.goReff}>Referral</a></li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-2-1" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>PRODUCTS</h3>
                                <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-exchange.html">Regulated Exchange Platform</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-token-offering.html">Regulated Asset Backed Tokenization</a></li>
                                {/* <li style={{fontSize:'12px' , color:'#1E252F'}}>Offshore Virtual Currency</li> */}
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/ovce.html">Exchange License</a></li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-1.5" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>RESOURCES</h3>
                                <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '20px'}}>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/blog.html">Blog</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/categories/360001478312-Announcements">Announcements</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}><a className="buttomFotter" target="_blank" href="https://app.swaggerhub.com/apis-docs/SpezaOrg/SpezaExchange/2.0.39">API Docs</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/categories/360001478292-FAQ">FAQ</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us">Support Center</a></li>
                                    <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Contact Us</li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-1.3" style={{height:'400px' , background:'#212328', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px',flexDirection:'column'}}>
                                <h3 style={{fontSize:'14px' , color:'#fff' , fontWeight:'bold'}}>CAREERS</h3>
                                <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/careers.html">Careers</a></li>
                                <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/apply-to-speza.html">Apply to SPEZA</a></li>
                                </ul>
                        </div>
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
const ReferralScreen = withRouter(ReferralComponent as any);

export {
    ReferralScreen,
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
