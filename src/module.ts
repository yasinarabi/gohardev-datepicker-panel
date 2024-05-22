import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addRadio({
      path: 'panelType',
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
      path: 'initValue',
      defaultValue: 'NOW',
      name: 'Initial Value',
      settings: {
        options: [
          {
            value: 'NOW',
            label: 'Now',
          },
          {
            value: 'NULL',
            label: 'Null',
          },
          {
            value: 'CUSTOM',
            label: 'Custom',
          },
        ],
      },
    })
    .addTextInput({
      path: 'customInitValue',
      name: 'Custom Initial Value',
      showIf: (config) => config.initValue === 'CUSTOM',

    })
    .addRadio({
        path: 'calendar',
        defaultValue: 'G',
        name: 'Calendar',
        settings: {
          options: [
            {
              value: 'G',
              label: 'Gregorian',
            },
            {
              value: 'P',
              label: 'Persian',
            },
            {
              value: 'A',
              label: 'Arabic',
            },
            {
                value: 'I',
                label: 'Indian',
            },
          ],
        },
      })
      .addRadio({
        path: 'locale',
        defaultValue: 'En',
        name: 'Locale',
        settings: {
          options: [
            {
              value: 'En',
              label: 'English',
            },
            {
              value: 'Fa',
              label: 'Farsi',
            },
            {
              value: 'Ar',
              label: 'Arabic',
            },
            {
                value: 'Hi',
                label: 'Hindi',
            },
          ],
        },
      })
      .addBooleanSwitch({
        path: 'showToday',
        name: 'Show Today Button',
        defaultValue: false,
      });
});
