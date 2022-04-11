import {Button} from 'components/common';
import {ToolbarProps} from './Toolbar';

import {useAsyncCallback} from 'hooks';

type DownloadButtonProps = Pick<ToolbarProps, 'onDownload'>;

const DownloadButton = ({onDownload}: DownloadButtonProps) => {
  const {execute, isLoading} = useAsyncCallback(onDownload);

  return (
    <Button
      buttonStyle="OUTLINED"
      disabled={isLoading}
      size="SMALL"
      onClick={execute}
    >
      {isLoading ? 'Downloading...' : 'Download Image'}
    </Button>
  );
};

export default DownloadButton;
