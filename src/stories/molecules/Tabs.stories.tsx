import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Tabs, Tab, Panel } from '../../components/Tabs';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'tabs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pill', 'enclosed'],
      description: 'Tabs visual variant',
    },
    defaultValue: {
      control: 'text',
      description: 'Default active tab value',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

// Variant Stories
export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tab value="tab1">Overview</Tab>
      <Tab value="tab2">Features</Tab>
      <Tab value="tab3">Pricing</Tab>
      <Panel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
          <p className="text-gray-600">This is the overview content with detailed information about the product or service.</p>
        </div>
      </Panel>
      <Panel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
          <p className="text-gray-600">Detailed features and capabilities of the product.</p>
        </div>
      </Panel>
      <Panel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
          <p className="text-gray-600">Pricing plans and options for different needs.</p>
        </div>
      </Panel>
    </Tabs>
  ),
};

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="pill">
      <Tab value="tab1">Overview</Tab>
      <Tab value="tab2">Features</Tab>
      <Tab value="tab3">Pricing</Tab>
      <Panel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
          <p className="text-gray-600">This is the overview content with detailed information about the product or service.</p>
        </div>
      </Panel>
      <Panel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
          <p className="text-gray-600">Detailed features and capabilities of the product.</p>
        </div>
      </Panel>
      <Panel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
          <p className="text-gray-600">Pricing plans and options for different needs.</p>
        </div>
      </Panel>
    </Tabs>
  ),
};

export const Enclosed: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="enclosed">
      <Tab value="tab1">Overview</Tab>
      <Tab value="tab2">Features</Tab>
      <Tab value="tab3">Pricing</Tab>
      <Panel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
          <p className="text-gray-600">This is the overview content with detailed information about the product or service.</p>
        </div>
      </Panel>
      <Panel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
          <p className="text-gray-600">Detailed features and capabilities of the product.</p>
        </div>
      </Panel>
      <Panel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
          <p className="text-gray-600">Pricing plans and options for different needs.</p>
        </div>
      </Panel>
    </Tabs>
  ),
};

// With Disabled Tabs
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tab value="tab1">Overview</Tab>
      <Tab value="tab2">Features</Tab>
      <Tab value="tab3" disabled>Premium</Tab>
      <Tab value="tab4">Settings</Tab>
      <Panel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
          <p className="text-gray-600">This is the overview content.</p>
        </div>
      </Panel>
      <Panel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
          <p className="text-gray-600">Detailed features information.</p>
        </div>
      </Panel>
      <Panel value="tab4">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Settings</h3>
          <p className="text-gray-600">Configure your preferences.</p>
        </div>
      </Panel>
    </Tabs>
  ),
};

// Many Tabs
export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tab value="tab1">Dashboard</Tab>
      <Tab value="tab2">Analytics</Tab>
      <Tab value="tab3">Reports</Tab>
      <Tab value="tab4">Settings</Tab>
      <Tab value="tab5">Users</Tab>
      <Tab value="tab6">Integrations</Tab>
      <Panel value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard</h3>
          <p className="text-gray-600">Overview of your key metrics and activities.</p>
        </div>
      </Panel>
      <Panel value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
          <p className="text-gray-600">Detailed analytics and insights.</p>
        </div>
      </Panel>
      <Panel value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reports</h3>
          <p className="text-gray-600">Generate and view reports.</p>
        </div>
      </Panel>
      <Panel value="tab4">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Settings</h3>
          <p className="text-gray-600">Configure your preferences.</p>
        </div>
      </Panel>
      <Panel value="tab5">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Users</h3>
          <p className="text-gray-600">Manage user accounts and permissions.</p>
        </div>
      </Panel>
      <Panel value="tab6">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h3>
          <p className="text-gray-600">Connect with third-party services.</p>
        </div>
      </Panel>
    </Tabs>
  ),
};

