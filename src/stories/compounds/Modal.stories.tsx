import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';

const meta = {
  title: 'Compounds/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'modal'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Control modal visibility',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Modal size',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Close modal when clicking backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close modal when pressing Escape',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Default Modal"
        >
          <p className="text-gray-600">
            This is a default modal dialog with a title and close button.
            You can add any content here.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-gray-600">
            This modal has no title but still has a close button in the header.
          </p>
        </Modal>
      </>
    );
  },
};

// Size Stories
export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          title="Small Modal"
        >
          <p className="text-gray-600">
            This is a small modal for concise messages and quick actions.
          </p>
        </Modal>
      </>
    );
  },
};

export const Medium: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          title="Medium Modal"
        >
          <p className="text-gray-600">
            This is a medium-sized modal, perfect for most use cases.
          </p>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          title="Large Modal"
        >
          <p className="text-gray-600">
            This is a large modal for displaying extensive content or complex forms.
          </p>
        </Modal>
      </>
    );
  },
};

export const ExtraLarge: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open XL Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="xl"
          title="Extra Large Modal"
        >
          <p className="text-gray-600">
            This is an extra large modal for maximum content space.
          </p>
        </Modal>
      </>
    );
  },
};

// With Footer
export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Footer"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p className="text-gray-600">
            This modal has action buttons in the footer.
          </p>
        </Modal>
      </>
    );
  },
};

// Close Options
export const NoBackdropClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="No Backdrop Close"
          closeOnBackdropClick={false}
          footer={
            <Button onClick={() => setIsOpen(false)}>
              Close
            </Button>
          }
        >
          <p className="text-gray-600">
            This modal cannot be closed by clicking the backdrop.
            Use the Close button or press Escape.
          </p>
        </Modal>
      </>
    );
  },
};

export const NoEscapeClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="No Escape Close"
          closeOnEscape={false}
        >
          <p className="text-gray-600">
            This modal cannot be closed with the Escape key.
          </p>
        </Modal>
      </>
    );
  },
};

// Real-world Examples
export const ConfirmDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Deletion"
          size="sm"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Delete
              </Button>
            </>
          }
        >
          <div className="space-y-3">
            <p className="text-gray-600">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Add User</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Add New User"
          size="lg"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Add User
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="">Select a role</option>
                <option value="admin">Administrator</option>
                <option value="user">User</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const TermsOfService: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>View Terms</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms of Service"
          size="lg"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Decline
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Accept
              </Button>
            </>
          }
        >
          <div className="space-y-4 max-h-64 overflow-y-auto">
            <p className="text-gray-600">
              Welcome to our service. By using our platform, you agree to these terms.
            </p>
            <h4 className="font-semibold text-gray-900">1. Acceptance of Terms</h4>
            <p className="text-gray-600 text-sm">
              By accessing and using this service, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
            <h4 className="font-semibold text-gray-900">2. User Responsibilities</h4>
            <p className="text-gray-600 text-sm">
              Users are responsible for maintaining the confidentiality of their account information
              and for all activities that occur under their account.
            </p>
            <h4 className="font-semibold text-gray-900">3. Privacy Policy</h4>
            <p className="text-gray-600 text-sm">
              Your use of our service is also subject to our Privacy Policy. Please review our
              Privacy Policy, which also governs the service.
            </p>
            <h4 className="font-semibold text-gray-900">4. Termination</h4>
            <p className="text-gray-600 text-sm">
              We may terminate or suspend access to our service immediately, without prior notice
              or liability, for any reason whatsoever.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

export const ImagePreview: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>View Image</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="xl"
        >
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg" />
            <p className="text-center text-gray-600">
              Beautiful gradient background preview
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

export const SuccessMessage: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Success!"
        size="sm"
        footer={
          <Button onClick={() => setIsOpen(false)}>
            Continue
          </Button>
        }
      >
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-gray-600">
            Your changes have been saved successfully.
          </p>
        </div>
      </Modal>
    );
  },
};

export const ErrorDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Error"
        size="sm"
        footer={
          <Button onClick={() => setIsOpen(false)}>
            Got it
          </Button>
        }
      >
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-600">
            Something went wrong. Please try again later.
          </p>
        </div>
      </Modal>
    );
  },
};
