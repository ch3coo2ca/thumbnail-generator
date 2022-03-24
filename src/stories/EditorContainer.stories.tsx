import {ComponentStory, ComponentMeta} from '@storybook/react';

import EditorContainer from 'components/EditorContainer';

export default {
  title: 'Components/EditorContainer',
  component: EditorContainer
} as ComponentMeta<typeof EditorContainer>;

const Template: ComponentStory<typeof EditorContainer> = (args) => (
  <EditorContainer {...args} />
);

export const Base = Template.bind({});
