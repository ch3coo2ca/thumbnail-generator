import {ComponentMeta, ComponentStory} from '@storybook/react';

import {DEFAULT_FONTS, DEFAULT_CONFIG} from 'constants/App';
import Preview from 'components/Panel/Preview';

export default {
  title: 'components/Panel/Preview',
  component: Preview,
  argTypes: {
    backgroundColor: {
      description: 'background color',
      table: {
        summary: 'string'
      }
    },
    fontSize: {
      description: 'font size',
      table: {
        summary: 'number'
      },
      control: {
        type: 'range'
      }
    },
    font: {
      description: 'font type',
      table: {
        summary: 'string'
      },
      options: DEFAULT_FONTS,
      control: {
        type: 'select'
      }
    },
    text: {
      description: 'text value'
    },
    textColor: {
      description: 'text color'
    }
  }
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => (
  <Preview {...args} />
);

export const Base: ComponentStory<typeof Preview> = Template.bind({});
Base.args = DEFAULT_CONFIG;

export const WithLongText: ComponentStory<typeof Preview> = Template.bind({});
WithLongText.args = {
  ...Base.args,
  text: 'longlonglonglonglonglong text this is really long'
};
