import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../components/Tooltip';

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'tooltip'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to trigger',
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing tooltip',
    },
    offset: {
      control: 'number',
      description: 'Distance in pixels from trigger element',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Position Stories
export const Top: Story = {
  args: {
    content: 'Tooltip appears on top',
    position: 'top',
    children: (
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Hover me (top)
      </button>
    ),
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip appears on bottom',
    position: 'bottom',
    children: (
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Hover me (bottom)
      </button>
    ),
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip appears on left',
    position: 'left',
    children: (
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Hover me (left)
      </button>
    ),
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip appears on right',
    position: 'right',
    children: (
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Hover me (right)
      </button>
    ),
  },
};

// Different Trigger Elements
export const WithButton: Story = {
  args: {
    content: 'This is a helpful tooltip',
    position: 'top',
    children: (
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Button with tooltip
      </button>
    ),
  },
};

export const WithLink: Story = {
  args: {
    content: 'Click to learn more',
    position: 'top',
    children: (
      <a href="#" className="text-indigo-600 underline">
        Link with tooltip
      </a>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    content: 'Information icon',
    position: 'top',
    children: (
      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const WithText: Story = {
  args: {
    content: 'Additional information about this text',
    position: 'top',
    children: (
      <span className="text-gray-700 border-b border-dashed border-gray-400 cursor-help">
        Text with tooltip
      </span>
    ),
  },
};

// Position Gallery
export const PositionGallery: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <Tooltip content="Top tooltip" position="top">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Right</button>
      </Tooltip>
    </div>
  ),
};

// All Positions
export const AllPositions: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Top Position</h3>
        <div className="flex justify-center">
          <Tooltip content="Tooltip appears above the element" position="top">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Hover for top tooltip
            </button>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Bottom Position</h3>
        <div className="flex justify-center">
          <Tooltip content="Tooltip appears below the element" position="bottom">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Hover for bottom tooltip
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Left Position</h3>
          <div className="flex justify-center">
            <Tooltip content="Tooltip appears to the left" position="left">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Hover for left tooltip
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Right Position</h3>
          <div className="flex justify-center">
            <Tooltip content="Tooltip appears to the right" position="right">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Hover for right tooltip
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const HelpIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">Email address</span>
      <Tooltip content="We'll never share your email with anyone else" position="top">
        <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </Tooltip>
    </div>
  ),
};

export const FormFieldHint: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <Tooltip
          content="Must be at least 8 characters with uppercase, lowercase, and numbers"
          position="right"
        >
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter password"
          />
        </Tooltip>
      </div>
    </div>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Save your changes" position="top">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">Save</button>
      </Tooltip>
      <Tooltip content="Cancel and go back" position="top">
        <button className="px-4 py-2 bg-gray-600 text-white rounded-md">Cancel</button>
      </Tooltip>
      <Tooltip content="Permanently delete this item" position="top">
        <button className="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
      </Tooltip>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-8">
      <Tooltip content="User is online and active" position="top">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Online</span>
        </div>
      </Tooltip>
      <Tooltip content="User is away from keyboard" position="top">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Away</span>
        </div>
      </Tooltip>
      <Tooltip content="User is currently offline" position="top">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Offline</span>
        </div>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-8">
      <Tooltip content="Instant tooltip (0ms delay)" position="top" delay={0}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Instant</button>
      </Tooltip>
      <Tooltip content="Fast tooltip (100ms delay)" position="top" delay={100}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Fast</button>
      </Tooltip>
      <Tooltip content="Normal tooltip (500ms delay)" position="top" delay={500}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Normal</button>
      </Tooltip>
      <Tooltip content="Slow tooltip (1000ms delay)" position="top" delay={1000}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Slow</button>
      </Tooltip>
    </div>
  ),
};
