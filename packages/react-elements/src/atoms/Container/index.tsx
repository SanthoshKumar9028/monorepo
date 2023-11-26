import React, { FC } from "react";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Container: FC<ContainerProps> = (props) => <div {...props} />;

export default Container;
