import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

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
  buttonText?: string;
  buttonOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputField = forwardRef(
  (props: InputFieldProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input className="input-field" {...props} ref={ref} />
        {props.buttonText ? (
          <Button
            className="addBtn"
            variant="light"
            style={{ height: "40px", marginLeft: "10px" }}
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </Button>
        ) : null}
      </div>
    );
  }
);
export default InputField;
