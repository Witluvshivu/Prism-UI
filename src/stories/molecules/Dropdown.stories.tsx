import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from '../../components/Dropdown';

// Icons for demo
const UserIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LogoutIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const DownloadIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const CopyIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const DeleteIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const meta = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'dropdown'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Dropdown alignment',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Basic Stories
export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Open Menu
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Option 1</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 2</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Options
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem leftIcon={UserIcon} onSelect={fn()}>Profile</DropdownItem>
        <DropdownItem leftIcon={SettingsIcon} onSelect={fn()}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownItem leftIcon={DownloadIcon} onSelect={fn()}>Download</DropdownItem>
        <DropdownItem leftIcon={LogoutIcon} onSelect={fn()}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          File
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem shortcut="⌘N" onSelect={fn()}>New</DropdownItem>
        <DropdownItem shortcut="⌘O" onSelect={fn()}>Open</DropdownItem>
        <DropdownItem shortcut="⌘S" onSelect={fn()}>Save</DropdownItem>
        <DropdownSeparator />
        <DropdownItem shortcut="⌘C" leftIcon={CopyIcon} onSelect={fn()}>Copy</DropdownItem>
        <DropdownItem shortcut="⌘V" onSelect={fn()}>Paste</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithSelectedItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          View
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem selected onSelect={fn()}>List View</DropdownItem>
        <DropdownItem onSelect={fn()}>Grid View</DropdownItem>
        <DropdownItem onSelect={fn()}>Detailed View</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithDangerItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Actions
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem leftIcon={CopyIcon} onSelect={fn()}>Duplicate</DropdownItem>
        <DropdownItem leftIcon={DownloadIcon} onSelect={fn()}>Download</DropdownItem>
        <DropdownSeparator />
        <DropdownItem leftIcon={DeleteIcon} danger onSelect={fn()}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Export
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Export as PDF</DropdownItem>
        <DropdownItem onSelect={fn()}>Export as CSV</DropdownItem>
        <DropdownItem disabled onSelect={fn()}>Export as Excel (Premium)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

// Alignment Stories
export const LeftAligned: Story = {
  render: () => (
    <Dropdown align="start">
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Left Aligned
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Option 1</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 2</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const CenterAligned: Story = {
  render: () => (
    <Dropdown align="center">
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Center Aligned
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Option 1</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 2</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const RightAligned: Story = {
  render: () => (
    <Dropdown align="end">
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Right Aligned
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Option 1</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 2</DropdownItem>
        <DropdownItem onSelect={fn()}>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

// All Features
export const AllFeatures: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
          Full Menu
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>File</DropdownLabel>
        <DropdownItem leftIcon={DownloadIcon} shortcut="⌘S" onSelect={fn()}>Save</DropdownItem>
        <DropdownItem shortcut="⌘O" onSelect={fn()}>Open</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Edit</DropdownLabel>
        <DropdownItem leftIcon={CopyIcon} shortcut="⌘C" onSelect={fn()}>Copy</DropdownItem>
        <DropdownItem shortcut="⌘V" onSelect={fn()}>Paste</DropdownItem>
        <DropdownItem shortcut="⌘Z" onSelect={fn()}>Undo</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>View</DropdownLabel>
        <DropdownItem selected onSelect={fn()}>List View</DropdownItem>
        <DropdownItem onSelect={fn()}>Grid View</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Danger Zone</DropdownLabel>
        <DropdownItem leftIcon={DeleteIcon} danger onSelect={fn()}>Delete Item</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

// Real-world Examples
export const UserMenu: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-indigo-600">JD</span>
          </div>
          <span className="text-sm font-medium text-gray-700">John Doe</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem leftIcon={UserIcon} onSelect={fn()}>Profile</DropdownItem>
        <DropdownItem leftIcon={SettingsIcon} onSelect={fn()}>Settings</DropdownItem>
        <DropdownItem onSelect={fn()}>Billing</DropdownItem>
        <DropdownSeparator />
        <DropdownItem leftIcon={LogoutIcon} onSelect={fn()}>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const ShareMenu: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={fn()}>Share via Email</DropdownItem>
        <DropdownItem onSelect={fn()}>Share on Twitter</DropdownItem>
        <DropdownItem onSelect={fn()}>Share on LinkedIn</DropdownItem>
        <DropdownItem onSelect={fn()}>Copy Link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const SortMenu: Story = {
  render: () => (
    <Dropdown align="end">
      <DropdownTrigger>
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Sort By
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem selected onSelect={fn()}>Date Created</DropdownItem>
        <DropdownItem onSelect={fn()}>Date Modified</DropdownItem>
        <DropdownItem onSelect={fn()}>Name (A-Z)</DropdownItem>
        <DropdownItem onSelect={fn()}>Name (Z-A)</DropdownItem>
        <DropdownItem onSelect={fn()}>Size</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
