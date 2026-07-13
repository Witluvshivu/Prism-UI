import React, { createContext, useContext, useState, useCallback } from 'react'

// Types
export interface AccordionProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export interface AccordionItemProps {
  value: string
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

// Context Type
interface AccordionContextType {
  activeValue: string | undefined
  toggleItem: (value: string) => void
  isControlled: boolean
  onValueChange?: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion subcomponents must be used within Accordion')
  }
  return context
}

// Main Accordion Component
export const Accordion = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className = ''
}: AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)
  const isControlled = value !== undefined
  const activeValue = isControlled ? value : internalValue

  const toggleItem = useCallback((itemValue: string) => {
    const newValue = activeValue === itemValue ? undefined : itemValue

    if (!isControlled) {
      setInternalValue(newValue)
    }

    if (onValueChange) {
      onValueChange(newValue || '')
    }
  }, [activeValue, isControlled, onValueChange])

  return (
    <AccordionContext.Provider value={{ activeValue, toggleItem, isControlled, onValueChange }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// Accordion Item Component
export const AccordionItem = ({
  value,
  disabled = false,
  children,
  className = ''
}: AccordionItemProps) => {
  const { activeValue, toggleItem } = useAccordion()
  const isOpen = activeValue === value

  // Generate unique IDs for accessibility
  const contentId = `accordion-content-${value}`
  const triggerId = `accordion-trigger-${value}`

  return (
    <div className={`border-b border-gray-200 last:border-b-0 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionTrigger) {
            return React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              onClick: () => !disabled && toggleItem(value),
              disabled,
              contentId,
              triggerId,
            })
          }
          if (child.type === AccordionContent) {
            return React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              contentId,
              triggerId,
            })
          }
        }
        return child
      })}
    </div>
  )
}

// Accordion Trigger Component
export const AccordionTrigger = ({
  children,
  className = '',
  isOpen = false,
  onClick,
  disabled = false,
  contentId = '',
  triggerId = '',
}: AccordionTriggerProps & {
  isOpen?: boolean
  onClick?: () => void
  disabled?: boolean
  contentId?: string
  triggerId?: string
}) => {
  return (
    <button
      id={triggerId}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center justify-between px-4 py-3 text-left
        transition-all duration-150
        ${disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:bg-gray-50'
        }
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${className}
      `}
      aria-expanded={isOpen}
      aria-controls={contentId}
    >
      <span className="flex-1 font-medium text-gray-900">{children}</span>
      <svg
        className={`
          w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2
          ${isOpen ? 'transform rotate-180' : ''}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
}

// Accordion Content Component
export const AccordionContent = ({
  children,
  className = '',
  isOpen = false,
  contentId = '',
  triggerId = '',
}: AccordionContentProps & {
  isOpen?: boolean
  contentId?: string
  triggerId?: string
}) => {
  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={`
        accordion-content
        ${isOpen ? 'data-[state=open]' : ''}
      `}
      data-state={isOpen ? 'open' : 'closed'}
    >
      <div className={`accordion-content-inner px-4 pb-4 ${className}`}>
        {children}
      </div>
    </div>
  )
}
