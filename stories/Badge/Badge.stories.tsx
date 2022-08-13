import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "../../components/Badge/Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Badge/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "bg-royalBlue",
  text: "Royal Blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "bg-cinepolisBlue",
  text: "Cinepolis",
};
