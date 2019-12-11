import * as React from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import logo = require('../../assets/images/logo.svg');
import {
  RootState,
  selectMobileWalletUi,
  setMobileWalletUi,
} from '../../modules';
import { NavBar } from '../NavBar';
// import News from './newsHeadline';

interface HeaderState {
    isActive: boolean;
}

interface ReduxProps {
    mobileWallet: string;
}

interface DispatchProps {
    setMobileWalletUi: typeof setMobileWalletUi;
}

// tslint:disable no-any jsx-no-multiline-js
class Head extends React.Component<any, HeaderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isActive: true,
        };
    }

    public render() {
        const { location, mobileWallet } = this.props;
        const { isActive } = this.state;
        return (
          <React.Fragment>
          {!['/confirm'].some(r => location.pathname.includes(r)) &&
            <header className={'pg-header pg-header--active'}>
                <div className="pg-container pg-header__content">
                <a href={window.env.api.applogicUrl.substring(0, window.env.api.applogicUrl.length - 15)}>
                         <div className="pg-logo">
                            {/* <div id="MainLogo"  style={{ height:'50px' ,width:'50px' , margin:'0 10px', padding:'0 10px'}}/> */}
                            {/* <img src={require('./Speza_exchange_logo1.gif')} alt="speza" /> */}
                            {/* <img src={logo} className="pg-logo__img" alt="Logo" /> */}
                            <img src={require('./Speza_exchange_logo_beta.png')} className="pg-logo__img static" alt="Logo" /><img  className="pg-logo__img active" src={require('./Speza_exchange_logo_b.gif')} alt="speza" />
                            {/* <img  className="BetaTag" src={require('./betatag.svg')} alt="speza" /> */}
                        </div>
                    </a>
                    <div className="pg-header__location">
                        {mobileWallet ? <span>{mobileWallet}</span> : <span>{location.pathname.split('/')[1]}</span>}
                    </div>
                    {mobileWallet ?
                        <div
                            onClick={this.backWallets}
                            className="pg-header__toggler"
                        >
                            <img src={require(`./back.svg`)} />
                        </div> :
                        <div
                            onClick={this.openMenu}
                            className={`pg-header__toggler ${isActive ? 'pg-header__toggler--active' : ''}`}
                        >
                            <span className="pg-header__toggler-item"/>
                            <span className="pg-header__toggler-item"/>
                            <span className="pg-header__toggler-item"/>
                        </div>
                    }
                    <div className="pg-header__navbar">
                        <NavBar onLinkChange={this.closeMenu}/>
                    </div>
                </div>
            </header>}
          </React.Fragment>
        );
    }

    private openMenu = () => {
        this.setState({
            isActive: true,
        });
        document.getElementsByClassName('pg-header__navbar')[0].addEventListener('click', this.handleOutsideClick);
    }

    private backWallets = () => {
        this.props.setMobileWalletUi('');
    }

    private closeMenu = (e: any) => {
        this.setState({
            isActive: false,
        });
        this.props.setMobileWalletUi('');
    }

    private handleOutsideClick = (e: any) => {
        if (e.offsetX > e.target.clientWidth) {
            this.setState({
                isActive: false,
            });
            document.getElementsByClassName('pg-header__navbar')[0].removeEventListener('click', this.handleOutsideClick);
        }
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    mobileWallet: selectMobileWalletUi(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        setMobileWalletUi: payload => dispatch(setMobileWalletUi(payload)),
    });

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Head) as any) as any;

export {
    HeaderState,
    Header,
};
