import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'button'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Button visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show left icon',
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show right icon',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Button takes full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icons for demo
const SearchIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ArrowIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// Variant Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'centered',
  },
};

// Icon Stories
export const WithLeftIcon: Story = {
  args: {
    leftIcon: SearchIcon,
    children: 'Search',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: ArrowIcon,
    children: 'Next',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: SearchIcon,
    rightIcon: ArrowIcon,
    children: 'Search & Next',
  },
};

// Combined States
export const LoadingWithIcon: Story = {
  args: {
    loading: true,
    leftIcon: SearchIcon,
    children: 'Searching...',
  },
};

export const DisabledWithIcon: Story = {
  args: {
    disabled: true,
    rightIcon: ArrowIcon,
    children: 'Disabled',
  },
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// All States
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button fullWidth>Full Width</Button>
    </div>
  ),
};
