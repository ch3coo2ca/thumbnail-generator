import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';

import styled from 'styled-components';

const StyledToolbar = styled.div`
  display: flex;
  gap: 1em;

  & > button {
    flex: 1;
  }
`;

export interface ToolbarProps {
  onCopy: () => Promise<void>;
  onDownload: () => Promise<void>;
}

const Toolbar: React.FC<ToolbarProps> = ({onCopy, onDownload}) => {
  return (
    <StyledToolbar>
      <CopyButton onCopy={onCopy} />
      <DownloadButton onDownload={onDownload} />
    </StyledToolbar>
  );
};

export default Toolbar;
