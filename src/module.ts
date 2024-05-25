import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';
import { getTemplateSrv } from '@grafana/runtime';


export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  const variables = getTemplateSrv().getVariables();
  const variableOptions = variables.map((vr) => ({
    label: vr.label,
    value: vr.name,
  }));

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
      defaultValue: 'disable',
      name: 'Mode',
      category: ['Date Picker Options'],
      settings: {
        options: [
          {
            value: 'disable',
            label: 'Disable',
          },
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
    .addRadio({
      path: 'min',
      defaultValue: 'NULL',
      name: 'Min Date',
      category: ['Date Picker Options'],
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
      path: 'customMinValue',
      name: 'Custom Min Value',
      category: ['Date Picker Options'],
      showIf: (config) => config.min === 'CUSTOM',

    })
    .addRadio({
      path: 'max',
      defaultValue: 'NULL',
      name: 'Max Date',
      category: ['Date Picker Options'],
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
      path: 'customMaxValue',
      name: 'Custom Max Value',
      category: ['Date Picker Options'],
      showIf: (config) => config.max === 'CUSTOM',
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
    })
    // Styles
    .addMultiSelect({
      path: 'animations',
      name: 'Select Animations',
      category: ['Styles'],
      defaultValue: [] as string[],
      settings: {
        options: [
          { value: 'transition', label: 'Transition' },
          { value: 'opacity', label: 'Opacity' },
          { value: 'size', label: 'Size' },
        ],
      },
      showIf: (config) => config.panelType === "DP"
    })
    .addNumberInput({
      path: 'animationDuration',
      name: 'Animation Duration',
      category: ['Styles'],
      defaultValue: 1000,
      showIf: (config) => config.animations.length > 0 && config.panelType === "DP"
    })
    .addBooleanSwitch({
      path: 'showInputIcon',
      name: 'Show Input Icon',
      category: ['Styles'],
      defaultValue: true,
      showIf: (config) => config.panelType === "DP",
    })
    .addBooleanSwitch({
      path: 'showWeekends',
      name: 'Show Weekends',
      category: ['Styles'],
      defaultValue: false,
    })
    .addTextInput({
      path: 'weekendDays',
      name: 'Weekend Days',
      category: ['Styles'],
      defaultValue: '0, 6',
      showIf: (config) => config.showWeekends
    })
    .addRadio({
      path: 'verticalPos',
      defaultValue: 'center',
      name: 'Vertical Position',
      category: ['Styles'],
      settings: {
        options: [
          {
            value: 'start',
            label: 'Top',
          },
          {
            value: 'center',
            label: 'Center',
          },
          {
            value: 'end',
            label: 'Bottom',
          }
        ],
      },
    })
    .addRadio({
      path: 'horizontalPos',
      defaultValue: 'center',
      name: 'Horizontal Position',
      category: ['Styles'],
      settings: {
        options: [
          {
            value: 'start',
            label: 'Left',
          },
          {
            value: 'center',
            label: 'Center',
          },
          {
            value: 'end',
            label: 'Right',
          }
        ],
      },
    })
    .addRadio({
      path: 'theme',
      defaultValue: 'default',
      name: 'Theme',
      category: ['Styles'],
      settings: {
        options: [
          {
            value: 'default',
            label: 'Default',
          },
          {
            value: 'red',
            label: 'Red',
          },
          {
            value: 'teal',
            label: 'Teal',
          },
          {
            value: 'yellow',
            label: 'Yellow',
          },
          {
            value: 'green',
            label: 'Green',
          },
          {
            value: 'purple',
            label: 'Purple',
          }
        ],
      },
    })
    .addRadio({
      path: 'background',
      defaultValue: 'light',
      name: 'Background',
      category: ['Styles'],
      settings: {
        options: [
          {
            value: 'light',
            label: 'Light',
          },
          {
            value: 'bisque',
            label: 'Bisque',
          },
          {
            value: 'dark',
            label: 'Dark',
          },
          {
            value: 'gray',
            label: 'Gray',
          },
          {
            value: 'brown',
            label: 'Brown',
          }
        ],
      },
    })
    .addNumberInput({
      path: 'inputWidth',
      name: 'Input Width',
      category: ['Input Styles'],
      defaultValue: 30,
      showIf: (config) => config.panelType === "DP"
    })
    .addTextInput({
      path: 'inputPlaceholder',
      name: 'Input Placeholder',
      category: ['Input Styles'],
      defaultValue: '',
      showIf: (config) => config.panelType === "DP"
    })
    .addBooleanSwitch({
      path: 'showIcon',
      name: 'Show Calendar Icon',
      category: ['Input Styles'],
      defaultValue: true,
      showIf: (config) => config.panelType === "DP"
    })
    // Destination
    .addRadio({
      path: 'destination',
      defaultValue: 'timerange',
      name: 'Destination',
      category: ['Destination'],
      settings: {
        options: [
          {
            value: 'timerange',
            label: 'Timerange',
          },
          {
            value: 'variables',
            label: 'Variables',
          }
        ],
      },
      showIf: (config) => config.mode === "single" || config.mode === "range"
    })
    .addRadio({
      path: 'timerangeSingleDestination',
      defaultValue: 'from',
      name: 'Timerange Destination',
      category: ['Destination'],
      settings: {
        options: [
          {
            value: 'from',
            label: 'From',
          },
          {
            value: 'to',
            label: 'To',
          }
        ],
      },
      showIf: (config) => config.destination === "timerange" && config.mode === "single"
    })
    .addBooleanSwitch({
      path: 'setAllDatesToSingleVaribale',
      name: 'Set to single variable',
      description: 'Set all selected dates to a single variable',
      defaultValue: false,
      showIf: (config) => config.destination === "variables" && config.mode === "range",
      category: ['Destination']
    })
    .addSelect({
      path: 'variable',
      name: 'Select Destination Variable',
      settings: {
        options: variableOptions,
      },
      category: ['Destination'],
      showIf: function (config): boolean {
        switch (config.mode) {
          case "single":
            return config.destination === "variables"
          case "multiple":
          case "multirange":
            return true
          case "range":
            return config.destination === "variables" && config.setAllDatesToSingleVaribale
        }
      } 
    })
    .addSelect({
      path: 'rangeStartVariable',
      name: 'Start Date Variable',
      settings: {
        options: variableOptions,
      },
      category: ['Destination'],
      showIf: (config) => config.mode === "range" && config.destination === "variables" && !config.setAllDatesToSingleVaribale
    })
    .addSelect({
      path: 'rangeEndVariable',
      name: 'End Date Variable',
      settings: {
        options: variableOptions,
      },
      category: ['Destination'],
      showIf: (config) => config.mode === "range" && config.destination === "variables" && !config.setAllDatesToSingleVaribale
    });
});
