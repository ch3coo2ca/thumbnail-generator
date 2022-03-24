import {Button} from 'components/common';

import styled from 'styled-components';

const StyledToolbar = styled.div`
  display: flex;
  gap: 1em;

  & > button {
    flex: 1;
  }
`;
const Toolbar: React.FC = () => {
  return (
    <StyledToolbar>
      <Button buttonStyle="OUTLINED" size="SMALL">
        Copy to Clipboard
      </Button>
      <Button buttonStyle="OUTLINED" size="SMALL">
        Download Image
      </Button>
    </StyledToolbar>
  );
};

export default Toolbar;
