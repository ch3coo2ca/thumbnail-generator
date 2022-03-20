import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from 'components/common';

export default {
  title: 'Components/common/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const BaseSelect = Template.bind({});
BaseSelect.args = {
  items: [
    {
      name: 'font1',
      value: 'f1'
    },
    {
      name: 'font2',
      value: 'f2'
    }
  ],
  onChange: () => {}
};
