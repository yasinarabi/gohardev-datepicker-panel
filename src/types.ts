type panelTypeValues = 'DP' | 'C';
type initValueValues = 'NOW' | 'CUSTOM' | 'NULL'
type calendarValues = 'G' | 'P' | 'A' | 'I'
type localeValues = 'En' | 'Fa' | 'Ar' | 'Hi'
type sizeValues = 'sm' | 'md' | 'lg'
type variantValues = 'primary' | 'secondary' | 'destructive' | 'success'
type fillValues = 'solid' | 'outline' | 'text'
type modeValues = 'single' | 'multiple' | 'range' | 'multirange'
type otherPickerValues = 'disable' | 'time' | 'onlytime' | 'analogtime' | 'onlyanalogtime'
type posValues = 'start' | 'center' | 'end'
type themeValues = 'default' | 'red' | 'green'
type backgroundValues = 'light' | 'dark' | 'gray' | 'brown' | 'bisque'
type destinationValues = 'timerange' | 'variables'
type timerangeSingleDestinationValues = 'from' | 'to'


export interface SimpleOptions {
  // General Options
  panelType: panelTypeValues;
  initValue: initValueValues;
  customInitValue: string;
  calendar: calendarValues;
  locale: localeValues;
  mode: modeValues;
  showDatePanel: boolean;
  showRangeHover: boolean;
  // Date Picker Options
  // TODO add index of start day
  otherPicker: otherPickerValues;
  min: initValueValues;
  max: initValueValues;
  customMinValue: string;
  customMaxValue: string;
  // Extra Buttons
  showToday: boolean;
  showDeselect: boolean;
  buttonsSize: sizeValues;
  buttonsVariant: variantValues;
  buttonsFill: fillValues;
  buttonsTooltip: boolean;
  // Styles
  animations: string[];
  animationDuration: number;
  showInputIcon: boolean;
  showWeekends: boolean;
  weekendDays: string;
  verticalPos: posValues;
  horizontalPos: posValues;
  theme: themeValues;
  background: backgroundValues;
  // Input Styles
  inputWidth: number;
  inputPlaceholder: string;
  showIcon: boolean;
  // Destination
  destination: destinationValues;
  timerangeSingleDestination: timerangeSingleDestinationValues;
  setAllDatesToSingleVaribale: boolean;
  variable: string;
  rangeStartVariable: string;
  rangeEndVariable: string;
  // TODO add format and seprator
}

export interface CustomProps {
  className?: string;
}

export interface ExtraButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  options: SimpleOptions;
  toolTip: string;
}