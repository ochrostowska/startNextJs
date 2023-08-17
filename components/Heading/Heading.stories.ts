import type { Meta, StoryObj } from "@storybook/react";

import { H } from "./Heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Heading",
  component: H,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof H>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1: Story = {
  args: {
    children: "H1 Heading",
    type: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "H2 Heading",
    type: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "H3 Heading",
    type: "h3",
  },
};

export const H4: Story = {
  args: {
    children:
      "H1 Heading - Przesłony okienne, systemy rolet i bram dla Twojego domu i firmy",
    type: "h4",
  },
};

export const H5: Story = {
  args: {
    children: "ŻYCZYMY CI SŁOŃCA I UŚMIECHU! :)",
    type: "h5",
  },
};
