import {useState} from 'react';

import {StyleConfig} from 'models/Editor';

import Editor from 'components/Editor';

const EditorContainer = () => {
  const [config, setConfig] = useState<StyleConfig>({} as StyleConfig);

  const handleChangeConfig = (key: keyof StyleConfig, value: string) => {
    setConfig((prevState) => ({...prevState, [key]: value}));
  };

  return (
    <div>
      <Editor config={config} onChange={handleChangeConfig} />
    </div>
  );
};

export default EditorContainer;
