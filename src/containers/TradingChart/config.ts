import { ThemeName } from '../../charting_library/charting_library.min';
import {
    customWidgetOptions,
    customWidgetParams,
} from '../../custom/tradingChartConfig';

export const widgetParams = {
    interval: '15',
    containerId: 'tv_chart_container',
    ...customWidgetParams,
};

export const widgetOptions = {
    allow_symbol_change: false,
    autosize: true,
    calendar: true,
    client_id: 'tradingview.com',
    custom_css_url: '/css/tradingview.css',
    debug: false,
    details: true,
    disabled_features: ['use_localstorage_for_settings', 'header_symbol_search'],
    enable_publishing: false,
    enabled_features: ['show_animated_logo'],
    fullscreen: false,
    height: 610,
    hide_side_toolbar: false,
    hotlist: true,
    library_path: '/charting_library/',
    loading_screen: {
        backgroundColor: '#212328',
    },
    overrides: {
        ['symbolWatermarkProperties.color']: '#212328',
        ['volumePaneSize']: 'large',
        ['mainSeriesProperties.candleStyle.upColor']: '#12C096',
        ['mainSeriesProperties.candleStyle.downColor']: '#BF357F',
        ['mainSeriesProperties.candleStyle.borderUpColor']: '#12C096',
        ['mainSeriesProperties.candleStyle.borderDownColor']: '#BF357F',
        ['mainSeriesProperties.candleStyle.wickUpColor']: '#12C096',
        ['mainSeriesProperties.candleStyle.wickDownColor']: '#BF357F',
        ['paneProperties.background']: '#212328',
        ['paneProperties.vertGridProperties.color']: '#212328',
        ['paneProperties.vertGridProperties.style']: 1,
        ['paneProperties.horzGridProperties.color']: '#212328',
        ['paneProperties.horzGridProperties.style']: 1,
        ['paneProperties.crossHairProperties.color']: '#212328',
        ['paneProperties.crossHairProperties.width']: 1,
        ['paneProperties.crossHairProperties.style']: 1,
        ['scalesProperties.backgroundColor']: '#212328',
    },
    popup_height: '50',
    popup_width: '000',
    show_popup_button: true,
    studies_overrides: {},
    theme: 'Dark' as ThemeName,
    timeframe: '1D',
    toolbar_bg: '#212328',
    user_id: 'public_user_id',
    withdateranges: false,
    ...customWidgetOptions,
};