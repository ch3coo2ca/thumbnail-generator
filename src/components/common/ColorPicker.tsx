import {useState} from 'react';
import {SwatchesPicker, ColorResult} from 'react-color';

import styled from 'styled-components';

const Picker = styled.div`
  position: relative;

  & .swatches-picker {
    position: absolute;
    z-index: 20;
  }
`;

const ColorPreview = styled.button`
  border-radius: 5px;
  outline: none;
  border: 1px solid #cbd1e0;
  width: 35px;
  height: 35px;
  content: '';
  &:hover {
    cursor: pointer;
  }
`;

interface ColorPickerProps {
  value: string;
  onChange: (colorHex: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({value, onChange}) => {
  const [open, setOpen] = useState<boolean>(false);

  const togglePicker = () => setOpen((prevState) => !prevState);

  const handleChangeColor = (color: ColorResult) => {
    onChange(color.hex);
    togglePicker();
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!e.relatedTarget) togglePicker();
  };

  return (
    <Picker>
      <ColorPreview
        style={{backgroundColor: value}}
        onBlur={handleBlur}
        onClick={togglePicker}
      />
      {open && <SwatchesPicker onChangeComplete={handleChangeColor} />}
    </Picker>
  );
};

export default ColorPicker;
