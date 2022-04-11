import {createRef} from 'react';

import Preview from './Preview';
import Toolbar from './Toolbar';

import {StyleConfig} from 'models/Editor';
import {convertDomToImage} from 'utils/image';

import styled from 'styled-components';

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
  const previewRef = createRef<HTMLDivElement>();

  const copyToImage: () => Promise<void> = () => {
    if (!previewRef.current)
      return new Promise((_, reject) => reject('No target ref'));

    return convertDomToImage(previewRef.current, 'blob').then((blob) => {
      navigator.clipboard
        .write([new ClipboardItem({[blob.type]: blob})])
        .catch(() => {
          throw new Error('Error occurred while copying image');
        });
    });
  };

  const downloadImage: () => Promise<void> = () => {
    if (!previewRef.current)
      return new Promise((_, reject) => reject('No target ref'));

    return convertDomToImage(previewRef.current, 'jpeg').then((url) => {
      const link = document.createElement('a');
      link.download = `thumbnail_${+new Date()}`;
      link.href = url;
      link.click();
    });
  };

  return (
    <StyledPanel>
      <Preview ref={previewRef} {...config} />
      <Toolbar onCopy={copyToImage} onDownload={downloadImage} />
    </StyledPanel>
  );
};

export default Panel;
