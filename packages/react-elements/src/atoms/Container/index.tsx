import React, { FC } from "react";
import "./Container.css";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Container: FC<ContainerProps> = (props) => (
  <div
    {...props}
    className="container"
    style={{ border: "1px dashed lime", padding: "1em" }}
  />
);

export default Container;
