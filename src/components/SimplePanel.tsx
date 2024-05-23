import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
import { css } from '@emotion/css'
import ExtraButton from './ExtraButton';
import { getInitValue, getCalendar, getLocale, getPlugins } from 'utils';
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
      `}
    >
      <SelectedComponent 
        value={value}
        onChange={handleChange}
        calendar={getCalendar(options)}
        locale={getLocale(options)}
        multiple={options.mode === 'multiple' || options.mode === 'multirange'}
        range={options.mode === 'range' || options.mode === 'multirange'}
        plugins={getPlugins(options)}
        rangeHover={options.showRangeHover && (options.mode === "range" || options.mode === "multirange")}
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

  function handleChange(value: any){
    setValue(value);
  }
  
};

