import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../../components/Checkbox';

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'checkbox'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size',
    },
    label: {
      control: 'text',
      description: 'Checkbox label text',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
    checked: false,
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled checkbox',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled and checked',
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    disabled: true,
    indeterminate: true,
    label: 'Disabled indeterminate',
  },
};

// Without Labels
export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};

export const NoLabelChecked: Story = {
  args: {
    label: undefined,
    defaultChecked: true,
  },
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small option" />
      <Checkbox size="md" label="Medium option" />
      <Checkbox size="lg" label="Large option" />
    </div>
  ),
};

// State Gallery
export const StateGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
  ),
};

// Interactive Examples
export const ControlledCheckbox: Story = {
  render: () => {
    // This would need a React state example
    return <Checkbox label="Controlled checkbox" />;
  },
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Small</h3>
        <div className="space-y-2">
          <Checkbox size="sm" label="Unchecked" />
          <Checkbox size="sm" label="Checked" defaultChecked />
          <Checkbox size="sm" label="Indeterminate" indeterminate />
          <Checkbox size="sm" label="Disabled" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Medium</h3>
        <div className="space-y-2">
          <Checkbox size="md" label="Unchecked" />
          <Checkbox size="md" label="Checked" defaultChecked />
          <Checkbox size="md" label="Indeterminate" indeterminate />
          <Checkbox size="md" label="Disabled" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Large</h3>
        <div className="space-y-2">
          <Checkbox size="lg" label="Unchecked" />
          <Checkbox size="lg" label="Checked" defaultChecked />
          <Checkbox size="lg" label="Indeterminate" indeterminate />
          <Checkbox size="lg" label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
};

// Real-world Example
export const TermsOfService: Story = {
  render: () => (
    <div className="space-y-3">
      <Checkbox label="I agree to the Terms of Service" />
      <Checkbox label="I agree to the Privacy Policy" />
      <Checkbox label="I want to receive marketing emails" />
      <Checkbox label="I am 18 years or older" />
    </div>
  ),
};

export const PermissionSettings: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">Notifications</span>
        <Checkbox label="Enable notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">Location Access</span>
        <Checkbox label="Allow location access" />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">Data Sharing</span>
        <Checkbox label="Share anonymous usage data" defaultChecked />
      </div>
    </div>
  ),
};
