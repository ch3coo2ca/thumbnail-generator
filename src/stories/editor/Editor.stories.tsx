import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useArgs} from '@storybook/client-api';

import {StyleConfig} from 'models/Editor';

import Editor from 'components/Editor';

export default {
  title: 'components/Editor/Editor',
  component: Editor
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => {
  const [{config}, updateArgs] = useArgs();

  const handleUpdateConfig = (
    key: keyof StyleConfig,
    value: string | number
  ) => {
    updateArgs({config: {...config, [key]: value}});
  };

  return <Editor {...args} config={config} onChange={handleUpdateConfig} />;
};

export const Base = Template.bind({});
Base.args = {
  config: {
    backgroundColor: '#fff',
    text: 'hello',
    textColor: '#000',
    font: '',
    fontSize: 10
  }
};
