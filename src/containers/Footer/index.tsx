import * as React from 'react';
// import { FormattedHTMLMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';

class FooterComponent extends React.Component {

    public render() {
        if (location.pathname.startsWith('/confirm')) {
            return <React.Fragment />;
        }

        const startDate = process.env.BUILD_EXPIRE ? (new Date(+process.env.BUILD_EXPIRE)).getTime() : '';
        const today = new Date().getTime();

        return (
            <React.Fragment>
                <footer className="pg-footer">
                    {startDate && <span>EXPIRE IN <b>{Math.ceil((startDate - today) / (3600 * 1000 * 24))} days</b></span>}
                    <span>© 2019 SINOPHIL ECONOMIC ZONE DAX MANAGEMENT SDN BHD. All Rights Reserved.</span>
                </footer>
            </React.Fragment>
        );
    }
}

// tslint:disable-next-line:no-any <FormattedHTMLMessage id="page.footer.terms" />
const Footer = withRouter(FooterComponent as any);

export {
    Footer,
};
