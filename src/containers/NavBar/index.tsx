import { Button  , Loader} from '@openware/components';
import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { FormattedMessage , InjectedIntlProps, injectIntl } from 'react-intl';
// ,injectIntl,useIntl | import * as ReactDOM from 'react-dom';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import Modal from 'react-responsive-modal';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { captchaType, siteKey } from '../../api';
import { EmailForm, Modal as ModalSingup, SignInComponent, SignUpForm , TwoFactorAuth } from '../../components';
import { pgRoutes } from '../../constants';
import {ToolBar } from '../../containers';
import { EMAIL_REGEX , ERROR_INVALID_EMAIL , ERROR_INVALID_PASSWORD, ERROR_PASSWORD_CONFIRMATION,  PASSWORD_REGEX } from '../../helpers';
import {
    changeLanguage,
    emailVerificationFetch,
    forgotPassword,
    logoutFetch,
    Market,
    RootState,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectForgotPasswordSuccess,
    selectSendEmailVerificationLoading,
    selectSignInRequire2FA,
    selectSignUpRequireVerification,
    selectUserInfo,
    selectUserLoggedIn,
    signIn,
    signInError,
    signInRequire2FA,
    signUp,
    signUpRequireVerification,
    User,
    walletsReset,
} from '../../modules';
// import { Awepay } from '../Awepay/Awepay';

export interface ReduxProps {
    currentMarket: Market | undefined;
    emailVerificationLoading: boolean;
    address: string;
    isLoggedIn: boolean;
    lang: string;
    success?: boolean;
    requireVerification?: boolean;
    user: User;
    require2FA?: boolean;
    loading?: boolean;
}

interface DispatchProps {
    changeLanguage: typeof changeLanguage;
    logout: typeof logoutFetch;
    walletsReset: typeof walletsReset;
    signIn: typeof signIn;
    signInError: typeof signInError;
    signInRequire2FA: typeof signInRequire2FA;
    signUp: typeof signUp;
    signUpRequireVerification: typeof signUpRequireVerification;
    forgotPassword: typeof forgotPassword;
}

interface DispatchProps {
    emailVerificationFetch: typeof emailVerificationFetch;
}

export interface OwnProps {
    onLinkChange?: () => void;
    history: History;
}

type NavbarProps = OwnProps & ReduxProps & RouteProps & DispatchProps  & InjectedIntlProps;

interface NavbarState {
    showModalSignUp: boolean;
    isOpen: boolean;
    isOpenLanguage: boolean;
    email: string;
    emailSignUp: string;
    emailForget: string;
    message: string;
    recaptcha_response: string;
    recaptchaConfirmed: boolean;
    name: string;
    refId: string;
    confirmPassword: string;
    recaptchaResponse: string;
    errorModal: boolean;
    open: boolean;
    forgetModal: boolean;
    SignUpModal: boolean;
    hasConfirmed: boolean;
    EmailVerificationModal: boolean;
    emailError: string;
    emailErrorSignUp: string;
    emailErrorForget: string;
    emailFocused: boolean;
    emailFocusedSignUp: boolean;
    emailFocusedForget: boolean;
    password: string;
    passwordSignUp: string;
    confirmationError: string;
    passwordError: string;
    passwordErrorSignUp: string;
    passwordFocused: boolean;
    passwordFocusedSignUp: boolean;
    otpCode: string;
    error2fa: string;
    confirmPasswordFocused: boolean;
    codeFocused: boolean;
    refIdFocused: boolean;
}

