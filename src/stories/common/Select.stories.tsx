import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useArgs} from '@storybook/client-api';

import {Select} from 'components/common';

export default {
  title: 'Components/common/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [{value}, updateArgs] = useArgs();
  return (
    <Select {...args} value={value} onChange={(v) => updateArgs({value: v})} />
  );
};

export const BaseSelect = Template.bind({});
BaseSelect.args = {
  value: 'f1',
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

export const ScrollSelect = Template.bind({});
ScrollSelect.args = {
  items: [...new Array(10)].map((_, i) => ({
    name: `item${i}`,
    value: `val${i}`
  }))
};
