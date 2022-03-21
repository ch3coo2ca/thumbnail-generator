import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useArgs} from '@storybook/client-api';

import {ColorPicker} from 'components/common';

export default {
  title: 'Components/common/ColorPicker',
  component: ColorPicker
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => {
  const [{value}, updateArgs] = useArgs();
  return (
    <ColorPicker
      {...args}
      value={value}
      onChange={(v) => updateArgs({value: v})}
    />
  );
};

export const BasePicker: ComponentStory<typeof ColorPicker> = Template.bind({});
BasePicker.args = {
  value: '#fff'
};
