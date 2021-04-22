import * as React from 'react';

export interface InputProps {
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ handleChange }) => {
   return <input onChange={handleChange} />;
};

export default Input;
