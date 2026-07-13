import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../components/Switch';

const meta = {
  title: 'Primitives/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'switch'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
    },
    label: {
      control: 'text',
      description: 'Switch label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position relative to switch',
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Unchecked: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enable notifications',
    defaultChecked: true,
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small switch',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium switch',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large switch',
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled switch',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled checked',
  },
};

// Label Position Stories
export const LabelLeft: Story = {
  args: {
    labelPosition: 'left',
    label: 'Enable feature',
  },
};

export const LabelRight: Story = {
  args: {
    labelPosition: 'right',
    label: 'Enable feature',
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
      <Switch size="sm" label="Small option" />
      <Switch size="md" label="Medium option" />
      <Switch size="lg" label="Large option" />
    </div>
  ),
};

// State Gallery
export const StateGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

// Label Position Gallery
export const LabelPositionGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch labelPosition="left" label="Label on left" />
      <Switch labelPosition="right" label="Label on right" />
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Small</h3>
        <div className="space-y-2">
          <Switch size="sm" label="Notifications" />
          <Switch size="sm" label="Dark mode" defaultChecked />
          <Switch size="sm" label="Disabled" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Medium</h3>
        <div className="space-y-2">
          <Switch size="md" label="Notifications" />
          <Switch size="md" label="Dark mode" defaultChecked />
          <Switch size="md" label="Disabled" disabled />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Large</h3>
        <div className="space-y-2">
          <Switch size="lg" label="Notifications" />
          <Switch size="lg" label="Dark mode" defaultChecked />
          <Switch size="lg" label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const NotificationSettings: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      <Switch label="Push notifications" defaultChecked />
      <Switch label="Email notifications" defaultChecked />
      <Switch label="SMS notifications" />
      <Switch label="In-app notifications" defaultChecked />
    </div>
  ),
};

export const PrivacySettings: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Privacy</h3>
      <Switch label="Visible to other users" defaultChecked />
      <Switch label="Show online status" defaultChecked />
      <Switch label="Allow profile indexing" />
      <Switch label="Enable two-factor authentication" />
    </div>
  ),
};

export const FeatureToggles: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Features</h3>
      <Switch label="Beta features" />
      <Switch label="Analytics" defaultChecked />
      <Switch label="Custom themes" />
      <Switch label="Advanced search" defaultChecked />
    </div>
  ),
};

export const AccessibilitySettings: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
      <Switch label="High contrast mode" />
      <Switch label="Reduced motion" />
      <Switch label="Screen reader optimization" defaultChecked />
      <Switch label="Keyboard shortcuts" defaultChecked />
    </div>
  ),
};

export const CompactSwitches: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Enable feature A</span>
        <Switch size="sm" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Enable feature B</span>
        <Switch size="sm" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Enable feature C</span>
        <Switch size="sm" disabled />
      </div>
    </div>
  ),
};