class NavBarComponent extends React.Component<NavbarProps, NavbarState> {
    public readonly state = {
        showModalSignUp: false,
        isOpen: false,
        isOpenLanguage: false,
        confirmPassword: '',
        refIdFocused:false,
        email: '',
        emailSignUp: '',
        emailForget: '',
        emailError: '',
        emailErrorSignUp: '',
        emailErrorForget: '',
        confirmationError: '',
        hasConfirmed: false,
        confirmPasswordFocused: false,
        emailFocused: false,
        emailFocusedForget: false,
        emailFocusedSignUp:false,
        password: '',
        passwordSignUp: '',
        refId: '',
        recaptcha_response:'',
        recaptchaConfirmed: false,
        passwordError: '',
        passwordErrorSignUp: '',
        passwordFocused: false,
        passwordFocusedSignUp: false,
        name: '',
        message: '',
        recaptchaResponse: '',
        errorModal: false,
        open: false,
        forgetModal: false,
        SignUpModal: false,
        EmailVerificationModal: false,
        otpCode: '',
        error2fa: '',
        codeFocused: false,
    };
    public goReff = () => {
        const url = `${window.env.api.tradeUrl.substring(0,window.env.api.tradeUrl.length - 13)}referral/`;
        window.open(url, '_self');
    };
    public onOpenModal = () => {
        this.setState({ email: '' });
        this.setState({ open: true });
      };
    public onCloseModal = () => {
        this.setState({ open: false });
    };
    public onOpenForgetModal = () => {
        this.setState({ forgetModal: true });
      };
    public onCloseForgetModal = () => {
        this.setState({ forgetModal: false });
    };
    public onOpenSignUpModal = () => {
        this.setState({ SignUpModal: true });
    }
    public onCloseSignUpModal = () => {
        this.setState({ SignUpModal: false });
    }
    public onOpenEmailVerificationModal = () => {
        this.setState({ EmailVerificationModal: true });
    }
    public onCloseEmailVerificationModal = () => {
        this.setState({ EmailVerificationModal: false });
    }
    public navItem = (address: string, onLinkChange?: () => void) => (values: string[], index: number) => {
        const [name, url] = values;
        const { isLoggedIn, currentMarket } = this.props;
        const cx = classnames('pg-navbar__content-item', {
            'pg-navbar__content-item--active': this.shouldUnderline(address, url),
            'pg-navbar__content-item-logging': isLoggedIn,
        });
        const handleLinkChange = () => {
            if (onLinkChange) {
                onLinkChange();
            }
            if (name === 'page.header.navbar.Landing') {
                window.location.reload();
            }
        };
        const path = url.includes('/trading') && currentMarket ? `/trading/${currentMarket.id}` : url;
        return (
            <li onClick={handleLinkChange} key={index} className={(name === 'page.header.navbar.signIn') ? 'SignInNav' : ''}>
                <div className="buttonNavMobile">
                    <div className={`${ !isLoggedIn && (name === 'page.header.navbar.wallets') ? 'mobileNavWallet' : !isLoggedIn && (name === 'page.header.navbar.openOrders') ? 'mobileNavOrder' : !isLoggedIn && (name === 'page.header.navbar.history') ? 'mobileNavHistory' :  !isLoggedIn && (name === 'page.header.navbar.profile') ? 'mobileNavAccount' : !isLoggedIn && (name === 'page.header.navbar.signIn') ? 'mobileNavSign' : 'mobileNav'}`}>
                        <Link className={cx} to={path}>
                            <div className="navbarIcon" >
                                <div className={`${(name === 'page.header.navbar.trade') ? 'iconNavTrade' : (name === 'page.header.navbar.wallets') ? 'iconNavWallet' : (name === 'page.header.navbar.Landing') ? 'iconNavHome' : (name === 'page.header.navbar.openOrders') ? 'iconNavOrder' : (name === 'page.header.navbar.history') ? 'iconNavHistory' : (name === 'page.header.navbar.profile') ? 'iconNavAccount' :'z'}`}/>
                            </div>
                            <span className="titleNavMobile"><FormattedMessage id={name}/></span>
                        </Link>
                    </div>
                </div>
            </li>
        );
    };
    public componentDidUpdate(prev: ReduxProps) {
        if (!prev.isLoggedIn && this.props.isLoggedIn) {
            this.onCloseModal();
            this.onCloseForgetModal();
        }
    }

