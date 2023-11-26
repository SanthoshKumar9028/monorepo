import { Meta, StoryObj } from "@storybook/react";
import Container, { ContainerProps } from ".";

export default {
  title: "Atoms/Container",
  component: Container,
} as Meta<ContainerProps>;

export const Default: StoryObj<ContainerProps> = {
  args: {
    children: "Clickable",
  },
};
