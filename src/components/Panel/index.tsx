import Preview from './Preview';
import Toolbar from './Toolbar';

import styled from 'styled-components';
import {StyleConfig} from 'models/Editor';

const StyledPanel = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  max-width: 1000px;

  & > div {
    margin-bottom: 2em;
  }
`;
interface PanelProps {
  config: StyleConfig;
}

const Panel: React.FC<PanelProps> = ({config}) => {
  return (
    <StyledPanel>
      <Wrapper>
        <Preview {...config} />
        <Toolbar />
      </Wrapper>
    </StyledPanel>
  );
};

export default Panel;
