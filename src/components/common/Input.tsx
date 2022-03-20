import {InputHTMLAttributes, forwardRef} from 'react';

import styled from 'styled-components';

const WIDTH = 195;
const BaseInput = styled.input`
  padding: 0.5em;
  border-radius: 3px;
  max-width: ${WIDTH}px;
  outline: none;
  border: 1px solid #cbd1e0;
  color: #626673;
  font-size: 1em;
  &:focus {
    border-color: #82a2ff;
    border-width: 2px;
  }
`;

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
interface InputProps extends HTMLInputProps {
  ref?: React.ForwardedRef<HTMLInputElement>;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = forwardRef(
  ({onChange, ...inputAttrs}, ref) => {
    return (
      <BaseInput
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        {...inputAttrs}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
