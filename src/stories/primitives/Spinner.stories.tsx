import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../components/Spinner';

const meta = {
  title: 'Primitives/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'spinner'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Spinner size',
    },
    variant: {
      control: 'select',
      options: ['circle', 'dots', 'pulse'],
      description: 'Spinner animation variant',
    },
    color: {
      control: 'color',
      description: 'Custom color for the spinner',
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
      description: 'Animation speed',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant Stories
export const Circle: Story = {
  args: {
    variant: 'circle',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'pulse',
  },
};

// Size Stories
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

// Speed Stories
export const Slow: Story = {
  args: {
    speed: 'slow',
  },
};

export const Normal: Story = {
  args: {
    speed: 'normal',
  },
};

export const Fast: Story = {
  args: {
    speed: 'fast',
  },
};

// Custom Colors
export const CustomColor: Story = {
  args: {
    color: '#6366f1',
  },
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner color="#ef4444" />
      <Spinner color="#f59e0b" />
      <Spinner color="#10b981" />
      <Spinner color="#3b82f6" />
      <Spinner color="#8b5cf6" />
    </div>
  ),
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="circle" />
        <span className="text-sm text-gray-600">Circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="dots" />
        <span className="text-sm text-gray-600">Dots</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="pulse" />
        <span className="text-sm text-gray-600">Pulse</span>
      </div>
    </div>
  ),
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Circle</h3>
        <div className="flex gap-4 items-center">
          <Spinner size="sm" variant="circle" />
          <Spinner size="md" variant="circle" />
          <Spinner size="lg" variant="circle" />
          <Spinner size="xl" variant="circle" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Dots</h3>
        <div className="flex gap-4 items-center">
          <Spinner size="sm" variant="dots" />
          <Spinner size="md" variant="dots" />
          <Spinner size="lg" variant="dots" />
          <Spinner size="xl" variant="dots" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Pulse</h3>
        <div className="flex gap-4 items-center">
          <Spinner size="sm" variant="pulse" />
          <Spinner size="md" variant="pulse" />
          <Spinner size="lg" variant="pulse" />
          <Spinner size="xl" variant="pulse" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Speeds</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner speed="slow" />
            <span className="text-xs text-gray-600">Slow</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner speed="normal" />
            <span className="text-xs text-gray-600">Normal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner speed="fast" />
            <span className="text-xs text-gray-600">Fast</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const LoadingButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2">
        <Spinner size="sm" />
        Loading...
      </button>
      <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2">
        <Spinner size="sm" variant="dots" />
        Processing...
      </button>
    </div>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center h-32">
        <Spinner size="lg" />
      </div>
      <p className="text-center text-gray-600 mt-4">Loading content...</p>
    </div>
  ),
};

export const PageLoader: Story = {
  render: () => (
    <div className="flex items-center justify-center h-64 bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" variant="circle" />
        <p className="text-gray-600">Loading application...</p>
      </div>
    </div>
  ),
};
