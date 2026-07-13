import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '../../components/Card';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'card'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card padding size',
    },
    clickable: {
      control: 'boolean',
      description: 'Make card clickable with hover effect',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    children: <p className="text-gray-600">This is a simple card with default padding.</p>,
  },
};

export const WithHeader: Story = {
  args: {
    header: {
      title: 'Card Title',
      subtitle: 'Card subtitle description',
    },
    children: <p className="text-gray-600">Card content goes here.</p>,
  },
};

export const WithFooter: Story = {
  args: {
    children: <p className="text-gray-600">Card content goes here.</p>,
    footer: (
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
          Cancel
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
          Save
        </button>
      </div>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: {
      title: 'Card Title',
      subtitle: 'Card subtitle description',
    },
    children: <p className="text-gray-600">Card content goes here.</p>,
    footer: (
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
          Cancel
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
          Save
        </button>
      </div>
    ),
  },
};

// Padding Stories
export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    header: { title: 'Small Padding' },
    children: <p className="text-gray-600">Card with small padding.</p>,
  },
};

export const MediumPadding: Story = {
  args: {
    padding: 'md',
    header: { title: 'Medium Padding' },
    children: <p className="text-gray-600">Card with medium padding.</p>,
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    header: { title: 'Large Padding' },
    children: <p className="text-gray-600">Card with large padding.</p>,
  },
};

// Clickable Stories
export const Clickable: Story = {
  args: {
    clickable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Clickable Card</h3>
        <p className="text-gray-600">This card has a hover effect and can be clicked.</p>
      </div>
    ),
  },
};

// With Actions
export const WithHeaderAction: Story = {
  args: {
    header: {
      title: 'Card Title',
      action: (
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      ),
    },
    children: <p className="text-gray-600">Card with header action button.</p>,
  },
};

// Padding Gallery
export const PaddingGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <Card padding="sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Padding</h3>
        <p className="text-gray-600">Card with small padding.</p>
      </Card>
      <Card padding="md">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Medium Padding</h3>
        <p className="text-gray-600">Card with medium padding.</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Padding</h3>
        <p className="text-gray-600">Card with large padding.</p>
      </Card>
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic Cards</h3>
        <div className="space-y-3">
          <Card>
            <p className="text-gray-600">Simple card without header or footer.</p>
          </Card>
          <Card
            header={{
              title: 'With Header',
              subtitle: 'Header subtitle',
            }}
          >
            <p className="text-gray-600">Card with header only.</p>
          </Card>
          <Card footer={<div className="text-sm text-gray-500">Card footer</div>}>
            <p className="text-gray-600">Card with footer only.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Padding Sizes</h3>
        <div className="space-y-3">
          <Card padding="sm" header={{ title: 'Small' }}>
            <p className="text-gray-600">Card with small padding.</p>
          </Card>
          <Card padding="md" header={{ title: 'Medium' }}>
            <p className="text-gray-600">Card with medium padding.</p>
          </Card>
          <Card padding="lg" header={{ title: 'Large' }}>
            <p className="text-gray-600">Card with large padding.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Interactive Cards</h3>
        <div className="space-y-3">
          <Card
            clickable
            header={{ title: 'Clickable Card' }}
          >
            <p className="text-gray-600">This card can be clicked.</p>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const UserProfile: Story = {
  render: () => (
    <Card header={{ title: 'User Profile', subtitle: 'Manage your account' }}>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-indigo-600">JD</span>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Role</span>
              <p className="font-medium text-gray-900">Administrator</p>
            </div>
            <div>
              <span className="text-gray-500">Status</span>
              <p className="font-medium text-green-600">Active</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card clickable>
        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-600">1,234</p>
          <p className="text-sm text-gray-600 mt-1">Total Users</p>
        </div>
      </Card>
      <Card clickable>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-600">89%</p>
          <p className="text-sm text-gray-600 mt-1">Success Rate</p>
        </div>
      </Card>
      <Card clickable>
        <div className="text-center">
          <p className="text-3xl font-bold text-amber-600">42</p>
          <p className="text-sm text-gray-600 mt-1">Pending Tasks</p>
        </div>
      </Card>
    </div>
  ),
};

export const ArticleCard: Story = {
  render: () => (
    <Card
      clickable
      padding="lg"
      footer={
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Published on July 8, 2026</span>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Read More
          </button>
        </div>
      }
    >
      <div className="space-y-3">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
          Technology
        </span>
        <h3 className="text-xl font-semibold text-gray-900">
          Getting Started with Modern Web Development
        </h3>
        <p className="text-gray-600">
          Learn the fundamentals of building modern web applications with the latest tools and technologies...
        </p>
      </div>
    </Card>
  ),
};

export const SettingsCard: Story = {
  render: () => (
    <Card
      header={{
        title: 'Account Settings',
        subtitle: 'Manage your account preferences',
      }}
      footer={
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
            Save Changes
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Display Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            defaultValue="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            defaultValue="john@example.com"
          />
        </div>
      </div>
    </Card>
  ),
};
