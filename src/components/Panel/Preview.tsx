import {StyleConfig} from 'models/Editor';

import styled from 'styled-components';

const PreviewContainer = styled.div`
  width: 100%;
  min-width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;

  @media screen and (max-width: 2560px) {
    min-width: 800px;
    height: 500px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 600px;
    height: 450px;
  }

  @media screen and (max-width: 1024px) {
    min-width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-width: 0;
    height: 250px;
  }

  @media screen and (max-width: 425px) {
    height: auto;
    min-height: 150px;
  }
`;

const Text = styled.div`
  text-align: center;
  word-break: break-word;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
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
