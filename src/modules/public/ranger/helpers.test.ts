import { Market, Ticker, TickerEvent } from '../markets';
import { formatTicker, generateSocketURI, marketKlineStreams, periodMinutesToString, periodStringToMinutes, streamsBuilder } from './helpers';

describe('ranger helpers', () => {
    describe('generateSocketURI', () => {
        it('build docker URI with streams', () => {
            expect(
                generateSocketURI('ws://example.com/public', ['aaa', 'bbb']),
            ).toEqual('ws://example.com/public/?stream=aaa&stream=bbb');
        });
    });

    describe('formatTicker', () => {
        const tickerEvents: { [pair: string]: TickerEvent } = {
            ethzar: {
                name: 'ETH/ZAR',
                base_unit: 'eth',
                quote_unit: 'zar',
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                volume: '8.0',
                sell: '70.0',
                buy: '69.0',
                at: 1547625102601,
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
            xrpbtc: {
                name: 'XRP/BTC',
                base_unit: 'xrp',
                quote_unit: 'btc',
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                volume: '9.0',
                sell: '80.0',
                buy: '79.0',
                at: 1547625102601,
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
            ltcbtc: {
                name: 'LTC/BTC',
                base_unit: 'ltc',
                quote_unit: 'btc',
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                volume: '10.0',
                sell: '90.0',
                buy: '89.0',
                at: 1547625102601,
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
        };
        const tickers: { [pair: string]: Ticker } = {
            ethzar: {
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                vol: '8.0',
                sell: '70.0',
                buy: '69.0',
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
            xrpbtc: {
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                vol: '9.0',
                sell: '80.0',
                buy: '79.0',
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
            ltcbtc: {
                low: '0.001',
                high: '0.145',
                last: '0.134',
                open: 0.134,
                vol: '10.0',
                sell: '90.0',
                buy: '89.0',
                avg_price: '69.5',
                price_change_percent: '+10.05%',
            },
        };

        it('formats tickers info from events', () => {
            expect(formatTicker(tickerEvents)).toEqual(tickers);
        });
    });

    describe('streamsBuilder', () => {
        const marketExample: Market = {
            id: 'abcdefg',
            name: 'ABCD/EFG',
            ask_unit: 'abcd',
            bid_unit: 'efg',
            ask_fee: '0.001',
            bid_fee: '0.002',
            min_ask_price: '0.015',
            max_bid_price: '0.016',
            min_ask_amount: '0.00001',
            min_bid_amount: '0.00002',
            ask_precision: 6,
            bid_precision: 6,
        };

        it('returns public streams without market', () => {
            expect(streamsBuilder(false, [], undefined)).toEqual([
                'global.tickers',
            ]);
        });

        it('returns public streams with market', () => {
            expect(streamsBuilder(false, [], marketExample)).toEqual([
                'global.tickers',
                'abcdefg.trades',
                'abcdefg.update',
            ]);
        });

        it('includes private streams', () => {
            expect(streamsBuilder(true, [], undefined)).toEqual([
                'global.tickers',
                'order',
                'trade',
            ]);
        });

        it('includes public/privates streams with market', () => {
            expect(streamsBuilder(true, [], marketExample)).toEqual([
                'global.tickers',
                'order',
                'trade',
                'abcdefg.trades',
                'abcdefg.update',
            ]);
        });

        it('includes previous subscriptions in the list', () => {
            expect(
                streamsBuilder(true, ['some subscription'], marketExample),
            ).toEqual([
                'global.tickers',
                'order',
                'trade',
                'abcdefg.trades',
                'abcdefg.update',
                'some subscription',
            ]);
        });

        it('do not duplicates previous subscriptions', () => {
            expect(
                streamsBuilder(true, ['global.tickers'], marketExample),
            ).toEqual([
                'global.tickers',
                'order',
                'trade',
                'abcdefg.trades',
                'abcdefg.update',
            ]);
        });
    });

    describe('periodStringToMinutes and periodMinutesToString', () => {
        const periods = [
            1,
            5,
            15,
            30,
            60,
            120,
            240,
            360,
            720,
            1440,
            4320,
            10080,
        ];

        for (const period of periods) {
            it(`map period ${period} minute(s)`, () => {
                expect(periodStringToMinutes(periodMinutesToString(period))).toEqual(period);
            });
        }
    });

    describe('marketKlineStreams', () => {
        it('', () => {
            expect(marketKlineStreams('abc', '18m')).toEqual({
                channels: [
                    'abc.kline-18m',
                ],
            });
        });
    });
});
