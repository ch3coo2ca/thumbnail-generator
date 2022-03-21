import {ComponentMeta, ComponentStory} from '@storybook/react';

import {EditorItem} from 'components/Editor/EditorItem';
import {Input, Select, ColorPicker} from 'components/common';

export default {
  title: 'components/Editor/EditorItem',
  component: EditorItem
} as ComponentMeta<typeof EditorItem>;

const Template: ComponentStory<typeof EditorItem> = (args) => (
  <EditorItem {...args} />
);

export const WithInput = Template.bind({});
WithInput.args = {
  title: 'Text',
  children: <Input value={'2'} onChange={() => {}} />
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  title: 'LongLongLongLongTitle',
  children: <Input value={'1234'} onChange={() => {}} />
};

export const WithSelect = Template.bind({});
WithSelect.args = {
  title: 'Select Font',
  children: (
    <Select
      items={[
        {
          name: 'font1',
          value: 'f1'
        },
        {
          name: 'font2',
          value: 'f2'
        }
      ]}
      value="f1"
      onChange={() => {}}
    />
  )
};

export const WithColorPicker = Template.bind({});
WithColorPicker.args = {
  title: 'Font Color',
  children: <ColorPicker value={'#000000'} onChange={() => {}} />
};
