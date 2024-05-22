import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css, cs } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';
import DatePicker from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"

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

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  // const theme = useTheme2();
  // const styles = useStyles2(getStyles);
  const [value, setValue] = useState("2020/04/04")

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  if (options.type == 'C') {
    return <Calendar value={value} onChange={handleChange} />
  }
  return <DatePicker value={value} onChange={handleChange} />;
  
  function handleChange(value: any){
    console.log(value)
    setValue(value)
  }
  
};

