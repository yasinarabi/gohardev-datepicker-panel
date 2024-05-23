type panelTypeValues = 'DP' | 'C';
type initValueValues = 'NOW' | 'CUSTOM' | 'NULL'
type calendarValues = 'G' | 'P' | 'A' | 'I'
type localeValues = 'En' | 'Fa' | 'Ar' | 'Hi'
type sizeValues = 'sm' | 'md' | 'lg'
type variantValues = 'primary' | 'secondary' | 'destructive' | 'success'
type fillValues = 'solid' | 'outline' | 'text'
type modeValues = 'single' | 'multiple' | 'range' | 'multirange' | 'week'

export interface SimpleOptions {
  // General Options
  panelType: panelTypeValues;
  initValue: initValueValues;
  customInitValue: string;
  calendar: calendarValues;
  locale: localeValues;
  mode: modeValues;
  // Extra Buttons
  showToday: boolean;
  showDeselect: boolean;
  buttonsSize: sizeValues;
  buttonsVariant: variantValues;
  buttonsFill: fillValues;
  buttonsTooltip: boolean;
}
