import {useState} from 'react';

import {DEFAULT_CONFIG} from 'constants/App';
import {StyleConfig} from 'models/Editor';

import Editor from 'components/Editor';
import Panel from 'components/Panel';

import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: white;
  font-size: 3em;
  /* text-shadow: 1px 1px 2px #bebebe; */
`;

const StyledEditorContainer = styled.div`
  background-color: #252534;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding: 2em;
  width: fit-content;
  border-radius: 10px;
  margin-top: 1em;
`;

const EditorContainer: React.FC = () => {
  const [config, setConfig] = useState<StyleConfig>(DEFAULT_CONFIG);

  const handleChangeConfig = (
    key: keyof StyleConfig,
    value: string | number
  ) => {
    setConfig((prevState) => ({...prevState, [key]: value}));
  };

  return (
    <StyledEditorContainer>
      <StyledHeader> Fancy Thumbnail Generator</StyledHeader>
      <Wrapper>
        <Panel config={config} />
        <Editor config={config} onChange={handleChangeConfig} />
      </Wrapper>
    </StyledEditorContainer>
  );
};

export default EditorContainer;
