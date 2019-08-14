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
            <div className="row">
                <div className="col-4" style={{height:'500px' , background:'#fff', display:'flex'}}>
                    <div style={{margin:'auto', marginTop:'110px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'12px'}}>
                        <img src={require('./spezalogo.svg')} style={{ height:'37px', padding:'0 15px'}}/>
                        <h3 style={{fontSize:'24px' , color:'#0053A3' , marginTop:'30px'}}>HAVE QUESTIONS?</h3>
                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></p>
                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></p>
                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></p>
                        <p style={{fontSize:'14px' ,color:'#1E252F'}}>+603 7490 7707</p>
                   </div>
                </div>
                <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                    <div style={{marginTop:'100px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px'}}>
                        <h3 style={{fontSize:'24px' , color:'#141622'}}>COMPANY</h3>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>About Us</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Terms</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Fees</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Referral</p>
                   </div>
                </div>
                <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                    <div style={{marginTop:'100px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px'}}>
                        <h3 style={{fontSize:'24px' , color:'#141622'}}>PRODUCTS</h3>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Regulated Exchange Platform</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Regulated Asset Backed Tokenization</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Offshore Virtual Currency</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Exchange License</p>
                   </div>
                </div>
                <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                    <div style={{marginTop:'100px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px'}}>
                        <h3 style={{fontSize:'24px' , color:'#141622'}}>RESOURCES</h3>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Blog</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Announcements</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>API Docs</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>FAQ</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Support Center</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Contact Us</p>
                   </div>
                </div>
                <div className="col-2" style={{height:'500px' , background:'#fff', display:'flex' }}>
                    <div style={{marginTop:'100px', display:'flex' , flexDirection:'column' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px'}}>
                        <h3 style={{fontSize:'24px' , color:'#141622'}}>CAREERS</h3>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Careers</p>
                        <p style={{fontSize:'12px' , color:'#1E252F'}}>Apply to SPEZA</p>
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
