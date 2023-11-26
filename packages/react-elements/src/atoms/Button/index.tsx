import React, { FC } from "react";
import "./Button.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props) => (
  <button {...props} className={`btn ${props.className}`} />
);

export default Button;
