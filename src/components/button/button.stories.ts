import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    buttonType: 'primary',
    onClick: () => {
      window.console.log('Primary Button clicked!');
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Secondary Button clicked!');
    },
  },
};


export const Outline: Story = {
  args: {
    label: 'Button',
    buttonType: 'outline',
    onClick: () => {
      window.console.log('Outline Button clicked!');
    },
  },
};

