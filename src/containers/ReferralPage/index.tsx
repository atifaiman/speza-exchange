import { QRCode } from '@openware/components';
import * as React from 'react';
import {
    InjectedIntlProps,
    injectIntl,
    intlShape,
} from 'react-intl';
import { connect, MapDispatchToProps } from 'react-redux';
import {
    alertPush,
    RootState,
    selectUserInfo,
    User,
} from '../../modules';

interface ReduxProps {
    user: User;
}

interface DispatchProps {
    fetchSuccess: typeof alertPush;
}


type CopyTypes = HTMLInputElement | null;

const copy = (id: string) => {
    const copyText: CopyTypes = document.querySelector(`#${id}`);

    if (copyText) {
        copyText.select();

        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
};

type Props = ReduxProps & DispatchProps & InjectedIntlProps;

class ReferralPageClass extends React.Component<Props> {
    //tslint:disable-next-line:no-any
    public static propsTypes: React.ValidationMap<any> = {
        intl: intlShape.isRequired,
    };

    public translate = (e: string) => {
        return this.props.intl.formatMessage({id: e});
    };

    public doCopy = () => {
        copy('referral-id');
        this.props.fetchSuccess({message: ['page.body.wallets.tabs.deposit.ccy.message.success'], type: 'success'});
    };

    public render() {
        const { user } = this.props;
        const referralLink = `${window.document.location.origin}/signup?refid=${user.uid}`;
        return (
            <div className={(user.uid) ? 'mb-3' : 'referralNotLogged'}>
                <div className="ReferralContent">
                    <img src={require('./padlock.png')}  className="ReferralSectionImage3"/>
                    <input value={referralLink} />
                    <button className="ReferralCopyButton" onClick={this.doCopy}>{this.translate('page.body.profile.content.copyLink')}</button>
                </div>
                <div className="refferalQR">
                     <QRCode dimensions={160} data={referralLink}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    user: selectUserInfo(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    fetchSuccess: payload => dispatch(alertPush(payload)),
});

// tslint:disable-next-line
export const ReferralPage = injectIntl(connect(mapStateToProps, mapDispatchToProps)(ReferralPageClass ) as any);
