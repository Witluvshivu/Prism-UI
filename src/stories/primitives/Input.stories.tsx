import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';

// Icons for demo
const EmailIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
);

const LockIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const SearchIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const meta = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'input'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

// Type Stories
export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'user@example.com',
    leftIcon: EmailIcon,
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    leftIcon: LockIcon,
  },
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    leftIcon: SearchIcon,
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number',
  },
};

// State Stories
export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'This field is required',
    defaultValue: 'invalid@email',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled input',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 'Read-only value',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: UserIcon,
    placeholder: 'Username',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: SearchIcon,
    placeholder: 'Search...',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: EmailIcon,
    rightIcon: SearchIcon,
    placeholder: 'Email address',
  },
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// State Gallery
export const StateGallery: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input placeholder="Default" />
      <Input placeholder="With value" defaultValue="Hello World" />
      <Input
        error
        errorMessage="This field is required"
        defaultValue="Invalid value"
      />
      <Input disabled defaultValue="Disabled" />
      <Input readOnly defaultValue="Read-only" />
    </div>
  ),
};

// With Icons Gallery
export const WithIconsGallery: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input leftIcon={EmailIcon} placeholder="Email" />
      <Input leftIcon={LockIcon} placeholder="Password" />
      <Input leftIcon={SearchIcon} placeholder="Search" />
      <Input leftIcon={UserIcon} rightIcon={SearchIcon} placeholder="User" />
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Small</h3>
        <div className="space-y-2">
          <Input size="sm" placeholder="Default" />
          <Input size="sm" placeholder="With icon" leftIcon={UserIcon} />
          <Input size="sm" error errorMessage="Error state" defaultValue="Error" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Medium</h3>
        <div className="space-y-2">
          <Input size="md" placeholder="Default" />
          <Input size="md" placeholder="With icon" leftIcon={UserIcon} />
          <Input size="md" error errorMessage="Error state" defaultValue="Error" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Large</h3>
        <div className="space-y-2">
          <Input size="lg" placeholder="Default" />
          <Input size="lg" placeholder="With icon" leftIcon={UserIcon} />
          <Input size="lg" error errorMessage="Error state" defaultValue="Error" />
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        leftIcon={EmailIcon}
        placeholder="Email address"
        type="email"
      />
      <Input
        leftIcon={LockIcon}
        placeholder="Password"
        type="password"
      />
    </div>
  ),
};

export const SearchForm: Story = {
  render: () => (
    <div className="w-96">
      <Input
        leftIcon={SearchIcon}
        placeholder="Search for anything..."
        type="search"
      />
    </div>
  ),
};

export const ProfileForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        leftIcon={UserIcon}
        placeholder="Full name"
        defaultValue="John Doe"
      />
      <Input
        leftIcon={EmailIcon}
        placeholder="Email address"
        defaultValue="john@example.com"
        type="email"
      />
      <Input
        leftIcon={SearchIcon}
        placeholder="Website"
        defaultValue="https://johndoe.com"
        type="url"
      />
    </div>
  ),
};
