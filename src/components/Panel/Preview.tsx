import {StyleConfig} from 'models/Editor';

import styled from 'styled-components';

const PreviewContainer = styled.div`
  width: 100%;
  min-width: 800px;
  height: 500px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
`;

const Text = styled.div`
  text-align: center;
  word-break: break-word;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Preview: React.FC<StyleConfig> = (props) => {
  const {backgroundColor, font, fontSize, text, textColor} = props;
  return (
    <PreviewContainer style={{backgroundColor}}>
      <Text style={{fontSize, color: textColor, fontFamily: font}}>{text}</Text>
    </PreviewContainer>
  );
};

export default Preview;
