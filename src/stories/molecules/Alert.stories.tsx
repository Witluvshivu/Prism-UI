import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alert } from '../../components/Alert';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'alert'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'Alert variant',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    onClose: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant Stories
export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message for your attention.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review this important warning before proceeding.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'There was an error processing your request.',
  },
};

// With Title
export const InfoWithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message for your attention.',
  },
};

export const SuccessWithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const WarningWithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review this important warning before proceeding.',
  },
};

export const DangerWithTitle: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    children: 'There was an error processing your request.',
  },
};

// With Close Button
export const DismissibleInfo: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    onClose: fn(),
    children: 'This alert can be dismissed by clicking the close button.',
  },
};

export const DismissibleSuccess: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    onClose: fn(),
    children: 'Your changes have been saved successfully.',
  },
};

export const DismissibleWarning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    onClose: fn(),
    children: 'Please review this important warning before proceeding.',
  },
};

export const DismissibleDanger: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    onClose: fn(),
    children: 'There was an error processing your request.',
  },
};

// With Actions
export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'New Feature Available',
    action: (
      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
        Learn More
      </button>
    ),
    children: 'A new feature has been added to your account.',
  },
};

export const WithMultipleActions: Story = {
  args: {
    variant: 'warning',
    title: 'Account Expiring Soon',
    action: (
      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Renew Now
        </button>
        <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-700">
          Learn More
        </button>
      </div>
    ),
    children: 'Your subscription will expire in 7 days.',
  },
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Alert variant="info">
        This is an informational message for your attention.
      </Alert>
      <Alert variant="success">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning">
        Please review this important warning before proceeding.
      </Alert>
      <Alert variant="danger">
        There was an error processing your request.
      </Alert>
    </div>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic Alerts</h3>
        <div className="space-y-3">
          <Alert variant="info">Information message without title</Alert>
          <Alert variant="success">Success message without title</Alert>
          <Alert variant="warning">Warning message without title</Alert>
          <Alert variant="danger">Error message without title</Alert>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">With Titles</h3>
        <div className="space-y-3">
          <Alert variant="info" title="Information">
            This is an informational message for your attention.
          </Alert>
          <Alert variant="success" title="Success">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Please review this important warning before proceeding.
          </Alert>
          <Alert variant="danger" title="Error">
            There was an error processing your request.
          </Alert>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Dismissible</h3>
        <div className="space-y-3">
          <Alert variant="info" title="Information" onClose={fn()}>
            This alert can be dismissed by clicking the close button.
          </Alert>
          <Alert variant="success" title="Success" onClose={fn()}>
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="warning" title="Warning" onClose={fn()}>
            Please review this important warning before proceeding.
          </Alert>
          <Alert variant="danger" title="Error" onClose={fn()}>
            There was an error processing your request.
          </Alert>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">With Actions</h3>
        <div className="space-y-3">
          <Alert
            variant="info"
            title="New Feature Available"
            action={<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Learn More</button>}
          >
            A new feature has been added to your account.
          </Alert>
          <Alert
            variant="warning"
            title="Account Expiring Soon"
            action={
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">Renew Now</button>
                <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-700">Learn More</button>
              </div>
            }
          >
            Your subscription will expire in 7 days.
          </Alert>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-red-300 rounded-md"
          defaultValue="invalid-email"
        />
        <Alert variant="danger" className="mt-2">
          Please enter a valid email address.
        </Alert>
      </div>
    </div>
  ),
};

export const SuccessMessage: Story = {
  render: () => (
    <div className="w-full">
      <Alert
        variant="success"
        title="Account Created Successfully!"
        onClose={fn()}
      >
        Your account has been created and you can now start using all features.
      </Alert>
    </div>
  ),
};

export const SystemMaintenance: Story = {
  render: () => (
    <div className="w-full">
      <Alert
        variant="warning"
        title="Scheduled Maintenance"
        action={
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View Details
          </button>
        }
      >
        We will be performing system maintenance on July 10th from 2:00 AM to 4:00 AM UTC.
        Some features may be temporarily unavailable during this time.
      </Alert>
    </div>
  ),
};

export const ApiError: Story = {
  render: () => (
    <div className="w-full">
      <Alert
        variant="danger"
        title="API Error"
        onClose={fn()}
        action={
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Retry
          </button>
        }
      >
        Failed to fetch data from the server. Please check your connection and try again.
      </Alert>
    </div>
  ),
};

export const WelcomeMessage: Story = {
  render: () => (
    <div className="w-full">
      <Alert
        variant="info"
        title="Welcome to Your Dashboard"
        action={
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Take a Tour
          </button>
        }
      >
        Get started by exploring the features and customizing your experience.
      </Alert>
    </div>
  ),
};
