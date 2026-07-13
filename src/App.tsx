import { Button, Input, Badge, Avatar, Checkbox, Radio, RadioGroup, Switch, Spinner, Tooltip, Divider, SearchBar, FormField, Card, Alert, Tag, Modal, Tabs, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator, DropdownLabel, Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, TableLoading, TableEmpty } from './components'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [featureEnabled, setFeatureEnabled] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('basic')
  const [selectedSize, setSelectedSize] = useState('md')
  const [selectedTheme, setSelectedTheme] = useState('light')
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [advancedSearch, setAdvancedSearch] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [alerts, setAlerts] = useState({
    info: true,
    success: true,
    warning: true,
    danger: true
  })
  const [tags, setTags] = useState([
    { id: '1', label: 'React', variant: 'info' as const, removable: true },
    { id: '2', label: 'TypeScript', variant: 'success' as const, removable: true },
    { id: '3', label: 'JavaScript', variant: 'warning' as const, removable: true },
    { id: '4', label: 'CSS', variant: 'danger' as const, removable: true },
    { id: '5', label: 'HTML', variant: 'neutral' as const, removable: false }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')
  const [activeTab, setActiveTab] = useState('overview')
  const [accordionValue, setAccordionValue] = useState('item-1')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )

  const ArrowRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )

  const TrashIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )

  const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Button Component Showcase
        </h1>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" leftIcon={<DownloadIcon />}>
              Download
            </Button>
            <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
              Next
            </Button>
            <Button variant="ghost" leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>
              Add Item
            </Button>
            <Button variant="danger" leftIcon={<TrashIcon />}>
              Delete
            </Button>
          </div>
        </section>

        {/* States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleLoadingClick} loading={loading}>
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
            <Button variant="ghost" disabled>
              Disabled Ghost
            </Button>
            <Button variant="danger" disabled>
              Disabled Danger
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
          <div className="space-y-3 max-w-md">
            <Button variant="primary" fullWidth>
              Full Width Primary
            </Button>
            <Button variant="secondary" fullWidth>
              Full Width Secondary
            </Button>
            <Button variant="ghost" fullWidth>
              Full Width Ghost
            </Button>
            <Button variant="danger" fullWidth leftIcon={<TrashIcon />}>
              Delete Account
            </Button>
          </div>
        </section>

        {/* Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + Variant Combinations</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small Primary</Button>
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="ghost" size="sm">Small Ghost</Button>
              <Button variant="danger" size="sm">Small Danger</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md" leftIcon={<PlusIcon />}>Medium Primary</Button>
              <Button variant="secondary" size="md" leftIcon={<DownloadIcon />}>Medium Secondary</Button>
              <Button variant="ghost" size="md" leftIcon={<PlusIcon />}>Medium Ghost</Button>
              <Button variant="danger" size="md" leftIcon={<TrashIcon />}>Medium Danger</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>Large Primary</Button>
              <Button variant="secondary" size="lg" rightIcon={<ArrowRightIcon />}>Large Secondary</Button>
              <Button variant="ghost" size="lg" rightIcon={<ArrowRightIcon />}>Large Ghost</Button>
              <Button variant="danger" size="lg" rightIcon={<TrashIcon />}>Large Danger</Button>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Click the button to see the loading state in action:
            </p>
            <Button variant="primary" onClick={handleLoadingClick} loading={loading} leftIcon={<DownloadIcon />}>
              {loading ? 'Processing...' : 'Start Download'}
            </Button>
          </div>
        </section>

        {/* Focus Ring Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus Rings</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Tab to me (Primary)</Button>
            <Button variant="secondary">Tab to me (Secondary)</Button>
            <Button variant="ghost">Tab to me (Ghost)</Button>
            <Button variant="danger">Tab to me (Danger)</Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Try tabbing through the buttons to see the focus rings
          </p>
        </section>

        {/* ======================================== */}
        {/* INPUT COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Input Component Showcase
          </h1>
        </div>

        {/* Input Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="space-y-4 max-w-md">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </section>

        {/* Input States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Default state" />
            <Input placeholder="Disabled state" disabled />
            <Input placeholder="Readonly state" readOnly defaultValue="Cannot be edited" />
            <Input
              placeholder="Error state"
              error
              errorMessage="This field has an error"
            />
          </div>
        </section>

        {/* Input with Icons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Icons</h2>
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="Search..."
              leftIcon={<SearchIcon />}
            />
            <Input
              placeholder="Email"
              leftIcon={<EmailIcon />}
            />
            <Input
              placeholder="Password"
              leftIcon={<LockIcon />}
              rightIcon={<EyeIcon />}
            />
            <Input
              placeholder="Website"
              rightIcon={<GlobeIcon />}
            />
          </div>
        </section>

        {/* Input Size + Icon Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + Icon Combinations</h2>
          <div className="space-y-4 max-w-md">
            <Input size="sm" placeholder="Small with icon" leftIcon={<SearchIcon />} />
            <Input size="md" placeholder="Medium with icon" leftIcon={<SearchIcon />} />
            <Input size="lg" placeholder="Large with icon" leftIcon={<SearchIcon />} />
          </div>
        </section>

        {/* Input States with Icons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States with Icons</h2>
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="Default with icon"
              leftIcon={<UserIcon />}
            />
            <Input
              placeholder="Disabled with icon"
              disabled
              leftIcon={<UserIcon />}
            />
            <Input
              placeholder="Readonly with icon"
              readOnly
              defaultValue="Readonly value"
              leftIcon={<UserIcon />}
            />
            <Input
              placeholder="Error with icon"
              error
              errorMessage="Please enter a valid username"
              leftIcon={<UserIcon />}
            />
          </div>
        </section>

        {/* Input Types */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Input Types</h2>
          <div className="space-y-4 max-w-md">
            <Input type="text" placeholder="Text input" />
            <Input type="email" placeholder="Email input" leftIcon={<EmailIcon />} />
            <Input type="password" placeholder="Password input" leftIcon={<LockIcon />} />
            <Input type="number" placeholder="Number input" />
            <Input type="tel" placeholder="Phone input" />
          </div>
        </section>

        {/* Input Full Width */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
          <div className="space-y-4">
            <Input fullWidth placeholder="Full width text input" />
            <Input
              fullWidth
              placeholder="Full width with icon"
              leftIcon={<SearchIcon />}
              rightIcon={<ArrowRight />}
            />
            <Input
              fullWidth
              placeholder="Full width error state"
              error
              errorMessage="This field is required"
              leftIcon={<AlertIcon />}
            />
          </div>
        </section>

        {/* Interactive Error Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Error Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Type less than 3 characters to see the error state:
            </p>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={name.length > 0 && name.length < 3}
              errorMessage={name.length > 0 && name.length < 3 ? 'Name must be at least 3 characters' : ''}
              leftIcon={<UserIcon />}
            />
          </div>
        </section>

        {/* Input Focus Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus Rings</h2>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Tab to me (Default)" />
            <Input placeholder="Tab to me (Error)" error errorMessage="Error state" />
            <Input placeholder="Tab to me (with icon)" leftIcon={<SearchIcon />} />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Try tabbing through the inputs to see the focus rings and icon color changes
          </p>
        </section>

        {/* Form Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <form className="space-y-4">
              <Input
                placeholder="Full Name"
                leftIcon={<UserIcon />}
              />
              <Input
                type="email"
                placeholder="Email Address"
                leftIcon={<EmailIcon />}
              />
              <Input
                type="password"
                placeholder="Password"
                leftIcon={<LockIcon />}
              />
              <Input
                placeholder="Website (optional)"
                leftIcon={<GlobeIcon />}
              />
              <Button type="submit" fullWidth>
                Create Account
              </Button>
            </form>
          </div>
        </section>

        {/* ======================================== */}
        {/* BADGE COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Badge Component Showcase
          </h1>
        </div>

        {/* Badge Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Semantic Variants</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Badge Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="info" size="sm">Small Info</Badge>
            <Badge variant="info" size="md">Medium Info</Badge>
            <Badge variant="success" size="sm">Small Success</Badge>
            <Badge variant="success" size="md">Medium Success</Badge>
          </div>
        </section>

        {/* Badge Shapes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shapes</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary" shape="pill">Pill Shape</Badge>
            <Badge variant="primary" shape="square">Square Shape</Badge>
            <Badge variant="success" shape="pill">Success Pill</Badge>
            <Badge variant="success" shape="square">Success Square</Badge>
            <Badge variant="danger" shape="pill">Danger Pill</Badge>
            <Badge variant="danger" shape="square">Danger Square</Badge>
          </div>
        </section>

        {/* Badge with Dots */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Dot Indicator</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success" withDot>Online</Badge>
            <Badge variant="warning" withDot>Pending</Badge>
            <Badge variant="danger" withDot>Offline</Badge>
            <Badge variant="info" withDot>New Message</Badge>
            <Badge variant="neutral" withDot>Archived</Badge>
          </div>
        </section>

        {/* Badge Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + Shape Combinations</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="success" size="sm" shape="pill">Small Pill</Badge>
              <Badge variant="success" size="sm" shape="square">Small Square</Badge>
              <Badge variant="warning" size="md" shape="pill">Medium Pill</Badge>
              <Badge variant="warning" size="md" shape="square">Medium Square</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="info" size="sm" shape="pill" withDot>Small Pill + Dot</Badge>
              <Badge variant="info" size="md" shape="square" withDot>Medium Square + Dot</Badge>
              <Badge variant="danger" size="sm" shape="square" withDot>Small Square + Dot</Badge>
              <Badge variant="danger" size="md" shape="pill" withDot>Medium Pill + Dot</Badge>
            </div>
          </div>
        </section>

        {/* Badge Status Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Status Examples</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Server Status:</span>
                <Badge variant="success" withDot>Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Database Status:</span>
                <Badge variant="warning" withDot>Maintenance</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">API Status:</span>
                <Badge variant="danger" withDot>Down</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Cache Status:</span>
                <Badge variant="info" withDot>Updating</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Queue Status:</span>
                <Badge variant="neutral" withDot>Idle</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Badge with Content */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Dynamic Content</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Unread messages:</span>
              <Badge variant="info" withDot>12 new</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Failed attempts:</span>
              <Badge variant="danger" withDot>3 attempts</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Completed tasks:</span>
              <Badge variant="success" withDot>24/25 done</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700">System load:</span>
              <Badge variant="warning" withDot>85% capacity</Badge>
            </div>
          </div>
        </section>

        {/* Badge Color Palette */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Color Palette Reference</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500"></div>
                  <div>
                    <Badge variant="success">Success</Badge>
                    <p className="text-xs text-gray-500 mt-1">green-100 bg, green-800 text</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-amber-500"></div>
                  <div>
                    <Badge variant="warning">Warning</Badge>
                    <p className="text-xs text-gray-500 mt-1">amber-100 bg, amber-800 text</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-500"></div>
                  <div>
                    <Badge variant="danger">Danger</Badge>
                    <p className="text-xs text-gray-500 mt-1">red-100 bg, red-800 text</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-500"></div>
                  <div>
                    <Badge variant="info">Info</Badge>
                    <p className="text-xs text-gray-500 mt-1">blue-100 bg, blue-800 text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Variant Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variant Combinations</h2>
          <div className="space-y-6">
            {(['success', 'warning', 'danger', 'info', 'neutral'] as const).map((variant) => (
              <div key={variant} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 capitalize">{variant} Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={variant} size="sm" shape="pill">Small Pill</Badge>
                  <Badge variant={variant} size="sm" shape="square">Small Square</Badge>
                  <Badge variant={variant} size="md" shape="pill">Medium Pill</Badge>
                  <Badge variant={variant} size="md" shape="square">Medium Square</Badge>
                  <Badge variant={variant} size="sm" shape="pill" withDot>With Dot</Badge>
                  <Badge variant={variant} size="md" shape="square" withDot>Dot + Square</Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* AVATAR COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Avatar Component Showcase
          </h1>
        </div>

        {/* Avatar Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar initials="JD" size="xs" alt="John Doe" />
            <Avatar initials="JD" size="sm" alt="John Doe" />
            <Avatar initials="JD" size="md" alt="John Doe" />
            <Avatar initials="JD" size="lg" alt="John Doe" />
            <Avatar initials="JD" size="xl" alt="John Doe" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            XS (24px), SM (32px), MD (40px), LG (48px), XL (64px)
          </p>
        </section>

        {/* Avatar Shapes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shapes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar initials="JD" shape="circle" size="lg" alt="Circle Avatar" />
            <Avatar initials="JD" shape="square" size="lg" alt="Square Avatar" />
            <Avatar initials="AB" shape="circle" size="lg" alt="Circle 2" />
            <Avatar initials="AB" shape="square" size="lg" alt="Square 2" />
          </div>
        </section>

        {/* Avatar with Images */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Images</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              alt="Jane Smith"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=2"
              alt="Bob Johnson"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              alt="Alice Williams"
              size="xl"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=4"
              alt="Charlie Brown"
              size="md"
              shape="square"
            />
          </div>
        </section>

        {/* Avatar Status */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Status Indicators</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Avatar initials="JD" size="lg" status="online" alt="Online User" />
            <Avatar initials="JD" size="lg" status="offline" alt="Offline User" />
            <Avatar initials="JD" size="lg" status="away" alt="Away User" />
            <Avatar
              src="https://i.pravatar.cc/150?img=5"
              alt="User with status"
              size="lg"
              status="online"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=6"
              alt="User offline"
              size="lg"
              status="offline"
            />
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
              Online
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-400 border-2 border-white"></span>
              Offline
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white"></span>
              Away
            </span>
          </div>
        </section>

        {/* Avatar Initials with Colors */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Initials with Auto-generated Colors</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar initials="AB" size="lg" alt="Alice Brown" />
            <Avatar initials="CD" size="lg" alt="Charlie Davis" />
            <Avatar initials="EF" size="lg" alt="Emma Frank" />
            <Avatar initials="GH" size="lg" alt="George Hill" />
            <Avatar initials="IJ" size="lg" alt="Isabella Jones" />
            <Avatar initials="KL" size="lg" alt="Kevin Lee" />
            <Avatar initials="MN" size="lg" alt="Maria Nelson" />
            <Avatar initials="OP" size="lg" alt="Olivia Parker" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Colors are automatically generated based on the initials using a hash function
          </p>
        </section>

        {/* Avatar Size + Status Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + Status Combinations</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar initials="XS" size="xs" status="online" alt="Extra Small Online" />
              <Avatar initials="SM" size="sm" status="online" alt="Small Online" />
              <Avatar initials="MD" size="md" status="online" alt="Medium Online" />
              <Avatar initials="LG" size="lg" status="online" alt="Large Online" />
              <Avatar initials="XL" size="xl" status="online" alt="Extra Large Online" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar initials="XS" size="xs" status="offline" alt="Extra Small Offline" />
              <Avatar initials="SM" size="sm" status="offline" alt="Small Offline" />
              <Avatar initials="MD" size="md" status="offline" alt="Medium Offline" />
              <Avatar initials="LG" size="lg" status="offline" alt="Large Offline" />
              <Avatar initials="XL" size="xl" status="offline" alt="Extra Large Offline" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar initials="XS" size="xs" status="away" alt="Extra Small Away" />
              <Avatar initials="SM" size="sm" status="away" alt="Small Away" />
              <Avatar initials="MD" size="md" status="away" alt="Medium Away" />
              <Avatar initials="LG" size="lg" status="away" alt="Large Away" />
              <Avatar initials="XL" size="xl" status="away" alt="Extra Large Away" />
            </div>
          </div>
        </section>

        {/* Avatar Team Roster */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Team Roster Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Engineering Team</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=11"
                    alt="Sarah Chen"
                    size="md"
                    status="online"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Lead Engineer</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">Online</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Mike Rodriguez"
                    size="md"
                    status="away"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Mike Rodriguez</p>
                    <p className="text-sm text-gray-500">Senior Developer</p>
                  </div>
                </div>
                <Badge variant="warning" size="sm">Away</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials="EJ" size="md" status="offline" alt="Emma Johnson" />
                  <div>
                    <p className="font-medium text-gray-900">Emma Johnson</p>
                    <p className="text-sm text-gray-500">Junior Developer</p>
                  </div>
                </div>
                <Badge variant="neutral" size="sm">Offline</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=15"
                    alt="Alex Thompson"
                    size="md"
                    status="online"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Alex Thompson</p>
                    <p className="text-sm text-gray-500">DevOps Engineer</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">Online</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Stacking */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Avatar Stacking</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 mb-2">Team members (4):</p>
              <div className="flex -space-x-2">
                <Avatar
                  src="https://i.pravatar.cc/150?img=20"
                  alt="User 1"
                  size="md"
                  className="ring-2 ring-white"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=21"
                  alt="User 2"
                  size="md"
                  className="ring-2 ring-white"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=22"
                  alt="User 3"
                  size="md"
                  className="ring-2 ring-white"
                />
                <Avatar
                  initials="+5"
                  size="md"
                  className="ring-2 ring-white bg-gray-100 text-gray-600"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-2">Online users (3):</p>
              <div className="flex -space-x-2">
                <Avatar
                  src="https://i.pravatar.cc/150?img=25"
                  alt="Online 1"
                  size="lg"
                  status="online"
                  className="ring-2 ring-white"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=26"
                  alt="Online 2"
                  size="lg"
                  status="online"
                  className="ring-2 ring-white"
                />
                <Avatar
                  initials="JK"
                  size="lg"
                  status="online"
                  alt="Online 3"
                  className="ring-2 ring-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Shape + Size + Status */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shape + Size + Status Combinations</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar initials="AB" size="sm" shape="circle" status="online" alt="Small Circle" />
              <Avatar initials="CD" size="md" shape="circle" status="away" alt="Medium Circle" />
              <Avatar initials="EF" size="lg" shape="circle" status="offline" alt="Large Circle" />
              <Avatar initials="GH" size="sm" shape="square" status="online" alt="Small Square" />
              <Avatar initials="IJ" size="md" shape="square" status="away" alt="Medium Square" />
              <Avatar initials="KL" size="lg" shape="square" status="offline" alt="Large Square" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar
                src="https://i.pravatar.cc/150?img=30"
                alt="Image 1"
                size="md"
                shape="circle"
                status="online"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=31"
                alt="Image 2"
                size="lg"
                shape="circle"
                status="away"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=32"
                alt="Image 3"
                size="md"
                shape="square"
                status="offline"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=33"
                alt="Image 4"
                size="lg"
                shape="square"
                status="online"
              />
            </div>
          </div>
        </section>

        {/* Avatar User Profile Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-3">
                <Avatar
                  src="https://i.pravatar.cc/150?img=40"
                  alt="Profile 1"
                  size="lg"
                  status="online"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Jennifer Lee</h4>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
              <Badge variant="success" size="sm">Available</Badge>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-3">
                <Avatar initials="DK" size="lg" status="away" alt="David Kim" />
                <div>
                  <h4 className="font-medium text-gray-900">David Kim</h4>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
              <Badge variant="warning" size="sm">In Meeting</Badge>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-3">
                <Avatar
                  src="https://i.pravatar.cc/150?img=42"
                  alt="Profile 3"
                  size="lg"
                  status="offline"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Rachel Martinez</h4>
                  <p className="text-sm text-gray-500">Marketing Lead</p>
                </div>
              </div>
              <Badge variant="neutral" size="sm">Offline</Badge>
            </div>
          </div>
        </section>

        {/* All Size Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Size Combinations</h2>
          <div className="space-y-6">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <div key={size} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase">{size} Size</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar initials="AB" size={size} alt="Initials" />
                  <Avatar initials="AB" size={size} shape="square" alt="Square Initials" />
                  <Avatar initials="AB" size={size} status="online" alt="Online" />
                  <Avatar initials="AB" size={size} status="offline" alt="Offline" />
                  <Avatar initials="AB" size={size} status="away" alt="Away" />
                  <Avatar
                    src="https://i.pravatar.cc/150?img={Math.random() * 70}"
                    alt={`Image ${size}`}
                    size={size}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* CHECKBOX COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Checkbox Component Showcase
          </h1>
        </div>

        {/* Checkbox Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-col gap-4">
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox" defaultChecked />
            <Checkbox size="lg" label="Large checkbox" />
          </div>
        </section>

        {/* Checkbox States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Checkbox size="md" label="Unchecked" />
            <Checkbox size="md" label="Checked" defaultChecked />
            <Checkbox size="md" label="Indeterminate" indeterminate />
            <Checkbox size="md" label="Disabled unchecked" disabled />
            <Checkbox size="md" label="Disabled checked" disabled defaultChecked />
            <Checkbox size="md" label="Disabled indeterminate" disabled indeterminate />
          </div>
        </section>

        {/* Checkbox Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">Click the checkboxes to see the scale-in animation:</p>
            <div className="space-y-3">
              <Checkbox size="md" label="Accept Terms and Conditions" />
              <Checkbox size="md" label="Subscribe to newsletter" defaultChecked />
              <Checkbox size="md" label="Enable notifications" />
              <Checkbox size="md" label="Remember my preferences" defaultChecked />
            </div>
          </div>
        </section>

        {/* Checkbox Size + State Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + State Combinations</h2>
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase">{size} Size States</h3>
                <div className="flex flex-col gap-3">
                  <Checkbox size={size} label="Unchecked" />
                  <Checkbox size={size} label="Checked" defaultChecked />
                  <Checkbox size={size} label="Indeterminate" indeterminate />
                  <Checkbox size={size} label="Disabled" disabled />
                  <Checkbox size={size} label="Disabled Checked" disabled defaultChecked />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checkbox Task List Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Task List Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Daily Tasks</h3>
            <div className="space-y-3">
              <Checkbox size="md" label="Complete project proposal" defaultChecked />
              <Checkbox size="md" label="Review pull requests" defaultChecked />
              <Checkbox size="md" label="Update documentation" />
              <Checkbox size="md" label="Schedule team meeting" indeterminate />
              <Checkbox size="md" label="Fix critical bugs" />
              <Checkbox size="md" label="Deploy to production" disabled />
            </div>
          </div>
        </section>

        {/* Checkbox Settings Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings Panel Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email updates about your activity</p>
                </div>
                <Checkbox size="md" defaultChecked />
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                </div>
                <Checkbox size="md" />
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-500">Receive SMS for important updates</p>
                </div>
                <Checkbox size="md" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Weekly Summary</p>
                  <p className="text-sm text-gray-500">Get a weekly summary of your activity</p>
                </div>
                <Checkbox size="md" defaultChecked />
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Controlled Component */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Controlled Component</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">Controlled checkbox with state tracking:</p>
            <div className="space-y-3">
              <Checkbox
                size="md"
                label="Feature enabled"
                checked={featureEnabled}
                onCheckedChange={setFeatureEnabled}
              />
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-sm">
                  <span className="font-medium">Current state:</span>{' '}
                  <Badge variant={featureEnabled ? 'success' : 'neutral'} size="sm">
                    {featureEnabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Focus Rings */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus Rings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Tab through the checkboxes to see the focus rings:
            </p>
            <div className="space-y-3">
              <Checkbox size="sm" label="Small with focus" />
              <Checkbox size="md" label="Medium with focus" />
              <Checkbox size="lg" label="Large with focus" />
            </div>
          </div>
        </section>

        {/* Checkbox Animation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Watch the subtle scale-in animation when toggling:
            </p>
            <div className="space-y-4">
              <div className="flex gap-8">
                <div className="text-center">
                  <Checkbox size="sm" label="Small" />
                  <p className="text-xs text-gray-500 mt-1">0.2s ease-out</p>
                </div>
                <div className="text-center">
                  <Checkbox size="md" label="Medium" />
                  <p className="text-xs text-gray-500 mt-1">0.2s ease-out</p>
                </div>
                <div className="text-center">
                  <Checkbox size="lg" label="Large" />
                  <p className="text-xs text-gray-500 mt-1">0.2s ease-out</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Groups */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Checkbox Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Categories</h3>
              <div className="space-y-2">
                <Checkbox size="md" label="Technology" />
                <Checkbox size="md" label="Design" />
                <Checkbox size="md" label="Marketing" />
                <Checkbox size="md" label="Business" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Permissions</h3>
              <div className="space-y-2">
                <Checkbox size="md" label="Read" defaultChecked />
                <Checkbox size="md" label="Write" defaultChecked />
                <Checkbox size="md" label="Delete" />
                <Checkbox size="md" label="Admin" disabled />
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Without Labels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Without Labels</h2>
          <div className="flex flex-wrap gap-4">
            <Checkbox size="sm" />
            <Checkbox size="sm" defaultChecked />
            <Checkbox size="sm" indeterminate />
            <Checkbox size="md" />
            <Checkbox size="md" defaultChecked />
            <Checkbox size="md" indeterminate />
            <Checkbox size="lg" />
            <Checkbox size="lg" defaultChecked />
            <Checkbox size="lg" indeterminate />
          </div>
        </section>

        {/* ======================================== */}
        {/* RADIO COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Radio Component Showcase
          </h1>
        </div>

        {/* Radio Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Radio size="sm" name="size-demo" label="Small radio" value="sm" />
            <Radio size="md" name="size-demo" label="Medium radio" value="md" defaultChecked />
            <Radio size="lg" name="size-demo" label="Large radio" value="lg" />
          </div>
        </section>

        {/* Radio States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Radio size="md" name="states-demo" label="Unselected" value="unselected" />
            <Radio size="md" name="states-demo-2" label="Selected" value="selected" defaultChecked />
            <Radio size="md" name="states-demo-3" label="Disabled unselected" value="disabled-unselected" disabled />
            <Radio size="md" name="states-demo-4" label="Disabled selected" value="disabled-selected" disabled defaultChecked />
          </div>
        </section>

        {/* Radio Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">Click to see the scale-in animation:</p>
            <div className="space-y-3">
              <Radio size="md" name="demo" label="Option 1" value="option1" />
              <Radio size="md" name="demo" label="Option 2" value="option2" defaultChecked />
              <Radio size="md" name="demo" label="Option 3" value="option3" />
            </div>
          </div>
        </section>

        {/* Radio Group Vertical */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Radio Group - Vertical Layout</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <RadioGroup
              name="plan-selection"
              orientation="vertical"
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              label="Select Your Plan"
              description="Choose the plan that best fits your needs"
              options={[
                { value: 'basic', label: 'Basic Plan - $9/month' },
                { value: 'pro', label: 'Pro Plan - $19/month' },
                { value: 'enterprise', label: 'Enterprise Plan - $49/month' },
              ]}
            />
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-sm">
                <span className="font-medium">Selected:</span> {selectedPlan}
              </p>
            </div>
          </div>
        </section>

        {/* Radio Group Horizontal */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Radio Group - Horizontal Layout</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <RadioGroup
              name="size-selection"
              orientation="horizontal"
              value={selectedSize}
              onValueChange={setSelectedSize}
              label="Preferred Size"
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
                { value: 'xl', label: 'Extra Large' },
              ]}
            />
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-sm">
                <span className="font-medium">Selected:</span> {selectedSize}
              </p>
            </div>
          </div>
        </section>

        {/* Radio Group with Disabled Options */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Radio Group with Disabled Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <RadioGroup
                name="theme-vertical"
                orientation="vertical"
                value={selectedTheme}
                onValueChange={setSelectedTheme}
                label="Theme Preference"
                options={[
                  { value: 'light', label: 'Light Mode' },
                  { value: 'dark', label: 'Dark Mode' },
                  { value: 'auto', label: 'Auto (System)' },
                  { value: 'premium', label: 'Premium Themes (Upgrade)', disabled: true },
                ]}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <RadioGroup
                name="language-horizontal"
                orientation="horizontal"
                defaultValue="en"
                label="Language"
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French', disabled: true },
                  { value: 'de', label: 'German', disabled: true },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Radio Size Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + State Combinations</h2>
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase">{size} Size</h3>
                <div className="flex flex-col gap-3">
                  <Radio size={size} name={`${size}-demo-1`} label="Unselected" value="unselected" />
                  <Radio size={size} name={`${size}-demo-2`} label="Selected" value="selected" defaultChecked />
                  <Radio size={size} name={`${size}-demo-3`} label="Disabled" value="disabled" disabled />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Radio Form Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
              <RadioGroup
                name="payment-method"
                orientation="vertical"
                options={[
                  { value: 'credit-card', label: '💳 Credit Card' },
                  { value: 'paypal', label: '🅿️ PayPal' },
                  { value: 'bank-transfer', label: '🏦 Bank Transfer' },
                ]}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Frequency</h3>
              <RadioGroup
                name="notification-freq"
                orientation="vertical"
                options={[
                  { value: 'immediate', label: '⚡ Immediate' },
                  { value: 'daily', label: '📅 Daily digest' },
                  { value: 'weekly', label: '📆 Weekly summary' },
                  { value: 'never', label: '🔕 Never' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Radio Focus Rings */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus Rings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Tab through the radios to see the focus rings:
            </p>
            <div className="space-y-3">
              <Radio size="sm" name="focus-sm" label="Small with focus" value="sm" />
              <Radio size="md" name="focus-md" label="Medium with focus" value="md" defaultChecked />
              <Radio size="lg" name="focus-lg" label="Large with focus" value="lg" />
            </div>
          </div>
        </section>

        {/* Radio Without Labels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Without Labels</h2>
          <div className="flex flex-wrap gap-4">
            <Radio size="sm" name="no-label-sm" value="1" defaultChecked />
            <Radio size="sm" name="no-label-sm" value="2" />
            <Radio size="md" name="no-label-md" value="1" defaultChecked />
            <Radio size="md" name="no-label-md" value="2" />
            <Radio size="lg" name="no-label-lg" value="1" defaultChecked />
            <Radio size="lg" name="no-label-lg" value="2" />
          </div>
        </section>

        {/* Radio Animation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Watch the subtle scale-in animation when selecting:
            </p>
            <RadioGroup
              name="animation-demo"
              orientation="vertical"
              options={[
                { value: 'option1', label: 'First option' },
                { value: 'option2', label: 'Second option' },
                { value: 'option3', label: 'Third option' },
              ]}
            />
          </div>
        </section>

        {/* ======================================== */}
        {/* SWITCH COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Switch Component Showcase
          </h1>
        </div>

        {/* Switch Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Switch size="sm" label="Small switch" />
            <Switch size="md" label="Medium switch" defaultChecked />
            <Switch size="lg" label="Large switch" />
          </div>
        </section>

        {/* Switch States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Switch size="md" label="Off state" />
            <Switch size="md" label="On state" defaultChecked />
            <Switch size="md" label="Disabled off" disabled />
            <Switch size="md" label="Disabled on" disabled defaultChecked />
          </div>
        </section>

        {/* Switch Label Position */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Label Positions</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Switch size="md" label="Label on left" labelPosition="left" />
            <Switch size="md" label="Label on right" labelPosition="right" defaultChecked />
          </div>
        </section>

        {/* Switch Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Toggle to see smooth thumb slide and color transitions:
            </p>
            <div className="space-y-4">
              <Switch size="sm" label="Enable feature" />
              <Switch size="md" label="Activate notifications" defaultChecked />
              <Switch size="lg" label="Power saving mode" />
            </div>
          </div>
        </section>

        {/* Switch Size + State Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + State Combinations</h2>
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase">{size} Size</h3>
                <div className="flex flex-col gap-3">
                  <Switch size={size} label="Off" />
                  <Switch size={size} label="On" defaultChecked />
                  <Switch size={size} label="Disabled off" disabled />
                  <Switch size={size} label="Disabled on" disabled defaultChecked />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Switch Settings Panel */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings Panel Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">App Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium text-gray-900">Dark Mode</p>
                  <p className="text-sm text-gray-500">Switch to dark theme</p>
                </div>
                <Switch size="md" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium text-gray-900">Notifications</p>
                  <p className="text-sm text-gray-500">Enable push notifications</p>
                </div>
                <Switch size="md" checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium text-gray-900">Auto-save</p>
                  <p className="text-sm text-gray-500">Automatically save your work</p>
                </div>
                <Switch size="md" checked={autoSave} onCheckedChange={setAutoSave} />
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Location Services</p>
                  <p className="text-sm text-gray-500">Allow location access</p>
                </div>
                <Switch size="md" disabled />
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <p className="text-sm font-medium text-gray-700 mb-2">Current Settings:</p>
              <div className="space-y-1">
                <p className="text-sm">Dark Mode: <Badge variant={darkMode ? 'success' : 'neutral'} size="sm">{darkMode ? 'On' : 'Off'}</Badge></p>
                <p className="text-sm">Notifications: <Badge variant={notifications ? 'success' : 'neutral'} size="sm">{notifications ? 'On' : 'Off'}</Badge></p>
                <p className="text-sm">Auto-save: <Badge variant={autoSave ? 'success' : 'neutral'} size="sm">{autoSave ? 'On' : 'Off'}</Badge></p>
              </div>
            </div>
          </div>
        </section>

        {/* Switch Label Position Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Label Position Examples</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Labels on Left</h3>
              <div className="space-y-3">
                <Switch size="sm" label="Option 1" labelPosition="left" />
                <Switch size="md" label="Option 2" labelPosition="left" defaultChecked />
                <Switch size="lg" label="Option 3" labelPosition="left" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Labels on Right</h3>
              <div className="space-y-3">
                <Switch size="sm" label="Option 1" labelPosition="right" />
                <Switch size="md" label="Option 2" labelPosition="right" defaultChecked />
                <Switch size="lg" label="Option 3" labelPosition="right" />
              </div>
            </div>
          </div>
        </section>

        {/* Switch Focus Rings */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus Rings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Tab through the switches to see the focus rings:
            </p>
            <div className="space-y-3">
              <Switch size="sm" label="Small with focus" />
              <Switch size="md" label="Medium with focus" defaultChecked />
              <Switch size="lg" label="Large with focus" />
            </div>
          </div>
        </section>

        {/* Switch Animation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Watch the smooth thumb slide and color transitions (200ms):
            </p>
            <div className="space-y-4">
              <div className="flex gap-8">
                <div className="text-center">
                  <Switch size="sm" label="Quick" />
                  <p className="text-xs text-gray-500 mt-1">200ms ease</p>
                </div>
                <div className="text-center">
                  <Switch size="md" label="Smooth" />
                  <p className="text-xs text-gray-500 mt-1">200ms ease</p>
                </div>
                <div className="text-center">
                  <Switch size="lg" label="Fluid" />
                  <p className="text-xs text-gray-500 mt-1">200ms ease</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Switch Without Labels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Without Labels</h2>
          <div className="flex flex-wrap gap-6">
            <Switch size="sm" />
            <Switch size="sm" defaultChecked />
            <Switch size="md" />
            <Switch size="md" defaultChecked />
            <Switch size="lg" />
            <Switch size="lg" defaultChecked />
          </div>
        </section>

        {/* Switch Controlled Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Controlled Component</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">Controlled switch with state tracking:</p>
            <div className="space-y-4">
              <Switch
                size="md"
                label="Feature toggle"
                checked={featureEnabled}
                onCheckedChange={setFeatureEnabled}
              />
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm">
                  <span className="font-medium">Current state:</span>{' '}
                  <Badge variant={featureEnabled ? 'success' : 'neutral'} size="sm">
                    {featureEnabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Switch Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔔 Notifications</h3>
              <div className="space-y-4">
                <Switch size="md" label="Email notifications" defaultChecked />
                <Switch size="md" label="Push notifications" />
                <Switch size="md" label="SMS alerts" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔒 Privacy</h3>
              <div className="space-y-4">
                <Switch size="md" label="Profile visibility" defaultChecked />
                <Switch size="md" label="Activity status" defaultChecked />
                <Switch size="md" label="Data sharing" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎨 Appearance</h3>
              <div className="space-y-4">
                <Switch size="md" label="Dark mode" />
                <Switch size="md" label="Reduced motion" disabled />
                <Switch size="md" label="High contrast" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">⚡ Performance</h3>
              <div className="space-y-4">
                <Switch size="md" label="Hardware acceleration" defaultChecked />
                <Switch size="md" label="Auto-play media" />
                <Switch size="md" label="Background sync" defaultChecked />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SPINNER COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Spinner Component Showcase
          </h1>
        </div>

        {/* Spinner Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <span className="text-sm text-gray-600">Small (16px)</span>
            </div>
            <div className="flex items-center gap-4">
              <Spinner size="md" />
              <span className="text-sm text-gray-600">Medium (24px)</span>
            </div>
            <div className="flex items-center gap-4">
              <Spinner size="lg" />
              <span className="text-sm text-gray-600">Large (32px)</span>
            </div>
            <div className="flex items-center gap-4">
              <Spinner size="xl" />
              <span className="text-sm text-gray-600">Extra Large (48px)</span>
            </div>
          </div>
        </section>

        {/* Spinner Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Visual Variants</h2>
          <div className="flex flex-wrap items-center gap-12">
            <div className="text-center">
              <Spinner variant="circle" size="lg" />
              <p className="text-sm text-gray-600 mt-2">Circle</p>
            </div>
            <div className="text-center">
              <Spinner variant="dots" size="lg" />
              <p className="text-sm text-gray-600 mt-2">Dots</p>
            </div>
            <div className="text-center">
              <Spinner variant="pulse" size="lg" />
              <p className="text-sm text-gray-600 mt-2">Pulse</p>
            </div>
          </div>
        </section>

        {/* Spinner Size + Variant Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Size + Variant Combinations</h2>
          <div className="space-y-8">
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <div key={size} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase">{size} Size</h3>
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-3">
                    <Spinner variant="circle" size={size} />
                    <span className="text-sm text-gray-600">Circle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner variant="dots" size={size} />
                    <span className="text-sm text-gray-600">Dots</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner variant="pulse" size={size} />
                    <span className="text-sm text-gray-600">Pulse</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spinner Colors */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Color Variations</h2>
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <Spinner size="lg" color="#3b82f6" />
              <p className="text-sm text-gray-600 mt-2">Blue</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" color="#10b981" />
              <p className="text-sm text-gray-600 mt-2">Green</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" color="#f59e0b" />
              <p className="text-sm text-gray-600 mt-2">Amber</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" color="#ef4444" />
              <p className="text-sm text-gray-600 mt-2">Red</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" color="#8b5cf6" />
              <p className="text-sm text-gray-600 mt-2">Purple</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" color="#6b7280" />
              <p className="text-sm text-gray-600 mt-2">Gray</p>
            </div>
          </div>
        </section>

        {/* Spinner Speed Variations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Speed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Slow</h3>
              <Spinner variant="circle" size="lg" speed="slow" />
              <p className="text-xs text-gray-500 mt-2">3s duration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Normal</h3>
              <Spinner variant="circle" size="lg" speed="normal" />
              <p className="text-xs text-gray-500 mt-2">1s duration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Fast</h3>
              <Spinner variant="circle" size="lg" speed="fast" />
              <p className="text-xs text-gray-500 mt-2">0.5s duration</p>
            </div>
          </div>
        </section>

        {/* Spinner with Text */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Text Labels</h2>
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Spinner size="md" />
              <span className="text-gray-700">Loading content...</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Spinner variant="dots" size="md" />
              <span className="text-gray-700">Processing data...</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Spinner variant="pulse" size="md" />
              <span className="text-gray-700">Syncing files...</span>
            </div>
          </div>
        </section>

        {/* Spinner in Buttons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">In Button Loading State</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              <Spinner size="sm" />
              <span className="ml-2">Loading...</span>
            </Button>
            <Button variant="secondary" disabled>
              <Spinner size="sm" variant="dots" />
              <span className="ml-2">Processing...</span>
            </Button>
            <Button variant="ghost" disabled>
              <Spinner size="sm" variant="pulse" />
              <span className="ml-2">Please wait...</span>
            </Button>
            <Button variant="danger" disabled>
              <Spinner size="sm" />
              <span className="ml-2">Deleting...</span>
            </Button>
          </div>
        </section>

        {/* Spinner in Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">In Card Loading State</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Spinner variant="circle" size="lg" />
              <p className="text-gray-700 mt-4">Loading data...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Spinner variant="dots" size="lg" />
              <p className="text-gray-700 mt-4">Processing...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Spinner variant="pulse" size="lg" />
              <p className="text-gray-700 mt-4">Syncing...</p>
            </div>
          </div>
        </section>

        {/* Spinner Full Page Loading */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Page Loading Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <Spinner variant="circle" size="xl" />
              <p className="text-gray-700 mt-4 font-medium">Loading Application...</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <Spinner variant="dots" size="xl" />
              <p className="text-gray-700 mt-4 font-medium">Processing Request...</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <Spinner variant="pulse" size="xl" />
              <p className="text-gray-700 mt-4 font-medium">Connecting to Server...</p>
            </div>
          </div>
        </section>

        {/* Spinner Context Colors */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inherit Context Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
              <Spinner size="md" className="text-blue-600" />
              <span className="text-blue-700">Blue context spinner</span>
            </div>
            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
              <Spinner size="md" className="text-green-600" />
              <span className="text-green-700">Green context spinner</span>
            </div>
            <div className="flex items-center gap-4 bg-red-50 p-4 rounded-lg">
              <Spinner size="md" className="text-red-600" />
              <span className="text-red-700">Red context spinner</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <Spinner size="md" className="text-white" />
              <span className="text-white">Dark context spinner</span>
            </div>
          </div>
        </section>

        {/* Spinner All Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variant + Size Combinations</h2>
          <div className="space-y-6">
            {(['circle', 'dots', 'pulse'] as const).map((variant) => (
              <div key={variant} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900 mb-4 capitalize">{variant} Variant</h3>
                <div className="flex items-center gap-8">
                  {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                    <div key={size} className="flex items-center gap-3">
                      <Spinner variant={variant} size={size} />
                      <span className="text-sm text-gray-600 uppercase">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spinner Animation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Continuous Animation Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              All spinners feature smooth, continuous animations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Spinner variant="circle" size="lg" />
                <p className="text-sm text-gray-600 mt-2">Circle rotates continuously</p>
                <p className="text-xs text-gray-500">360° spin animation</p>
              </div>
              <div className="text-center">
                <Spinner variant="dots" size="lg" />
                <p className="text-sm text-gray-600 mt-2">Dots bounce in sequence</p>
                <p className="text-xs text-gray-500">Staggered timing: 0s, 0.15s, 0.3s</p>
              </div>
              <div className="text-center">
                <Spinner variant="pulse" size="lg" />
                <p className="text-sm text-gray-600 mt-2">Pulse scales continuously</p>
                <p className="text-xs text-gray-500">Scale: 0.8 → 1.1 → 0.8</p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* TOOLTIP COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tooltip Component Showcase
          </h1>
        </div>

        {/* Tooltip Positions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Four Positions</h2>
          <div className="flex flex-wrap items-center gap-8">
            <Tooltip content="Tooltip appears above" position="top">
              <Button variant="primary">Top Tooltip</Button>
            </Tooltip>
            <Tooltip content="Tooltip appears below" position="bottom">
              <Button variant="secondary">Bottom Tooltip</Button>
            </Tooltip>
            <Tooltip content="Tooltip appears on left" position="left">
              <Button variant="ghost">Left Tooltip</Button>
            </Tooltip>
            <Tooltip content="Tooltip appears on right" position="right">
              <Button variant="danger">Right Tooltip</Button>
            </Tooltip>
          </div>
        </section>

        {/* Tooltip with Different Elements */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Different Elements</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Tooltip content="Tooltip on button" position="top">
              <Button variant="primary" size="sm">Button</Button>
            </Tooltip>

            <Tooltip content="Tooltip on badge" position="top">
              <Badge variant="success">Badge</Badge>
            </Tooltip>

            <Tooltip content="Tooltip on text" position="top">
              <span className="text-blue-600 underline cursor-pointer">Hover over this text</span>
            </Tooltip>

            <Tooltip content="Tooltip on icon" position="top">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </Tooltip>

            <Tooltip content="Tooltip on switch" position="top">
              <Switch size="sm" label="Feature" />
            </Tooltip>

            <Tooltip content="Tooltip on checkbox" position="top">
              <Checkbox size="sm" label="Option" />
            </Tooltip>
          </div>
        </section>

        {/* Tooltip Position Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Position Examples</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Top Position</h3>
                <div className="flex justify-center">
                  <Tooltip content="I appear above the button!" position="top">
                    <Button variant="primary">Top</Button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Bottom Position</h3>
                <div className="flex justify-center">
                  <Tooltip content="I appear below the button!" position="bottom">
                    <Button variant="secondary">Bottom</Button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Left Position</h3>
                <div className="flex justify-center">
                  <Tooltip content="I appear to the left!" position="left">
                    <Button variant="ghost">Left</Button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Right Position</h3>
                <div className="flex justify-center">
                  <Tooltip content="I appear to the right!" position="right">
                    <Button variant="danger">Right</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tooltip with Long Text */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Long Text</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="This is a much longer tooltip text that provides detailed information." position="top">
              <Button variant="primary">Long text tooltip</Button>
            </Tooltip>

            <Tooltip content="Short" position="top">
              <Button variant="secondary">Short tooltip</Button>
            </Tooltip>

            <Tooltip content="Medium length tooltip text here" position="top">
              <Button variant="ghost">Medium tooltip</Button>
            </Tooltip>
          </div>
        </section>

        {/* Tooltip Animation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Animation Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Hover over any element to see the fade-in with slight position shift:
            </p>
            <div className="flex flex-wrap gap-4">
              <Tooltip content="150ms fade-in with position shift" position="top">
                <Button variant="primary">Hover me</Button>
              </Tooltip>

              <Tooltip content="Dark rounded rectangle with arrow" position="top">
                <Button variant="secondary">And me</Button>
              </Tooltip>

              <Tooltip content="8px offset from trigger element" position="top">
                <Button variant="ghost">Me too!</Button>
              </Tooltip>

              <Tooltip content="Smooth easing function" position="top">
                <Badge variant="info">Badge tooltip</Badge>
              </Tooltip>

              <Tooltip content="Works with any element" position="top">
                <span className="text-gray-600 underline">Text link</span>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Tooltip Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔘 Action Buttons</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Save document</span>
                  <Tooltip content="Save your changes (Ctrl+S)" position="left">
                    <Button variant="primary" size="sm">💾</Button>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Export PDF</span>
                  <Tooltip content="Export as PDF document" position="left">
                    <Button variant="secondary" size="sm">📄</Button>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Delete item</span>
                  <Tooltip content="This action cannot be undone" position="left">
                    <Button variant="danger" size="sm">🗑️</Button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📊 Status Indicators</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Tooltip content="Server is running normally" position="right">
                    <Badge variant="success">● Online</Badge>
                  </Tooltip>
                  <span className="text-gray-700">Main server</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tooltip content="High memory usage detected" position="right">
                    <Badge variant="warning">● Warning</Badge>
                  </Tooltip>
                  <span className="text-gray-700">Database</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tooltip content="Service temporarily unavailable" position="right">
                    <Badge variant="danger">● Offline</Badge>
                  </Tooltip>
                  <span className="text-gray-700">API Gateway</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">👤 User Info</h3>
              <div className="flex items-center gap-4">
                <Tooltip content="View full profile" position="right">
                  <Avatar initials="JD" size="md" />
                </Tooltip>
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">⚙️ Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Dark mode</span>
                  <Tooltip content="Switch to dark theme" position="left">
                    <Switch size="sm" />
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Notifications</span>
                  <Tooltip content="Enable push notifications" position="left">
                    <Switch size="sm" defaultChecked />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tooltip Accessibility */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Tooltips are keyboard accessible and can be dismissed with Escape:
            </p>
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Focus with Tab, dismiss with Escape" position="top">
                <Button variant="primary">Focus me (Tab)</Button>
              </Tooltip>

              <Tooltip content="Keyboard navigation supported" position="top">
                <Button variant="secondary">Me too</Button>
              </Tooltip>

              <Tooltip content="Proper ARIA role='tooltip'" position="top">
                <Button variant="ghost">Accessible</Button>
              </Tooltip>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              💡 Tooltips also support focus events for keyboard users
            </p>
          </div>
        </section>

        {/* Tooltip Offset Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Offset Gap</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Tooltips have an 8px offset gap from the trigger element:
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <Tooltip content="8px gap above" position="top">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-medium">
                    Top
                  </div>
                </Tooltip>
                <p className="text-xs text-gray-500 mt-2">8px above</p>
              </div>

              <div className="text-center">
                <Tooltip content="8px gap below" position="bottom">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-medium">
                    Bottom
                  </div>
                </Tooltip>
                <p className="text-xs text-gray-500 mt-2">8px below</p>
              </div>

              <div className="text-center">
                <Tooltip content="8px gap left" position="left">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-medium">
                    Left
                  </div>
                </Tooltip>
                <p className="text-xs text-gray-500 mt-2">8px left</p>
              </div>

              <div className="text-center">
                <Tooltip content="8px gap right" position="right">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-medium">
                    Right
                  </div>
                </Tooltip>
                <p className="text-xs text-gray-500 mt-2">8px right</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tooltip All Directions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Directions Comparison</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <div></div>
              <Tooltip content="Top position with arrow pointing down" position="top">
                <Button variant="primary" size="sm">▲ Top</Button>
              </Tooltip>
              <div></div>

              <Tooltip content="Left position with arrow pointing right" position="left">
                <Button variant="secondary" size="sm">◀ Left</Button>
              </Tooltip>
              <div className="text-center text-gray-400 text-sm">Trigger</div>
              <Tooltip content="Right position with arrow pointing left" position="right">
                <Button variant="ghost" size="sm">▶ Right</Button>
              </Tooltip>

              <div></div>
              <Tooltip content="Bottom position with arrow pointing up" position="bottom">
                <Button variant="danger" size="sm">▼ Bottom</Button>
              </Tooltip>
              <div></div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* DIVIDER COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Divider Component Showcase
          </h1>
        </div>

        {/* Divider Orientations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Orientations</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Horizontal Divider</h3>
              <div className="space-y-4">
                <Divider />
                <p className="text-gray-600">Content after divider</p>
                <Divider />
                <p className="text-gray-600">More content</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Vertical Divider</h3>
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <p className="text-gray-600">Left side content</p>
                  <p className="text-sm text-gray-500">Some description text</p>
                </div>
                <Divider orientation="vertical" />
                <div className="flex-1">
                  <p className="text-gray-600">Right side content</p>
                  <p className="text-sm text-gray-500">More description text</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Line Styles */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Line Styles</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Solid Line</h3>
              <Divider variant="solid" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Dashed Line</h3>
              <Divider variant="dashed" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Dotted Line</h3>
              <Divider variant="dotted" />
            </div>
          </div>
        </section>

        {/* Divider Spacing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Spacing Options</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Small Spacing</h3>
              <Divider spacing="sm" />
              <p className="text-sm text-gray-600">Small spacing divider</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Medium Spacing (Default)</h3>
              <Divider spacing="md" />
              <p className="text-sm text-gray-600">Medium spacing divider</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Large Spacing</h3>
              <Divider spacing="lg" />
              <p className="text-sm text-gray-600">Large spacing divider</p>
            </div>
          </div>
        </section>

        {/* Divider with Labels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Labels</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Simple Label</h3>
              <Divider label="Section Title" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Different Line Styles</h3>
              <Divider label="Solid" variant="solid" />
              <Divider label="Dashed" variant="dashed" />
              <Divider label="Dotted" variant="dotted" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Different Spacing with Labels</h3>
              <Divider label="Small spacing" spacing="sm" />
              <Divider label="Medium spacing" spacing="md" />
              <Divider label="Large spacing" spacing="lg" />
            </div>
          </div>
        </section>

        {/* Divider Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📋 Form Sections</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
                  <Input placeholder="Full name" />
                  <Input placeholder="Email" className="mt-2" />
                </div>
                <Divider label="Address Details" />
                <div>
                  <Input placeholder="Street address" />
                  <Input placeholder="City" className="mt-2" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📊 Content Sections</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Introduction</h4>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <Divider variant="dashed" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Main Content</h4>
                  <p className="text-sm text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <Divider variant="dotted" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Conclusion</h4>
                  <p className="text-sm text-gray-600">Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎨 Style Guide</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Colors</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-blue-500"></div>
                    <div className="w-8 h-8 rounded bg-green-500"></div>
                    <div className="w-8 h-8 rounded bg-red-500"></div>
                  </div>
                </div>
                <Divider label="Typography" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Fonts</h4>
                  <p className="text-sm text-gray-600">System fonts and weights</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">⚙️ Settings Groups</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Dark mode</span>
                  <Switch size="sm" />
                </div>
                <Divider variant="dashed" spacing="sm" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Notifications</span>
                  <Switch size="sm" />
                </div>
                <Divider label="Advanced Settings" spacing="md" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Auto-save</span>
                  <Switch size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider All Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Combinations</h2>
          <div className="space-y-6">
            {(['solid', 'dashed', 'dotted'] as const).map((variant) => (
              <div key={variant} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-700 mb-4 capitalize">{variant} Variant</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-24">No label:</span>
                    <div className="flex-1">
                      <Divider variant={variant} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-24">With label:</span>
                    <div className="flex-1">
                      <Divider variant={variant} label={`${variant} divider`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-24">Small:</span>
                    <div className="flex-1">
                      <Divider variant={variant} spacing="sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 w-24">Large:</span>
                    <div className="flex-1">
                      <Divider variant={variant} spacing="lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider Vertical Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Vertical Divider Examples</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Basic Vertical Dividers</h3>
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <p className="font-medium text-gray-900">Item 1</p>
                  <p className="text-sm text-gray-500">Description</p>
                </div>
                <Divider orientation="vertical" />
                <div className="text-center">
                  <p className="font-medium text-gray-900">Item 2</p>
                  <p className="text-sm text-gray-500">Description</p>
                </div>
                <Divider orientation="vertical" />
                <div className="text-center">
                  <p className="font-medium text-gray-900">Item 3</p>
                  <p className="text-sm text-gray-500">Description</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Vertical Line Styles</h3>
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <Badge variant="success">Active</Badge>
                </div>
                <Divider orientation="vertical" variant="solid" />
                <div className="text-center">
                  <Badge variant="warning">Pending</Badge>
                </div>
                <Divider orientation="vertical" variant="dashed" />
                <div className="text-center">
                  <Badge variant="danger">Inactive</Badge>
                </div>
                <Divider orientation="vertical" variant="dotted" />
                <div className="text-center">
                  <Badge variant="neutral">Archived</Badge>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Vertical Spacing</h3>
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <Avatar initials="A" size="md" />
                  <p className="text-sm text-gray-600 mt-1">Alice</p>
                </div>
                <Divider orientation="vertical" spacing="sm" />
                <div className="text-center">
                  <Avatar initials="B" size="md" />
                  <p className="text-sm text-gray-600 mt-1">Bob</p>
                </div>
                <Divider orientation="vertical" spacing="md" />
                <div className="text-center">
                  <Avatar initials="C" size="md" />
                  <p className="text-sm text-gray-600 mt-1">Carol</p>
                </div>
                <Divider orientation="vertical" spacing="lg" />
                <div className="text-center">
                  <Avatar initials="D" size="md" />
                  <p className="text-sm text-gray-600 mt-1">Dave</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Labels Showcase */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Label Showcase</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Timeline Example</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Project started</p>
                  <Badge variant="info" size="sm">Jan 2024</Badge>
                </div>
                <Divider label="Phase 1 Complete" variant="dashed" />
                <div>
                  <p className="text-sm text-gray-600 mb-2">Development phase</p>
                  <Badge variant="warning" size="sm">In Progress</Badge>
                </div>
                <Divider label="Phase 2" variant="dotted" />
                <div>
                  <p className="text-sm text-gray-600 mb-2">Testing and deployment</p>
                  <Badge variant="neutral" size="sm">Upcoming</Badge>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Section Headers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Getting Started</h4>
                  <p className="text-sm text-gray-600">Introduction and setup guide</p>
                </div>
                <Divider label="Intermediate" />
                <div>
                  <h4 className="font-medium text-gray-900">Advanced Features</h4>
                  <p className="text-sm text-gray-600">Deep dive into advanced topics</p>
                </div>
                <Divider label="Expert" variant="dashed" />
                <div>
                  <h4 className="font-medium text-gray-900">Best Practices</h4>
                  <p className="text-sm text-gray-600">Professional tips and tricks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SEARCHBAR COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            SearchBar Component Showcase
          </h1>
        </div>

        {/* SearchBar Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="space-y-4 max-w-2xl">
            <SearchBar size="sm" placeholder="Small search..." />
            <SearchBar size="md" placeholder="Medium search..." />
            <SearchBar size="lg" placeholder="Large search..." />
          </div>
        </section>

        {/* SearchBar States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="space-y-4 max-w-2xl">
            <SearchBar placeholder="Empty state" />
            <SearchBar placeholder="With text" defaultValue="Search query" />
            <SearchBar placeholder="Disabled state" disabled />
            <SearchBar placeholder="Disabled with text" disabled defaultValue="Cannot search" />
          </div>
        </section>

        {/* SearchBar with Clear Button */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Clear Button</h2>
          <div className="space-y-4 max-w-2xl">
            <SearchBar placeholder="Type to see clear button..." />
            <SearchBar
              placeholder="Clear with value"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-2">Current value: <Badge variant="info" size="sm">{searchQuery || '(empty)'}</Badge></p>
            </div>
          </div>
        </section>

        {/* SearchBar with Keyboard Shortcut */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Keyboard Shortcut</h2>
          <div className="space-y-4 max-w-2xl">
            <SearchBar placeholder="Press ⌘K to focus..." showShortcut />
            <SearchBar placeholder="Custom shortcut" showShortcut shortcutText="⌃K" />
            <SearchBar placeholder="Mac style" showShortcut shortcutText="⌘K" />
            <SearchBar placeholder="Windows style" showShortcut shortcutText="Ctrl+K" />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            💡 Press the keyboard shortcut to focus the search input
          </p>
        </section>

        {/* SearchBar Full Width */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Width</h2>
          <div className="space-y-4">
            <SearchBar placeholder="Full width search..." fullWidth />
            <SearchBar placeholder="With shortcut" fullWidth showShortcut />
            <SearchBar
              placeholder="With value"
              fullWidth
              showShortcut
              value={advancedSearch}
              onValueChange={setAdvancedSearch}
            />
          </div>
        </section>

        {/* SearchBar Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <p className="text-gray-600 mb-4">
              Type in the search box to see the clear button appear:
            </p>
            <div className="space-y-4">
              <SearchBar
                placeholder="Search anything..."
                value={searchQuery}
                onValueChange={setSearchQuery}
                showShortcut
              />
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm">
                  <span className="font-medium">Searching for:</span>{' '}
                  {searchQuery ? (
                    <Badge variant="success" size="sm">{searchQuery}</Badge>
                  ) : (
                    <Badge variant="neutral" size="sm">Nothing yet</Badge>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SearchBar in Context */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">In Context Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔍 Page Header</h3>
              <div className="space-y-4">
                <SearchBar placeholder="Search pages..." showShortcut fullWidth />
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">Search</Button>
                  <Button variant="ghost" size="sm">Filters</Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📋 Table Filter</h3>
              <div className="space-y-4">
                <SearchBar placeholder="Filter rows..." fullWidth />
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Showing 1-10 of 50</span>
                  <Button variant="secondary" size="sm">Export</Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">👥 People Search</h3>
              <div className="space-y-4">
                <SearchBar
                  placeholder="Search people..."
                  showShortcut
                  fullWidth
                />
                <div className="flex items-center gap-3">
                  <Avatar initials="JD" size="sm" />
                  <span className="text-sm text-gray-700">John Doe</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔧 Settings Search</h3>
              <div className="space-y-4">
                <SearchBar
                  placeholder="Search settings..."
                  shortcutText="⌘,"
                  showShortcut
                  fullWidth
                />
                <div className="space-y-2">
                  <Checkbox size="sm" label="General" />
                  <Checkbox size="sm" label="Privacy" />
                  <Checkbox size="sm" label="Notifications" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SearchBar Focus States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus States</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <p className="text-gray-600 mb-4">
              Tab or use keyboard shortcut to focus:
            </p>
            <div className="space-y-4">
              <SearchBar placeholder="Default focus style" showShortcut />
              <SearchBar placeholder="With value on focus" defaultValue="Search text" showShortcut />
              <SearchBar placeholder="Disabled (no focus)" disabled showShortcut />
            </div>
          </div>
        </section>

        {/* SearchBar All Sizes with Features */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Sizes with Features</h2>
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase">{size} Size</h3>
                <div className="space-y-4">
                  <SearchBar
                    size={size}
                    placeholder="Basic"
                  />
                  <SearchBar
                    size={size}
                    placeholder="With clear"
                    defaultValue="Text"
                  />
                  <SearchBar
                    size={size}
                    placeholder="With shortcut"
                    showShortcut
                  />
                  <SearchBar
                    size={size}
                    placeholder="Full featured"
                    defaultValue="Search"
                    showShortcut
                    fullWidth
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SearchBar Variations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Design Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Minimal Style</h3>
              <SearchBar
                placeholder="Minimal search..."
                fullWidth
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Feature Rich</h3>
              <SearchBar
                placeholder="Feature rich search..."
                showShortcut
                fullWidth
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Controlled</h3>
              <SearchBar
                placeholder="Controlled search..."
                value={searchQuery}
                onValueChange={setSearchQuery}
                fullWidth
              />
              <p className="text-xs text-gray-500 mt-2">Value: {searchQuery || '(empty)'}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">With Default</h3>
              <SearchBar
                placeholder="With default value..."
                defaultValue="Default search"
                fullWidth
              />
            </div>
          </div>
        </section>

        {/* SearchBar Custom Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Custom Shortcut Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SearchBar placeholder="⌘K (Mac)" showShortcut shortcutText="⌘K" fullWidth />
            <SearchBar placeholder="⌃K (Windows)" showShortcut shortcutText="⌃K" fullWidth />
            <SearchBar placeholder="/? (Help)" showShortcut shortcutText="/?" fullWidth />
          </div>
        </section>

        {/* ======================================== */}
        {/* FORMFIELD COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            FormField Component Showcase
          </h1>
        </div>

        {/* FormField Basic */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic FormField</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Full Name" helperText="Enter your legal name">
                <Input placeholder="John Doe" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Email Address" helperText="We'll never share your email">
                <Input type="email" placeholder="john@example.com" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Required */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Required Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="First Name" required helperText="Your given name">
                <Input placeholder="John" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Email Address" required helperText="Required for account creation">
                <Input type="email" placeholder="john@example.com" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Error States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Error States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField
                label="Email Address"
                required
                error="Please enter a valid email address"
              >
                <Input type="email" placeholder="john@example.com" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField
                label="Password"
                required
                error="Password must be at least 8 characters"
              >
                <Input type="password" placeholder="Enter password" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Helper Text */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Helper Text Examples</h2>
          <div className="space-y-4 max-w-md">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField
                label="Username"
                helperText="Choose a unique username for your account"
                required
              >
                <Input placeholder="johndoe123" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField
                label="Website URL"
                helperText="Include https:// or http:// in your URL"
              >
                <Input type="url" placeholder="https://example.com" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField
                label="Bio"
                helperText="Tell us about yourself in 140 characters or less"
              >
                <Input placeholder="Your bio..." />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField with Different Inputs */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Different Input Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Search" helperText="Find what you're looking for">
                <SearchBar placeholder="Search..." />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Choose Plan" helperText="Select your preferred plan">
                <RadioGroup
                  name="plan-select"
                  orientation="vertical"
                  options={[
                    { value: 'basic', label: 'Basic - $9/mo' },
                    { value: 'pro', label: 'Pro - $19/mo' },
                    { value: 'enterprise', label: 'Enterprise - $49/mo' }
                  ]}
                />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Notifications" helperText="Manage your notification preferences">
                <div className="space-y-2">
                  <Switch size="md" label="Email notifications" />
                  <Switch size="md" label="Push notifications" />
                </div>
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FormField label="Preferences" helperText="Customize your experience">
                <div className="space-y-2">
                  <Checkbox size="md" label="Remember me" />
                  <Checkbox size="md" label="Accept terms" />
                </div>
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Interactive Error Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Error Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-4">
              Type an invalid email to see the error state:
            </p>
            <FormField
              label="Email Address"
              required
              helperText="We'll send a confirmation to this address"
              error={emailError}
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={formValues.email}
                onChange={(e) => {
                  const value = e.target.value
                  setFormValues({ ...formValues, email: value })
                  // Simple validation
                  if (value && !value.includes('@')) {
                    setEmailError('Please enter a valid email address')
                  } else if (value && value.length < 5) {
                    setEmailError('Email must be at least 5 characters')
                  } else {
                    setEmailError('')
                  }
                }}
              />
            </FormField>
          </div>
        </section>

        {/* FormField Complete Form */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete Form Example</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Create Account</h3>
            <div className="space-y-4">
              <FormField
                label="First Name"
                required
                helperText="Your given name"
              >
                <Input
                  placeholder="John"
                  value={formValues.firstName}
                  onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                />
              </FormField>

              <FormField
                label="Last Name"
                required
                helperText="Your family name"
              >
                <Input
                  placeholder="Doe"
                  value={formValues.lastName}
                  onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                />
              </FormField>

              <FormField
                label="Email Address"
                required
                helperText="We'll send a confirmation email"
                error={emailError}
              >
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formValues.email}
                  onChange={(e) => {
                    const value = e.target.value
                    setFormValues({ ...formValues, email: value })
                    if (value && !value.includes('@')) {
                      setEmailError('Please enter a valid email')
                    } else {
                      setEmailError('')
                    }
                  }}
                />
              </FormField>

              <FormField
                label="Phone Number"
                helperText="Optional, for account recovery"
              >
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formValues.phone}
                  onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                />
              </FormField>

              <div className="pt-4">
                <Button type="submit" fullWidth>
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FormField Consistent Spacing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Consistent Vertical Spacing</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 mb-6">
              All FormFields maintain consistent 6px (gap-1.5) spacing:
            </p>
            <div className="space-y-4">
              <FormField label="Field 1" helperText="Helper text below">
                <Input placeholder="Input 1" />
              </FormField>

              <FormField label="Field 2" helperText="Another helper text">
                <Input placeholder="Input 2" />
              </FormField>

              <FormField label="Field 3" error="Error message replaces helper">
                <Input placeholder="Input 3" />
              </FormField>

              <FormField label="Field 4" required helperText="Consistent spacing always">
                <Input placeholder="Input 4" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField All States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All States Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Normal</h3>
              <FormField label="Username" helperText="Choose your username">
                <Input placeholder="username" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Required</h3>
              <FormField label="Email" required helperText="Required field">
                <Input type="email" placeholder="email@example.com" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Error</h3>
              <FormField label="Password" required error="Password is required">
                <Input type="password" placeholder="Enter password" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Error Label Color */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Error Label Color Shift</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">No Error (Gray Label)</h3>
              <FormField label="Normal Field" helperText="Label is gray-700">
                <Input placeholder="Normal input" />
              </FormField>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">With Error (Red Label)</h3>
              <FormField label="Error Field" error="This field has an error">
                <Input placeholder="Error input" />
              </FormField>
            </div>
          </div>
        </section>

        {/* FormField Real-world Forms */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Form Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📝 Registration Form</h3>
              <div className="space-y-4">
                <FormField label="Username" required helperText="3-20 characters, letters & numbers only">
                  <Input placeholder="username" />
                </FormField>

                <FormField label="Email" required helperText="For account verification">
                  <Input type="email" placeholder="user@example.com" />
                </FormField>

                <FormField label="Password" required helperText="Min 8 characters">
                  <Input type="password" placeholder="••••••••" />
                </FormField>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔐 Login Form</h3>
              <div className="space-y-4">
                <FormField label="Email or Username" required>
                  <Input placeholder="user@example.com" />
                </FormField>

                <FormField label="Password" required>
                  <Input type="password" placeholder="••••••••" />
                </FormField>

                <div className="flex items-center justify-between">
                  <Checkbox size="sm" label="Remember me" />
                  <Button variant="ghost" size="sm">Forgot password?</Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">👤 Profile Settings</h3>
              <div className="space-y-4">
                <FormField label="Display Name" helperText="Shown to other users">
                  <Input placeholder="John Doe" />
                </FormField>

                <FormField label="Bio" helperText="Tell others about yourself">
                  <Input placeholder="Software developer & designer" />
                </FormField>

                <FormField label="Website" helperText="Your personal website or portfolio">
                  <Input type="url" placeholder="https://example.com" />
                </FormField>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔔 Notification Settings</h3>
              <div className="space-y-4">
                <FormField label="Email Frequency" helperText="How often to receive updates">
                  <RadioGroup
                    name="email-freq"
                    orientation="vertical"
                    options={[
                      { value: 'immediate', label: 'Immediate' },
                      { value: 'daily', label: 'Daily digest' },
                      { value: 'weekly', label: 'Weekly summary' }
                    ]}
                  />
                </FormField>

                <FormField label="Categories" helperText="What you want to hear about">
                  <div className="space-y-2">
                    <Checkbox size="md" label="Product updates" />
                    <Checkbox size="md" label="Security alerts" />
                    <Checkbox size="md" label="Marketing emails" />
                  </div>
                </FormField>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* CARD COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Card Component Showcase
          </h1>
        </div>

        {/* Card Basic */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm">
              <p className="text-gray-600">Small padding card with simple content.</p>
            </Card>

            <Card padding="md">
              <p className="text-gray-600">Medium padding card with simple content.</p>
            </Card>

            <Card padding="lg">
              <p className="text-gray-600">Large padding card with simple content.</p>
            </Card>
          </div>
        </section>

        {/* Card with Header */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card with Header</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              padding="md"
              header={{
                title: 'Analytics Overview',
                subtitle: 'Last 30 days'
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Views</span>
                  <span className="font-semibold text-gray-900">12,345</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Conversions</span>
                  <span className="font-semibold text-gray-900">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold text-gray-900">$45,678</span>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: 'Team Performance',
                subtitle: 'Q4 2024'
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar initials="JD" size="md" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">Sales Manager</p>
                  </div>
                  <Badge variant="success" size="sm">Top Performer</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar initials="JS" size="md" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Jane Smith</p>
                    <p className="text-sm text-gray-500">Marketing Lead</p>
                  </div>
                  <Badge variant="info" size="sm">Rising Star</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Card with Header Action */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card with Header Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              padding="md"
              header={{
                title: 'Settings',
                subtitle: 'Manage your preferences',
                action: (
                  <Tooltip content="More options">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </Tooltip>
                )
              }}
            >
              <p className="text-gray-600">Card content with menu action in header.</p>
            </Card>

            <Card
              padding="md"
              header={{
                title: 'Notifications',
                subtitle: 'Stay up to date',
                action: (
                  <Switch size="sm" />
                )
              }}
            >
              <p className="text-gray-600">Card content with switch action in header.</p>
            </Card>

            <Card
              padding="md"
              header={{
                title: 'Quick Actions',
                action: (
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                )
              }}
            >
              <p className="text-gray-600">Card content with button action in header.</p>
            </Card>
          </div>
        </section>

        {/* Card with Footer */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card with Footer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              padding="md"
              footer={
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">
                    Save
                  </Button>
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                </div>
              }
            >
              <p className="text-gray-600">Card content with action buttons in footer.</p>
            </Card>

            <Card
              padding="md"
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last updated 2 hours ago</span>
                  <Button variant="ghost" size="sm">
                    Refresh
                  </Button>
                </div>
              }
            >
              <p className="text-gray-600">Card content with custom footer content.</p>
            </Card>
          </div>
        </section>

        {/* Card Complete */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete Card with All Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              padding="md"
              header={{
                title: 'User Profile',
                subtitle: 'Manage your account settings',
                action: (
                  <Tooltip content="Edit profile">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </Tooltip>
                )
              }}
              footer={
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">
                    Save Changes
                  </Button>
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar initials="JD" size="lg" />
                  <div>
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">john.doe@example.com</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Email Notifications</span>
                    <Switch size="sm" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Two-Factor Auth</span>
                    <Switch size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Profile Visibility</span>
                    <Switch size="sm" defaultChecked />
                  </div>
                </div>
              </div>
            </Card>

            <Card
              padding="lg"
              header={{
                title: 'Project Dashboard',
                subtitle: 'Q4 2024 Performance Metrics',
                action: (
                  <Badge variant="success" size="sm">Active</Badge>
                )
              }}
              footer={
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">Export</Button>
                    <Button variant="secondary" size="sm">Share</Button>
                  </div>
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </div>
              }
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">94%</p>
                    <p className="text-sm text-gray-500">Completion</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">127</p>
                    <p className="text-sm text-gray-500">Tasks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="text-sm text-gray-500">Team Members</p>
                  </div>
                </div>
                <Divider />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Design Phase</span>
                    <Badge variant="success" size="sm">Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Development</span>
                    <Badge variant="warning" size="sm">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Testing</span>
                    <Badge variant="neutral" size="sm">Pending</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Card Clickable */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Clickable Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              padding="md"
              clickable
              header={{
                title: 'Upgrade Plan',
                subtitle: 'Get more features'
              }}
            >
              <p className="text-gray-600 mb-4">Hover to see the lift effect and enhanced shadow.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">$29/mo</span>
                <Badge variant="info" size="sm">Popular</Badge>
              </div>
            </Card>

            <Card
              padding="md"
              clickable
              header={{
                title: 'New Features',
                subtitle: 'What\'s new in v2.0'
              }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Dark mode support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Faster performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">New themes</span>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              clickable
              header={{
                title: 'Quick Stats',
                subtitle: 'Your activity summary'
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="text-xl font-bold text-gray-900">156</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="text-xl font-bold text-gray-900">89</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Card Padding Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Padding Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              padding="sm"
              header={{
                title: 'Small Padding',
                subtitle: 'Compact spacing'
              }}
            >
              <p className="text-sm text-gray-600">Perfect for dense information displays or mobile layouts.</p>
            </Card>

            <Card
              padding="md"
              header={{
                title: 'Medium Padding',
                subtitle: 'Balanced spacing'
              }}
            >
              <p className="text-gray-600">Ideal for most use cases with comfortable breathing room.</p>
            </Card>

            <Card
              padding="lg"
              header={{
                title: 'Large Padding',
                subtitle: 'Generous spacing'
              }}
            >
              <p className="text-gray-600">Great for showcasing important content with emphasis.</p>
            </Card>
          </div>
        </section>

        {/* Card Use Cases */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              padding="md"
              header={{
                title: '📊 Analytics Card',
                subtitle: 'Performance metrics'
              }}
              footer={
                <Button variant="primary" size="sm" fullWidth>
                  View Report
                </Button>
              }
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Visitors</span>
                  <span className="font-semibold">8,432</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Page Views</span>
                  <span className="font-semibold">23,451</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bounce Rate</span>
                  <span className="font-semibold">32.4%</span>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: '👤 Profile Card',
                subtitle: 'User information',
                action: <Avatar initials="JD" size="md" />
              }}
              footer={
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Message</Button>
                  <Button variant="primary" size="sm">Follow</Button>
                </div>
              }
            >
              <div className="space-y-2">
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
                <p className="text-sm text-gray-500">San Francisco, CA</p>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: '📝 Task Card',
                subtitle: 'Project management',
                action: <Badge variant="warning" size="sm">In Progress</Badge>
              }}
              footer={
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Due: Dec 15, 2024</span>
                  <span className="text-gray-500">2/5 subtasks</span>
                </div>
              }
            >
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Implement new feature</p>
                <p className="text-sm text-gray-500">Add user authentication flow</p>
                <div className="flex gap-2 mt-3">
                  <Badge variant="info" size="sm">Feature</Badge>
                  <Badge variant="neutral" size="sm">Backend</Badge>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: '💳 Pricing Card',
                subtitle: 'Choose your plan'
              }}
              clickable
              footer={
                <Button variant="primary" size="sm" fullWidth>
                  Get Started
                </Button>
              }
            >
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">$19<span className="text-lg font-normal text-gray-500">/mo</span></p>
                  <p className="text-sm text-gray-500 mt-1">Pro Plan</p>
                </div>
                <Divider />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">Unlimited projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">Advanced analytics</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: '📰 Article Card',
                subtitle: 'Latest updates',
                action: (
                  <Tooltip content="Bookmark">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </Tooltip>
                )
              }}
              clickable
            >
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Getting Started with React</h4>
                <p className="text-sm text-gray-600">Learn the fundamentals of React and build your first application.</p>
                <div className="flex items-center gap-3">
                  <Avatar initials="JD" size="sm" />
                  <span className="text-xs text-gray-500">John Doe · 5 min read</span>
                </div>
              </div>
            </Card>

            <Card
              padding="md"
              header={{
                title: '🎨 Style Guide',
                subtitle: 'Design tokens'
              }}
              footer={
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Export</Button>
                  <Button variant="secondary" size="sm">Share</Button>
                </div>
              }
            >
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Colors</p>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-blue-500"></div>
                    <div className="w-6 h-6 rounded bg-green-500"></div>
                    <div className="w-6 h-6 rounded bg-purple-500"></div>
                    <div className="w-6 h-6 rounded bg-orange-500"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Typography</p>
                  <p className="text-sm text-gray-600">System UI font family</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Card Hover Effects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Hover Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              padding="md"
              clickable
            >
              <p className="text-gray-600 text-center mb-2">Hover over me!</p>
              <p className="text-sm text-gray-500 text-center">Subtle lift + shadow</p>
            </Card>

            <Card
              padding="md"
            >
              <p className="text-gray-600 text-center mb-2">No hover effect</p>
              <p className="text-sm text-gray-500 text-center">Static card</p>
            </Card>

            <Card
              padding="md"
              clickable
              header={{
                title: 'Interactive',
                subtitle: 'Try clicking'
              }}
            >
              <p className="text-gray-600 text-center">Clickable with header</p>
            </Card>
          </div>
        </section>

        {/* ======================================== */}
        {/* ALERT COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Alert Component Showcase
          </h1>
        </div>

        {/* Alert Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Four Variants</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert variant="info">
              <p>This is an info alert with important information for the user.</p>
            </Alert>

            <Alert variant="success">
              <p>This is a success alert indicating a successful operation.</p>
            </Alert>

            <Alert variant="warning">
              <p>This is a warning alert that requires user attention.</p>
            </Alert>

            <Alert variant="danger">
              <p>This is a danger alert for critical errors or issues.</p>
            </Alert>
          </div>
        </section>

        {/* Alert with Title */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts with Titles</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert variant="info" title="Information">
              <p>This is an info alert with a title. The title appears in bold above the message.</p>
            </Alert>

            <Alert variant="success" title="Success!">
              <p>Your changes have been saved successfully. The title highlights what was accomplished.</p>
            </Alert>

            <Alert variant="warning" title="Warning">
              <p>Your account will be suspended in 3 days unless payment is received.</p>
            </Alert>

            <Alert variant="danger" title="Error">
              <p>Failed to connect to the server. Please check your connection and try again.</p>
            </Alert>
          </div>
        </section>

        {/* Alert with Close Button */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts with Close Button</h2>
          <div className="space-y-4 max-w-2xl">
            {alerts.info && (
              <Alert variant="info" title="Information" onClose={() => setAlerts({ ...alerts, info: false })}>
                <p>This alert can be dismissed by clicking the X button in the top right corner.</p>
              </Alert>
            )}

            {alerts.success && (
              <Alert variant="success" title="Success" onClose={() => setAlerts({ ...alerts, success: false })}>
                <p>Operation completed successfully. Click close to dismiss this message.</p>
              </Alert>
            )}

            {alerts.warning && (
              <Alert variant="warning" title="Warning" onClose={() => setAlerts({ ...alerts, warning: false })}>
                <p>This warning requires your attention. Dismiss it when you've addressed the issue.</p>
              </Alert>
            )}

            {alerts.danger && (
              <Alert variant="danger" title="Error" onClose={() => setAlerts({ ...alerts, danger: false })}>
                <p>Critical error occurred. Review the details and close when resolved.</p>
              </Alert>
            )}

            <Button variant="secondary" onClick={() => setAlerts({ info: true, success: true, warning: true, danger: true })}>
              Reset Alerts
            </Button>
          </div>
        </section>

        {/* Alert with Action Button */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts with Action Button</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert
              variant="info"
              title="New Update Available"
              action={<Button variant="primary" size="sm">Update Now</Button>}
            >
              <p>Version 2.5.0 is available with new features and bug fixes.</p>
            </Alert>

            <Alert
              variant="success"
              title="Profile Complete"
              action={<Button variant="secondary" size="sm">View Profile</Button>}
            >
              <p>Your profile is now 100% complete. Add more details to enhance your presence.</p>
            </Alert>

            <Alert
              variant="warning"
              title="Storage Limit"
              action={<Button variant="secondary" size="sm">Upgrade Plan</Button>}
            >
              <p>You've used 90% of your storage. Consider upgrading to avoid service interruption.</p>
            </Alert>

            <Alert
              variant="danger"
              title="Payment Failed"
              action={<Button variant="danger" size="sm">Retry Payment</Button>}
            >
              <p>Your last payment could not be processed. Please update your payment method.</p>
            </Alert>
          </div>
        </section>

        {/* Alert with Action Link */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts with Action Links</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert
              variant="info"
              title="Documentation Available"
              action={<a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">View Docs</a>}
            >
              <p>New documentation has been published for the API endpoints.</p>
            </Alert>

            <Alert
              variant="success"
              title="Export Complete"
              action={<a href="#" className="text-sm font-medium text-green-600 hover:text-green-700">Download File</a>}
            >
              <p>Your data export is ready. The file will be available for 24 hours.</p>
            </Alert>

            <Alert
              variant="warning"
              title="Session Expiring"
              action={<a href="#" className="text-sm font-medium text-amber-600 hover:text-amber-700">Extend Session</a>}
            >
              <p>Your session will expire in 5 minutes. Extend it to continue working.</p>
            </Alert>

            <Alert
              variant="danger"
              title="Security Alert"
              action={<a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">Review Activity</a>}
            >
              <p>Unusual login activity detected. Review your recent login attempts.</p>
            </Alert>
          </div>
        </section>

        {/* Alert Complete with All Elements */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete Alerts with All Elements</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert
              variant="info"
              title="Information"
              onClose={() => {}}
              action={<Button variant="primary" size="sm">Learn More</Button>}
            >
              <p>This alert has all elements: title, message, close button, and action button.</p>
            </Alert>

            <Alert
              variant="success"
              title="Success Message"
              onClose={() => {}}
              action={<Button variant="secondary" size="sm">View Details</Button>}
            >
              <p>The operation completed successfully with all expected results.</p>
            </Alert>

            <Alert
              variant="warning"
              title="Warning Notice"
              onClose={() => {}}
              action={<a href="#" className="text-sm font-medium text-amber-600 hover:text-amber-700">Dismiss</a>}
            >
              <p>This warning requires attention but doesn't block functionality.</p>
            </Alert>

            <Alert
              variant="danger"
              title="Critical Error"
              onClose={() => {}}
              action={<Button variant="danger" size="sm">Fix Now</Button>}
            >
              <p>A critical error has occurred that needs immediate resolution.</p>
            </Alert>
          </div>
        </section>

        {/* Alert Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md" header={{ title: '🔐 Account Status' }}>
              <div className="space-y-4">
                <Alert variant="success" title="Account Active">
                  <p>Your account is active and in good standing. Last login: 2 hours ago.</p>
                </Alert>

                <Alert variant="info" title="New Feature">
                  <p>Try our new dashboard customization feature. Personalize your workspace!</p>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2 inline-block">
                    Try it now →
                  </a>
                </Alert>
              </div>
            </Card>

            <Card padding="md" header={{ title: '📧 Notifications' }}>
              <div className="space-y-4">
                <Alert variant="info" onClose={() => {}}>
                  <p>You have 3 unread messages from your team members.</p>
                </Alert>

                <Alert variant="warning" title="Storage Warning">
                  <p>You're approaching your storage limit. Consider upgrading your plan.</p>
                  <Button variant="secondary" size="sm" className="mt-2">
                    Upgrade Storage
                  </Button>
                </Alert>
              </div>
            </Card>

            <Card padding="md" header={{ title: '⚠️ System Status' }}>
              <div className="space-y-4">
                <Alert variant="success" title="All Systems Operational">
                  <p>All services are running normally. Last check: 5 minutes ago.</p>
                </Alert>

                <Alert variant="info" title="Scheduled Maintenance">
                  <p>Scheduled maintenance will occur on Sunday, 2-4 AM UTC.</p>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2 inline-block">
                    Learn more →
                  </a>
                </Alert>
              </div>
            </Card>

            <Card padding="md" header={{ title: '🛡️ Security Center' }}>
              <div className="space-y-4">
                <Alert variant="danger" title="Unusual Activity">
                  <p>We detected unusual login activity from a new location. Was this you?</p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="danger" size="sm">Wasn't Me</Button>
                    <Button variant="secondary" size="sm">It Was Me</Button>
                  </div>
                </Alert>

                <Alert variant="warning" title="Password Expiring">
                  <p>Your password expires in 7 days. Update it now to maintain access.</p>
                  <a href="#" className="text-sm font-medium text-amber-600 hover:text-amber-700 mt-2 inline-block">
                    Update Password →
                  </a>
                </Alert>
              </div>
            </Card>
          </div>
        </section>

        {/* Alert Layout Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Layout Structure</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Alert Layout: Icon + Content + Action + Close</h3>
              <Alert
                variant="info"
                title="Layout Demo"
                onClose={() => {}}
                action={<Button variant="primary" size="sm">Action</Button>}
              >
                <p>Icon on the left, title and message in the middle, action button on the right, close button in top right corner.</p>
              </Alert>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Color Variants with Matching Icons</h3>
              <div className="space-y-3">
                <Alert variant="info" title="Info">
                  <p>Blue background with blue info circle icon.</p>
                </Alert>
                <Alert variant="success" title="Success">
                  <p>Green background with green checkmark icon.</p>
                </Alert>
                <Alert variant="warning" title="Warning">
                  <p>Amber background with amber warning triangle icon.</p>
                </Alert>
                <Alert variant="danger" title="Danger">
                  <p>Red background with red alert octagon icon.</p>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Alert Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <p className="text-gray-600 mb-4">
              Click the action buttons to see different alert types:
            </p>
            <div className="space-y-3">
              <Button variant="primary" onClick={() => setAlerts({ ...alerts, info: true })}>
                Show Info Alert
              </Button>
              <Button variant="secondary" onClick={() => setAlerts({ ...alerts, success: true })}>
                Show Success Alert
              </Button>
              <Button variant="ghost" onClick={() => setAlerts({ ...alerts, warning: true })}>
                Show Warning Alert
              </Button>
              <Button variant="danger" onClick={() => setAlerts({ ...alerts, danger: true })}>
                Show Danger Alert
              </Button>
            </div>

            <div className="mt-6 space-y-3">
              {alerts.info && (
                <Alert variant="info" title="Demo Info" onClose={() => setAlerts({ ...alerts, info: false })}>
                  <p>This is an interactive info alert. Click close to dismiss.</p>
                </Alert>
              )}

              {alerts.success && (
                <Alert variant="success" title="Demo Success" onClose={() => setAlerts({ ...alerts, success: false })}>
                  <p>Success! The info alert was shown and now this success alert appeared.</p>
                </Alert>
              )}

              {alerts.warning && (
                <Alert variant="warning" title="Demo Warning" onClose={() => setAlerts({ ...alerts, warning: false })}>
                  <p>Warning: Multiple alerts can be displayed simultaneously.</p>
                </Alert>
              )}

              {alerts.danger && (
                <Alert variant="danger" title="Demo Danger" onClose={() => setAlerts({ ...alerts, danger: false })}>
                  <p>Danger: This is a critical error alert. Close when resolved.</p>
                </Alert>
              )}
            </div>
          </div>
        </section>

        {/* Alert Inline Messages */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inline Messages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md">
              <div className="space-y-4">
                <FormField label="Username" helperText="Choose your unique username">
                  <Input placeholder="username" />
                </FormField>
                <Alert variant="info">
                  <p>Username must be 3-20 characters and can only contain letters and numbers.</p>
                </Alert>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-4">
                <FormField
                  label="Email"
                  required
                  error="Email is required"
                >
                  <Input type="email" placeholder="your@email.com" />
                </FormField>
                <Alert variant="danger" title="Validation Error">
                  <p>Please enter a valid email address to continue with registration.</p>
                </Alert>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Export Data</h3>
                    <p className="text-sm text-gray-500">Download your data as CSV</p>
                  </div>
                  <Button variant="primary" size="sm">Export</Button>
                </div>
                <Alert variant="success" title="Export Ready">
                  <p>Your previous export is ready. Download it before starting a new export.</p>
                  <a href="#" className="text-sm font-medium text-green-600 hover:text-green-700 mt-2 inline-block">
                    Download Now →
                  </a>
                </Alert>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">API Keys</h3>
                    <p className="text-sm text-gray-500">Manage your API access</p>
                  </div>
                  <Button variant="secondary" size="sm">Generate Key</Button>
                </div>
                <Alert variant="warning">
                  <p>You have 2 API keys that will expire in less than 30 days. Rotate them soon to maintain access.</p>
                </Alert>
              </div>
            </Card>
          </div>
        </section>

        {/* Alert All Variants Showcase */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variant Combinations</h2>
          <div className="space-y-6">
            {(['info', 'success', 'warning', 'danger'] as const).map((variant) => (
              <div key={variant} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-700 mb-4 capitalize">{variant} Variant</h3>
                <div className="space-y-4">
                  <Alert variant={variant}>
                    <p>Simple message without title.</p>
                  </Alert>
                  <Alert variant={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Alert`}>
                    <p>Message with title to highlight important information.</p>
                  </Alert>
                  <Alert
                    variant={variant}
                    title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} with Close`}
                    onClose={() => {}}
                  >
                    <p>With close button for dismissal.</p>
                  </Alert>
                  <Alert
                    variant={variant}
                    title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} with Action`}
                    action={<Button variant="primary" size="sm">Action</Button>}
                  >
                    <p>With action button for user interaction.</p>
                  </Alert>
                  <Alert
                    variant={variant}
                    title="Complete Alert"
                    onClose={() => {}}
                    action={<Button variant="secondary" size="sm">Learn More</Button>}
                  >
                    <p>Complete alert with all features: title, close button, and action button.</p>
                  </Alert>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* TAG COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tag Component Showcase
          </h1>
        </div>

        {/* Tag Basic */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag variant="neutral">Default</Tag>
            <Tag variant="info">Info</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="danger">Danger</Tag>
          </div>
        </section>

        {/* Tag Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Tag size="sm" variant="neutral">Small</Tag>
              <Tag size="sm" variant="info">Info</Tag>
              <Tag size="sm" variant="success">Success</Tag>
            </div>
            <div className="flex flex-wrap gap-3">
              <Tag size="md" variant="neutral">Medium</Tag>
              <Tag size="md" variant="info">Info</Tag>
              <Tag size="md" variant="success">Success</Tag>
            </div>
          </div>
        </section>

        {/* Tag Treatments */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Treatments</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Subtle (Tinted Background)</h3>
              <div className="flex flex-wrap gap-3">
                <Tag variant="neutral" treatment="subtle">Neutral</Tag>
                <Tag variant="info" treatment="subtle">Info</Tag>
                <Tag variant="success" treatment="subtle">Success</Tag>
                <Tag variant="warning" treatment="subtle">Warning</Tag>
                <Tag variant="danger" treatment="subtle">Danger</Tag>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Solid (Filled Background)</h3>
              <div className="flex flex-wrap gap-3">
                <Tag variant="neutral" treatment="solid">Neutral</Tag>
                <Tag variant="info" treatment="solid">Info</Tag>
                <Tag variant="success" treatment="solid">Success</Tag>
                <Tag variant="warning" treatment="solid">Warning</Tag>
                <Tag variant="danger" treatment="solid">Danger</Tag>
              </div>
            </div>
          </div>
        </section>

        {/* Tag with Icons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tags with Leading Icons</h2>
          <div className="flex flex-wrap gap-3">
            <Tag variant="info" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>}>
              Info
            </Tag>
            <Tag variant="success" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
              Done
            </Tag>
            <Tag variant="warning" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>}>
              Warning
            </Tag>
            <Tag variant="danger" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L12 10.414l1.293-1.293a1 1 0 011.414-1.414L10 8.586 8.707 7.293zM10 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>}>
              Error
            </Tag>
          </div>
        </section>

        {/* Tag Removable */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Removable Tags</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {tags.filter(tag => tag.removable).map((tag) => (
                <Tag
                  key={tag.id}
                  variant={tag.variant}
                  removable
                  onRemove={() => setTags(tags.filter(t => t.id !== tag.id))}
                >
                  {tag.label}
                </Tag>
              ))}
            </div>
            <Button variant="secondary" size="sm" onClick={() => setTags([
              ...tags,
              { id: Date.now().toString(), label: 'New Tag', variant: 'info', removable: true }
            ])}>
              Add Tag
            </Button>
          </div>
        </section>

        {/* Tag All Combinations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Combinations</h2>
          <div className="space-y-6">
            {(['neutral', 'info', 'success', 'warning', 'danger'] as const).map((variant) => (
              <div key={variant} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-700 mb-4 capitalize">{variant} Variant</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 w-24">Subtle sm:</span>
                    <Tag size="sm" variant={variant} treatment="subtle">
                      {variant}
                    </Tag>
                    <Tag size="sm" variant={variant} treatment="subtle" removable>
                      With close
                    </Tag>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 w-24">Subtle md:</span>
                    <Tag size="md" variant={variant} treatment="subtle">
                      {variant}
                    </Tag>
                    <Tag size="md" variant={variant} treatment="subtle" removable>
                      With close
                    </Tag>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 w-24">Solid sm:</span>
                    <Tag size="sm" variant={variant} treatment="solid">
                      {variant}
                    </Tag>
                    <Tag size="sm" variant={variant} treatment="solid" removable>
                      With close
                    </Tag>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 w-24">Solid md:</span>
                    <Tag size="md" variant={variant} treatment="solid">
                      {variant}
                    </Tag>
                    <Tag size="md" variant={variant} treatment="solid" removable>
                      With close
                    </Tag>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tag Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md" header={{ title: '🏷️ Skills & Technologies' }}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="info" treatment="subtle">React</Tag>
                    <Tag variant="info" treatment="subtle">TypeScript</Tag>
                    <Tag variant="info" treatment="subtle">TailwindCSS</Tag>
                    <Tag variant="info" treatment="subtle" removable>
                      Next.js
                    </Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="success" treatment="subtle">Node.js</Tag>
                    <Tag variant="success" treatment="subtle">Python</Tag>
                    <Tag variant="success" treatment="subtle">PostgreSQL</Tag>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="neutral" treatment="subtle">Git</Tag>
                    <Tag variant="neutral" treatment="subtle">Docker</Tag>
                    <Tag variant="neutral" treatment="subtle">AWS</Tag>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="md" header={{ title: '🎯 Project Status' }}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Active Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="success" treatment="solid" size="sm">Completed</Tag>
                    <Tag variant="info" treatment="solid" size="sm">In Progress</Tag>
                    <Tag variant="warning" treatment="solid" size="sm">Planning</Tag>
                  </div>
                </div>

                <Divider />

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Priority Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="danger" treatment="subtle" size="sm">High</Tag>
                    <Tag variant="warning" treatment="subtle" size="sm">Medium</Tag>
                    <Tag variant="info" treatment="subtle" size="sm">Low</Tag>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="md" header={{ title: '👥 Team Tags' }}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Departments</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="info" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM5 9a2 2 0 012-2h.01a1 1 0 010 2H5z" /></svg>}>
                      Engineering
                    </Tag>
                    <Tag variant="success" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                      Sales
                    </Tag>
                    <Tag variant="warning" leftIcon={<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                      Support
                    </Tag>
                  </div>
                </div>

                <Divider />

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Filter by Department</h4>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="info" treatment="solid" removable>Engineering (3)</Tag>
                    <Tag variant="success" treatment="solid" removable>Sales (2)</Tag>
                    <Tag variant="warning" treatment="solid" removable>Support (1)</Tag>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="md" header={{ title: '🔖 Content Categories' }}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Article Tags</h4>
                  <p className="text-sm text-gray-600 mb-3">Add tags to categorize your content:</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="info" treatment="subtle">Tutorial</Tag>
                    <Tag variant="info" treatment="subtle" removable>News</Tag>
                    <Tag variant="success" treatment="subtle" removable>Guide</Tag>
                    <Tag variant="warning" treatment="subtle" removable>Opinion</Tag>
                    <Tag variant="neutral" treatment="subtle" removable>Archive</Tag>
                  </div>
                  <Button variant="secondary" size="sm" className="mt-2">
                    + Add Tag
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Tag Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <p className="text-gray-600 mb-4">
              Click the × to remove tags, or add new ones:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="info" removable>React</Tag>
                  <Tag variant="info" removable>TypeScript</Tag>
                  <Tag variant="success" removable>Node.js</Tag>
                  <Tag variant="warning" removable>Docker</Tag>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="success" treatment="solid" size="sm" removable>Active</Tag>
                  <Tag variant="neutral" treatment="solid" size="sm" removable>Archived</Tag>
                  <Tag variant="danger" treatment="solid" size="sm" removable>Deleted</Tag>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tag Pill Shape */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pill Shape</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              All tags are pill-shaped with rounded ends (rounded-full):
            </p>
            <div className="flex flex-wrap gap-3">
              <Tag variant="neutral">Pill Shape</Tag>
              <Tag variant="info" treatment="solid">Rounded</Tag>
              <Tag variant="success" size="sm">Small Pill</Tag>
              <Tag variant="warning" size="md">Medium Pill</Tag>
              <Tag variant="danger" treatment="solid">Solid Pill</Tag>
              <Tag variant="info" removable>Removable Pill</Tag>
            </div>
          </div>
        </section>

        {/* Tag Filter Example */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Example</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="success" treatment="subtle">All</Tag>
                  <Tag variant="info" treatment="subtle">Active</Tag>
                  <Tag variant="warning" treatment="subtle">Pending</Tag>
                  <Tag variant="danger" treatment="subtle">Inactive</Tag>
                </div>
              </div>

              <Divider />

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="info" treatment="solid" removable>Technology</Tag>
                  <Tag variant="success" treatment="solid" removable>Design</Tag>
                  <Tag variant="warning" treatment="solid" removable>Business</Tag>
                  <Tag variant="neutral" treatment="solid" removable>Marketing</Tag>
                </div>
              </div>

              <Divider />

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Date Range</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="neutral" size="sm">Today</Tag>
                  <Tag variant="neutral" size="sm">This Week</Tag>
                  <Tag variant="neutral" size="sm">This Month</Tag>
                  <Tag variant="neutral" size="sm">Custom</Tag>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tag Color Reference */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Color Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md" header={{ title: 'Subtle Treatment' }}>
              <div className="space-y-3">
                <Tag variant="neutral" treatment="subtle">Neutral - gray-100 bg, gray-800 text</Tag>
                <Tag variant="info" treatment="subtle">Info - blue-100 bg, blue-800 text</Tag>
                <Tag variant="success" treatment="subtle">Success - green-100 bg, green-800 text</Tag>
                <Tag variant="warning" treatment="subtle">Warning - amber-100 bg, amber-800 text</Tag>
                <Tag variant="danger" treatment="subtle">Danger - red-100 bg, red-800 text</Tag>
              </div>
            </Card>

            <Card padding="md" header={{ title: 'Solid Treatment' }}>
              <div className="space-y-3">
                <Tag variant="neutral" treatment="solid">Neutral - gray-700 bg, white text</Tag>
                <Tag variant="info" treatment="solid">Info - blue-600 bg, white text</Tag>
                <Tag variant="success" treatment="solid">Success - green-600 bg, white text</Tag>
                <Tag variant="warning" treatment="solid">Warning - amber-600 bg, white text</Tag>
                <Tag variant="danger" treatment="solid">Danger - red-600 bg, white text</Tag>
              </div>
            </Card>
          </div>
        </section>

        {/* ======================================== */}
        {/* MODAL COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Modal Component Showcase
          </h1>
        </div>

        {/* Modal Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => { setModalSize('sm'); setIsModalOpen(true); }}>Small Modal</Button>
            <Button onClick={() => { setModalSize('md'); setIsModalOpen(true); }}>Medium Modal</Button>
            <Button onClick={() => { setModalSize('lg'); setIsModalOpen(true); }}>Large Modal</Button>
            <Button onClick={() => { setModalSize('xl'); setIsModalOpen(true); }}>Extra Large Modal</Button>
          </div>
        </section>

        {/* Modal Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
            <p className="text-gray-600 mb-6">
              Click the button to open a modal. Try different sizes and interactions:
            </p>
            <div className="space-y-4">
              <Button variant="primary" onClick={() => setModalSize('md'); setIsModalOpen(true)}>
                Open Modal
              </Button>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-600">Size:</span>
                <Button variant="secondary" size="sm" onClick={() => setModalSize('sm'); setIsModalOpen(true)}>Small</Button>
                <Button variant="secondary" size="sm" onClick={() => setModalSize('md'); setIsModalOpen(true)}>Medium</Button>
                <Button variant="secondary" size="sm" onClick={() => setModalSize('lg'); setIsModalOpen(true)}>Large</Button>
                <Button variant="secondary" size="sm" onClick={() => setModalSize('xl'); setIsModalOpen(true)}>XL</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Components */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Modal Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Complete Modal Structure</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="text-sm font-medium text-gray-700 mb-2">Modal.Header</p>
                  <div className="flex items-center justify-between">
                    <span>Title on left</span>
                    <span className="text-xs text-gray-500">X button on right</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="text-sm font-medium text-gray-700 mb-2">Modal.Body</p>
                  <span className="text-xs text-gray-500">Main content area</span>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <p className="text-sm font-medium text-gray-700 mb-2">Modal.Footer</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Actions right-aligned</span>
                    <span className="text-xs text-gray-500">Subtle divider above</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Dimmed backdrop (bg-black/50)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Semantic HTML (role="dialog", aria-modal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Keyboard support (Escape to close)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Body scroll lock prevention</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Modal Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-world Modal Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-3">📝 Form Modal</h3>
              <Button onClick={() => setModalSize('md'); setIsModalOpen(true)} fullWidth>
                Create User
              </Button>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-3">🗑️ Delete Confirmation</h3>
              <Button onClick={() => setModalSize('sm'); setIsModalOpen(true)} variant="danger" fullWidth>
                Delete Item
              </Button>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-3">📊 Details Modal</h3>
              <Button onClick={() => setModalSize('lg'); setIsModalOpen(true)} variant="secondary" fullWidth>
                View Details
              </Button>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-3">⚙️ Settings Modal</h3>
              <Button onClick={() => setModalSize('xl'); setIsModalOpen(true)} variant="ghost" fullWidth>
                Open Settings
              </Button>
            </Card>
          </div>
        </section>

        {/* ======================================== */}
        {/* TABS COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tabs Component Showcase
          </h1>
        </div>

        {/* Tabs Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Three Variants</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Underline Variant</h3>
              <Tabs defaultValue="tab1" variant="underline">
                <Tabs.Tab value="tab1">Overview</Tabs.Tab>
                <Tabs.Tab value="tab2">Features</Tabs.Tab>
                <Tabs.Tab value="tab3">Settings</Tabs.Tab>
                <Tabs.Panel value="tab1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Overview content with accent bottom border on active tab.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Features content with sliding border animation.</p>
                </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Settings content with proper active state.</p>
                </div>
                </Tabs.Panel>
              </Tabs>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Pill Variant</h3>
              <Tabs defaultValue="tab1" variant="pill">
                <Tabs.Tab value="tab1">Products</Tabs.Tab>
                <Tabs.Tab value="tab2">Reviews</Tabs.Tab>
                <Tabs.Tab value="tab3">About</Tabs.Tab>
                <Tabs.Panel value="tab1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Products with filled accent background on active tab.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Reviews with solid active tab styling.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">About content with pill-shaped container.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Enclosed Variant</h3>
              <Tabs defaultValue="tab1" variant="enclosed">
                <Tabs.Tab value="tab1">Profile</Tabs.Tab>
                <Tabs.Tab value="tab2">Account</Tabs.Tab>
                <Tabs.Tab value="tab3">Billing</Tabs.Tab>
                <Tabs.Panel value="tab1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Profile info in bordered container with connected active panel.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Account settings with connected panel below.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Billing information with proper container styling.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
          </div>
        </section>

        {/* Tabs States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tab States</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Active & Inactive States</h3>
              <Tabs defaultValue="tab1" variant="underline">
                <Tabs.Tab value="tab1">Active Tab</Tabs.Tab>
                <Tabs.Tab value="tab2">Inactive Tab</Tabs.Tab>
                <Tabs.Tab value="tab3">Disabled Tab</Tabs.Tab>
                <Tabs.Panel value="tab1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Active tab shows accent color, inactive tabs show muted color with hover state.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Inactive tabs have hover state and focus ring support.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Disabled tabs are not interactive and show muted color.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Focus States</h3>
              <p className="text-sm text-gray-600 mb-3">Tab through the tabs to see the focus rings:</p>
              <Tabs defaultValue="tab1" variant="pill">
                <Tabs.Tab value="tab1">Focus Me (Tab)</Tabs.Tab>
                <Tabs.Tab value="tab2">And Me (Tab)</Tabs.Tab>
                <Tabs.Tab value="tab3">Me Too (Tab)</Tabs.Tab>
                <Tabs.Panel value="tab1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Each tab shows a focus ring when keyboard navigating.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Focus ring appears as indigo-500 with offset.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">Focus ring helps keyboard users navigate efficiently.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Tabs Content Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Examples</h2>
          <div className="space-y-6">
            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">User Profile Tabs</h3>
              <Tabs defaultValue="posts" variant="underline">
                <Tabs.Tab value="posts">Posts</Tabs.Tab>
                <Tabs.Tab value="comments">Comments</Tabs.Tab>
                <Tabs.Tab value="likes">Likes</Tabs.Tab>
                <Tabs.Panel value="posts">
                  <div className="text-gray-700">
                    <p>User's posts and articles displayed here.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="comments">
                  <div className="text-gray-700">
                    <p>User's comments and discussions displayed here.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="likes">
                  <div className="text-gray-700">
                    <p>User's liked content displayed here.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Settings Tabs</h3>
              <Tabs defaultValue="general" variant="pill">
                <Tabs.Tab value="general">General</Tabs.Tab>
                <Tabs.Tab value="security">Security</Tabs.Tab>
                <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
                <Tabs.Panel value="general">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Dark mode</span>
                      <Switch size="md" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Language</span>
                      <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="security">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Two-factor auth</span>
                      <Switch size="md" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Login alerts</span>
                      <Switch size="md" defaultChecked />
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="notifications">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email notifications</span>
                      <Switch size="md" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Push notifications</span>
                      <Switch size="md" />
                    </div>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Documentation Tabs</h3>
              <Tabs defaultValue="getting-started" variant="enclosed">
                <Tabs.Tab value="getting-started">Getting Started</Tabs.Tab>
                <Tabs.Tab value="components">Components</Tabs.Tab>
                <Tabs.Tab value="api">API Reference</Tabs.Tab>
                <Tabs.Panel value="getting-started">
                  <div className="text-gray-700">
                    <p>Installation instructions, quick start guide, and basic concepts.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="components">
                  <div className="text-gray-700">
                    <p>Component API, props, styling, and usage examples.</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="api">
                  <div className="text-gray-700">
                    <p>Complete API reference with types and examples.</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </Card>
          </div>
        </section>

        {/* Tabs All Variant Showcase */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variant Showcase</h2>
          <div className="space-y-8">
            {(['underline', 'pill', 'enclosed'] as const).map((variant) => (
              <div key={variant} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-700 mb-4 capitalize">{variant} Variant</h3>
                <Tabs defaultValue="tab1" variant={variant}>
                  <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
                  <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
                  <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
                  <Tabs.Tab value="tab4" disabled>Disabled</Tabs.Tab>
                  <Tabs.Panel value="tab1">
                    <div className="text-gray-700">
                      <p>Content for Tab 1 showing the {variant} variant styling.</p>
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="tab2">
                    <div className="text-gray-700">
                      <p>Content for Tab 2 showing the {variant} variant styling.</p>
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="tab3">
                    <div className="text-gray-700">
                      <p>Content for Tab 3 showing the {variant} variant styling.</p>
                    </div>
                  </Tabs.Panel>
                </Tabs>
              </Tabs>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* ACCORDION COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Accordion Component Showcase
          </h1>
        </div>

        {/* Basic Accordion */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Accordion</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is an accordion component?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    An accordion component allows users to expand and collapse content sections, showing only one section at a time. It's great for FAQs, documentation, and organizing large amounts of content.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I implement smooth animations?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    This accordion uses CSS Grid transitions for smooth height animations. The grid-template-rows property transitions from 0fr to 1fr, creating a seamless expand/collapse effect without JavaScript animation libraries.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    Yes! This accordion includes proper ARIA attributes (aria-expanded, aria-controls, role="region"), keyboard navigation support (Enter/Space to toggle), and semantic HTML structure for screen readers.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Controlled Accordion */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Controlled Accordion</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Current selection:</span>{' '}
                <span className="text-indigo-600">{accordionValue || 'None'}</span>
              </p>
              <p className="text-sm text-gray-500">
                Click the accordion items below to see the controlled state update
              </p>
            </div>
            <Accordion
              value={accordionValue}
              onValueChange={setAccordionValue}
            >
              <AccordionItem value="controlled-1">
                <AccordionTrigger>
                  Controlled Item 1
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    This accordion is controlled by external state. The current value is: {accordionValue || 'None'}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="controlled-2">
                <AccordionTrigger>
                  Controlled Item 2
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    You can programmatically control which item is expanded by updating the value prop.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="controlled-3">
                <AccordionTrigger>
                  Controlled Item 3
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    The onValueChange callback lets you react to user interactions and sync with your application state.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Accordion with Disabled Items */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Disabled Items</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion>
              <AccordionItem value="disabled-1">
                <AccordionTrigger>
                  Available Feature
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    This item can be expanded and collapsed normally.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disabled-2" disabled>
                <AccordionTrigger>
                  Disabled Feature (Upgrade Required)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    This item is disabled and cannot be interacted with.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disabled-3">
                <AccordionTrigger>
                  Another Available Feature
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    Disabled items show reduced opacity and don't respond to clicks or keyboard input.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Focus States Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Focus and Hover States</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Tab through the accordion items to see the focus rings, and hover to see the hover states:
              </p>
              <Accordion>
                <AccordionItem value="focus-1">
                  <AccordionTrigger>
                    Focus Ring Demo 1
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600">
                      Each trigger has a visible focus ring when focused via keyboard navigation.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="focus-2">
                  <AccordionTrigger>
                    Hover State Demo 2
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600">
                      Hover over triggers to see the subtle background color change.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="focus-3">
                  <AccordionTrigger>
                    Chevron Animation Demo 3
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600">
                      Watch the chevron icon rotate smoothly when expanding and collapsing items.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Multiple Accordions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Multiple Accordions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">FAQ Section</h3>
              <Accordion defaultValue="faq-1">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 text-sm">
                      Go to Settings > Security > Password and click "Reset Password". Follow the email instructions.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger>
                    Can I export my data?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 text-sm">
                      Yes, you can export all your data in JSON or CSV format from the Settings page.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Pricing Questions</h3>
              <Accordion defaultValue="pricing-1">
                <AccordionItem value="pricing-1">
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 text-sm">
                      We accept all major credit cards, PayPal, and bank transfers for annual plans.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-2">
                  <AccordionTrigger>
                    Is there a free trial?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-600 text-sm">
                      Yes! All plans come with a 14-day free trial. No credit card required.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* All Accordion Features */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Feature Demonstration</h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Complete Feature Set</h3>
            <Accordion>
              <AccordionItem value="feature-1">
                <AccordionTrigger>
                  ✨ Smooth Height Animation
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    The accordion uses CSS Grid transitions for smooth, performant height animations without JavaScript animation libraries. The transition is 200ms with ease-out timing.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-2">
                <AccordionTrigger>
                  🎯 Chevron Icon Rotation
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    The chevron icon rotates 180° when expanded, with a smooth 200ms transition. It clearly indicates the state of each accordion item.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-3">
                <AccordionTrigger>
                  🎨 Hover and Focus States
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    Triggers have subtle hover states (gray background) and visible focus rings for keyboard navigation. Disabled items have reduced opacity.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-4">
                <AccordionTrigger>
                  ♿ Full Accessibility
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    Complete ARIA support with aria-expanded, aria-controls, and role attributes. Keyboard navigation with Enter/Space keys. Semantic HTML structure.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="feature-5">
                <AccordionTrigger>
                  📱 Responsive Design
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-gray-600">
                    The accordion is fully responsive and works seamlessly on mobile devices. The touch targets are appropriately sized, and the animation performs well on all devices.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* ======================================== */}
        {/* DROPDOWN COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dropdown Menu Component Showcase
          </h1>
        </div>

        {/* Basic Dropdown */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Dropdown</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="secondary">Open Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onSelect={() => console.log('Profile clicked')}>
                  Profile
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Settings clicked')}>
                  Settings
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Help clicked')}>
                  Help
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem onSelect={() => console.log('Logout clicked')} danger>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Dropdown with Icons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Icons</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="primary">User Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  leftIcon={<UserIcon />}
                  onSelect={() => console.log('View profile')}
                >
                  View Profile
                </DropdownItem>
                <DropdownItem
                  leftIcon={<SettingsIcon />}
                  onSelect={() => console.log('Account settings')}
                >
                  Account Settings
                </DropdownItem>
                <DropdownItem
                  leftIcon={<BellIcon />}
                  onSelect={() => console.log('Notifications')}
                >
                  Notifications
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem
                  leftIcon={<LogoutIcon />}
                  onSelect={() => console.log('Sign out')}
                  danger
                >
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Dropdown with Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Keyboard Shortcuts</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="ghost">File Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem shortcut="⌘N" onSelect={() => console.log('New file')}>
                  New File
                </DropdownItem>
                <DropdownItem shortcut="⌘O" onSelect={() => console.log('Open file')}>
                  Open File
                </DropdownItem>
                <DropdownItem shortcut="⌘S" onSelect={() => console.log('Save file')}>
                  Save File
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem shortcut="⌘P" onSelect={() => console.log('Print')}>
                  Print
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Dropdown with Separators and Labels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">With Separators and Labels</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="secondary">Settings Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownLabel>Account</DropdownLabel>
                <DropdownItem onSelect={() => console.log('Profile')}>
                  Profile Settings
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Security')}>
                  Security
                </DropdownItem>

                <DropdownLabel>Preferences</DropdownLabel>
                <DropdownItem onSelect={() => console.log('Appearance')}>
                  Appearance
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Notifications')}>
                  Notifications
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Language')}>
                  Language
                </DropdownItem>

                <DropdownLabel>Data</DropdownLabel>
                <DropdownItem onSelect={() => console.log('Export')}>
                  Export Data
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Import')} danger>
                  Reset All Data
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Controlled Dropdown */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Controlled Dropdown</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Menu state:</span>{' '}
                <span className={dropdownOpen ? 'text-green-600' : 'text-gray-500'}>
                  {dropdownOpen ? 'Open' : 'Closed'}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                This dropdown is controlled by external state
              </p>
            </div>
            <Dropdown
              open={dropdownOpen}
              onOpenChange={setDropdownOpen}
            >
              <DropdownTrigger>
                <Button variant="primary">Controlled Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onSelect={() => console.log('Option 1')}>
                  Option 1
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Option 2')}>
                  Option 2
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Option 3')}>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Dropdown Alignment Variants */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alignment Variants</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Dropdown align="start">
                  <DropdownTrigger>
                    <Button variant="secondary" className="w-full">Left Align</Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Option 3</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-xs text-gray-500 mt-2">align="start"</p>
              </div>

              <div className="text-center">
                <Dropdown align="center">
                  <DropdownTrigger>
                    <Button variant="secondary" className="w-full">Center Align</Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Option 3</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-xs text-gray-500 mt-2">align="center"</p>
              </div>

              <div className="text-center">
                <Dropdown align="end">
                  <DropdownTrigger>
                    <Button variant="secondary" className="w-full">Right Align</Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Option 3</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-xs text-gray-500 mt-2">align="end"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Keyboard Navigation Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Keyboard Navigation</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Try the keyboard shortcuts:</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">Enter</kbd>
                  <span className="text-sm text-gray-600">Open/Close menu</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">↓</kbd>
                  <span className="text-sm text-gray-600">Navigate down</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">↑</kbd>
                  <span className="text-sm text-gray-600">Navigate up</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">Enter</kbd>
                  <span className="text-sm text-gray-600">Select item</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">Esc</kbd>
                  <span className="text-sm text-gray-600">Close menu</span>
                </div>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="primary">Test Navigation</Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem onSelect={() => console.log('First item')}>
                    First Item
                  </DropdownItem>
                  <DropdownItem onSelect={() => console.log('Second item')}>
                    Second Item
                  </DropdownItem>
                  <DropdownItem onSelect={() => console.log('Third item')}>
                    Third Item
                  </DropdownItem>
                  <DropdownItem onSelect={() => console.log('Fourth item')}>
                    Fourth Item
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </section>

        {/* Selected State Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Selected State</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="secondary">View Options</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onSelect={() => console.log('List view')} selected>
                  List View
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Grid view')}>
                  Grid View
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Compact view')}>
                  Compact View
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <p className="text-sm text-gray-500 mt-2">
              The checkmark icon (✓) indicates the currently selected option
            </p>
          </div>
        </section>

        {/* Disabled Items Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Disabled Items</h2>
          <div className="max-w-2xl mx-auto">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="primary">Actions Menu</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onSelect={() => console.log('Edit')}>
                  Edit
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Duplicate')}>
                  Duplicate
                </DropdownItem>
                <DropdownItem onSelect={() => console.log('Delete')} disabled danger>
                  Delete (Pro feature)
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem onSelect={() => console.log('Export')} disabled>
                  Export (Disabled)
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-World Examples</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub-style user menu */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">GitHub-Style User Menu</h3>
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 cursor-pointer border border-gray-200">
                    <Avatar initials="JD" size="sm" />
                    <span className="text-sm font-medium">John Doe</span>
                  </div>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownLabel>Signed in as John Doe</DropdownLabel>
                  <DropdownItem leftIcon={<UserIcon />}>Your profile</DropdownItem>
                  <DropdownItem leftIcon={<RepoIcon />}>Your repositories</DropdownItem>
                  <DropdownItem leftIcon={<StarIcon />}>Your stars</DropdownItem>
                  <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem leftIcon={<LogoutIcon />} danger>Sign out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Slack-style channel menu */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Slack-Style Channel Menu</h3>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="secondary" className="w-full">
                    # general
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownLabel>Channel</DropdownLabel>
                  <DropdownItem>View channel details</DropdownItem>
                  <DropdownItem>Copy channel ID</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem danger>Leave channel</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* VS Code-style command palette */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Editor Menu</h3>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="ghost" className="w-full">
                    ⋮ More Options
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownLabel>File</DropdownLabel>
                  <DropdownItem shortcut="⌘N">New File</DropdownItem>
                  <DropdownItem shortcut="⌘O">Open File</DropdownItem>
                  <DropdownItem shortcut="⌘S">Save</DropdownItem>
                  <DropdownSeparator />
                  <DropdownLabel>Edit</DropdownLabel>
                  <DropdownItem shortcut="⌘Z">Undo</DropdownItem>
                  <DropdownItem shortcut="⌘⇧Z">Redo</DropdownItem>
                  <DropdownItem shortcut="⌘F">Find</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Email app menu */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Email Actions</h3>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="primary" className="w-full">
                    Email Actions
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem leftIcon={<ReplyIcon />}>Reply</DropdownItem>
                  <DropdownItem leftIcon={<ForwardIcon />}>Forward</DropdownItem>
                  <DropdownItem leftIcon={<ArchiveIcon />}>Archive</DropdownItem>
                  <DropdownItem leftIcon={<TrashIcon />} danger>Delete</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem leftIcon={<MarkUnreadIcon />}>Mark as unread</DropdownItem>
                  <DropdownItem leftIcon={<StarIcon />}>Add to favorites</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </section>

        {/* All Features Demonstration */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete Feature Set</h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">All Dropdown Features</h3>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="primary">Explore Features</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownLabel>Navigation</DropdownLabel>
                <DropdownItem leftIcon={<HomeIcon />} shortcut="⌘H" selected>
                  Home
                </DropdownItem>
                <DropdownItem leftIcon={<UserIcon />}>Profile</DropdownItem>
                <DropdownItem leftIcon={<SettingsIcon />} shortcut="⌘S">
                  Settings
                </DropdownItem>

                <DropdownLabel>Actions</DropdownLabel>
                <DropdownItem leftIcon={<PlusIcon />} shortcut="⌘N">
                  New Item
                </DropdownItem>
                <DropdownItem leftIcon={<EditIcon />} shortcut="⌘E">
                  Edit
                </DropdownItem>
                <DropdownItem leftIcon={<TrashIcon />} danger disabled>
                  Delete (Disabled)
                </DropdownItem>

                <DropdownLabel>System</DropdownLabel>
                <DropdownItem leftIcon={<HelpIcon />}>Help & Support</DropdownItem>
                <DropdownItem leftIcon={<InfoIcon />}>About</DropdownItem>
                <DropdownSeparator />
                <DropdownItem leftIcon={<LogoutIcon />} danger shortcut="⌘Q">
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <p className="text-sm text-gray-500 mt-4">
              This demo showcases all features: icons, shortcuts, separators, labels, selected states, disabled items, and danger variant.
            </p>
          </div>
        </section>

        {/* ======================================== */}
        {/* TABLE COMPONENT SHOWCASE */}
        {/* ======================================== */}

        <div className="border-t-2 border-gray-200 pt-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            DataTable Component Showcase
          </h1>
        </div>

        {/* Basic Table - Default Variant */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Table (Default Variant)</h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Role</TableHeaderCell>
                  <TableHeaderCell align="right">Status</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell align="right"><Badge variant="success">Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell align="right"><Badge variant="success">Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell align="right"><Badge variant="warning">Pending</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Striped Variant */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Striped Variant</h2>
          <div className="max-w-4xl mx-auto">
            <Table variant="striped">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Product</TableHeaderCell>
                  <TableHeaderCell align="right">Price</TableHeaderCell>
                  <TableHeaderCell align="right">Stock</TableHeaderCell>
                  <TableHeaderCell>Category</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Widget Pro</TableCell>
                  <TableCell align="right">$299.00</TableCell>
                  <TableCell align="right">45</TableCell>
                  <TableCell>Electronics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gadget Plus</TableCell>
                  <TableCell align="right">$199.00</TableCell>
                  <TableCell align="right">23</TableCell>
                  <TableCell>Electronics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tool Master</TableCell>
                  <TableCell align="right">$149.00</TableCell>
                  <TableCell align="right">67</TableCell>
                  <TableCell>Tools</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Device Elite</TableCell>
                  <TableCell align="right">$399.00</TableCell>
                  <TableCell align="right">12</TableCell>
                  <TableCell>Electronics</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Borderless Variant */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Borderless Variant</h2>
          <div className="max-w-4xl mx-auto">
            <Table variant="borderless">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Transaction ID</TableHeaderCell>
                  <TableHeaderCell>Date</TableHeaderCell>
                  <TableHeaderCell align="right">Amount</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#TXN-001</TableCell>
                  <TableCell>2024-01-15</TableCell>
                  <TableCell align="right">$1,250.00</TableCell>
                  <TableCell>Income</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#TXN-002</TableCell>
                  <TableCell>2024-01-14</TableCell>
                  <TableCell align="right">$89.99</TableCell>
                  <TableCell>Expense</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#TXN-003</TableCell>
                  <TableCell>2024-01-13</TableCell>
                  <TableCell align="right">$450.00</TableCell>
                  <TableCell>Income</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Sortable Columns */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sortable Columns</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">Click column headers to sort - arrows flip direction</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell
                    sortable
                    sortDirection={sortColumn === 'name' ? sortDirection : null}
                    onSort={() => {
                      if (sortColumn === 'name') {
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
                      } else {
                        setSortColumn('name')
                        setSortDirection('asc')
                      }
                    }}
                  >
                    Name
                  </TableHeaderCell>
                  <TableHeaderCell
                    sortable
                    sortDirection={sortColumn === 'age' ? sortDirection : null}
                    onSort={() => {
                      if (sortColumn === 'age') {
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
                      } else {
                        setSortColumn('age')
                        setSortDirection('asc')
                      }
                    }}
                  >
                    Age
                  </TableHeaderCell>
                  <TableHeaderCell
                    sortable
                    sortDirection={sortColumn === 'score' ? sortDirection : null}
                    onSort={() => {
                      if (sortColumn === 'score') {
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
                      } else {
                        setSortColumn('score')
                        setSortDirection('asc')
                      }
                    }}
                    align="right"
                  >
                    Score
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Alice Williams</TableCell>
                  <TableCell>28</TableCell>
                  <TableCell align="right">95</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Martinez</TableCell>
                  <TableCell>34</TableCell>
                  <TableCell align="right">87</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Charlie Chen</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell align="right">92</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-3 text-sm text-gray-500">
              Current sort: {sortColumn ? `${sortColumn} (${sortDirection})` : 'None'}
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Loading State</h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Loading</TableHeaderCell>
                  <TableHeaderCell>Data</TableHeaderCell>
                  <TableHeaderCell>With</TableHeaderCell>
                  <TableHeaderCell>Shimmer</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableLoading rowCount={5} columnCount={4} />
            </Table>
          </div>
        </section>

        {/* Empty State */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Empty State</h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>No Data</TableHeaderCell>
                  <TableHeaderCell>Available</TableHeaderCell>
                  <TableHeaderCell>In</TableHeaderCell>
                  <TableHeaderCell>Table</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableEmpty
                title="No records found"
                description="There are no items to display in this table"
                action={<Button variant="primary" size="sm">Add First Item</Button>}
              />
            </Table>
          </div>
        </section>

        {/* Clickable Rows */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Clickable Rows</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">Click any row to see it highlighted (hover + cursor pointer)</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>File Name</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell align="right">Size</TableHeaderCell>
                  <TableHeaderCell>Modified</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow onClick={() => console.log('Clicked: document.pdf')}>
                  <TableCell>document.pdf</TableCell>
                  <TableCell>PDF</TableCell>
                  <TableCell align="right">2.4 MB</TableCell>
                  <TableCell>2024-01-15</TableCell>
                </TableRow>
                <TableRow onClick={() => console.log('Clicked: image.png')}>
                  <TableCell>image.png</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">1.8 MB</TableCell>
                  <TableCell>2024-01-14</TableCell>
                </TableRow>
                <TableRow onClick={() => console.log('Clicked: spreadsheet.xlsx')}>
                  <TableCell>spreadsheet.xlsx</TableCell>
                  <TableCell>Spreadsheet</TableCell>
                  <TableCell align="right">856 KB</TableCell>
                  <TableCell>2024-01-13</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Sticky Header Demo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sticky Header</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">Scroll down to see the header stay fixed at the top</p>
            <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Employee</TableHeaderCell>
                    <TableHeaderCell>Department</TableHeaderCell>
                    <TableHeaderCell align="right">Salary</TableHeaderCell>
                    <TableHeaderCell align="right">Start Date</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>Employee {i + 1}</TableCell>
                      <TableCell>Engineering</TableCell>
                      <TableCell align="right">${(60000 + i * 1000).toLocaleString()}</TableCell>
                      <TableCell align="right">2023-{String((i % 12) + 1).padStart(2, '0')}-01</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* All Variants Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variants Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Default (Borders)</h3>
              <Table variant="default">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell align="right">Value</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Item A</TableCell>
                    <TableCell align="right">100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Item B</TableCell>
                    <TableCell align="right">200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Striped</h3>
              <Table variant="striped">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell align="right">Value</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Item A</TableCell>
                    <TableCell align="right">100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Item B</TableCell>
                    <TableCell align="right">200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Borderless</h3>
              <Table variant="borderless">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell align="right">Value</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Item A</TableCell>
                    <TableCell align="right">100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Item B</TableCell>
                    <TableCell align="right">200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

// Icons for Input showcase
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const AlertIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
)

// Icons for Dropdown showcase
const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const BellIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

const LogoutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
)

const RepoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const ReplyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
  </svg>
)

const ForwardIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
  </svg>
)

const ArchiveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
)

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
)

const MarkUnreadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)

const HelpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

export default App
