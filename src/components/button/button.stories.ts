import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

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
    children: 'Button',
    buttonType: 'primary',
    onPress: () => {
      window.console.log('Primary Button clicked!');
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    buttonType: 'secondary',
    onPress: () => {
      window.console.log('Secondary Button clicked!');
    },
  },
};


export const Outline: Story = {
  args: {
    children: 'Button',
    buttonType: 'outline',
    onPress: () => {
      window.console.log('Outline Button clicked!');
    },
  },
};

export const ThemeOverride: Story = {
  args: {
    children: 'Button',
    buttonType: 'primary',
    theme: 2,
    onPress: () => {
      window.console.log('Outline Button clicked!');
    },
  },
};

