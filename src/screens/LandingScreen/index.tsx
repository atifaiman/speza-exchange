import * as React from 'react';
import { FormattedHTMLMessage ,FormattedMessage  } from 'react-intl';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import SliderComponent from '../../containers/Slider/SliderComponent';
import SmallBanner1 from '../../containers/Slider/SmallBanner1';
import SmallBanner2 from '../../containers/Slider/SmallBanner2';
import SmallBanner3 from '../../containers/Slider/SmallBanner3';
import { setDocumentTitle } from '../../helpers';

class LandingComponent extends React.Component<RouterProps> {

    public componentDidMount() {
        setDocumentTitle('Home');
    }

    public goBack = () => {
        this.props.history.goBack();
    };

    public render() {
        return (
            <div>
            <div className="row">
                <div className="col-12">
                    <SliderComponent/>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12" style={{padding:'0'}}>
                    <SmallBanner1/>
                </div>
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12" style={{padding:'0'}}>
                    <SmallBanner2/>
                </div>
                <div className="col-xl-4 col-md-12 col-l-4 col-sm-12" style={{padding:'0'}}>
                    <SmallBanner3/>
                </div>
            </div>
            <div className="row" style={{display:'none'}}>
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
                <div className="col-12" style={{height:'100%' , background:'#fff', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}}>
                    <div id="demo"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{ background:'#141622'}}>
                <div className="row" style={{ color: '#fff'}}>
                    <div className="col-xl-4 col-md-12 col-l-4 col-sm-12"  style={{height:'300px',margin: 'auto' }}>
                    <div className="row">
                        <div  style={{ margin: 'auto', padding:'40px', display:'flex' , flexFlow:'column'}}>
                        <h3 style={{fontSize:'48px'}}><FormattedMessage id="page.landing.paneldark.col1.title"/></h3>
                        <p style={{fontSize:'14px', maxWidth:'400px'}}><FormattedMessage id="page.landing.paneldark.col1.description"/></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-5 col-md-12 col-l-5 col-sm-12"  style={{margin:'auto'}}>
                    <div className="row">
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
                    </div>
                    </div>
                    <div className="col-xl-3 col-md-12 col-l-3 col-sm-12" style={{margin:'auto'}}>
                    <div className="row" style={{  height:'100px' }} >
                        <div style={{  margin:'auto' }}>
                             <img src={require('./fb.svg')} style={{ height:'37px' , padding:'0 15px'}}/>
                             <img src={require('./linkedin.svg')} style={{ height:'37px', padding:'0 15px'}} />
                             <img src={require('./tele.svg')} style={{ height:'37px', padding:'0 15px'}}/>
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className="spezaButtomBanner">
                <div className="row">
                        <div className="col-4" style={{height:'500px' , background:'#fff', display:'flex'}}>
                            <div style={{margin:'auto', marginTop:'110px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'12px'}} >
                                <img src={require('./spezalogo.svg')} style={{ height:'37px', padding:'0 15px'}}/>
                                <h3 style={{fontSize:'24px' , color:'#0053A3' , marginTop:'30px'}}>HAVE QUESTIONS?</h3>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></p>
                                <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></p>
                                <p style={{fontSize:'14px' ,color:'#1E252F'}}>+603 7490 7707</p>
                        </div>
                        </div>
                        <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}} >
                                <h3 style={{fontSize:'24px' , color:'#141622'}}>COMPANY</h3>
                                <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>About Us</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Terms</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Fees</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Referral</li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'24px' , color:'#141622'}}>PRODUCTS</h3>
                                <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Regulated Exchange Platform</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Regulated Asset Backed Tokenization</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Offshore Virtual Currency</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Exchange License</li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                <h3 style={{fontSize:'24px' , color:'#141622'}}>RESOURCES</h3>
                                <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '20px'}}>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>Blog</li>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>Announcements</li>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>API Docs</li>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>FAQ</li>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>Support Center</li>
                                    <li style={{fontSize:'12px' , color:'#1E252F'}}>Contact Us</li>
                                </ul>
                        </div>
                        </div>
                        <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                            <div style={{marginTop:'100px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px',flexDirection:'column'}}>
                                <h3 style={{fontSize:'24px' , color:'#141622'}}>CAREERS</h3>
                                <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '20px'}}>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Careers</li>
                                <li style={{fontSize:'12px' , color:'#1E252F'}}>Apply to SPEZA</li>
                                </ul>
                        </div>
                        </div>
                    </div>
            </div>
            <div className="spezaButtomBannerMobile">
                    <div className="row" style={{background:'#fff'}}>
                        <div style={{height:'200px' , paddingTop:'50px',margin:'auto', textAlign:'center' }}>
                            <img src={require('./spezalogo.svg')} style={{ height:'37px', padding:'0 15px'}}/>
                            <h3 style={{fontSize:'24px' , color:'#0053A3' , marginTop:'30px'}}>HAVE QUESTIONS?</h3>
                            <p style={{fontSize:'14px' ,color:'#1E252F'}}>+603 7490 7707</p>
                        </div>
                    </div>
                    <div className="row" style={{background:'#fff'}}>
                        <div style={{height:'30px', display:'flex',flexFlow:'row', fontSize: '16px', margin: 'auto',padding: '0px 20px'}}>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4 col-xs-12"><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></div>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4 col-xs-12"><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></div>
                        <div className="col-xl-4 col-md-4 col-l-4 col-sm-4 col-xs-12"><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></div>
                        </div>
                    </div>
                    <div className="row" style={{background:'#fff'}}>
                        <div style={{paddingBottom: '80px', paddingTop:'20px', margin:'auto' , display: 'flex' , flexFlow: 'column'}}>
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#de1mo"  style={{ margin: '5px' , background: 'transparent', border:'none'}}><h3 style={{fontSize:'24px' , color:'#141622'}}>COMPANY&#x2192;</h3></button>
                         <div id="de1mo"  className="collapse">
                <div style={{marginTop:'20px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}}>
                    <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '30px'}}>
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
                    <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '30px'}}>
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
                        <ul style={{ listStyleType: 'none' , marginLeft: '-35px' , lineHeight: '30px'}}>
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
                    <ul style={{ listStyleType: 'none', marginLeft: '-35px' , lineHeight: '30px'}}>
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
