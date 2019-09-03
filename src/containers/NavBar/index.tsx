import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { pgRoutes } from '../../constants';
import {
    changeLanguage,
    logoutFetch,
    Market,
    RootState,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectUserInfo,
    selectUserLoggedIn,
    User,
    walletsReset,
} from '../../modules';

export interface ReduxProps {
    currentMarket: Market | undefined;
    address: string;
    isLoggedIn: boolean;
    lang: string;
    success?: boolean;
    user: User;
}

interface DispatchProps {
    changeLanguage: typeof changeLanguage;
    logout: typeof logoutFetch;
    walletsReset: typeof walletsReset;
}

export interface OwnProps {
    onLinkChange?: () => void;
    history: History;
}

type NavbarProps = OwnProps & ReduxProps & RouteProps & DispatchProps;


interface NavbarState {
    isOpen: boolean;
    isOpenLanguage: boolean;
    email: string;
    message: string;
    name: string;
    recaptchaResponse: string;
    errorModal: boolean;
}

class NavBarComponent extends React.Component<NavbarProps, NavbarState> {
    public readonly state = {
        isOpen: false,
        isOpenLanguage: false,
        email: '',
        name: '',
        message: '',
        recaptchaResponse: '',
        errorModal: false,
    };

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
            <li onClick={handleLinkChange} key={index} >
                <div className="buttonNavMobile">
                    <div className={`${ !isLoggedIn && (name === 'page.header.navbar.wallets') ? 'mobileNavWallet' : !isLoggedIn && (name === 'page.header.navbar.openOrders') ? 'mobileNavOrder' : !isLoggedIn && (name === 'page.header.navbar.history') ? 'mobileNavHistory' :  !isLoggedIn && (name === 'page.header.navbar.profile') ? 'mobileNavAccount' : !isLoggedIn && (name === 'page.header.navbar.signIn') ? 'mobileNavSign' : 'mobileNav'}`}>
                        <Link className={cx} to={path}>
                            <div className="navbarIcon" >
                                <div className={`${(name === 'page.header.navbar.trade') ? 'iconNavTrade' : (name === 'page.header.navbar.wallets') ? 'iconNavWallet' : (name === 'page.header.navbar.Landing') ? 'iconNavHome' : (name === 'page.header.navbar.openOrders') ? 'iconNavOrder' : (name === 'page.header.navbar.history') ? 'iconNavHistory' : (name === 'page.header.navbar.signIn') ? 'iconNavSign' : (name === 'page.header.navbar.profile') ? 'iconNavAccount' :'z'}`}/>
                            </div>
                            <FormattedMessage id={name}/>
                        </Link>
                    </div>
                </div>
            </li>
        );
    };

    public render() {
        const { location, user } = this.props;
        //const { location, user, lang } = this.props;
        const { isOpenLanguage } = this.state;
        const address = location ? location.pathname : '';
        // const languageName = (lang === 'zh') ? '中文' : (lang === 'en') ?  'English' : lang.toUpperCase();
        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });

        return (
            <div className={'pg-navbar'}>
                {user.email ? this.getProfile() : null}
                <ul className="pg-navbar__content">
                    {pgRoutes(!!user.email).map(this.navItem(address, this.props.onLinkChange))}
                </ul>
                <div className="pg-navbar__header-settings">
                    {user.email ? this.getUserEmailMenu() : null}
                    <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-toggle dropdown-menu-language-container">
                        <div onClick={this.toggleLanguageMenu} className={languageClassName}>
                             <img className="languageIcon" src={require('./top_navbar_language.png')} />
                            <img className="icon" src={require(`./${isOpenLanguage ? 'open' : 'close'}-icon.svg`)} />
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
                            <a href="https://speza.zendesk.com/hc/en-us/articles/360032604332-Referral-Bonus-Program" target="_blank">
                            <div className="topNavbarMobileReferralRewads">
                                <div><img className="topNavimg" src={require('./top_navbar_referral rewards.png')}/></div>
                                <div><p style={{fontSize:'10px'}}><FormattedMessage id={'page.header.navbar.ReferralRewads'} /></p></div>
                            </div>
                            </a>
                    </div>
                </div>
                <div className="pg-navbar__header-language" onClick={this.toggleLanguageMenu}>
                    <span>LANGUAGE</span>
                    <span>
                        <img className="icon" src={require(`./${isOpenLanguage ? 'open' : 'close'}-icon.svg`)} />
                    </span>
                    {isOpenLanguage ? this.getLanguageMenu() : null}
                </div>
            </div>
        );
    }

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
            <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-toggle">
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
        this.setState({
            isOpen: false,
        }, () => {
            this.props.logout();
        });
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

    private closeLanguageMenu = () => {
        this.setState({
            isOpenLanguage: false,
        }, () => {
            document.removeEventListener('click', this.closeLanguageMenu);
        });
    }

    private handleChangeLanguage = (language: string) => {
        this.props.changeLanguage(language);
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        currentMarket: selectCurrentMarket(state),
        address: '',
        lang: selectCurrentLanguage(state),
        user: selectUserInfo(state),
        isLoggedIn: selectUserLoggedIn(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeLanguage: payload => dispatch(changeLanguage(payload)),
        logout: () => dispatch(logoutFetch()),
        walletsReset: () => dispatch(walletsReset()),
    });

// tslint:disable-next-line:no-any
const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent) as any) as any;

export {
    NavBar,
};
/*
    <div className="dropdown-menu-item-lang" onClick={e => this.handleChangeLanguage('ru')}>
            RU
    </div>

    <div className="buttonNavMobile">
    <div className={`${ !isLoggedIn && (name === 'page.header.navbar.wallets') ? 'mobileNavWallet' : !isLoggedIn && (name === 'page.header.navbar.openOrders') ? 'mobileNavOrder' : !isLoggedIn && (name === 'page.header.navbar.history') ? 'mobileNavHistory' :  !isLoggedIn && (name === 'page.header.navbar.profile') ? 'mobileNavAccount' : !isLoggedIn && (name === 'page.header.navbar.signIn') ? 'mobileNavSign' : 'mobileNav'}`}>
        <Link className={cx} to={path}>
            <img className="navbarIcon" src={require(`./${(name === 'page.header.navbar.trade') ? 'icon_trading.png' : (name === 'page.header.navbar.wallets') ? 'icon_wallet.png' : (name === 'page.header.navbar.Landing') ? 'icon_home.png' : (name === 'page.header.navbar.openOrders') ? 'icon_history.png' : (name === 'page.header.navbar.history') ? 'icon_history.png' : (name === 'page.header.navbar.signIn') ? 'Sign-in.png' : (name === 'page.header.navbar.profile') ? 'icon_account.png' :''}`)}/>
            <FormattedMessage id={name}/>
        </Link>
    </div>
    </div>
*/
