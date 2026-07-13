import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components/Avatar';

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'avatar'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Avatar shape',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away'],
      description: 'User status indicator',
    },
    initials: {
      control: 'text',
      description: 'Initials to show when no image',
    },
    fallbackColor: {
      control: 'text',
      description: 'Custom background color for initials',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Size Stories
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    initials: 'XS',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    initials: 'SM',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    initials: 'MD',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    initials: 'LG',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    initials: 'XL',
  },
};

// Shape Stories
export const Circle: Story = {
  args: {
    shape: 'circle',
    initials: 'AB',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    initials: 'CD',
  },
};

// With Images
export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=68',
    alt: 'John Doe',
  },
};

export const WithImageSquare: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=32',
    alt: 'Jane Smith',
    shape: 'square',
  },
};

// Status Indicators
export const OnlineStatus: Story = {
  args: {
    initials: 'ON',
    status: 'online',
  },
};

export const OfflineStatus: Story = {
  args: {
    initials: 'OF',
    status: 'offline',
  },
};

export const AwayStatus: Story = {
  args: {
    initials: 'AW',
    status: 'away',
  },
};

export const WithImageAndStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Online User',
    status: 'online',
  },
};

// Initials Stories
export const SingleInitial: Story = {
  args: {
    initials: 'A',
  },
};

export const TwoInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const FromName: Story = {
  args: {
    alt: 'John Doe',
    initials: 'JD',
  },
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
    </div>
  ),
};

// Shape Gallery
export const ShapeGallery: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar shape="circle" initials="C1" />
      <Avatar shape="circle" src="https://i.pravatar.cc/150?img=1" alt="Circle" />
      <Avatar shape="square" initials="S1" />
      <Avatar shape="square" src="https://i.pravatar.cc/150?img=2" alt="Square" />
    </div>
  ),
};

// Status Gallery
export const StatusGallery: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Avatar initials="ON" status="online" />
      <Avatar initials="OF" status="offline" />
      <Avatar initials="AW" status="away" />
      <Avatar
        src="https://i.pravatar.cc/150?img=15"
        alt="Online"
        status="online"
      />
      <Avatar
        src="https://i.pravatar.cc/150?img=33"
        alt="Offline"
        status="offline"
      />
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Sizes</h3>
        <div className="flex gap-4 items-center">
          <Avatar size="xs" initials="XS" />
          <Avatar size="sm" initials="SM" />
          <Avatar size="md" initials="MD" />
          <Avatar size="lg" initials="LG" />
          <Avatar size="xl" initials="XL" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Shapes</h3>
        <div className="flex gap-4 items-center">
          <Avatar shape="circle" initials="JD" />
          <Avatar shape="square" initials="JS" />
          <Avatar shape="circle" src="https://i.pravatar.cc/150?img=5" alt="Circle" />
          <Avatar shape="square" src="https://i.pravatar.cc/150?img=8" alt="Square" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Statuses</h3>
        <div className="flex gap-6 items-center">
          <Avatar initials="JD" status="online" />
          <Avatar initials="JS" status="offline" />
          <Avatar initials="JA" status="away" />
          <Avatar src="https://i.pravatar.cc/150?img=10" alt="Online" status="online" />
        </div>
      </div>
    </div>
  ),
};
