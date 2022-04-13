import React, {createRef} from 'react';
import Input, {InputProps} from './Input';

import styled from 'styled-components';

const StyledRange = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RangeInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
  padding: 0;
`;

const NumberInput = styled(Input)`
  width: 70px;
`;

type BaseProps = InputProps & Required<Pick<InputProps, 'min' | 'max'>>;
interface RangeProps extends BaseProps {
  useInputControl?: boolean;
}
const Range: React.FC<RangeProps> = ({
  value,
  onChange,
  min,
  max,
  useInputControl = false
}) => {
  const inputRef = createRef<HTMLInputElement>();

  const handleChangeInput = (v: string) => {
    if (!inputRef.current) return;

    console.log(inputRef.current.value, inputRef.current.checkValidity());
    if (!inputRef.current.checkValidity()) return;

    onChange(v);
  };

  return (
    <StyledRange>
      <RangeInput
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      {useInputControl && (
        <NumberInput
          type="number"
          ref={inputRef}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      )}
    </StyledRange>
  );
};

export default Range;
