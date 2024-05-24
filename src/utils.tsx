import React from 'react';
import { SimpleOptions } from 'types';
import { DateObject } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import AnalogTimePicker from "react-multi-date-picker/plugins/analog_time_picker";

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

import opacity from 'react-element-popper/animations/opacity';
import transition from 'react-element-popper/animations/transition';
import size from 'react-element-popper/animations/size';

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
        initValue = now.format()
    } else if (options.initValue === "CUSTOM") {
        initValue = options.customInitValue
    }
    return initValue;
}

function getMinValue(options: SimpleOptions): string{
    let minValue = "";
    if (options.min === "NOW"){
        const now = new DateObject({ calendar: getCalendar(options), locale: getLocale(options) })
        minValue = now.format()
    } else if (options.min === "CUSTOM") {
        minValue = options.customMinValue
    }
    return minValue;
}

function getMaxValue(options: SimpleOptions): string{
    let maxValue = "";
    if (options.max === "NOW"){
        const now = new DateObject({ calendar: getCalendar(options), locale: getLocale(options) })
        maxValue = now.format()
    } else if (options.max === "CUSTOM") {
        maxValue = options.customMaxValue
    }
    return maxValue;
}


function getPlugins(options: SimpleOptions) {
    let plugins = []
    if (options.showDatePanel && options.mode !== "single"){
        plugins.push(<DatePanel />);
    }
    if (options.otherPicker === "time" || options.otherPicker === "onlytime"){
        plugins.push(<TimePicker position="bottom" />)
    }
    if (options.otherPicker === "analogtime" || options.otherPicker === "onlyanalogtime"){
        plugins.push(<AnalogTimePicker />)
    }
    return plugins;
}

function getAnimations(options: SimpleOptions){
    let animations: any[] = []
    const parameters = {
        duration: options.animationDuration
    }
    for(let i = 0; i < options.animations.length; i++){
        switch (options.animations[i]){
            case 'opacity':
                animations.push(opacity(parameters));
                break;
            case 'size':
                animations.push(size(parameters));
                break;
            case 'transition':
                animations.push(transition(parameters));
                break;
        }
    }
    return animations
}

export {
    getCalendar, getInitValue, getLocale, getPlugins, getMinValue, getMaxValue, getAnimations
}
