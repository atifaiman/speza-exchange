import * as React from 'react';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import DatePicker from 'react-date-picker';

const markets = [
    {
        title: 'Rakunisation',
        status: 'running',
        timeInterval: 'something to see',
        priceInUSD: 0.05,
        description: 'A new ecosystem at the apex of Games and Blockchain Technology.',
        content: `The RAKUN entertainment platform gives players a more immersive experience, bridging them into a new type of (game) economy via Blockchain.

        The ecosystem deepens this link between virtual and reality through real user activity and real play, creating token supply and demand.

        Tokens can be exchanged for in-game items within our first already running blockchain game, CryptOink, as well as other existing and forthcoming products.

        During the IEO we're hosting a number of fun events on CryptOink such as daily races and tournaments!

        Limited-time Bonuses!

        ・Receive a bonus 15% additional RAKU tokens if you participate before December 5th.

        ・Receive a bonus 5% additional RAKY tokens if you participate before December 9th!

        Purchase more than 10,000 RAKU and receive a limited edition, Liquid-inspired Crypton!`,
        icon: 'Will be linked',
    },
    {
        title: 'Rakunisation 2.0',
        status: 'running',
        timeInterval: 'something to see',
        priceInUSD: 0.05,
        description: 'A new ecosystem at the apex of Games and Blockchain Technology.',
        content: `The RAKUN entertainment platform gives players a more immersive experience, bridging them into a new type of (game) economy via Blockchain.

        The ecosystem deepens this link between virtual and reality through real user activity and real play, creating token supply and demand.

        Tokens can be exchanged for in-game items within our first already running blockchain game, CryptOink, as well as other existing and forthcoming products.

        During the IEO we're hosting a number of fun events on CryptOink such as daily races and tournaments!

        Limited-time Bonuses!

        ・Receive a bonus 15% additional RAKU tokens if you participate before December 5th.

        ・Receive a bonus 5% additional RAKY tokens if you participate before December 9th!

        Purchase more than 10,000 RAKU and receive a limited edition, Liquid-inspired Crypton!`,
        icon: 'Will be linked',
    },
    {
        title: 'Rakunisation 3.0',
        status: 'running',
        timeInterval: 'something to see',
        priceInUSD: 0.05,
        description: 'A new ecosystem at the apex of Games and Blockchain Technology.',
        content: `The RAKUN entertainment platform gives players a more immersive experience, bridging them into a new type of (game) economy via Blockchain.

        The ecosystem deepens this link between virtual and reality through real user activity and real play, creating token supply and demand.

        Tokens can be exchanged for in-game items within our first already running blockchain game, CryptOink, as well as other existing and forthcoming products.

        During the IEO we're hosting a number of fun events on CryptOink such as daily races and tournaments!

        Limited-time Bonuses!

        ・Receive a bonus 15% additional RAKU tokens if you participate before December 5th.

        ・Receive a bonus 5% additional RAKY tokens if you participate before December 9th!

        Purchase more than 10,000 RAKU and receive a limited edition, Liquid-inspired Crypton!`,
        icon: 'Will be linked',
    },
    {
        title: 'Rakunisation 4.0',
        status: 'running',
        timeInterval: 'something to see',
        priceInUSD: 0.05,
        description: 'A new ecosystem at the apex of Games and Blockchain Technology.',
        content: `The RAKUN entertainment platform gives players a more immersive experience, bridging them into a new type of (game) economy via Blockchain.

        The ecosystem deepens this link between virtual and reality through real user activity and real play, creating token supply and demand.

        Tokens can be exchanged for in-game items within our first already running blockchain game, CryptOink, as well as other existing and forthcoming products.

        During the IEO we're hosting a number of fun events on CryptOink such as daily races and tournaments!

        Limited-time Bonuses!

        ・Receive a bonus 15% additional RAKU tokens if you participate before December 5th.

        ・Receive a bonus 5% additional RAKY tokens if you participate before December 9th!

        Purchase more than 10,000 RAKU and receive a limited edition, Liquid-inspired Crypton!`,
        icon: 'Will be linked',
    },
    {
        title: 'Rakunisation 5.0',
        status: 'running',
        timeInterval: 'something to see',
        priceInUSD: 0.05,
        description: 'A new ecosystem at the apex of Games and Blockchain Technology.',
        content: `The RAKUN entertainment platform gives players a more immersive experience, bridging them into a new type of (game) economy via Blockchain.

        The ecosystem deepens this link between virtual and reality through real user activity and real play, creating token supply and demand.

        Tokens can be exchanged for in-game items within our first already running blockchain game, CryptOink, as well as other existing and forthcoming products.

        During the IEO we're hosting a number of fun events on CryptOink such as daily races and tournaments!

        Limited-time Bonuses!

        ・Receive a bonus 15% additional RAKU tokens if you participate before December 5th.

        ・Receive a bonus 5% additional RAKY tokens if you participate before December 9th!

        Purchase more than 10,000 RAKU and receive a limited edition, Liquid-inspired Crypton!`,
        icon: 'Will be linked',
    },
];

const ICODiscoveryComponent: React.FC<RouterProps> = () => {
    return (
        <div>
            <div className="page-body">
                <div className="page-body-banner" />
                <div className="page-body-content">
                    <div className="discovery-menu" />
                    <div className="discovery-category" />
                    <div className="discovery-list">
                        {/* tslint:disable-next-line */}
                        {markets.map((market, index) => (
                            <div className="new-card-container" key={index}>
                                <div className="new-card-cover-image">
                                    <div className="new-card-logo" />
                                </div>
                                <div className="new-card-content">
                                    <p className="new-card-status">{market.status}  -  <span className="new-card-time">{market.timeInterval}</span></p>
                                    <p className="new-card-title">{market.title}</p>
                                    <p className="new-card-description">{market.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-menu" />
        </div>
    );
};

// tslint:disable-next-line:no-any
const ICODiscoveryScreen = withRouter(ICODiscoveryComponent as any);

export {
    ICODiscoveryScreen,
};
