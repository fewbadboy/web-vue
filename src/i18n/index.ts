import { createI18n, DefineDateTimeFormat, DefineNumberFormat, type I18nOptions } from "vue-i18n";
import enMessage from "./locales/en";
import zhMessage from "./locales/zh-CN";
import { nextTick } from "vue";

const locale = navigator.language

/**
 * Parameters
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */

const datetimeFormats: {
  en: DefineDateTimeFormat,
  'zh-CN': DefineDateTimeFormat
} = {
  en: {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric'
    }
  },
  'zh-CN': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric'
    }
  }
}

/**
 * Parameters
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 */
const numberFormats: {
  en: DefineNumberFormat,
  'zh-CN': DefineNumberFormat
}  = {
  en: {
    currency: {
      style: 'currency', currency: 'USD'
    },
    decimal: {
      style: 'decimal', maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', maximumFractionDigits: 2, useGrouping: false
    },
    unit: {
      style: 'unit', unit: 'kilometer'
    }
  },
  'zh-CN': {
    currency: {
      style: 'currency', currency: 'CNY', maximumFractionDigits: 2
    },
    decimal: {
      style: 'decimal', maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent', maximumFractionDigits: 2, useGrouping: false
    },
    unit: {
      /**
       * full list: delete snake-case first part
       * some unit not support
       * @see https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml
       */
      style: 'unit', unit: 'kilometer'
    }
  }
}

const options: I18nOptions= {
  legacy: false, // to use Composition API
  locale,
  fallbackLocale: 'zh-CN',
  datetimeFormats,
  numberFormats,
  messages: {
    en: enMessage,
    'zh-CN': zhMessage
  }
}

const i18n = createI18n<false, typeof options>(options)

export function setI18NLanguage(i18n: any, locale: string) {
  i18n.global.locale.value = locale
}

export async function loadLocaleMessage(i18n: any, locale: string) {
  const messages = await import(
    `./locales/${locale}.ts`
  )
  i18n.global.setLocaleMessage(locale, messages.default)
  
  return nextTick()
}

export default i18n