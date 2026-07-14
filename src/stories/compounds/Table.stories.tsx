import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableLoading,
  TableEmpty,
} from '../../components/Table';

const meta = {
  title: 'Compounds/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'table'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped', 'borderless'],
      description: 'Table visual variant',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

// Basic Stories
export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Borderless: Story = {
  render: () => (
    <Table variant="borderless">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// With Sortable Headers
export const Sortable: Story = {
  render: () => {
    const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null);
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell
              sortable
              sortDirection={sortDir}
              onSort={() => setSortDir(sortDir === 'asc' ? 'desc' : 'asc')}
            >
              Name
            </TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

// With Clickable Rows
export const ClickableRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow onClick={fn()}>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow onClick={fn()}>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow onClick={fn()}>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// With Text Alignment
export const TextAlignment: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell align="left">Product</TableHeaderCell>
          <TableHeaderCell align="center">Status</TableHeaderCell>
          <TableHeaderCell align="right">Price</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell align="left">Widget A</TableCell>
          <TableCell align="center">In Stock</TableCell>
          <TableCell align="right">$29.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">Widget B</TableCell>
          <TableCell align="center">Low Stock</TableCell>
          <TableCell align="right">$49.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">Widget C</TableCell>
          <TableCell align="center">Out of Stock</TableCell>
          <TableCell align="right">$39.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Loading State
export const Loading: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableLoading rowCount={5} columnCount={3} />
    </Table>
  ),
};

// Empty State
export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableEmpty
        title="No users found"
        description="There are no users in the system yet."
      />
    </Table>
  ),
};

export const EmptyWithAction: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableEmpty
        title="No users found"
        description="Get started by adding your first user."
        action={
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium">
            Add User
          </button>
        }
      />
    </Table>
  ),
};

// Real-world Examples
export const UserTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortable sortDirection={null} onSort={fn()}>User</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell align="right">Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow onClick={fn()}>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-indigo-600">JD</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">Joined Jan 2024</p>
              </div>
            </div>
          </TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell align="right">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
          </TableCell>
        </TableRow>
        <TableRow onClick={fn()}>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-purple-600">JS</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Jane Smith</p>
                <p className="text-sm text-gray-500">Joined Feb 2024</p>
              </div>
            </div>
          </TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell align="right">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
          </TableCell>
        </TableRow>
        <TableRow onClick={fn()}>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-amber-600">BJ</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Bob Johnson</p>
                <p className="text-sm text-gray-500">Joined Mar 2024</p>
              </div>
            </div>
          </TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell align="right">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Inactive</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ProductTable: Story = {
  render: () => (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell align="center">Stock</TableHeaderCell>
          <TableHeaderCell align="right">Price</TableHeaderCell>
          <TableHeaderCell align="center">Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md" />
              <div>
                <p className="font-medium text-gray-900">Premium Widget</p>
                <p className="text-sm text-gray-500">SKU: WID-001</p>
              </div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">In Stock</span>
          </TableCell>
          <TableCell align="right">$29.99</TableCell>
          <TableCell align="center">
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md" />
              <div>
                <p className="font-medium text-gray-900">Standard Widget</p>
                <p className="text-sm text-gray-500">SKU: WID-002</p>
              </div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Low Stock</span>
          </TableCell>
          <TableCell align="right">$19.99</TableCell>
          <TableCell align="center">
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-md" />
              <div>
                <p className="font-medium text-gray-900">Basic Widget</p>
                <p className="text-sm text-gray-500">SKU: WID-003</p>
              </div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Out of Stock</span>
          </TableCell>
          <TableCell align="right">$9.99</TableCell>
          <TableCell align="center">
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const FinancialTable: Story = {
  render: () => (
    <Table variant="borderless">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell align="right">Amount</TableHeaderCell>
          <TableHeaderCell align="right">Balance</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div>
              <p className="font-medium text-gray-900">Starting Balance</p>
              <p className="text-sm text-gray-500">Jan 1, 2024</p>
            </div>
          </TableCell>
          <TableCell align="right">$10,000.00</TableCell>
          <TableCell align="right">$10,000.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div>
              <p className="font-medium text-gray-900">Payment Received</p>
              <p className="text-sm text-gray-500">Invoice #INV-001</p>
            </div>
          </TableCell>
          <TableCell align="right" className="text-green-600">+$2,500.00</TableCell>
          <TableCell align="right">$12,500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div>
              <p className="font-medium text-gray-900">Software Subscription</p>
              <p className="text-sm text-gray-500">Monthly service fee</p>
            </div>
          </TableCell>
          <TableCell align="right" className="text-red-600">-$99.00</TableCell>
          <TableCell align="right">$12,401.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div>
              <p className="font-medium text-gray-900">Office Supplies</p>
              <p className="text-sm text-gray-500">Monthly expense</p>
            </div>
          </TableCell>
          <TableCell align="right" className="text-red-600">-$245.50</TableCell>
          <TableCell align="right">$12,155.50</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const DenseTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className="px-2 py-2 text-xs">ID</TableHeaderCell>
          <TableHeaderCell className="px-2 py-2 text-xs">Name</TableHeaderCell>
          <TableHeaderCell className="px-2 py-2 text-xs">Status</TableHeaderCell>
          <TableHeaderCell className="px-2 py-2 text-xs">Updated</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell className="px-2 py-2 text-sm">#{1000 + i}</TableCell>
            <TableCell className="px-2 py-2 text-sm">Item {i + 1}</TableCell>
            <TableCell className="px-2 py-2 text-sm">
              <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                i % 3 === 0
                  ? 'bg-green-100 text-green-700'
                  : i % 3 === 1
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Processing'}
              </span>
            </TableCell>
            <TableCell className="px-2 py-2 text-sm text-gray-500">
              {i}h ago
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
