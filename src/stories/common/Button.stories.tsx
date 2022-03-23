import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from 'components/common';

export default {
  title: 'Components/common/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Base Button',
  buttonStyle: 'CONTAINED',
  size: 'SMALL'
};
