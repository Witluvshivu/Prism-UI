import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../../components/FormField';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Switch } from '../../components/Switch';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'formfield'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label text',
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display',
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  render: () => (
    <FormField label="Email Address">
      <Input placeholder="Enter your email" />
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField label="Email Address" required>
      <Input placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <FormField
      label="Email Address"
      helperText="We'll never share your email with anyone else"
    >
      <Input placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField
      label="Email Address"
      error="Please enter a valid email address"
    >
      <Input placeholder="Enter your email" defaultValue="invalid-email" />
    </FormField>
  ),
};

export const RequiredWithError: Story = {
  render: () => (
    <FormField
      label="Email Address"
      required
      error="This field is required"
    >
      <Input placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithHelperTextAndError: Story = {
  render: () => (
    <FormField
      label="Email Address"
      helperText="We'll never share your email with anyone else"
      error="Please enter a valid email address"
    >
      <Input placeholder="Enter your email" defaultValue="invalid-email" />
    </FormField>
  ),
};

// With Different Components
export const WithCheckbox: Story = {
  render: () => (
    <FormField
      label="Terms and Conditions"
      helperText="You must accept the terms to continue"
      required
    >
      <Checkbox label="I agree to the terms and conditions" />
    </FormField>
  ),
};

export const WithSwitch: Story = {
  render: () => (
    <FormField
      label="Email Notifications"
      helperText="Receive email updates about your account"
    >
      <Switch label="Enable email notifications" />
    </FormField>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <FormField
      label="Message"
      helperText="Enter your message (max 500 characters)"
      required
    >
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        rows={4}
        placeholder="Enter your message"
      />
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField
      label="Country"
      helperText="Select your country from the list"
      required
    >
      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </select>
    </FormField>
  ),
};

// State Gallery
export const StateGallery: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <FormField label="Default Field">
        <Input placeholder="Enter text" />
      </FormField>

      <FormField label="Required Field" required>
        <Input placeholder="Enter text" />
      </FormField>

      <FormField
        label="Field with Helper Text"
        helperText="This is additional help text"
      >
        <Input placeholder="Enter text" />
      </FormField>

      <FormField
        label="Field with Error"
        error="This field has an error"
      >
        <Input placeholder="Enter text" defaultValue="Invalid value" />
      </FormField>

      <FormField
        label="Required with Error"
        required
        error="This field is required"
      >
        <Input placeholder="Enter text" />
      </FormField>
    </div>
  ),
};

// All States
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic States</h3>
        <div className="space-y-4">
          <FormField label="Default">
            <Input placeholder="Enter text" />
          </FormField>
          <FormField label="Required" required>
            <Input placeholder="Enter text" />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">With Helper Text</h3>
        <div className="space-y-4">
          <FormField
            label="Email"
            helperText="We'll never share your email"
          >
            <Input type="email" placeholder="Enter email" />
          </FormField>
          <FormField
            label="Password"
            helperText="Must be at least 8 characters"
          >
            <Input type="password" placeholder="Enter password" />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Error States</h3>
        <div className="space-y-4">
          <FormField
            label="Email"
            error="Please enter a valid email"
          >
            <Input type="email" placeholder="Enter email" defaultValue="invalid" />
          </FormField>
          <FormField
            label="Password"
            required
            error="Password is required"
          >
            <Input type="password" placeholder="Enter password" />
          </FormField>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField
        label="Email Address"
        required
        helperText="We'll never share your email with anyone else"
      >
        <Input type="email" placeholder="Enter your email" />
      </FormField>

      <FormField
        label="Password"
        required
        helperText="Must be at least 8 characters"
      >
        <Input type="password" placeholder="Enter your password" />
      </FormField>

      <FormField>
        <Checkbox label="Remember me for 30 days" />
      </FormField>

      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Sign In
      </button>
    </div>
  ),
};

export const RegistrationForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField
        label="Full Name"
        required
        error="Name is required"
      >
        <Input placeholder="Enter your full name" />
      </FormField>

      <FormField
        label="Email Address"
        required
        helperText="We'll send you a confirmation email"
      >
        <Input type="email" placeholder="Enter your email" />
      </FormField>

      <FormField
        label="Password"
        required
        helperText="Must be at least 8 characters with uppercase, lowercase, and numbers"
      >
        <Input type="password" placeholder="Create a password" />
      </FormField>

      <FormField
        label="Confirm Password"
        required
        error="Passwords do not match"
      >
        <Input type="password" placeholder="Confirm your password" />
      </FormField>

      <FormField required>
        <Checkbox label="I agree to the Terms of Service and Privacy Policy" />
      </FormField>

      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Create Account
      </button>
    </div>
  ),
};

export const SettingsForm: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <FormField
        label="Display Name"
        helperText="This name will be visible to other users"
      >
        <Input placeholder="Enter your display name" defaultValue="John Doe" />
      </FormField>

      <FormField
        label="Email Address"
        helperText="We'll use this for account notifications"
      >
        <Input type="email" placeholder="Enter your email" defaultValue="john@example.com" />
      </FormField>

      <FormField
        label="Email Notifications"
        helperText="Choose what email updates you receive"
      >
        <Switch label="Receive marketing emails" defaultChecked />
      </FormField>

      <FormField
        label="Profile Visibility"
        helperText="Control who can see your profile"
      >
        <Switch label="Make profile public" />
      </FormField>

      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Save Changes
      </button>
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField label="Name" required>
        <Input placeholder="Your name" />
      </FormField>

      <FormField label="Email" required>
        <Input type="email" placeholder="Your email" />
      </FormField>

      <FormField label="Subject" required>
        <Input placeholder="What is this regarding?" />
      </FormField>

      <FormField label="Message" required helperText="Max 500 characters">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          rows={5}
          placeholder="Your message"
        />
      </FormField>

      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Send Message
      </button>
    </div>
  ),
};
