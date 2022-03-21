import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ColorPicker} from 'components/common';
import {useState} from 'react';

export default {
  title: 'Components/common/ColorPicker',
  component: ColorPicker
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = () => {
  const [color, setColor] = useState<string>('#fff');
  return <ColorPicker value={color} onChange={setColor} />;
};

export const BasePicker: ComponentStory<typeof ColorPicker> = Template.bind({});
BasePicker.args = {
  value: '#fff'
};
