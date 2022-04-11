import {Button} from 'components/common';
import {ToolbarProps} from './Toolbar';

import {useAsyncCallback} from 'hooks';

type CopyButtonProps = Pick<ToolbarProps, 'onCopy'>;

const CopyButton: React.FC<CopyButtonProps> = ({onCopy}) => {
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

export default CopyButton;
