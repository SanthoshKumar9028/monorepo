import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "Clickable",
  },
};
