import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/Badge';

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'badge'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Badge color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Badge size',
    },
    shape: {
      control: 'select',
      options: ['pill', 'square'],
      description: 'Badge shape',
    },
    withDot: {
      control: 'boolean',
      description: 'Show colored dot indicator',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant Stories
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium',
  },
};

// Shape Stories
export const Pill: Story = {
  args: {
    shape: 'pill',
    children: 'Pill Shape',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    children: 'Square Shape',
  },
};

// With Dot Stories
export const SuccessDot: Story = {
  args: {
    variant: 'success',
    withDot: true,
    children: 'Active',
  },
};

export const WarningDot: Story = {
  args: {
    variant: 'warning',
    withDot: true,
    children: 'Pending',
  },
};

export const DangerDot: Story = {
  args: {
    variant: 'danger',
    withDot: true,
    children: 'Failed',
  },
};

export const InfoDot: Story = {
  args: {
    variant: 'info',
    withDot: true,
    children: 'Info',
  },
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

// With Dots Gallery
export const WithDotsGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" withDot>Active</Badge>
      <Badge variant="warning" withDot>Pending</Badge>
      <Badge variant="danger" withDot>Error</Badge>
      <Badge variant="info" withDot>Info</Badge>
      <Badge variant="neutral" withDot>Offline</Badge>
    </div>
  ),
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge size="sm">Small Badge</Badge>
      <Badge size="md">Medium Badge</Badge>
    </div>
  ),
};

// Shape Gallery
export const ShapeGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge shape="pill">Pill</Badge>
      <Badge shape="square">Square</Badge>
    </div>
  ),
};

// Real-world Examples
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" withDot>Online</Badge>
      <Badge variant="neutral" withDot>Offline</Badge>
      <Badge variant="warning" withDot>Away</Badge>
      <Badge variant="danger" withDot>Busy</Badge>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="info">New</Badge>
      <Badge variant="warning" withDot>Unread</Badge>
      <Badge variant="success">Read</Badge>
      <Badge variant="danger">Urgent</Badge>
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">With Dots</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" withDot>Active</Badge>
          <Badge variant="warning" withDot>Pending</Badge>
          <Badge variant="danger" withDot>Error</Badge>
          <Badge variant="info" withDot>Info</Badge>
          <Badge variant="neutral" withDot>Offline</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Shapes</h3>
        <div className="flex flex-wrap gap-3">
          <Badge shape="pill">Pill</Badge>
          <Badge shape="square">Square</Badge>
        </div>
      </div>
    </div>
  ),
};