    public render() {
        const { location, user } = this.props;
        //const { location, user, lang } = this.props;
        const { isOpenLanguage } = this.state;
        const address = location ? location.pathname : '';
        // const languageName = (lang === 'zh') ? '中文' : (lang === 'en') ?  'English' : lang.toUpperCase();
        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });
        //     this.onCloseForgetModal();
        // }
        return (
            <div className={'pg-navbar'}>
                {user.email ? this.getProfile() : null}
                <ul className="pg-navbar__content">
                    {pgRoutes(!!user.email).map(this.navItem(address, this.props.onLinkChange))}
                </ul>
                <div className={(address.includes('/trading')) ? 'toolbarComponent' : 'referralNotLogged'}>
                            <div id="marketSelect"><ToolBar/></div>
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal}>
                    <div id="AwepayForm">
                            <div className="pg-sign-in-screen" style={{height:'100%', background:'transparent;'  }}>{this.props.require2FA ? this.render2FA() : this.renderSignInForm()}</div>
                    </div>
                </Modal>
                <Modal open={this.state.forgetModal} onClose={this.onCloseForgetModal}>
                    <div id="AwepayForm">
                        <div>{this.renderForgotPassword()}</div>
                    </div>
                </Modal>
                <Modal open={this.state.SignUpModal} onClose={this.onCloseSignUpModal}>
                    <div id="AwepayForm">
                        <div>{(this.props.requireVerification) ? this.renderVerifyEmail() :  this.renderSingup()}</div>
                    </div>
                </Modal>
                <Modal open={this.state.EmailVerificationModal} onClose={this.onCloseEmailVerificationModal}>
                    <div id="AwepayForm">
                        <div style={{color:'#000'}}>GoodBye</div>
                    </div>
                </Modal>
                <ul className={(address.includes('/trading')) ? 'referralNotLogged' : 'NavbarLinks'}>
                    <li className="nav-item dropdown NavbarLinkItem">
                            <a className="nav-link dropdown-toggle NavbarLinkItemTitle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            COMPANY <span style={{color:'#fff', margin:'0'}}>&#9662;</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: '#1A1B22', padding: '0px 15px',  whiteSpace: 'nowrap'}}>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/><a className="dropdown-item" href="https://www.speza.org" target="_blank">  <img className="icon" src={require('./Group139.png')} style={{ height: '25px' , marginRight:'3px'}} />Speza.org</a><div style={{ paddingTop:'0'}} className="dropdown-divider"/>
                            </div>
                    </li>
                    <li className="nav-item dropdown NavbarLinkItem">
                            <a className="nav-link dropdown-toggle NavbarLinkItemTitle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PRODUCTS <span style={{color:'#fff', margin:'0'}}>&#9662;</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: '#1A1B22', padding: '0px 15px',  whiteSpace: 'nowrap'}}>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/><a className="dropdown-item" href="https://www.speza.org/regulated-digital-asset-exchange.html" target="_blank">Regulated Exchange Platform</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://www.speza.org/regulated-digital-asset-token-offering.html" target="_blank">Regulated Asset Backed Tokenization</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://www.speza.org/ovce.html" target="_blank">Offshore Virtual Currency Exchange License</a>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/>
                            <Link to="/form/coin-listing-application" className="dropdown-item">Coin Listing Registration</Link>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/>
                            </div>
                    </li>
                    <li className="nav-item dropdown NavbarLinkItem">
                            <a className="nav-link dropdown-toggle NavbarLinkItemTitle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            RESOURCES <span style={{color:'#fff', margin:'0'}}>&#9662;</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: '#1A1B22', padding: '0px 15px',  whiteSpace: 'nowrap'}}>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/><a className="dropdown-item" href="https://www.speza.org/blog.html" target="_blank">Blog</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://speza.zendesk.com/hc/en-us/categories/360001478312-Announcements" target="_blank">Announcements</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://speza.zendesk.com/hc/en-us/categories/360001478292-FAQ" target="_blank">FAQ</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://speza.zendesk.com/hc/en-us" target="_blank">Support Center</a><div className="dropdown-divider" style={{ paddingTop:'0'}}/>
                            {/* <div className="dropdown-divider"/> */}
                            {/* <a className="dropdown-item" href="#" target="_blank">Contact Us</a> */}
                            </div>
                    </li>
                    <li className="nav-item dropdown NavbarLinkItem">
                            <a className="nav-link dropdown-toggle NavbarLinkItemTitle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CAREERS <span style={{color:'#fff', margin:'0'}}>&#9662;</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{background: '#1A1B22', padding: '0px 15px',  whiteSpace: 'nowrap'}}>
                            <div className="dropdown-divider" style={{ paddingTop:'0'}}/><a className="dropdown-item" href="https://www.speza.org/careers.html" target="_blank">Careers</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="https://www.speza.org/apply-to-speza.html" target="_blank">Apply to SPEZA</a><div className="dropdown-divider" style={{ paddingTop:'0'}}/>
                            </div>
                    </li>
                </ul>
                <div className="pg-navbar__header-settings">
                    {user.email ? this.getUserEmailMenu() : null}
                    <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-toggle dropdown-menu-language-container">
                        <div onClick={this.toggleLanguageMenu} className={languageClassName}>
                             {/* <img className="languageIcon" src={require('./top_navbar_language.png')} /> */}
                             <span className="mobileLangtxt" >LANGUAGE</span><div className="mobileLangimg"><img className="mobileLangimg" src={require('./top_navbar_language.png')} style={{padding: '5px' , height: '45px'}}/></div>
                            <img className="icon" src={require(`./${isOpenLanguage ? 'open' : 'close'}-icon.svg`)} style={{width: '8px' , height: '8px'}} />
                        </div>
                        {isOpenLanguage ? this.getLanguageMenu() : null}
                    </div>
                    <div className="topNavbarMobile">
                            <a href="https://speza.zendesk.com/hc/en-us" target="_blank">
                            <div className="topNavbarMobileContact">
                                <div><img className="topNavimg" src={require('./top_navbar_contact.png')}/></div>
                                <div><p style={{fontSize:'10px'}}><FormattedMessage id={'page.header.navbar.Contact'} /></p></div>
                            </div>
                            </a>
                            <a href="https://speza.zendesk.com/hc/en-us" target="_blank">
                            <div className="topNavbarMobileNewsLetter">
                                <div><img className="topNavimg" src={require('./top_navbar_newsletter.png')}/></div>
                                <div><p style={{fontSize:'10px'}}><FormattedMessage id={'page.header.navbar.newsletter'} /></p></div>
                            </div>
                            </a>
                            <a onClick={this.goReff}>
                            <div className="topNavbarMobileReferralRewads">
                                <div><img className="topNavimg" src={require('./top_navbar_referral_normal.png')}/></div>
                                <div><p style={{fontSize:'10px'}}><FormattedMessage id={'page.header.navbar.ReferralRewads'} /></p></div>
                            </div>
                            </a>
                    </div>
                </div>
                <button onClick={this.onOpenModal} style={{ display:'none' ,color:'#000',  width: '50px' , height: '20px', padding: '0 30px', border: '1px solid rgba(108, 108, 108, 0.5)' , borderRadius: '7px' }} >Click me</button>
                <div className="pg-navbar__header-language" onClick={this.toggleLanguageMenu} style={{ marginTop: '-13px'}}>
                    <span>LANGUAGE</span>
                    <span>
                        <img className="icon" src={require(`./${isOpenLanguage ? 'open' : 'close'}-icon.svg`)} />
                    </span>
                    {isOpenLanguage ? this.getLanguageMenu() : null}
                </div>
            </div>
        );
    }


    private renderVerifyEmail = () => {
        const { emailVerificationLoading } = this.props;

        const title = this.props.intl.formatMessage({ id: 'page.header.signUp.modal.header' });
        const text = this.props.intl.formatMessage({ id: 'page.header.signUp.modal.body' });
        const button = this.props.intl.formatMessage({ id: 'page.resendConfirmation' });
        return (
            <div className="pg-emailverification-container">
                <div className="pg-emailverification">
                    <div className="pg-emailverification-title">{title}</div>
                    <div className="pg-emailverification-body">
                        <div className="pg-emailverification-body-text">{text}</div>
                        <div className="pg-emailverification-body-container">
                            {emailVerificationLoading ? <Loader /> : <button className="pg-emailverification-body-container-button" onClick={this.handleClick}>{button}</button>}
                        </div>
                    </div>
                </div>
            </div>
        );

    };

    private renderSignInForm = () => {
        const { loading } = this.props;
        const { email, emailError, emailFocused, password, passwordError, passwordFocused } = this.state;
        //const intl = useIntl();
        return (
            <SignInComponent
                email={email}
                emailError={emailError}
                emailFocused={emailFocused}
                emailPlaceholder={this.props.intl.formatMessage({ id: 'page.header.signIn.email'})}
                password={password}
                passwordError={passwordError}
                passwordFocused={passwordFocused}
                passwordPlaceholder={this.props.intl.formatMessage({ id: 'page.header.signIn.password' })}
                labelSignIn={this.props.intl.formatMessage({ id: 'page.header.signIn' })}
                labelSignUp={this.props.intl.formatMessage({ id: 'page.header.signUp' })}
                emailLabel={this.props.intl.formatMessage({ id: 'page.header.signIn.email' })}
                passwordLabel={this.props.intl.formatMessage({ id: 'page.header.signIn.password' })}
                receiveConfirmationLabel={this.props.intl.formatMessage({ id: 'page.header.signIn.receiveConfirmation' })}
                forgotPasswordLabel={this.props.intl.formatMessage({ id: 'page.header.signIn.forgotPassword' })}
                isLoading={loading}
                onForgotPassword={this.forgotPassword}
                onSignUp={this.handleSignUp}
                onSignIn={this.handleSignIn}
                handleChangeFocusField={this.handleFieldFocus}
                isFormValid={this.validateForm}
                refreshError={this.refreshError}
                changeEmail={this.handleChangeEmailValue}
                changePassword={this.handleChangePasswordValue}
            />
        );
    };

    private render2FA = () => {
        const { loading } = this.props;
        const { otpCode, error2fa, codeFocused } = this.state;
        return (
            <TwoFactorAuth
                isLoading={loading}
                onSubmit={this.handle2FASignIn}
                title={this.props.intl.formatMessage({ id: 'page.password2fa' })}
                label={this.props.intl.formatMessage({ id: 'page.body.wallets.tabs.withdraw.content.code2fa' })}
                buttonLabel={this.props.intl.formatMessage({ id: 'page.header.signIn' })}
                message={this.props.intl.formatMessage({ id: 'page.password2fa.message' })}
                codeFocused={codeFocused}
                otpCode={otpCode}
                error={error2fa}
                handleOtpCodeChange={this.handleChangeOtpCode}
                handleChangeFocusField={this.handle2faFocus}
                handleClose2fa={this.handleClose}
            />
        );
    };

    private shouldUnderline = (address: string, url: string): boolean =>
        (url === '/trading/' && address.includes('/trading')) || address === url;

    private getProfile = () => {
        const { user } = this.props;
        return (
            <div className="pg-navbar__header-profile">
                <Link
                    className="pg-navbar__admin-logout"
                    to="/profile"
                    onClick={this.handleRouteChange('/profile')}
                >
                    <FormattedMessage id={'page.header.navbar.profile'} />
                </Link>
                <span>{user.email}</span>
                <img onClick={this.handleLogOut} className="pg-navbar__header-profile-logout" src={require(`./logout.svg`)} />
            </div>
        );
    };

    private getLanguageMenu = () => {
        return (
            <div className="dropdown-menu dropdown-menu-language" role="menu">
                {/* tslint:disable jsx-no-lambda */}
                <div className="dropdown-menu-item-lang" onClick={e => this.handleChangeLanguage('en')}>
                <div><img  className="pg-navbar__header-profile-logout" src={require(`./english.png`)} style={{width:'30px', padding:'6px'}} /></div>
                    English
                </div>
                <div className="dropdown-menu-item-lang" onClick={e => this.handleChangeLanguage('zh')}>
                <div><img  className="pg-navbar__header-profile-logout" src={require(`./chinese.png`)} style={{width:'30px', padding:'6px'}}/></div>
                    中文
                </div>
                {/* tslin:enable jsx-no-lambda */}
            </div>
        );
    };

    private getUserEmailMenu = () => {
        const { isOpen } = this.state;
        const userClassName = classnames('navbar-usser-menu', {
            'navbar-usser-menu-active': isOpen,
        });

        return (
            <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-toggle" style={{display:'none'}}>
                <div onClick={this.openMenu} className={userClassName}>
                    <img src={require(`./${isOpen ? 'open' : 'open'}-avatar.svg`)} />
                    <img className="icon" src={require(`./${isOpen ? 'open' : 'close'}-icon.svg`)} />
                </div>
                {isOpen ? this.getUserMenu() : null}
            </div>
        );
    };

    private getUserMenu = () => {
        return (
            <div className="dropdown-menu dropdown-menu-user" role="menu">
                <div className="dropdown-menu-item-user">
                    <Link
                        className="pg-navbar__admin-logout"
                        to="/profile"
                        onClick={this.handleRouteChange('/profile')}
                    >
                        <FormattedMessage id={'page.header.navbar.profile'} />
                    </Link>
                </div>
                <div className="dropdown-menu-item-user">
                    <a className="pg-navbar__admin-logout" onClick={this.handleLogOut}>
                        <FormattedMessage id={'page.header.navbar.logout'} />
                    </a>
                </div>
            </div>
        );
    };

    private handleRouteChange = (to: string) => () => {
        this.setState({ isOpen: false }, () => {
            this.props.history.push(to);
        });
    }

    private handleLogOut = () => {
        localStorage.removeItem('notificationClose');
        this.setState({
            isOpen: false,
        }, () => {
            this.props.logout();
        });
    };


    private handleClick = () => {
        this.props.emailVerificationFetch({
          email: this.state.emailSignUp,
          lang: this.props.lang,
        });
    }


    private handle2faFocus = () => {
        this.setState(prev => ({
            codeFocused: !prev.codeFocused,
        }));
    };


    private openMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        }, () => {
            if (this.state.isOpen) {
                document.addEventListener('click', this.closeMenu);
            } else {
                document.removeEventListener('click', this.closeMenu);
            }
        });
    };

    private closeMenu = () => {
        this.setState({
            isOpen: false,
        }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    private toggleLanguageMenu = () => {
        this.setState({
            isOpenLanguage: !this.state.isOpenLanguage,
        }, () => {
            if (this.state.isOpenLanguage) {
                document.addEventListener('click', this.closeLanguageMenu);
            } else {
                document.removeEventListener('click', this.closeLanguageMenu);
            }
        });
    }

    private handleChangeOtpCode = (value: string) => {
        this.setState({
            error2fa: '',
            otpCode: value,
        });
    };

    private closeLanguageMenu = () => {
        this.setState({
            isOpenLanguage: false,
        }, () => {
            document.removeEventListener('click', this.closeLanguageMenu);
        });
    }

    private handleClose = () => {
        signInRequire2FA({ require2fa: false });
    };

    private handleChangeLanguage = (language: string) => {
        this.props.changeLanguage(language);
        window.location.reload();
    }
    private handleSignUp = () => {
        const {
            email,
            password,
            recaptcha_response,
            refId,
        } = this.state;

        //const { i18n } = this.props;
        const lang = this.props.lang;

        if (refId) {
            switch (captchaType()) {
                case 'none':
                    this.props.signUp({
                        email,
                        password,
                        refid: refId,
                       // lang: i18n.toUpperCase(),
                        lang: lang,
                    });
                    break;
                case 'recaptcha':
                case 'geetest':
                default:
                    this.props.signUp({
                        email,
                        password,
                        recaptcha_response,
                        refid: refId,
                        //lang: i18n.toUpperCase(),
                        lang: lang,
                    });
                    break;
            }
        } else {
            switch (captchaType()) {
                case 'none':
                    this.props.signUp({
                        email,
                        password,
                        //lang: i18n.toUpperCase(),
                        lang: lang,
                    });
                    break;
                case 'recaptcha':
                case 'geetest':
                default:
                    this.props.signUp({
                        email,
                        password,
                        recaptcha_response,
                        //lang: i18n.toUpperCase(),
                        lang: lang,
                    });
                    break;
            }
        }
    };

    private renderSingup = () => {
        const {
            emailSignUp,
            passwordSignUp,
            confirmPassword,
            refId,
            recaptcha_response,
            recaptchaConfirmed,
            hasConfirmed,
            emailErrorSignUp,
            passwordErrorSignUp,
            confirmationError,
            emailFocusedSignUp,
            passwordFocusedSignUp,
            confirmPasswordFocused,
            refIdFocused,
        } = this.state;
        const { loading } = this.props;
        console.log(`requireverification ${Boolean(this.props.requireVerification)}`);
        const className = classnames('pg-sign-up-screen__container', { loading });
        return (
            <div className="pg-sign-up-screen">
                <div className={className}>
                    <SignUpForm
                        labelSignIn={this.props.intl.formatMessage({ id: 'page.header.signIn'})}
                        labelSignUp={this.props.intl.formatMessage({ id: 'page.header.signUp'})}
                        emailLabel={this.props.intl.formatMessage({ id: 'page.header.signUp.email'})}
                        passwordLabel={this.props.intl.formatMessage({ id: 'page.header.signUp.password'})}
                        confirmPasswordLabel={this.props.intl.formatMessage({ id: 'page.header.signUp.confirmPassword'})}
                        referalCodeLabel={this.props.intl.formatMessage({ id: 'page.header.signUp.referalCode'})}
                        termsMessage={this.props.intl.formatMessage({ id: 'page.header.signUp.terms'})}
                        refId={refId}
                        handleChangeRefId={this.handleChangeRefId}
                        isLoading={loading}
                        onSignIn={this.handleSignIn}
                        onSignUp={this.handleSignUp}
                        siteKey={siteKey()}
                        captchaType={captchaType()}
                        email={emailSignUp}
                        handleChangeEmail={this.handleChangeEmailSingUp}
                        password={passwordSignUp}
                        handleChangePassword={this.handleChangePasswordSignUp}
                        confirmPassword={confirmPassword}
                        handleChangeConfirmPassword={this.handleChangeConfirmPassword}
                        recaptchaConfirmed={recaptchaConfirmed}
                        recaptcha_response={recaptcha_response}
                        recaptchaOnChange={this.onChange}
                        hasConfirmed={hasConfirmed}
                        clickCheckBox={this.handleCheckboxClick}
                        validateForm={this.handleValidateFormSignUp}
                        emailError={emailErrorSignUp}
                        passwordError={passwordErrorSignUp}
                        confirmationError={confirmationError}
                        confirmPasswordFocused={confirmPasswordFocused}
                        refIdFocused={refIdFocused}
                        emailFocused={emailFocusedSignUp}
                        passwordFocused={passwordFocusedSignUp}
                        handleFocusEmail={this.handleFocusEmailSignUp}
                        handleFocusPassword={this.handleFocusPasswordSignUp}
                        handleFocusConfirmPassword={this.handleFocusConfirmPassword}
                        handleFocusRefId={this.handleFocusRefId}
                    />
                    <ModalSingup
                        show={this.state.showModalSignUp}
                        header={this.renderModalHeader()}
                        content={this.renderModalBody()}
                        footer={this.renderModalFooter()}
                    />
                </div>
            </div>
        );
    }
    private renderModalHeader = () => {
        return (
            <div className="pg-exchange-modal-submit-header">
                {this.props.intl.formatMessage({id: 'page.header.signUp.modal.header'})}
            </div>
        );
    };

    private renderModalBody = () => {
        return (
            <div className="pg-exchange-modal-submit-body">
                <h2>
                    {this.props.intl.formatMessage({id: 'page.header.signUp.modal.body'})}
                </h2>
            </div>
        );
    };

    private renderModalFooter = () => {
        return (
            <div className="pg-exchange-modal-submit-footer">
                <Button
                    className="pg-exchange-modal-submit-footer__button-inverse"
                    label="OK"
                    onClick={this.closeModal}
                />
            </div>
        );
    };

    private closeModal = () => {
        this.setState({showModalSignUp: false});
    };

    private handleFocusConfirmPassword = () => {
        this.setState({
            confirmPasswordFocused: !this.state.confirmPasswordFocused,
        });
    };

    private handleFocusRefId = () => {
        this.setState({
            refIdFocused: !this.state.refIdFocused,
        });
    };

    private handleChangeRefId = (value: string) => {
        this.setState({
            refId: value,
        });
    };

    private handleFocusEmailSignUp = () => {
        this.setState({
            emailFocusedSignUp: !this.state.emailFocused,
        });
    };

    private handleFocusPasswordSignUp = () => {
        this.setState({
            passwordFocusedSignUp: !this.state.emailFocused,
        });
    };

    private handleValidateFormSignUp = () => {
            const {email, password, confirmPassword} = this.state;
            const isEmailValid = email.match(EMAIL_REGEX);
            const isPasswordValid = password.match(PASSWORD_REGEX);
            const isConfirmPasswordValid = password === confirmPassword;

            if (!isEmailValid && !isPasswordValid) {
                this.setState({
                    confirmationError: '',
                    emailErrorSignUp: this.props.intl.formatMessage({ id: ERROR_INVALID_EMAIL }),
                    passwordErrorSignUp: this.props.intl.formatMessage({ id: ERROR_INVALID_PASSWORD }),
                    hasConfirmed: false,
                });
                return;
            }

            if (!isEmailValid) {
                this.setState({
                    confirmationError: '',
                    emailErrorSignUp: this.props.intl.formatMessage({ id: ERROR_INVALID_EMAIL }),
                    passwordErrorSignUp: '',
                    hasConfirmed: false,
                });
                return;
            }

            if (!isPasswordValid) {
                this.setState({
                    confirmationError: '',
                    emailErrorSignUp: '',
                    passwordErrorSignUp: this.props.intl.formatMessage({ id: ERROR_INVALID_PASSWORD }),
                    hasConfirmed: false,
                });
                return;
            }

            if (!isConfirmPasswordValid) {
                this.setState({
                    confirmationError: this.props.intl.formatMessage({ id: ERROR_PASSWORD_CONFIRMATION }),
                    emailErrorSignUp: '',
                    passwordErrorSignUp: '',
                    hasConfirmed: false,
                });
                return;
            }
    }


    private handleCheckboxClick = () => {
        this.setState({
            hasConfirmed: !this.state.hasConfirmed,
        });
    }

    private onChange = (value: string) => {
        this.setState({
            recaptchaConfirmed: true,
            recaptcha_response: value,
        });
    };

    private handleChangeConfirmPassword = (value: string) => {
        this.setState({
            confirmPassword: value,
        });
    };

    private renderForgotPassword = () => {

        const {
            emailForget,
            emailFocusedForget,
            emailErrorForget,
        } = this.state;
        return (
            <div className="pg-forgot-password-screen" style={{height:'100%', background:'transparent'}}>
                <div className="pg-forgot-password-screen__container">
                    <div className="pg-forgot-password___form">
                        <EmailForm
                            OnSubmit={this.handleChangeEmail}
                            title={this.props.intl.formatMessage({id: 'page.forgotPassword'})}
                            emailLabel={this.props.intl.formatMessage({id: 'page.forgotPassword.email'})}
                            buttonLabel={this.props.intl.formatMessage({id: 'page.forgotPassword.send'})}
                            email={emailForget}
                            emailFocused={emailFocusedForget}
                            emailError={emailErrorForget}
                            message={this.props.intl.formatMessage({id: 'page.forgotPassword.message'})}
                            validateForm={this.validateFormForget}
                            handleInputEmail={this.handleInputEmailForget}
                            handleFieldFocus={this.handleFocusEmail}
                            handleReturnBack={this.handleComeBack}
                        />
                    </div>
                </div>
            </div>
        );
    };
    private handleChangeEmail = () => {
        const { email} = this.state;
        //console.log(email);
        // const { i18n } = this.props;
        this.props.forgotPassword({
            email,
            // lang: i18n.toLowerCase(),
            lang: this.props.lang,
        });
    };
    private handleChangeEmailSingUp = (value: string) => {
        this.setState({
            email: value,
            emailSignUp: value,
        });
    };

    private handleChangePasswordSignUp = (value: string) => {
            this.setState({
                password: value,
                passwordSignUp: value,
            });
    };
    private handleFocusEmail = () => {
        this.setState({
            emailFocusedForget: !this.state.emailFocusedForget,
        });
    };

    // private handleInputEmail = (value: string) => {
    //     this.setState({
    //         email: value,
    //     });
    // };

    private handleInputEmailForget = (value: string) => {
        this.setState({
            emailForget: value,
        });
        this.setState({
            email: value,
        });
    };

    private validateFormForget = () => {
        const { emailForget } = this.state;
        const isEmailValid = emailForget ? emailForget.match(EMAIL_REGEX) : true;
        if (!isEmailValid) {
            this.setState({
                emailErrorForget: ERROR_INVALID_EMAIL,
            });
            return;
        }
    };

    private handleComeBack = () => {
        this.props.history.goBack();
    };

    private forgotPassword = () => {
        this.onCloseModal();
        this.onOpenForgetModal();
    };

    private handle2FASignIn = () => {
        const { email, password, otpCode } = this.state;
        const lang = this.props.lang;
        if (!otpCode) {
            this.setState({
                error2fa: 'Please enter 2fa code',
            });
        } else {
            this.props.signIn({
                lang,
                email,
                password,
                otp_code: otpCode,
            });
        }
    };
    private handleSignIn = () => {
        const { email, password } = this.state;
        const lang = this.props.lang;
        this.props.signIn({
            lang,
            email,
            password,
        });
        //console.log(Boolean(this.props.require2FA));
    };
    private handleFieldFocus = (field: string) => {
        switch (field) {
            case 'email':
                this.setState(prev => ({
                    emailFocused: !prev.emailFocused,
                }));
                break;
            case 'password':
                this.setState(prev => ({
                    passwordFocused: !prev.passwordFocused,
                }));
                break;
            default:
                break;
        }
    };
    private validateForm = () => {
        const { email, password } = this.state;
        const isEmailValid = email.match(EMAIL_REGEX);
        if (!isEmailValid) {
            this.setState({
                emailError: 'this.props.intl.formatMessage({ id: ERROR_INVALID_EMAIL })',
                passwordError: '',
            });
            return;
        }
        if (!password) {
            this.setState({
                emailError: '',
                passwordError: 'this.props.intl.formatMessage({ id: ERROR_EMPTY_PASSWORD })',
            });
            return;
        }
    };
    private refreshError = () => {
        this.setState({
            emailError: '',
            passwordError: '',
        });
    };
    private handleChangeEmailValue = (value: string) => {
        this.setState({
            email: value,
        });
    };
    private handleChangePasswordValue = (value: string) => {
        this.setState({
            password: value,
        });
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        emailVerificationLoading: selectSendEmailVerificationLoading(state),
        requireVerification: selectSignUpRequireVerification(state),
        currentMarket: selectCurrentMarket(state),
        address: '',
        lang: selectCurrentLanguage(state),
        user: selectUserInfo(state),
        isLoggedIn: selectUserLoggedIn(state),
        success: selectForgotPasswordSuccess(state),
        require2FA: selectSignInRequire2FA(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeLanguage: payload => dispatch(changeLanguage(payload)),
        forgotPassword: credentials => dispatch(forgotPassword(credentials)),
        logout: () => dispatch(logoutFetch()),
        walletsReset: () => dispatch(walletsReset()),
        signIn: data => dispatch(signIn(data)),
        signInError: error => dispatch(signInError(error)),
        signInRequire2FA: payload => dispatch(signInRequire2FA(payload)),
        signUpRequireVerification: data => dispatch(signUpRequireVerification(data)),
        signUp: credentials => dispatch(signUp(credentials)),
        emailVerificationFetch: payload => dispatch(emailVerificationFetch(payload)),
    });

// tslint:disable-next-line:no-any
const NavBar = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent) as any) as any) ;

export {
    NavBar,
};

/*
 Line 247
 <button onClick={this.onOpenModal} style={{ color:'#000', display: (this.props.isLoggedIn) ? 'none' : 'block'}}>signIn</button>
                <button onClick={this.onOpenSignUpModal} style={{ color:'#000', display: (this.props.isLoggedIn) ? 'none' : 'block'}}>signUp</button>
*/
