import {useMemo} from 'react';

import {defaultFonts} from 'constants/App';
import {StyleConfig} from 'models/Editor';

import {Input, Select, ColorPicker} from 'components/common';
import {EditorItem} from './EditorItem';

import {getFontFamilyList} from 'utils/App';

import styled from 'styled-components';

const EditorContainer = styled.div`
  display: grid;
  gap: 1em 0;
`;

interface EditorProps {
  config: StyleConfig;
  onChange: (key: keyof StyleConfig, value: string) => void;
}

const Editor: React.FC<EditorProps> = ({config, onChange}) => {
  const fonts = useMemo(() => [...defaultFonts, ...getFontFamilyList()], []);

  return (
    <EditorContainer>
      <EditorItem title="Background Color">
        <ColorPicker
          value={config.backgroundColor}
          onChange={(value: string) => onChange('backgroundColor', value)}
        />
      </EditorItem>
      <EditorItem title="Text">
        <Input
          value={config.text}
          onChange={(value: string) => onChange('text', value)}
        />
      </EditorItem>
      <EditorItem title="Text Color">
        <ColorPicker
          value={config.textColor}
          onChange={(value: string) => onChange('textColor', value)}
        />
      </EditorItem>
      <EditorItem title="Font">
        <Select
          items={fonts.map((name) => ({value: name, name}))}
          value={config.font}
          onChange={(value: string) => onChange('font', value)}
        />
      </EditorItem>
      <EditorItem title="Font Size">
        <Select
          items={[
            {value: '10', name: '10'},
            {value: '12', name: '12'}
          ]}
          value={config.fontSize}
          onChange={(value: string) => onChange('fontSize', value)}
        />
      </EditorItem>
    </EditorContainer>
  );
};

export default Editor;
