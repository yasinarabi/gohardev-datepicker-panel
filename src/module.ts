import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    // General Options
    .addRadio({
      path: 'panelType',
      defaultValue: 'C',
      name: 'Panel Type',
      category: ['General Options'],
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
      category: ['General Options'],
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
      category: ['General Options'],
      showIf: (config) => config.initValue === 'CUSTOM',

    })
    .addRadio({
        path: 'calendar',
        defaultValue: 'G',
        name: 'Calendar',
        category: ['General Options'],
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
        category: ['General Options'],
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
      .addRadio({
        path: 'mode',
        defaultValue: 'single',
        name: 'Mode',
        category: ['General Options'],
        settings: {
          options: [
            {
              value: 'single',
              label: 'Single',
            },
            {
              value: 'multiple',
              label: 'Multiple',
            },
            {
              value: 'range',
              label: 'Range',
            },
            {
              value: 'multirange',
              label: 'Multirange',
            }
          ],
        },
      })
      .addBooleanSwitch({
        path: 'showDatePanel',
        name: 'Show Date Panel',
        category: ['General Options'],
        defaultValue: false,
        showIf: (config) => config.mode !== "single",
      })
      .addBooleanSwitch({
        path: 'showRangeHover',
        name: 'Show Range Hover Effect',
        category: ['General Options'],
        defaultValue: false,
        showIf: (config) => config.mode === "range" || config.mode === "multirange",
      })
      // Date Picker Options
      .addRadio({
        path: 'otherPicker',
        defaultValue: 'single',
        name: 'Mode',
        category: ['Date Picker Options'],
        settings: {
          options: [
            {
              value: 'time',
              label: 'Time',
            },
            {
              value: 'onlytime',
              label: 'Only Time',
            },
            {
              value: 'analogtime',
              label: 'Analog Time',
            },
            {
              value: 'onlyanalogtime',
              label: 'Only Analog',
            }
          ],
        },
      })
      // Extra Buttons
      .addBooleanSwitch({
        path: 'showToday',
        name: 'Show Today Button',
        category: ['Extra Buttons'],
        defaultValue: false,
      })
      .addBooleanSwitch({
        path: 'showDeselect',
        name: 'Show Deselect Button',
        category: ['Extra Buttons'],
        defaultValue: false,
      })
      .addRadio({
        path: 'buttonsSize',
        defaultValue: 'sm',
        name: 'Buttons Size',
        category: ['Extra Buttons'],
        settings: {
          options: [
            {
              value: 'sm',
              label: 'Small',
            },
            {
              value: 'md',
              label: 'Medium',
            },
            {
              value: 'lg',
              label: 'Large',
            }
          ],
        },
        showIf: (config) => config.showToday || config.showDeselect,
      })
      .addRadio({
        path: 'buttonsVariant',
        defaultValue: 'primary',
        name: 'Buttons Variant',
        category: ['Extra Buttons'],
        settings: {
          options: [
            {
              value: 'primary',
              label: 'Primary',
            },
            {
              value: 'destructive',
              label: 'Destructive',
            },
            {
              value: 'success',
              label: 'Success',
            },
            {
              value: 'secondary',
              label: 'Secondary',
            },
          ],
        },
        showIf: (config) => config.showToday || config.showDeselect,
      })
      .addRadio({
        path: 'buttonsFill',
        defaultValue: 'solid',
        name: 'Buttons Fill',
        category: ['Extra Buttons'],
        settings: {
          options: [
            {
              value: 'solid',
              label: 'Solid',
            },
            {
              value: 'outline',
              label: 'Outline',
            },
            {
              value: 'text',
              label: 'Text',
            }
          ],
        },
        showIf: (config) => config.showToday || config.showDeselect,
      })
      .addBooleanSwitch({
        path: 'buttonsTooltip',
        name: 'Show Buttons Tooltip',
        category: ['Extra Buttons'],
        defaultValue: false,
        showIf: (config) => config.showToday || config.showDeselect,
      });
});
