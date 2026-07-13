import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/Accordion';

const meta = {
  title: 'Compounds/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'accordion'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default open accordion item value',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  render: () => (
    <Accordion defaultValue="item1">
      <AccordionItem value="item1">
        <AccordionTrigger>What is your refund policy?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            We offer a 30-day refund policy for all products. If you're not satisfied with your purchase,
            you can request a full refund within 30 days of the purchase date.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>How do I track my order?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            Once your order is shipped, you'll receive an email with a tracking number. You can use this
            number to track your package on the carrier's website.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending
            on the destination.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultOpen: Story = {
  render: () => (
    <Accordion defaultValue="item2">
      <AccordionItem value="item1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Content for the first item.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">This item is open by default.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Content for the third item.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger>Can I change my order?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            Yes, you can modify your order within 24 hours of placing it. After that, changes may not be possible.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2" disabled>
        <AccordionTrigger>How do I use a promo code?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">This content is currently unavailable.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            We accept all major credit cards, PayPal, and bank transfers for large orders.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger>Frequently Asked Question</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">
            This is a detailed answer to a frequently asked question. It can contain multiple paragraphs
            and various types of content to provide comprehensive information.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const ManyItems: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Learn how to get started with our platform.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Configure your account preferences.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Billing & Payments</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Manage your subscription and payment methods.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item4">
        <AccordionTrigger>Security & Privacy</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Learn about our security measures and privacy policy.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item5">
        <AccordionTrigger>Technical Support</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Get help with technical issues and questions.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item6">
        <AccordionTrigger>API Documentation</AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-600">Access our API documentation and integration guides.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Real-world Examples
export const FAQ: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem value="refund">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600 space-y-2">
              <p>We offer a comprehensive refund policy to ensure customer satisfaction:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>30-day full refund for unused products</li>
                <li>14-day refund for digital products</li>
                <li>Refunds processed within 5-7 business days</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600 space-y-2">
              <p>Shipping times vary by location and shipping method:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Standard shipping: 5-7 business days</li>
                <li>Express shipping: 2-3 business days</li>
                <li>Overnight shipping: 1 business day</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>How do I return an item?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600 space-y-2">
              <p>Returns are simple and straightforward:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Log into your account and go to Order History</li>
                <li>Select the item you want to return</li>
                <li>Print the return shipping label</li>
                <li>Package the item and attach the label</li>
                <li>Drop it off at any authorized shipping location</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>What does the warranty cover?</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <p>Our warranty covers manufacturing defects and malfunctions under normal use. The warranty period
              varies by product type and ranges from 1-3 years. Extended warranty options are available for purchase.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const ProductSpecifications: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Product Specifications</h2>
      <Accordion>
        <AccordionItem value="dimensions">
          <AccordionTrigger>Dimensions & Weight</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <ul className="space-y-1">
                <li><strong>Height:</strong> 12 inches</li>
                <li><strong>Width:</strong> 8 inches</li>
                <li><strong>Depth:</strong> 4 inches</li>
                <li><strong>Weight:</strong> 2.5 pounds</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="materials">
          <AccordionTrigger>Materials & Construction</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <p>Crafted from premium aluminum alloy with reinforced corners. Features scratch-resistant
              coating and tempered glass protection. IP67 rated for water and dust resistance.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="features">
          <AccordionTrigger>Key Features</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <ul className="list-disc list-inside space-y-1">
                <li>Wireless connectivity with Bluetooth 5.0</li>
                <li>Rechargeable battery with 20-hour life</li>
                <li>Fast charging: 0-80% in 45 minutes</li>
                <li>Compatible with iOS and Android</li>
                <li>1-year manufacturer warranty included</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="compatibility">
          <AccordionTrigger>Compatibility Requirements</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <p>Requires iOS 12+ or Android 8.0+. For best performance, use with devices released after 2020.
              Certain features may require additional accessories sold separately.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DocumentationChapters: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Documentation</h2>
      <Accordion>
        <AccordionItem value="installation">
          <AccordionTrigger>Installation Guide</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600 space-y-2">
              <p>Follow these steps to install our software:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Download the installer from our website</li>
                <li>Run the installer with administrator privileges</li>
                <li>Follow the on-screen instructions</li>
                <li>Restart your computer when prompted</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="configuration">
          <AccordionTrigger>Configuration Options</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <p>The software can be configured through the Settings menu. Key options include language
              preferences, theme selection, and notification settings. Advanced users can edit the
              configuration file directly for more granular control.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="troubleshooting">
          <AccordionTrigger>Troubleshooting</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600">
              <p>Common issues and their solutions:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Won't start:</strong> Check system requirements and ensure all dependencies are installed</li>
                <li><strong>Slow performance:</strong> Close other applications and check available memory</li>
                <li><strong>Connection issues:</strong> Verify network settings and firewall configuration</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="rich1">
        <AccordionTrigger>Product Overview</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-gray-600">
              Our revolutionary product combines cutting-edge technology with elegant design to deliver
              an unmatched user experience.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Innovative</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Eco-Friendly</span>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Award-Winning</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="rich2">
        <AccordionTrigger>Technical Details</AccordionTrigger>
        <AccordionContent>
          <div className="text-gray-600">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Processor</td>
                  <td className="py-2">Quad-core 2.4GHz</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Memory</td>
                  <td className="py-2">8GB RAM</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Storage</td>
                  <td className="py-2">256GB SSD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
