import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
      )}
      <AntInput {...props} />
    </div>
  );
};

export default Input;
