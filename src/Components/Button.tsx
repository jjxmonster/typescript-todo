import * as React from 'react';

export interface ButtonProps {
   onClick: () => void;
}

const Button: React.FC<ButtonProps> = props => {
   return <button onClick={props.onClick}>ADD</button>;
};

export default Button;
