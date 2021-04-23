import * as React from 'react';

export interface InputProps {
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
}

const Input: React.FC<InputProps> = ({ handleChange, value }) => {
   return <input value={value} onChange={handleChange} />;
};

export default Input;
