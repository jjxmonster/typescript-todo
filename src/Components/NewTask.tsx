import * as React from 'react';
import styled from 'styled-components';

///////////////////////////////// S T Y L E ////////////////////////////////////////////
const StyledNewTaskWrapper = styled.div`
   width: 100%;
   height: 10%;
   background: #25273c;
   display: flex;
   border-radius: 5px;
   overflow: hidden;
`;
const StyledInputElement = styled.input`
   flex: 5;
   background: transparent;
   border: 0;
   color: white;
   padding-left: 5%;
   font-size: 1.8vh;
   &:focus {
      border: 0;
      outline: 0;
   }
   &:focus::placeholder {
      font-size: 1.5vh;
   }
   &::placeholder {
      transition: 0.2s ease;
      font-size: 1.8vh;
   }
`;
const StyledAddTaskButton = styled.button`
   flex: 1;
`;
////////////////////////////////////////////////////////////////////////////////////////

export interface InputProps {
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
   onClick: () => void;
}

const Input: React.FC<InputProps> = ({ handleChange, value, onClick }) => {
   return (
      <StyledNewTaskWrapper>
         <StyledInputElement
            placeholder='Create a new task...'
            value={value}
            onChange={handleChange}
         />
         <StyledAddTaskButton onClick={onClick}>ADD</StyledAddTaskButton>
      </StyledNewTaskWrapper>
   );
};

export default Input;
