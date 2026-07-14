import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Tag } from '../../components/Tag';

// Icons for demo
const CheckIcon = (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const meta = {
  title: 'Primitives/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'tag'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tag size',
    },
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Tag color variant',
    },
    treatment: {
      control: 'select',
      options: ['subtle', 'solid'],
      description: 'Tag visual treatment',
    },
    removable: {
      control: 'boolean',
      description: 'Show remove button',
    },
  },
} satisfies Meta<typeof Tag>;

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
    children: 'Small tag',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium tag',
  },
};

// Treatment Stories
export const Subtle: Story = {
  args: {
    treatment: 'subtle',
    children: 'Subtle tag',
  },
};

export const Solid: Story = {
  args: {
    treatment: 'solid',
    children: 'Solid tag',
  },
};

// Removable Stories
export const RemovableSuccess: Story = {
  args: {
    variant: 'success',
    removable: true,
    onRemove: fn(),
    children: 'Active',
  },
};

export const RemovableWarning: Story = {
  args: {
    variant: 'warning',
    removable: true,
    onRemove: fn(),
    children: 'Pending',
  },
};

export const RemovableDanger: Story = {
  args: {
    variant: 'danger',
    removable: true,
    onRemove: fn(),
    children: 'Failed',
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: StarIcon,
    children: 'Featured',
  },
};

export const WithIconRemovable: Story = {
  args: {
    leftIcon: CheckIcon,
    removable: true,
    onRemove: fn(),
    children: 'Completed',
  },
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="neutral">Neutral</Tag>
    </div>
  ),
};

// Treatment Gallery
export const TreatmentGallery: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Tag treatment="subtle" variant="success">Success</Tag>
        <Tag treatment="subtle" variant="warning">Warning</Tag>
        <Tag treatment="subtle" variant="danger">Danger</Tag>
        <Tag treatment="subtle" variant="info">Info</Tag>
        <Tag treatment="subtle" variant="neutral">Neutral</Tag>
      </div>
      <div className="flex flex-wrap gap-3">
        <Tag treatment="solid" variant="success">Success</Tag>
        <Tag treatment="solid" variant="warning">Warning</Tag>
        <Tag treatment="solid" variant="danger">Danger</Tag>
        <Tag treatment="solid" variant="info">Info</Tag>
        <Tag treatment="solid" variant="neutral">Neutral</Tag>
      </div>
    </div>
  ),
};

// Removable Gallery
export const RemovableGallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag removable variant="success" onRemove={fn()}>Active</Tag>
      <Tag removable variant="warning" onRemove={fn()}>Pending</Tag>
      <Tag removable variant="danger" onRemove={fn()}>Failed</Tag>
      <Tag removable variant="info" onRemove={fn()}>Info</Tag>
      <Tag removable variant="neutral" onRemove={fn()}>Other</Tag>
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Subtle</h3>
        <div className="flex flex-wrap gap-3">
          <Tag treatment="subtle" variant="success">Success</Tag>
          <Tag treatment="subtle" variant="warning">Warning</Tag>
          <Tag treatment="subtle" variant="danger">Danger</Tag>
          <Tag treatment="subtle" variant="info">Info</Tag>
          <Tag treatment="subtle" variant="neutral">Neutral</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Tag treatment="solid" variant="success">Success</Tag>
          <Tag treatment="solid" variant="warning">Warning</Tag>
          <Tag treatment="solid" variant="danger">Danger</Tag>
          <Tag treatment="solid" variant="info">Info</Tag>
          <Tag treatment="solid" variant="neutral">Neutral</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <Tag removable variant="success" onRemove={fn()}>Active</Tag>
          <Tag removable variant="warning" onRemove={fn()}>Pending</Tag>
          <Tag removable variant="danger" onRemove={fn()}>Failed</Tag>
          <Tag removable variant="info" onRemove={fn()}>Info</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const StatusTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag removable variant="success" onRemove={fn()}>Published</Tag>
      <Tag removable variant="warning" onRemove={fn()}>Draft</Tag>
      <Tag removable variant="info" onRemove={fn()}>Scheduled</Tag>
      <Tag removable variant="neutral" onRemove={fn()}>Archived</Tag>
    </div>
  ),
};

export const SkillTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag removable variant="info" onRemove={fn()}>React</Tag>
      <Tag removable variant="info" onRemove={fn()}>TypeScript</Tag>
      <Tag removable variant="info" onRemove={fn()}>Node.js</Tag>
      <Tag removable variant="info" onRemove={fn()}>Python</Tag>
      <Tag removable variant="info" onRemove={fn()}>Go</Tag>
    </div>
  ),
};

export const PriorityTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag leftIcon={StarIcon} variant="danger">High</Tag>
      <Tag variant="warning">Medium</Tag>
      <Tag variant="success">Low</Tag>
    </div>
  ),
};

export const CategoryTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag treatment="solid" variant="info">Technology</Tag>
      <Tag treatment="solid" variant="success">Business</Tag>
      <Tag treatment="solid" variant="warning">Design</Tag>
      <Tag treatment="solid" variant="danger">Marketing</Tag>
    </div>
  ),
};
