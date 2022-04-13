import {StyleConfig} from 'models/Editor';

export const DEFAULT_FONTS = [
  'Arial',
  'Verdana',
  'Tahoma',
  'American Typewriter',
  'Courier',
  'Cominc Sans MS'
] as const;

export const DEFAULT_CONFIG: StyleConfig = {
  backgroundColor: '#aed581',
  textColor: 'white',
  font: DEFAULT_FONTS[0],
  fontSize: 60,
  text: 'Text'
} as const;
