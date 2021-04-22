import * as React from 'react';

export interface ButtonProps {
   onClick: () => void;
}

const Button: React.FC<ButtonProps> = props => {
   return <button onClick={props.onClick}>DODAJ</button>;
};

export default Button;
