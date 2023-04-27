import React, { forwardRef } from "react";

type InputFieldProps = {
  label?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
};

const InputField = forwardRef(
  (props: InputFieldProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className="input-field">
        <input {...props} ref={ref} />
      </div>
    );
  }
);
export default InputField;
