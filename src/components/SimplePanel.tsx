import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions, CustomProps } from 'types';
import DatePicker, { Calendar, DateObject, getAllDatesInRange } from "react-multi-date-picker"
import { css } from '@emotion/css'
import ExtraButton from './ExtraButton';
import { Input, Icon } from '@grafana/ui';
import { getInitValue, getCalendar, getLocale, getPlugins, getMinValue, getMaxValue, getAnimations } from 'utils';
import { locationService } from '@grafana/runtime';

import "../themes/color/green.css"
import "../themes/color/red.css"
import "../themes/color/purple.css"
import "../themes/color/yellow.css"
import "../themes/color/teal.css"

import "react-multi-date-picker/styles/colors/analog_time_picker_green.css"
import "react-multi-date-picker/styles/colors/analog_time_picker_red.css"
import "react-multi-date-picker/styles/colors/analog_time_picker_purple.css"
import "react-multi-date-picker/styles/colors/analog_time_picker_yellow.css"
import "react-multi-date-picker/styles/colors/analog_time_picker_teal.css"

import "../themes/background/bg-dark.css"
import "../themes/background/bg-gray.css"
import "../themes/background/bg-brown.css"
import "../themes/background/bg-bisque.css"

import './styles.css'

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const [value, setValue] = useState(getInitValue(options))

  const SelectedComponent = options.panelType === 'C' ? Calendar : DatePicker;
  return (
    <div
      className={css`
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        align-content: ${options.verticalPos};
        text-align:${options.horizontalPos}
      `}
    >
      <SelectedComponent 
        className={`${options.theme} bg-${options.background} ` + css`
          display:inline-block;
        `}
        value={value}
        onChange={setDestination}
        calendar={getCalendar(options)}
        locale={getLocale(options)}
        multiple={options.mode === 'multiple' || options.mode === 'multirange'}
        range={options.mode === 'range' || options.mode === 'multirange'}
        disableDayPicker={options.otherPicker === "onlytime" || options.otherPicker === "onlyanalogtime"}
        minDate={getMinValue(options)}
        maxDate={getMaxValue(options)}
        rangeHover={options.showRangeHover && (options.mode === "range" || options.mode === "multirange")}
        plugins={getPlugins(options)}
        animations={getAnimations(options)}
        render={
        <Input
          width={options.inputWidth}
          placeholder={options.inputPlaceholder}
          prefix={options.showIcon ? <Icon name="calendar-alt" /> : false}
        />
        }
        mapDays={({ date }) => {
          let props: CustomProps = {}
          let isWeekend = options.weekendDays.includes(String(date.weekDay.index)) && options.showWeekends
          
          if (isWeekend) props.className = "highlight highlight-red"
          
          return props
        }}
        >
        {options.showToday ? 
        (
          <ExtraButton onClick={setToday} options={options} toolTip='Go To Today' > Today </ExtraButton>
        ) : ( null )}
        
        {options.showDeselect ?
        (
          <ExtraButton onClick={deselect}  options={options} toolTip='Clear Selection' > Deselect </ExtraButton>
        ) : ( null )}

      </SelectedComponent>
    </div>
  )
  
  
  function setToday(){
    const now = new DateObject({ calendar: getCalendar(options), locale: getLocale(options) })
    setValue(now.format());
  }

  function deselect(){
    setValue("");
  }

  function setDestination(value: any){
    let query: any = {};
    const key: string = 'var-' + options.variable;
    switch (options.mode){
      case "single":
        if (options.destination === "timerange"){
          query[options.timerangeSingleDestination] = value.unix * 1000;
        } else {
          query[key] = value;
        }
        break;
      case "multiple":
        query[key] = value
        break;
      case "range":
        if (options.destination === "timerange"){
          query['from'] = value[0].unix * 1000;
          query['to'] = value[value.length - 1].unix * 1000;
        }
        else if(options.setAllDatesToSingleVaribale){
          const key: string = 'var-' + options.variable;
          query[key] = getAllDatesInRange(value);
        }
        else {
          const keyStart: string = 'var-' + options.rangeStartVariable;
          const keyEnd: string = 'var-' + options.rangeEndVariable;
          query[keyStart] = value[0];
          query[keyEnd] = value[value.length - 1];
        }
        break;
      case "multirange":
        let dates: any[] = []
        for (let i = 0; i < value.length; i++){
          dates = dates.concat(getAllDatesInRange(value[i]))
        }
        query[key] = dates;
    }
    console.log(query);
    locationService.partial(query, true);
    setValue(value);
  }
};
