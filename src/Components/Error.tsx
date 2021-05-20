import * as React from 'react';

interface ErrorProps {
   isError: boolean;
   errorText: string;
}

const Error: React.FC<ErrorProps> = ({ isError, errorText }) => {
   return <p>{isError ? errorText : null}</p>;
};

export default Error;
