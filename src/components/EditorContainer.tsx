import {useState} from 'react';

import {DEFAULT_CONFIG} from 'constants/App';
import {StyleConfig} from 'models/Editor';

import Editor from 'components/Editor';
import Panel from 'components/Panel';

import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: white;
  font-size: 3em;
  font-family: Carter one, cursive;
  user-select: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.3em;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const StyledEditorContainer = styled.div`
  background-color: #252534;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;
  overflow-y: auto;
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 475px) {
    padding: 1em;
  }
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
