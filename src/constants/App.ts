import {StyleConfig} from 'models/Editor';

export const DEFAULT_FONTS = [
  'Arial',
  'Verdana',
  'Tahoma',
  'American Typewriter',
  'Courier',
  'Cominc Sans MS'
] as const;

export const FONT_SIZE_LIST = [60, 70, 80, 90, 100] as const;

export const DEFAULT_CONFIG: StyleConfig = {
  backgroundColor: '#7d9a7d',
  textColor: 'white',
  font: DEFAULT_FONTS[0],
  fontSize: 60,
  text: 'Text'
} as const;
