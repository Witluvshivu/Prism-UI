import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { SearchBar } from '../../components/SearchBar';

const meta = {
  title: 'Compounds/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'searchbar'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Search bar size',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    showShortcut: {
      control: 'boolean',
      description: 'Show keyboard shortcut badge',
    },
    shortcutText: {
      control: 'text',
      description: 'Shortcut badge text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width search bar',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Search query',
    placeholder: 'Search...',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Search for anything...',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small search...',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium search...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large search...',
  },
};

// With Shortcut
export const WithShortcut: Story = {
  args: {
    placeholder: 'Search...',
    showShortcut: true,
  },
};

export const WithCustomShortcut: Story = {
  args: {
    placeholder: 'Search...',
    showShortcut: true,
    shortcutText: 'Ctrl+K',
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Search across all content...',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// States
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled search',
    disabled: true,
  },
};

export const WithValueAndClear: Story = {
  args: {
    defaultValue: 'Search with clear button',
    placeholder: 'Search...',
  },
};

// Size Gallery
export const SizeGallery: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <SearchBar size="sm" placeholder="Small search bar" />
      <SearchBar size="md" placeholder="Medium search bar" />
      <SearchBar size="lg" placeholder="Large search bar" />
    </div>
  ),
};

// All States
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Default</h3>
        <SearchBar placeholder="Search..." />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">With Value</h3>
        <SearchBar placeholder="Search..." defaultValue="Search query" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">With Shortcut</h3>
        <SearchBar placeholder="Search..." showShortcut />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Disabled</h3>
        <SearchBar placeholder="Search..." disabled />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Sizes</h3>
        <div className="space-y-2">
          <SearchBar size="sm" placeholder="Small" />
          <SearchBar size="md" placeholder="Medium" />
          <SearchBar size="lg" placeholder="Large" />
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const HeaderSearch: Story = {
  render: () => (
    <div className="w-96">
      <SearchBar
        placeholder="Search anything..."
        showShortcut
      />
    </div>
  ),
};

export const DocumentSearch: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
        <SearchBar
          size="sm"
          placeholder="Filter documents..."
          className="w-64"
        />
      </div>
      <div className="text-center py-12 text-gray-500">
        Use the search bar above to filter documents
      </div>
    </div>
  ),
};

export const UserDirectory: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">User Directory</h1>
        <p className="text-gray-600 mb-4">Search for users by name, email, or department</p>
        <SearchBar
          placeholder="Search users..."
          fullWidth
          showShortcut
        />
      </div>
      <div className="text-center py-12 text-gray-500">
        Start typing to search for users
      </div>
    </div>
  ),
};

export const ProductSearch: Story = {
  render: () => (
    <div className="bg-gray-50 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Find Products</h1>
        <p className="text-gray-600 mb-6 text-center">Search our extensive catalog</p>
        <SearchBar
          size="lg"
          placeholder="Search for products..."
          fullWidth
          showShortcut
        />
      </div>
    </div>
  ),
};

export const CommandPalette: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Command Palette</h1>
        <p className="text-gray-600">Quick access to all features</p>
      </div>
      <SearchBar
        size="lg"
        placeholder="Type a command or search..."
        fullWidth
        showShortcut
        shortcutText="⌘K"
      />
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Recent</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Project Settings</li>
            <li>User Management</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Create New Project</li>
            <li>Import Data</li>
            <li>Export Report</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Go to Dashboard</li>
            <li>View All Projects</li>
            <li>Open Settings</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const FilterSearch: Story = {
  render: () => (
    <div className="w-full">
      <div className="mb-4">
        <SearchBar
          placeholder="Filter table data..."
          fullWidth
        />
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-2 text-sm text-gray-900">John Doe</td>
              <td className="px-4 py-2 text-sm text-gray-600">john@example.com</td>
              <td className="px-4 py-2 text-sm">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm text-gray-900">Jane Smith</td>
              <td className="px-4 py-2 text-sm text-gray-600">jane@example.com</td>
              <td className="px-4 py-2 text-sm">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const SearchWithSuggestions: Story = {
  render: () => (
    <div className="w-96">
      <div className="relative">
        <SearchBar
          placeholder="Search for help articles..."
          defaultValue="acc"
        />
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
          <div className="p-2 border-b">
            <p className="text-xs font-semibold text-gray-500 uppercase">Suggestions</p>
          </div>
          <div className="py-1">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm text-gray-700"><strong>acc</strong>ount settings</span>
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm text-gray-700"><strong>acc</strong>essibility options</span>
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm text-gray-700"><strong>Acc</strong>ess denied</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
