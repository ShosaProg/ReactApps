import { ComponentStory } from "@storybook/react";
import { Spinner, SpinnerProps } from "./Spinner";

export default {
  title: "Elements/Spinner",
  components: <Spinner />,
};

const Template: ComponentStory<typeof Spinner> = (args: SpinnerProps) => (
  <Spinner {...args} />
);

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
  size: "sm",
  variant: "light",
};
