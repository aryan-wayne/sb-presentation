import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import {ComponentProps} from "react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        type: {
            control: "select",
            options: ["button", "submit", "reset"]
        },
        variant: {
            control: "radio",
            options: ["fill-primary", "fill-secondary", "outline-primary", "outline-secondary"]
        },
    },
    args: {
        onClick: fn(),
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const FillButton: Story = {
    args: {
        label: "Click Me",
    },
    render: (args) => (
        <Button {...args} />
    )
};

export const OutlineButton: Story = {
    args: {
        label: "Click Me",
        variant: "outline-primary"
    },
    render: (args) => (
        <Button {...args} />
    )
};