// Variant Gallery
export const VariantGallery: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Underline</h3>
        <Tabs defaultValue="tab1" variant="underline">
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
          <Panel value="tab1">
            <div className="p-4 text-gray-600">Content for Tab 1</div>
          </Panel>
          <Panel value="tab2">
            <div className="p-4 text-gray-600">Content for Tab 2</div>
          </Panel>
          <Panel value="tab3">
            <div className="p-4 text-gray-600">Content for Tab 3</div>
          </Panel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Pill</h3>
        <Tabs defaultValue="tab1" variant="pill">
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
          <Panel value="tab1">
            <div className="p-4 text-gray-600">Content for Tab 1</div>
          </Panel>
          <Panel value="tab2">
            <div className="p-4 text-gray-600">Content for Tab 2</div>
          </Panel>
          <Panel value="tab3">
            <div className="p-4 text-gray-600">Content for Tab 3</div>
          </Panel>
        </Tabs>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Enclosed</h3>
        <Tabs defaultValue="tab1" variant="enclosed">
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
          <Panel value="tab1">
            <div className="p-4 text-gray-600">Content for Tab 1</div>
          </Panel>
          <Panel value="tab2">
            <div className="p-4 text-gray-600">Content for Tab 2</div>
          </Panel>
          <Panel value="tab3">
            <div className="p-4 text-gray-600">Content for Tab 3</div>
          </Panel>
        </Tabs>
      </div>
    </div>
  ),
};

// Real-world Examples
export const ProductDetails: Story = {
  render: () => (
    <Tabs defaultValue="description">
      <Tab value="description">Description</Tab>
      <Tab value="specifications">Specifications</Tab>
      <Tab value="reviews">Reviews</Tab>
      <Panel value="description">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
          <p className="text-gray-600 mb-3">
            This premium product offers exceptional quality and performance. Designed with the user in mind,
            it combines innovative features with elegant design.
          </p>
          <p className="text-gray-600">
            Perfect for both professional and personal use, this product delivers reliable performance
            and lasting durability.
          </p>
        </div>
      </Panel>
      <Panel value="specifications">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Specifications</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Weight:</span>
              <span className="font-medium text-gray-900">2.5 kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Dimensions:</span>
              <span className="font-medium text-gray-900">30 x 20 x 10 cm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Material:</span>
              <span className="font-medium text-gray-900">Premium Aluminum</span>
            </div>
          </div>
        </div>
      </Panel>
      <Panel value="reviews">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Reviews</h3>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">John D.</span>
                <div className="flex text-amber-400">★★★★★</div>
              </div>
              <p className="text-sm text-gray-600">Excellent product, highly recommended!</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">Sarah M.</span>
                <div className="flex text-amber-400">★★★★☆</div>
              </div>
              <p className="text-sm text-gray-600">Great quality, fast shipping. Very satisfied.</p>
            </div>
          </div>
        </div>
      </Panel>
    </Tabs>
  ),
};

export const UserSettings: Story = {
  render: () => (
    <Tabs defaultValue="profile" variant="enclosed">
      <Tab value="profile">Profile</Tab>
      <Tab value="security">Security</Tab>
      <Tab value="notifications">Notifications</Tab>
      <Tab value="billing">Billing</Tab>
      <Panel value="profile">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Profile Settings</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>
      </Panel>
      <Panel value="security">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <button className="px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Enable
              </button>
            </div>
          </div>
        </div>
      </Panel>
      <Panel value="notifications">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Notification Preferences</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-gray-700">Email notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-700">Push notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-gray-700">SMS notifications</span>
            </label>
          </div>
        </div>
      </Panel>
      <Panel value="billing">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Billing Information</h3>
          <div className="p-3 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Current Plan: <span className="font-semibold text-gray-900">Pro</span></p>
            <p className="text-sm text-gray-600">Next billing date: <span className="font-medium text-gray-900">August 8, 2026</span></p>
          </div>
        </div>
      </Panel>
    </Tabs>
  ),
};

export const CodeExamples: Story = {
  render: () => (
    <Tabs defaultValue="javascript" variant="pill">
      <Tab value="javascript">JavaScript</Tab>
      <Tab value="typescript">TypeScript</Tab>
      <Tab value="python">Python</Tab>
      <Panel value="javascript">
        <div className="p-4">
          <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded-md overflow-x-auto">
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
          </pre>
        </div>
      </Panel>
      <Panel value="typescript">
        <div className="p-4">
          <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded-md overflow-x-auto">
{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
          </pre>
        </div>
      </Panel>
      <Panel value="python">
        <div className="p-4">
          <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded-md overflow-x-auto">
{`def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))`}
          </pre>
        </div>
      </Panel>
    </Tabs>
  ),
};
