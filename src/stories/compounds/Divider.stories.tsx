import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../components/Divider';

const meta = {
  title: 'Compounds/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'divider'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Divider line style',
    },
    label: {
      control: 'text',
      description: 'Label text to display',
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing around divider',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above the divider</p>
      <Divider />
      <p className="text-gray-600">Content below the divider</p>
    </div>
  ),
};

// Variant Stories
export const Solid: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider variant="solid" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

export const Dashed: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider variant="dashed" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

export const Dotted: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider variant="dotted" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Section 1 content</p>
      <Divider label="OR" />
      <p className="text-gray-600">Section 2 content</p>
    </div>
  ),
};

export const WithCustomLabel: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Personal Information</p>
      <Divider label="Professional Details" />
      <p className="text-gray-600">Professional content</p>
    </div>
  ),
};

// Spacing Stories
export const SmallSpacing: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider spacing="sm" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

export const MediumSpacing: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider spacing="md" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

export const LargeSpacing: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <p className="text-gray-600">Content above</p>
      <Divider spacing="lg" />
      <p className="text-gray-600">Content below</p>
    </div>
  ),
};

// Vertical Stories
export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div className="flex-1 bg-gray-100 p-4 rounded">Left content</div>
      <Divider orientation="vertical" />
      <div className="flex-1 bg-gray-100 p-4 rounded">Right content</div>
    </div>
  ),
};

export const VerticalDashed: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div className="flex-1 bg-gray-100 p-4 rounded">Left</div>
      <Divider orientation="vertical" variant="dashed" />
      <div className="flex-1 bg-gray-100 p-4 rounded">Right</div>
    </div>
  ),
};

export const VerticalDotted: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div className="flex-1 bg-gray-100 p-4 rounded">Left</div>
      <Divider orientation="vertical" variant="dotted" />
      <div className="flex-1 bg-gray-100 p-4 rounded">Right</div>
    </div>
  ),
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="w-full space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Line Styles</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Solid divider</p>
            <Divider variant="solid" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Dashed divider</p>
            <Divider variant="dashed" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Dotted divider</p>
            <Divider variant="dotted" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">With Labels</h3>
        <div className="space-y-4">
          <Divider label="OR" />
          <Divider label="AND" />
          <Divider label="OPTIONAL" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Spacing</h3>
        <div className="space-y-4">
          <Divider spacing="sm" label="Small" />
          <Divider spacing="md" label="Medium" />
          <Divider spacing="lg" label="Large" />
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const FormSections: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LoginFormAlternative: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-md font-medium">
        Sign In with Email
      </button>

      <Divider label="OR CONTINUE WITH" />

      <div className="space-y-3">
        <button className="w-full px-4 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50">
          Continue with Google
        </button>
        <button className="w-full px-4 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50">
          Continue with Apple
        </button>
      </div>
    </div>
  ),
};

export const SidebarLayout: Story = {
  render: () => (
    <div className="flex gap-4 h-64">
      <div className="flex-1 space-y-3">
        <div className="bg-gray-100 p-4 rounded h-full">Main Content Area</div>
      </div>
      <Divider orientation="vertical" />
      <div className="w-48 space-y-3">
        <div className="bg-gray-100 p-4 rounded">Sidebar</div>
      </div>
    </div>
  ),
};

export const Timeline: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Step 1</h3>
          <p className="text-gray-600 mt-1">Complete the registration form with your details</p>
        </div>
        <div className="w-px bg-gray-300 self-stretch" />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Step 2</h3>
          <p className="text-gray-600 mt-1">Verify your email address</p>
        </div>
        <div className="w-px bg-gray-300 self-stretch" />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Step 3</h3>
          <p className="text-gray-600 mt-1">Set up your profile and preferences</p>
        </div>
      </div>
    </div>
  ),
};

export const PricingTiers: Story = {
  render: () => (
    <div className="flex gap-8 items-start">
      <div className="flex-1 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900">Basic</h3>
        <p className="text-3xl font-bold text-gray-900 mt-2">$9<span className="text-lg font-normal text-gray-600">/mo</span></p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>✓ 5 Projects</li>
          <li>✓ 10GB Storage</li>
          <li>✓ Email Support</li>
        </ul>
      </div>

      <Divider orientation="vertical" className="h-96" />

      <div className="flex-1 bg-indigo-50 p-6 rounded-lg border-2 border-indigo-600">
        <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
        <p className="text-3xl font-bold text-indigo-600 mt-2">$29<span className="text-lg font-normal text-gray-600">/mo</span></p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>✓ Unlimited Projects</li>
          <li>✓ 100GB Storage</li>
          <li>✓ Priority Support</li>
          <li>✓ Advanced Analytics</li>
        </ul>
      </div>
    </div>
  ),
};
