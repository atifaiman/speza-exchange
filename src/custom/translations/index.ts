import { en } from '../../translations/en';
import { ru } from './ru';
import { zh } from './zh';

// tslint:disable:no-submodule-imports
import localeRu = require('react-intl/locale-data/ru');
import localeZh = require('react-intl/locale-data/zh');
// tslint:enable

export const customLocaleData = ([...localeRu, ...localeZh]);

export type LangType = typeof en;

export const customLanguageMap = {
    ru,
    zh,
};
