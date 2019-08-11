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
        setDocumentTitle(' ');
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
                <div className="col-4" style={{padding:'0'}}>
                    <SmallBanner1/>
                </div>
                <div className="col-4" style={{padding:'0'}}>
                    <SmallBanner2/>
                </div>
                <div className="col-4" style={{padding:'0'}}>
                    <SmallBanner3/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{height:'100%' , background:'#fff', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}}>
                    <div id="demo"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{height:'300px' , background:'#141622'}}>
                <div className="row" style={{height:'300px' , color: '#fff'}}>
                    <div className="col-4"  style={{padding:'30px 55px'}}>
                        <h3 style={{fontSize:'48px'}}><FormattedMessage id="page.landing.paneldark.col1.title"/></h3>
                        <p style={{fontSize:'14px', maxWidth:'400px'}}><FormattedMessage id="page.landing.paneldark.col1.description"/></p>
                    </div>
                    <div className="col-5"  style={{margin:'auto'}}>
                        <form style={{display:'flex' , flexDirection:'row'}}>
                            <label style={{fontSize:'14px', padding:'10px'}}>
                                <FormattedMessage id="page.landing.paneldark.col2.name"/><br/>
                                <input type="text" name="name" style={{padding:'15px' , width:'180px', height:'40px' , marginTop:'5px'}} />
                            </label>
                            <label style={{fontSize:'14px', padding:'10px'}}>
                                <FormattedMessage id="page.landing.paneldark.col2.email"/><br/>
                                <input type="email" name="email" style={{padding:'15px', width:'180px', height:'40px' , marginTop:'5px'}}/>
                            </label>
        <input type="submit" value="submit" style={{background: 'linear-gradient(270deg, #513A92 0%, #892D78 100%)' , width:'180px', height:'44px' , fontSize:'14px' , color:'#fff', padding:'10px' , marginTop:'30px' , marginLeft:'10px' , border: 'none'}} />
                        </form>
                    </div>
                    <div className="col-3" style={{ margin:'auto'}}>
                             <img src={require('./fb.svg')} style={{ height:'37px' , padding:'0 15px'}}/>
                             <img src={require('./linkedin.svg')} style={{ height:'37px', padding:'0 15px'}} />
                             <img src={require('./tele.svg')} style={{ height:'37px', padding:'0 15px'}}/>
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
