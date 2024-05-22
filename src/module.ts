import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    // .addTextInput({
    //   path: 'text',
    //   name: 'Simple text option',
    //   description: 'Description of panel option',
    //   defaultValue: 'Default value of text input option',
    // })
    // .addBooleanSwitch({
    //   path: 'showSeriesCount',
    //   name: 'Show series counter',
    //   defaultValue: false,
    // })
    .addRadio({
      path: 'type',
      defaultValue: 'DP',
      name: 'Panel Type',
      settings: {
        options: [
          {
            value: 'DP',
            label: 'Date Picker',
          },
          {
            value: 'C',
            label: 'Calendar',
          },
        ],
      },
    })
    .addRadio({
      path: 'init',
      defaultValue: 'now',
      name: 'Initial Value',
      settings: {
        options: [
          {
            value: 'now',
            label: 'Now',
          },
          {
            value: 'null',
            label: 'Null',
          },
          {
            value: 'custom',
            label: 'Custom',
          },
        ],
      },
      // showIf: (config) => config.showSeriesCount,
    })
    .addTextInput({
      path: 'custom_init',
      name: 'Custom Initial Value',
      // description: 'Description of panel option',
      // defaultValue: 'Default value of text input option',
      showIf: (config) => config.init == 'custom',

    });
});
