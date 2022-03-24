import Preview from './Preview';
import Toolbar from './Toolbar';

import styled from 'styled-components';
import {StyleConfig} from 'models/Editor';

const StyledPanel = styled.div`
  width: 70%;
  max-width: 1000px;

  & > div:first-child {
    margin-bottom: 1.5em;
  }

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;
interface PanelProps {
  config: StyleConfig;
}

const Panel: React.FC<PanelProps> = ({config}) => {
  return (
    <StyledPanel>
      <Preview {...config} />
      <Toolbar />
    </StyledPanel>
  );
};

export default Panel;
