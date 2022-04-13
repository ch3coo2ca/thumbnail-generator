import {InputHTMLAttributes, forwardRef} from 'react';

import styled from 'styled-components';

const WIDTH = 195;
const BaseInput = styled.input`
  padding: 0.5em;
  border-radius: 3px;
  width: ${WIDTH}px;
  outline: none;
  border: 1px solid #cbd1e0;
  color: #626673;
  font-size: 1em;
  box-sizing: border-box;

  &:focus {
    border-color: #82a2ff;
    border-width: 2px;
  }
`;

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
export interface InputProps extends HTMLInputProps {
  onChange: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({onChange, ...inputAttrs}, ref) => {
    return (
      <BaseInput
        {...inputAttrs}
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
