import React from 'react';
import styled, {CSSProperties} from 'styled-components';

enum STYLE {
  CONTAINED = 'contained',
  OUTLINED = 'outlined'
}

enum SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg'
}

type SizeType = keyof typeof SIZE;
type ButtonStyleType = keyof typeof STYLE;

const styles: {[key: string]: CSSProperties} = {
  SMALL: {
    padding: '8px 16px',
    fontSize: '16px'
  },
  MEDIUM: {
    padding: '13px 20px',
    fontSize: '18px'
  },
  LARGE: {
    padding: '18px 24px',
    fontSize: '20px'
  }
};

const StyledButton = styled.button<{
  size: SizeType;
  buttonStyle: ButtonStyleType;
}>`
  cursor: pointer;
  user-select: none;
  border: 0;
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;
  padding: ${(props) => styles[props.size].padding};
  font-size: ${(props) => styles[props.size].fontSize};
  background: transparent;
  opacity: 1;
  font-weight: bold;

  ${(props) =>
    props.buttonStyle === 'CONTAINED' &&
    `
        background-color : #252534;
        color : white; 
    `}
  ${(props) =>
    props.buttonStyle === 'OUTLINED' &&
    `
        background-color : white; 
        border : 2px solid #252534; 
        color : #252534;
    `}
    ${(props) =>
    props.disabled &&
    `
        cursor  : not-allowed; 
        opacity : 0.5;
    `};
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof SIZE;
  buttonStyle?: keyof typeof STYLE;
  disabled?: boolean;
  children: React.ReactNode | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  size = 'SMALL',
  buttonStyle = 'CONTAINED',
  ...buttonProps
}) => {
  return (
    <StyledButton
      buttonStyle={buttonStyle}
      disabled={disabled}
      size={size}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
