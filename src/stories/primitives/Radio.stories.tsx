import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../../components/Radio';

const meta = {
  title: 'Primitives/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'radio'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio button size',
    },
    label: {
      control: 'text',
      description: 'Radio button label text',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Unchecked: Story = {
  args: {
    label: 'Unchecked option',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked option',
    name: 'radio-group',
    defaultChecked: true,
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small radio',
    name: 'radio-group',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium radio',
    name: 'radio-group',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large radio',
    name: 'radio-group',
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled radio',
    name: 'radio-group',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled checked',
    name: 'radio-group',
  },
};

// Without Labels
export const NoLabel: Story = {
  args: {
    label: undefined,
    name: 'radio-group',
  },
};

export const NoLabelChecked: Story = {
  args: {
    label: undefined,
    defaultChecked: true,
    name: 'radio-group',
  },
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio size="sm" label="Small option" name="size-group" />
      <Radio size="md" label="Medium option" name="size-group" />
      <Radio size="lg" label="Large option" name="size-group" />
    </div>
  ),
};

// State Gallery
export const StateGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Unchecked" name="state-group" />
      <Radio label="Checked" name="state-group" defaultChecked />
      <Radio label="Disabled" name="state-group-disabled" disabled />
      <Radio label="Disabled checked" name="state-group-disabled" disabled defaultChecked />
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Small</h3>
        <div className="space-y-2">
          <Radio size="sm" label="Option 1" name="small-group" />
          <Radio size="sm" label="Option 2" name="small-group" />
          <Radio size="sm" label="Option 3" name="small-group" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Medium</h3>
        <div className="space-y-2">
          <Radio size="md" label="Option 1" name="medium-group" />
          <Radio size="md" label="Option 2" name="medium-group" />
          <Radio size="md" label="Option 3" name="medium-group" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Large</h3>
        <div className="space-y-2">
          <Radio size="lg" label="Option 1" name="large-group" />
          <Radio size="lg" label="Option 2" name="large-group" />
          <Radio size="lg" label="Option 3" name="large-group" disabled />
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const ColorSelection: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio label="Red" name="color" value="red" />
      <Radio label="Blue" name="color" value="blue" />
      <Radio label="Green" name="color" value="green" />
      <Radio label="Yellow" name="color" value="yellow" />
    </div>
  ),
};

export const SizeSelection: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio label="Small (S)" name="size" value="small" />
      <Radio label="Medium (M)" name="size" value="medium" />
      <Radio label="Large (L)" name="size" value="large" />
      <Radio label="Extra Large (XL)" name="size" value="xlarge" />
    </div>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio label="Credit Card" name="payment" defaultChecked />
      <Radio label="PayPal" name="payment" />
      <Radio label="Bank Transfer" name="payment" />
      <Radio label="Cash on Delivery" name="payment" />
    </div>
  ),
};

export const NewsletterPreferences: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio label="Daily digest" name="frequency" />
      <Radio label="Weekly summary" name="frequency" defaultChecked />
      <Radio label="Monthly newsletter" name="frequency" />
      <Radio label="No emails" name="frequency" />
    </div>
  ),
};
