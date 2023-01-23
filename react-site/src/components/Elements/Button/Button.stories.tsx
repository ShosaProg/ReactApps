import { ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Elements/Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>{args.children}</Button>
);

export const HelloButton = Template.bind({});
HelloButton.args = {
  children: "Hello World!!",
};

export const ClickButton = () => <Button>Click</Button>;
