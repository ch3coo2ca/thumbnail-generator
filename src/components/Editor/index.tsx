import {useMemo} from 'react';

import {DEFAULT_FONTS} from 'constants/App';
import {StyleConfig} from 'models/Editor';

import {Input, Select, ColorPicker, Range} from 'components/common';
import {EditorItem} from './EditorItem';

import {getFontFamilyList} from 'utils/App';

import styled from 'styled-components';

const EditorContainer = styled.div`
  display: grid;
  gap: 1em 0;
  height: fit-content;
`;

interface EditorProps {
  config: StyleConfig;
  onChange: (key: keyof StyleConfig, value: string | number) => void;
}

const Editor: React.FC<EditorProps> = ({config, onChange}) => {
  const fonts = useMemo(() => [...DEFAULT_FONTS, ...getFontFamilyList()], []);

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
        <Range
          min="60"
          max="200"
          value={config.fontSize}
          useInputControl
          onChange={(value: string) => onChange('fontSize', value)}
        />
      </EditorItem>
    </EditorContainer>
  );
};

export default Editor;
