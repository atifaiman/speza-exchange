import {
    Button,
    /* Dropdown,*/
} from '@openware/components';
import cr from 'classnames';
import countries = require('i18n-iso-countries');
import * as React from 'react';
import DatePicker from 'react-date-picker';
import { InjectedIntlProps, injectIntl } from 'react-intl';
// import MaskInput from 'react-maskinput';
import {
  connect,
  MapDispatchToPropsFunction,
} from 'react-redux';
import Select from 'react-select';
// import { formatDate, isDateInFuture } from '../../../helpers';
import {RootState, selectCurrentLanguage} from '../../../modules';
import {
    selectSendIdentitySuccess,
    sendIdentity,
} from '../../../modules/user/kyc/identity';
import { labelFetch } from '../../../modules/user/kyc/label';
// import { nationalities } from '../../../translations/nationalities';

interface ReduxProps {
    success?: string;
    lang: string;
}

interface DispatchProps {
    sendIdentity: typeof sendIdentity;
    labelFetch: typeof labelFetch;
}

interface OnChangeEvent {
    target: {
        value: string;
    };
}

interface IdentityState {
    city: string;
    countryOfBirth: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    national: string;
    metadata: {
        nationality: string,
    };
    postcode: string;
    residentialAddress: string;
    cityFocused: boolean;
    dateOfBirthFocused: boolean;
    firstNameFocused: boolean;
    lastNameFocused: boolean;
    postcodeFocused: boolean;
    residentialAddressFocused: boolean;
    date: Date;
    selectedOption ;
}

type Props = ReduxProps & DispatchProps & InjectedIntlProps;

class IdentityComponent extends React.Component<Props, IdentityState> {
    public state = {
        city: '',
        countryOfBirth: '',
        dateOfBirth: '',
        firstName: '',
        lastName: '',
        national: '',
        metadata: {
            nationality: '',
        },
        postcode: '',
        residentialAddress: '',
        cityFocused: false,
        dateOfBirthFocused: false,
        firstNameFocused: false,
        lastNameFocused: false,
        postcodeFocused: false,
        residentialAddressFocused: false,
        date: new Date(),
        selectedOption: null,
    };
    public onChange = date => {
        this.setState({ date });
    }

    public translate = (e: string) => {
        return this.props.intl.formatMessage({id: e});
    };

    public componentDidUpdate(prev: Props) {
        if (!prev.success && this.props.success) {
            this.props.labelFetch();
        }
    }
    public handleSelectItemChange = selectedOption => {
        const code = countries.getAlpha2Code(selectedOption.label ,(`${this.translate('page.body.kyc.documents.expiryDate')}` === 'Expiration Date') ? 'en' : 'zh');
        this.setState({ selectedOption });
        this.setState({
            countryOfBirth: code,
        });
    };

