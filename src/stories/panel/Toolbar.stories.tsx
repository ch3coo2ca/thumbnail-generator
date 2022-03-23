import {ComponentStory, ComponentMeta} from '@storybook/react';

import Toolbar from 'components/Panel/Toolbar';

export default {
  title: 'Components/Panel/Toolbar',
  component: Toolbar
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args} />
);

export const Base = Template.bind({});
