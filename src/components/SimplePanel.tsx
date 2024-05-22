import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"

import Georgian from 'react-date-object/calendars/gregorian'
import Persian from 'react-date-object/calendars/persian'
import Arabic from 'react-date-object/calendars/arabic'
import Indian from 'react-date-object/calendars/indian'
import georgianEn from 'react-date-object/locales/gregorian_en'
import georgianFa from 'react-date-object/locales/gregorian_fa'
import georgianAr from 'react-date-object/locales/gregorian_ar'
import georgianHi from 'react-date-object/locales/gregorian_hi'
import persianEn from 'react-date-object/locales/persian_en'
import persian_fa from 'react-date-object/locales/persian_fa'
import persianAr from 'react-date-object/locales/persian_ar'
import persianHi from 'react-date-object/locales/persian_hi'
import arabicEn from 'react-date-object/locales/arabic_en'
import arabicFa from 'react-date-object/locales/arabic_fa'
import arabicAr from 'react-date-object/locales/arabic_ar'
import arabicHi from 'react-date-object/locales/arabic_hi'
import indianEn from 'react-date-object/locales/indian_en'
import indianFa from 'react-date-object/locales/indian_fa'
import indianAr from 'react-date-object/locales/indian_ar'
import indianHi from 'react-date-object/locales/indian_hi'
// import { css, cs } from '@emotion/css';
// import { useStyles2, useTheme2 } from '@grafana/ui';
// import { PanelDataErrorView } from '@grafana/runtime';

interface Props extends PanelProps<SimpleOptions> {}

// const getStyles = () => {
//   return {
//     wrapper: css`
//       font-family: Open Sans;
//       position: relative;
//     `,
//     svg: css`
//       position: absolute;
//       top: 0;
//       left: 0;
//     `,
//     textBox: css`
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       padding: 10px;
//     `,
//   };
// };

function getCalendar(options: SimpleOptions){
    switch(options.calendar) {
        case "P":
            return Persian;
        case "A":
            return Arabic;
        case "I":
            return Indian;
        default:
            return Georgian;
    }
      
}

function getLocale(options: SimpleOptions){
    switch(options.calendar + options.locale) {
        case "G" + "En":
            return georgianEn;
        case "G" + "Fa":
            return georgianFa;
        case "G" + "Ar":
            return georgianAr;
        case "G" + "Hi":
            return georgianHi;
        case "P" + "En":
            return persianEn;
        case "P" + "Fa":
            return persian_fa;
        case "P" + "Ar":
            return persianAr;
        case "P" + "Hi":
            return persianHi;
        case "A" + "En":
            return arabicEn;
        case "A" + "Fa":
            return arabicFa;
        case "A" + "Ar":
            return arabicAr;
        case "A" + "Hi":
            return arabicHi;
        case "I" + "En":
            return indianEn;
        case "I" + "Fa":
            return indianFa;
        case "I" + "Ar":
            return indianAr;
        case "I" + "Hi":
            return indianHi;
        default:
            return georgianEn;
    }
      
}

function getInitValue(options: SimpleOptions): string{
    let initValue = "";
    if (options.initValue === "NOW"){
        const now = new DateObject({ calendar: getCalendar(options), locale: getLocale(options) })
        // initValue = now.toISOString().split('T')[0]
        initValue = now.format()
    } else if (options.initValue === "CUSTOM") {
        initValue = options.customInitValue
    }
    return initValue
}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  // const theme = useTheme2();
  // const styles = useStyles2(getStyles);
  const [value, setValue] = useState(getInitValue(options))
  console.log(getInitValue(options));

  if (options.panelType === 'C') {
    return <Calendar value={value} onChange={handleChange} calendar={getCalendar(options)} locale={getLocale(options)} />
  }
  return <DatePicker value={value} onChange={handleChange} calendar={getCalendar(options)} locale={getLocale(options)} />;
  
  function handleChange(value: any){
    setValue(value)
  }
  
};