    public render() {
        const {
            city,
            // dateOfBirth,
            firstName,
            lastName,
            postcode,
            residentialAddress,
            cityFocused,
            dateOfBirthFocused,
            firstNameFocused,
            lastNameFocused,
            postcodeFocused,
            residentialAddressFocused,
            countryOfBirth,
            // metadata,
            selectedOption,
            national,
        } = this.state;
        const { success, lang } = this.props;

        const cityGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': cityFocused,
        });

        const dateOfBirthGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': dateOfBirthFocused,
        });

        const firstNameGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': firstNameFocused,
        });

        const lastNameGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': lastNameFocused,
        });

        const postcodeGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': postcodeFocused,
        });

        const residentialAddressGroupClass = cr('pg-confirm__content-identity-col-row-content', {
            'pg-confirm__content-identity-col-row-content--focused': residentialAddressFocused,
        });
        const customStyles = {
            control: (base, state) => ({
              ...base,
              border: 'none',
              color: '#fff',
              background: 'transparent',
              boxShadow: `0 0 0 0 'white'`,
              '&:foucus': { border: 'none', background: 'transparent'},
            }),
          };

        // const dataNationalities = nationalities.map(value => {
        //     return this.translate(value);
        // });
        // const onSelectNationality = value => this.selectNationality(dataNationalities[value]);

        /* tslint:disable */
        countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
        countries.registerLocale(require("i18n-iso-countries/langs/ru.json"));
        countries.registerLocale(require("i18n-iso-countries/langs/zh.json"));
        /* tslint:enable */

        const dataCountries = Object.values(countries.getNames(lang));
        const options = [
            { value: dataCountries[0] , label: dataCountries[0]},
            { value: dataCountries[1] , label: dataCountries[1]},
            { value: dataCountries[2] , label: dataCountries[2]},
            { value: dataCountries[3] , label: dataCountries[3]},
            { value: dataCountries[4] , label: dataCountries[4]},
            { value: dataCountries[5] , label: dataCountries[5]},
            { value: dataCountries[6] , label: dataCountries[6]},
            { value: dataCountries[7] , label: dataCountries[7]},
            { value: dataCountries[8] , label: dataCountries[8]},
            { value: dataCountries[9] , label: dataCountries[9]},
            { value: dataCountries[10] , label: dataCountries[10]},
            { value: dataCountries[11] , label: dataCountries[11]},
            { value: dataCountries[12] , label: dataCountries[12]},
            { value: dataCountries[13] , label: dataCountries[13]},
            { value: dataCountries[14] , label: dataCountries[14]},
            { value: dataCountries[15] , label: dataCountries[15]},
            { value: dataCountries[16] , label: dataCountries[16]},
            { value: dataCountries[17] , label: dataCountries[17]},
            { value: dataCountries[18] , label: dataCountries[18]},
            { value: dataCountries[19] , label: dataCountries[19]},
            { value: dataCountries[20] , label: dataCountries[20]},
            { value: dataCountries[21] , label: dataCountries[21]},
            { value: dataCountries[22] , label: dataCountries[22]},
            { value: dataCountries[23] , label: dataCountries[23]},
            { value: dataCountries[24] , label: dataCountries[24]},
            { value: dataCountries[25] , label: dataCountries[25]},
            { value: dataCountries[26] , label: dataCountries[26]},
            { value: dataCountries[27] , label: dataCountries[27]},
            { value: dataCountries[28] , label: dataCountries[28]},
            { value: dataCountries[29] , label: dataCountries[29]},
            { value: dataCountries[30] , label: dataCountries[30]},
            { value: dataCountries[31] , label: dataCountries[31]},
            { value: dataCountries[32] , label: dataCountries[32]},
            { value: dataCountries[33] , label: dataCountries[33]},
            { value: dataCountries[34] , label: dataCountries[34]},
            { value: dataCountries[35] , label: dataCountries[35]},
            { value: dataCountries[36] , label: dataCountries[36]},
            { value: dataCountries[37] , label: dataCountries[37]},
            { value: dataCountries[38] , label: dataCountries[38]},
            { value: dataCountries[39] , label: dataCountries[39]},
            { value: dataCountries[40] , label: dataCountries[40]},
            { value: dataCountries[41] , label: dataCountries[41]},
            { value: dataCountries[42] , label: dataCountries[42]},
            { value: dataCountries[43] , label: dataCountries[43]},
            { value: dataCountries[44] , label: dataCountries[44]},
            { value: dataCountries[45] , label: dataCountries[45]},
            { value: dataCountries[46] , label: dataCountries[46]},
            { value: dataCountries[47] , label: dataCountries[47]},
            { value: dataCountries[48] , label: dataCountries[48]},
            { value: dataCountries[49] , label: dataCountries[49]},
            { value: dataCountries[50] , label: dataCountries[50]},
            { value: dataCountries[51] , label: dataCountries[51]},
            { value: dataCountries[52] , label: dataCountries[52]},
            { value: dataCountries[53] , label: dataCountries[53]},
            { value: dataCountries[54] , label: dataCountries[54]},
            { value: dataCountries[55] , label: dataCountries[55]},
            { value: dataCountries[56] , label: dataCountries[56]},
            { value: dataCountries[57] , label: dataCountries[57]},
            { value: dataCountries[58] , label: dataCountries[58]},
            { value: dataCountries[59] , label: dataCountries[59]},
            { value: dataCountries[60] , label: dataCountries[60]},
            { value: dataCountries[61] , label: dataCountries[61]},
            { value: dataCountries[62] , label: dataCountries[62]},
            { value: dataCountries[63] , label: dataCountries[63]},
            { value: dataCountries[64] , label: dataCountries[64]},
            { value: dataCountries[65] , label: dataCountries[65]},
            { value: dataCountries[66] , label: dataCountries[66]},
            { value: dataCountries[67] , label: dataCountries[67]},
            { value: dataCountries[68] , label: dataCountries[68]},
            { value: dataCountries[69] , label: dataCountries[69]},
            { value: dataCountries[70] , label: dataCountries[70]},
            { value: dataCountries[71] , label: dataCountries[71]},
            { value: dataCountries[72] , label: dataCountries[72]},
            { value: dataCountries[73] , label: dataCountries[73]},
            { value: dataCountries[74] , label: dataCountries[74]},
            { value: dataCountries[75] , label: dataCountries[75]},
            { value: dataCountries[76] , label: dataCountries[76]},
            { value: dataCountries[77] , label: dataCountries[77]},
            { value: dataCountries[78] , label: dataCountries[78]},
            { value: dataCountries[79] , label: dataCountries[79]},
            { value: dataCountries[80] , label: dataCountries[80]},
            { value: dataCountries[81] , label: dataCountries[81]},
            { value: dataCountries[82] , label: dataCountries[82]},
            { value: dataCountries[83] , label: dataCountries[83]},
            { value: dataCountries[84] , label: dataCountries[84]},
            { value: dataCountries[85] , label: dataCountries[85]},
            { value: dataCountries[86] , label: dataCountries[86]},
            { value: dataCountries[87] , label: dataCountries[87]},
            { value: dataCountries[88] , label: dataCountries[88]},
            { value: dataCountries[89] , label: dataCountries[89]},
            { value: dataCountries[90] , label: dataCountries[90]},
            { value: dataCountries[91] , label: dataCountries[91]},
            { value: dataCountries[92] , label: dataCountries[92]},
            { value: dataCountries[93] , label: dataCountries[93]},
            { value: dataCountries[94] , label: dataCountries[94]},
            { value: dataCountries[95] , label: dataCountries[95]},
            { value: dataCountries[96] , label: dataCountries[96]},
            { value: dataCountries[97] , label: dataCountries[97]},
            { value: dataCountries[98] , label: dataCountries[98]},
            { value: dataCountries[99] , label: dataCountries[99]},
            { value: dataCountries[100] , label: dataCountries[100]},
            { value: dataCountries[101] , label: dataCountries[101]},
            { value: dataCountries[102] , label: dataCountries[102]},
            { value: dataCountries[103] , label: dataCountries[103]},
            { value: dataCountries[104] , label: dataCountries[104]},
            { value: dataCountries[105] , label: dataCountries[105]},
            { value: dataCountries[106] , label: dataCountries[106]},
            { value: dataCountries[107] , label: dataCountries[107]},
            { value: dataCountries[108] , label: dataCountries[108]},
            { value: dataCountries[109] , label: dataCountries[109]},
            { value: dataCountries[110] , label: dataCountries[110]},
            { value: dataCountries[111] , label: dataCountries[111]},
            { value: dataCountries[112] , label: dataCountries[112]},
            { value: dataCountries[113] , label: dataCountries[113]},
            { value: dataCountries[114] , label: dataCountries[114]},
            { value: dataCountries[115] , label: dataCountries[115]},
            { value: dataCountries[116] , label: dataCountries[116]},
            { value: dataCountries[117] , label: dataCountries[117]},
            { value: dataCountries[118] , label: dataCountries[118]},
            { value: dataCountries[119] , label: dataCountries[119]},
            { value: dataCountries[120] , label: dataCountries[120]},
            { value: dataCountries[121] , label: dataCountries[121]},
            { value: dataCountries[122] , label: dataCountries[122]},
            { value: dataCountries[123] , label: dataCountries[123]},
            { value: dataCountries[124] , label: dataCountries[124]},
            { value: dataCountries[125] , label: dataCountries[125]},
            { value: dataCountries[126] , label: dataCountries[126]},
            { value: dataCountries[127] , label: dataCountries[127]},
            { value: dataCountries[128] , label: dataCountries[128]},
            { value: dataCountries[129] , label: dataCountries[129]},
            { value: dataCountries[130] , label: dataCountries[130]},
            { value: dataCountries[131] , label: dataCountries[131]},
            { value: dataCountries[132] , label: dataCountries[132]},
            { value: dataCountries[133] , label: dataCountries[133]},
            { value: dataCountries[134] , label: dataCountries[134]},
            { value: dataCountries[135] , label: dataCountries[135]},
            { value: dataCountries[136] , label: dataCountries[136]},
            { value: dataCountries[137] , label: dataCountries[137]},
            { value: dataCountries[138] , label: dataCountries[138]},
            { value: dataCountries[139] , label: dataCountries[139]},
            { value: dataCountries[140] , label: dataCountries[140]},
            { value: dataCountries[141] , label: dataCountries[141]},
            { value: dataCountries[142] , label: dataCountries[142]},
            { value: dataCountries[143] , label: dataCountries[143]},
            { value: dataCountries[144] , label: dataCountries[144]},
            { value: dataCountries[145] , label: dataCountries[145]},
            { value: dataCountries[146] , label: dataCountries[146]},
            { value: dataCountries[147] , label: dataCountries[147]},
            { value: dataCountries[148] , label: dataCountries[148]},
            { value: dataCountries[149] , label: dataCountries[149]},
            { value: dataCountries[150] , label: dataCountries[150]},
            { value: dataCountries[151] , label: dataCountries[151]},
            { value: dataCountries[152] , label: dataCountries[152]},
            { value: dataCountries[153] , label: dataCountries[153]},
            { value: dataCountries[154] , label: dataCountries[154]},
            { value: dataCountries[155] , label: dataCountries[155]},
            { value: dataCountries[156] , label: dataCountries[156]},
            { value: dataCountries[157] , label: dataCountries[157]},
            { value: dataCountries[158] , label: dataCountries[158]},
            { value: dataCountries[159] , label: dataCountries[159]},
            { value: dataCountries[160] , label: dataCountries[160]},
            { value: dataCountries[161] , label: dataCountries[161]},
            { value: dataCountries[162] , label: dataCountries[162]},
            { value: dataCountries[163] , label: dataCountries[163]},
            { value: dataCountries[164] , label: dataCountries[164]},
            { value: dataCountries[165] , label: dataCountries[165]},
            { value: dataCountries[166] , label: dataCountries[166]},
            { value: dataCountries[167] , label: dataCountries[167]},
            { value: dataCountries[168] , label: dataCountries[168]},
            { value: dataCountries[169] , label: dataCountries[169]},
            { value: dataCountries[170] , label: dataCountries[170]},
            { value: dataCountries[171] , label: dataCountries[171]},
            { value: dataCountries[172] , label: dataCountries[172]},
            { value: dataCountries[173] , label: dataCountries[173]},
            { value: dataCountries[174] , label: dataCountries[174]},
            { value: dataCountries[175] , label: dataCountries[175]},
            { value: dataCountries[176] , label: dataCountries[176]},
            { value: dataCountries[177] , label: dataCountries[177]},
            { value: dataCountries[178] , label: dataCountries[178]},
            { value: dataCountries[179] , label: dataCountries[179]},
            { value: dataCountries[180] , label: dataCountries[180]},
            { value: dataCountries[181] , label: dataCountries[181]},
            { value: dataCountries[182] , label: dataCountries[182]},
            { value: dataCountries[183] , label: dataCountries[183]},
            { value: dataCountries[184] , label: dataCountries[184]},
            { value: dataCountries[185] , label: dataCountries[185]},
            { value: dataCountries[186] , label: dataCountries[186]},
            { value: dataCountries[187] , label: dataCountries[187]},
            { value: dataCountries[188] , label: dataCountries[188]},
            { value: dataCountries[189] , label: dataCountries[189]},
            { value: dataCountries[190] , label: dataCountries[190]},
            { value: dataCountries[191] , label: dataCountries[191]},
            { value: dataCountries[192] , label: dataCountries[192]},
            { value: dataCountries[193] , label: dataCountries[193]},
            { value: dataCountries[194] , label: dataCountries[194]},
            { value: dataCountries[195] , label: dataCountries[195]},
            { value: dataCountries[196] , label: dataCountries[196]},
            { value: dataCountries[197] , label: dataCountries[197]},
            { value: dataCountries[198] , label: dataCountries[198]},
            { value: dataCountries[199] , label: dataCountries[199]},
            { value: dataCountries[200] , label: dataCountries[200]},
            { value: dataCountries[201] , label: dataCountries[201]},
            { value: dataCountries[202] , label: dataCountries[202]},
            { value: dataCountries[203] , label: dataCountries[203]},
            { value: dataCountries[204] , label: dataCountries[204]},
            { value: dataCountries[205] , label: dataCountries[205]},
            { value: dataCountries[206] , label: dataCountries[206]},
            { value: dataCountries[207] , label: dataCountries[207]},
            { value: dataCountries[208] , label: dataCountries[208]},
            { value: dataCountries[209] , label: dataCountries[209]},
            { value: dataCountries[210] , label: dataCountries[210]},
            { value: dataCountries[211] , label: dataCountries[211]},
            { value: dataCountries[212] , label: dataCountries[212]},
            { value: dataCountries[213] , label: dataCountries[213]},
            { value: dataCountries[214] , label: dataCountries[214]},
            { value: dataCountries[215] , label: dataCountries[215]},
            { value: dataCountries[216] , label: dataCountries[216]},
            { value: dataCountries[217] , label: dataCountries[217]},
            { value: dataCountries[218] , label: dataCountries[218]},
            { value: dataCountries[219] , label: dataCountries[219]},
            { value: dataCountries[220] , label: dataCountries[220]},
            { value: dataCountries[221] , label: dataCountries[221]},
            { value: dataCountries[222] , label: dataCountries[222]},
            { value: dataCountries[223] , label: dataCountries[223]},
            { value: dataCountries[224] , label: dataCountries[224]},
            { value: dataCountries[225] , label: dataCountries[225]},
            { value: dataCountries[226] , label: dataCountries[226]},
            { value: dataCountries[227] , label: dataCountries[227]},
            { value: dataCountries[228] , label: dataCountries[228]},
            { value: dataCountries[229] , label: dataCountries[229]},
            { value: dataCountries[230] , label: dataCountries[230]},
            { value: dataCountries[231] , label: dataCountries[231]},
            { value: dataCountries[232] , label: dataCountries[232]},
            { value: dataCountries[233] , label: dataCountries[233]},
            { value: dataCountries[234] , label: dataCountries[234]},
            { value: dataCountries[235] , label: dataCountries[235]},
            { value: dataCountries[236] , label: dataCountries[236]},
            { value: dataCountries[237] , label: dataCountries[237]},
            { value: dataCountries[238] , label: dataCountries[238]},
            { value: dataCountries[239] , label: dataCountries[239]},
            { value: dataCountries[240] , label: dataCountries[240]},
            { value: dataCountries[241] , label: dataCountries[241]},
            { value: dataCountries[242] , label: dataCountries[242]},
            { value: dataCountries[243] , label: dataCountries[243]},
            { value: dataCountries[244] , label: dataCountries[244]},
            { value: dataCountries[245] , label: dataCountries[245]},
            { value: dataCountries[246] , label: dataCountries[246]},
            { value: dataCountries[247] , label: dataCountries[247]},
            { value: dataCountries[248] , label: dataCountries[248]},
            { value: dataCountries[249] , label: dataCountries[249]},
        ];
        // const onSelectCountry = value => this.selectCountry(dataCountries[value]);

        return (
          <div className="pg-confirm__content-identity">
            <div className="pg-confirm__content-identity-forms">
                <div className="pg-confirm__content-identity-col">
                    <div className="pg-confirm__content-identity-col-row">
                      <fieldset className={firstNameGroupClass}>
                          {firstName && <legend>{this.translate('page.body.kyc.identity.firstName')}</legend>}
                              <input
                                  className="pg-confirm__content-identity-col-row-content-number"
                                  type="string"
                                  placeholder={this.translate('page.body.kyc.identity.firstName')}
                                  value={firstName}
                                  onChange={this.handleChange('firstName')}
                                  onFocus={this.handleFieldFocus('firstName')}
                                  onBlur={this.handleFieldFocus('firstName')}
                                  autoFocus={true}
                              />
                      </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <fieldset className={lastNameGroupClass}>
                            {lastName && <legend>{this.translate('page.body.kyc.identity.lastName')}</legend>}
                                <input
                                    className="pg-confirm__content-identity-col-row-content-number"
                                    type="string"
                                    placeholder={this.translate('page.body.kyc.identity.lastName')}
                                    value={lastName}
                                    onChange={this.handleChange('lastName')}
                                    onFocus={this.handleFieldFocus('lastName')}
                                    onBlur={this.handleFieldFocus('lastName')}
                                />
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <fieldset className={dateOfBirthGroupClass}>
                        {this.state.date && <legend>{this.translate('page.body.kyc.identity.dateOfBirth')}</legend>}
                          <DatePicker
                                locale={(`${this.translate('page.body.kyc.documents.expiryDate')}` === 'Expiration Date') ? 'en-US' : 'zh-Hans'}
                                className="pg-confirm__content-identity-col-row-content-number"
                                value={this.state.date}
                                onChange={this.onChange}
                          />
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <div className="pg-confirm__content-identity-col-row-content">
                        <div className="pg-confirm__content-identity-col-row-content-label">
                            {national && this.translate('page.body.kyc.identity.nationality')}
                        </div>
                            <fieldset>
                                <input
                                    type="text"
                                    className="pg-confirm__content-documents-col-row-content-number"
                                    placeholder={this.translate('page.body.kyc.identity.nationality')}
                                    value={national}
                                    onChange={this.handleChange('national')}
                                    onFocus={this.handleFieldFocus('nationality')}
                                    onBlur={this.handleFieldFocus('nationality')}
                                />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="pg-confirm__content-identity-col pg-confirm__content-identity-col-right">
                    <div className="pg-confirm__content-identity-col-row">
                        <fieldset className={residentialAddressGroupClass}>
                            {residentialAddress && <legend>{this.translate('page.body.kyc.identity.residentialAddress')}</legend>}
                            <input
                                className="pg-confirm__content-identity-col-row-content-number"
                                type="string"
                                placeholder={this.translate('page.body.kyc.identity.residentialAddress')}
                                value={residentialAddress}
                                onChange={this.handleChange('residentialAddress')}
                                onFocus={this.handleFieldFocus('residentialAddress')}
                                onBlur={this.handleFieldFocus('residentialAddress')}
                            />
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <div className="pg-confirm__content-identity-col-row-content">
                            <div className="pg-confirm__content-identity-col-row-content-label">
                                {countryOfBirth && this.translate('page.body.kyc.identity.CoR')}
                            </div>
                            <fieldset className={postcodeGroupClass}>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleSelectItemChange}
                                    options={options}
                                    styles={customStyles}
                                    placeholder={this.translate('page.body.kyc.identity.CoR')}
                                />
                            </fieldset>
                        </div>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <fieldset className={cityGroupClass}>
                            {city && <legend>{this.translate('page.body.kyc.identity.city')}</legend>}
                            <input
                                className="pg-confirm__content-identity-col-row-content-number"
                                type="string"
                                placeholder={this.translate('page.body.kyc.identity.city')}
                                value={city}
                                onChange={this.handleChange('city')}
                                onFocus={this.handleFieldFocus('city')}
                                onBlur={this.handleFieldFocus('city')}
                            />
                        </fieldset>
                    </div>
                    <div className="pg-confirm__content-identity-col-row">
                        <fieldset className={postcodeGroupClass}>
                            {postcode && <legend>{this.translate('page.body.kyc.identity.postcode')}</legend>}
                            <input
                                className="pg-confirm__content-identity-col-row-content-number"
                                type="string"
                                placeholder={this.translate('page.body.kyc.identity.postcode')}
                                value={postcode}
                                onChange={this.handleChange('postcode')}
                                onFocus={this.handleFieldFocus('postcode')}
                                onBlur={this.handleFieldFocus('postcode')}
                                onKeyPress={this.handleConfirmEnterPress}
                            />
                        </fieldset>
                    </div>
                </div>
              </div>
              {success && <p className="pg-confirm__success">{this.translate(success)}</p>}
              <div className="pg-confirm__content-deep">
                  <Button
                      className="pg-confirm__content-phone-deep-button"
                      label={this.translate('page.body.kyc.next')}
                      onClick={this.sendData}
                      disabled={this.handleCheckButtonDisabled()}
                  />
              </div>
          </div>
        );
    }

    private scrollToElement = (displayedElem: number) => {
            const element: HTMLElement = document.getElementsByClassName('pg-confirm__content-identity-col-row')[displayedElem] as HTMLElement;
            element && element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
    }

    private handleFieldFocus = (field: string) => {
        return () => {
            switch (field) {
                case 'city':
                    this.setState({
                        cityFocused: !this.state.cityFocused,
                    });
                    this.scrollToElement(6);
                    break;
                case 'dateOfBirth':
                    this.setState({
                        dateOfBirthFocused: !this.state.dateOfBirthFocused,
                    });
                    this.scrollToElement(2);
                    break;
                case 'firstName':
                    this.setState({
                        firstNameFocused: !this.state.firstNameFocused,
                    });
                    this.scrollToElement(0);
                    break;
                case 'lastName':
                    this.setState({
                        lastNameFocused: !this.state.lastNameFocused,
                    });
                    this.scrollToElement(1);
                    break;
                case 'postcode':
                    this.setState({
                        postcodeFocused: !this.state.postcodeFocused,
                    });
                    this.scrollToElement(7);
                    break;
                case 'residentialAddress':
                    this.setState({
                        residentialAddressFocused: !this.state.residentialAddressFocused,
                    });
                    this.scrollToElement(4);
                    break;
                default:
                    break;
            }

        };
    }

    private handleChange = (key: string) => {
        return (e: OnChangeEvent) => {
            // @ts-ignore
            this.setState({
                [key]: e.target.value,
            });
        };
    };

    private handleConfirmEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !this.handleCheckButtonDisabled()) {
            event.preventDefault();
            this.sendData();
        }
    }

    // private handleChangeDate = (e: OnChangeEvent) => {
    //     this.setState({
    //         dateOfBirth: formatDate(e.target.value),
    //     });
    // }

    // private selectNationality = (value: string) => {
    //     this.setState({
    //         metadata: { nationality: value },
    //     });
    // };

    // private selectCountry = (value: string) => {
    //     this.setState({
    //         countryOfBirth: countries.getAlpha2Code(value, this.props.lang),
    //     });
    // };

    private handleCheckButtonDisabled = () => {
        const {
            city,
            date,
            firstName,
            lastName,
            postcode,
            residentialAddress,
            countryOfBirth,
            national,
        } = this.state;
        return !firstName || !lastName  || !date || !national || !residentialAddress || !countryOfBirth || !city || !postcode;
    }

    private sendData = () => {
        const today = new Date();
        const dob = (this.state.date && (this.state.date < today)) ? this.state.date.toLocaleDateString() : '' ;
        // const dob = !isDateInFuture(this.state.dateOfBirth) ? this.state.dateOfBirth : '';
        const profileInfo = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            dob,
            address: this.state.residentialAddress,
            postcode: this.state.postcode,
            city: this.state.city,
            country: this.state.countryOfBirth,
            metadata: {
                nationality: this.state.national,
            },
        };
        this.props.sendIdentity(profileInfo);
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    success: selectSendIdentitySuccess(state),
    lang: selectCurrentLanguage(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        sendIdentity: payload => dispatch(sendIdentity(payload)),
        labelFetch: () => dispatch(labelFetch()),
    });

// tslint:disable-next-line
export const Identity = injectIntl(connect(mapStateToProps, mapDispatchProps)(IdentityComponent) as any);
