type panelTypeValues = 'DP' | 'C';
type initValueValues = 'NOW' | 'CUSTOM' | 'NULL'
type calendarValues = 'G' | 'P' | 'A' | 'I'
type localeValues = 'En' | 'Fa' | 'Ar' | 'Hi'

export interface SimpleOptions {
  panelType: panelTypeValues;
  initValue: initValueValues;
  customInitValue: string;
  calendar: calendarValues;
  locale: localeValues;
  showToday: boolean;
}
