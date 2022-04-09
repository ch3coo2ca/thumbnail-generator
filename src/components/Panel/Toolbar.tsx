import {Button} from 'components/common';

import useAsyncCallback from 'hooks/useAsyncCallback';

import styled from 'styled-components';

const StyledToolbar = styled.div`
  display: flex;
  gap: 1em;

  & > button {
    flex: 1;
  }
`;

interface ToolbarProps {
  onCopy: () => Promise<void>;
}

type CopyButtonProps = Pick<ToolbarProps, 'onCopy'>;

const CopyButton = ({onCopy}: CopyButtonProps) => {
  const {execute, isLoading} = useAsyncCallback(onCopy);

  return (
    <Button
      buttonStyle="OUTLINED"
      disabled={isLoading}
      size="SMALL"
      onClick={execute}
    >
      {isLoading ? 'Copying...' : 'Copy to Clipboard'}
    </Button>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({onCopy}) => {
  return (
    <StyledToolbar>
      <CopyButton onCopy={onCopy} />
      <Button buttonStyle="OUTLINED" size="SMALL">
        Download Image
      </Button>
    </StyledToolbar>
  );
};

export default Toolbar;
