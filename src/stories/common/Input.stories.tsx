import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Input} from 'components/common';

export default {
  title: 'Components/common/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
BaseInput.args = {};
