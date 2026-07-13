import React, { useState } from 'react'

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: 'underline' | 'pill' | 'enclosed'
  children: React.ReactNode
}

export interface TabProps {
  value: string
  disabled?: boolean
  children: React.ReactNode
}

export interface PanelProps {
  value: string
  children: React.ReactNode
}

const variantListClasses = {
  underline: 'border-b-0',
  pill: 'bg-gray-100 p-1 rounded-lg gap-1',
  enclosed: 'border border-gray-200 rounded-lg'
}

const variantTabClasses = {
  underline: {
    base: 'px-4 py-2 text-sm font-medium border-b-2 transition-all duration-150',
    active: 'border-indigo-600 text-indigo-600',
    inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    disabled: 'text-gray-300 cursor-not-allowed hover:border-transparent hover:text-gray-300'
  },
  pill: {
    base: 'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150',
    active: 'bg-indigo-600 text-white shadow-sm',
    inactive: 'text-gray-600 hover:bg-gray-200',
    disabled: 'text-gray-400 cursor-not-allowed hover:bg-transparent'
  },
  enclosed: {
    base: 'px-4 py-2 text-sm font-medium border transition-all duration-150',
    active: 'bg-white text-indigo-600 border-indigo-600 border-b-transparent -mb-px',
    inactive: 'text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50',
    disabled: 'text-gray-300 cursor-not-allowed hover:text-gray-300 hover:border-gray-200 hover:bg-transparent'
  }
}

const focusRingClasses = 'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-1'

export const Tabs = ({ defaultValue, value, onValueChange, variant = 'underline', children }: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue)
    }
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  // Extract tabs and panels from children
  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => (child.type as any)?.displayName === 'Tab'
  )

  const panels = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => (child.type as any)?.displayName === 'Panel'
  )

  const activePanel = panels.find(
    (panel): panel is React.ReactElement => (panel.props as any).value === currentValue
  )

  return (
    <div className="w-full">
      {/* Tabs List */}
      <div className={`flex ${variantListClasses[variant]}`}>
        {tabs.map((tab) => {
          const tabProps = (tab as React.Element).props
          const isActive = (tabProps.value as string) === currentValue
          const isDisabled = tabProps.disabled

          const classes = [
            variantTabClasses[variant].base,
            isActive ? variantTabClasses[variant].active : variantTabClasses[variant].inactive,
            isDisabled ? variantTabClasses[variant].disabled : '',
            !isDisabled && focusRingClasses
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <button
              key={tabProps.value as string}
              onClick={() => !isDisabled && handleValueChange(tabProps.value as string)}
              disabled={isDisabled}
              className={classes}
              aria-selected={isActive}
              role="tab"
            >
              {tabProps.children}
            </button>
          )
        })}
      </div>

      {/* Active Panel */}
      <div className="mt-4">
        {activePanel}
      </div>
    </div>
  )
}

export const Tab = ({ value, disabled = false, children }: TabProps) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'

export const Panel = ({ value, children }: PanelProps) => {
  return <>{children}</>
}

Panel.displayName = 'Panel'
