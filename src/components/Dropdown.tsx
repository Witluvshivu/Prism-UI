import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'

// Types
export interface DropdownProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
}

export interface DropdownTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export interface DropdownMenuProps {
  children: React.ReactNode
  className?: string
}

export interface DropdownItemProps {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  danger?: boolean
  leftIcon?: React.ReactNode
  shortcut?: string
  selected?: boolean
  className?: string
}

export interface DropdownSeparatorProps {
  className?: string
}

export interface DropdownLabelProps {
  children: React.ReactNode
  className?: string
}

// Context Type
interface DropdownContextType {
  isOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
  align: 'start' | 'center' | 'end'
  triggerRef: React.RefObject<HTMLButtonElement>
  menuRef: React.RefObject<HTMLDivElement>
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
  registerItem: (index: number) => void
  unregisterItem: (index: number) => void
  itemCount: number
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined)

const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown subcomponents must be used within Dropdown')
  }
  return context
}

// Check icon for selected items
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// Main Dropdown Component
export const Dropdown = ({
  open,
  onOpenChange,
  children,
  align = 'start',
  className = ''
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [registeredItems, setRegisteredItems] = useState<Set<number>>(new Set())
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const openMenu = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(true)
    }
    if (onOpenChange) {
      onOpenChange(true)
    }
  }, [isControlled, onOpenChange])

  const closeMenu = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false)
    }
    if (onOpenChange) {
      onOpenChange(false)
    }
    setActiveIndex(null)
  }, [isControlled, onOpenChange])

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }, [isOpen, openMenu, closeMenu])

  const registerItem = useCallback((index: number) => {
    setRegisteredItems(prev => new Set(prev).add(index))
  }, [])

  const unregisterItem = useCallback((index: number) => {
    setRegisteredItems(prev => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }, [])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeMenu])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          closeMenu()
          triggerRef.current?.focus()
          break
        case 'ArrowDown':
          e.preventDefault()
          setActiveIndex(prev => {
            if (prev === null) {
              // Find first enabled item
              for (let i = 0; i < registeredItems.size; i++) {
                if (registeredItems.has(i)) return i
              }
              return null
            }
            // Find next enabled item
            for (let i = prev + 1; i < registeredItems.size; i++) {
              if (registeredItems.has(i)) return i
            }
            return prev // Stay on current if no next item
          })
          break
        case 'ArrowUp':
          e.preventDefault()
          setActiveIndex(prev => {
            if (prev === null) {
              // Find last enabled item
              for (let i = registeredItems.size - 1; i >= 0; i--) {
                if (registeredItems.has(i)) return i
              }
              return null
            }
            // Find previous enabled item
            for (let i = prev - 1; i >= 0; i--) {
              if (registeredItems.has(i)) return i
            }
            return prev // Stay on current if no previous item
          })
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          // The active item will handle selection
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeMenu, registeredItems])

  const contextValue: DropdownContextType = {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    align,
    triggerRef,
    menuRef,
    activeIndex,
    setActiveIndex,
    registerItem,
    unregisterItem,
    itemCount: registeredItems.size
  }

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={`relative inline-block ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// Dropdown Trigger Component
export const DropdownTrigger = ({
  children,
  asChild = false,
  className = ''
}: DropdownTriggerProps) => {
  const { isOpen, toggleMenu, triggerRef, align } = useDropdown()

  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-md',
    'transition-all',
    'duration-150',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-indigo-500',
    'focus:ring-offset-2',
    'hover:bg-gray-50',
    'cursor-pointer',
    className
  ].join(' ')

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: toggleMenu,
      ref: triggerRef,
      'aria-haspopup': true,
      'aria-expanded': isOpen,
      ...children.props
    })
  }

  return (
    <button
      ref={triggerRef}
      onClick={toggleMenu}
      className={baseClasses}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {children}
    </button>
  )
}

// Dropdown Menu Component
export const DropdownMenu = ({ children, className = '' }: DropdownMenuProps) => {
  const { isOpen, align, menuRef } = useDropdown()

  if (!isOpen) return null

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  }

  return (
    <div
      ref={menuRef}
      className={`
        absolute z-50 mt-2
        min-w-[12rem]
        max-h-[400px]
        overflow-y-auto
        bg-white
        rounded-md
        shadow-lg
        border border-gray-200
        animate-dropdown-fade-in
        py-1
        ${alignmentClasses[align]}
        ${className}
      `}
      role="menu"
    >
      {children}
    </div>
  )
}

// Item index counter
let itemIndexCounter = 0

// Dropdown Item Component
export const DropdownItem = ({
  children,
  onSelect,
  disabled = false,
  danger = false,
  leftIcon,
  shortcut,
  selected = false,
  className = ''
}: DropdownItemProps) => {
  const { activeIndex, setActiveIndex, closeMenu, registerItem, unregisterItem, triggerRef } = useDropdown()
  const [index] = useState(() => {
    const currentIndex = itemIndexCounter++
    return currentIndex
  })

  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerItem(index)
    return () => unregisterItem(index)
  }, [index, registerItem, unregisterItem])

  // Focus item when it becomes active
  useEffect(() => {
    if (activeIndex === index && itemRef.current) {
      itemRef.current.focus()
    }
  }, [activeIndex, index])

  const handleClick = () => {
    if (!disabled) {
      if (onSelect) {
        onSelect()
      }
      closeMenu()
      // Return focus to trigger
      setTimeout(() => triggerRef.current?.focus(), 0)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        handleClick()
        break
    }
  }

  const isFocused = activeIndex === index

  const baseClasses = [
    'w-full',
    'px-3',
    'py-2',
    'text-left',
    'text-sm',
    'font-medium',
    'rounded-md',
    'transition-colors',
    'duration-100',
    'flex',
    'items-center',
    'justify-between',
    'gap-2',
    danger ? 'text-red-600' : 'text-gray-700',
    !disabled && 'hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={itemRef}
      role="menuitem"
      tabIndex={isFocused ? 0 : -1}
      className={baseClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {leftIcon && (
          <span className="flex-shrink-0">
            {leftIcon}
          </span>
        )}
        <span className="truncate">{children}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {shortcut && (
          <span className="text-xs text-gray-500 font-normal">
            {shortcut}
          </span>
        )}
        {selected && <CheckIcon />}
      </div>
    </div>
  )
}

// Dropdown Separator Component
export const DropdownSeparator = ({ className = '' }: DropdownSeparatorProps) => {
  return (
    <div
      className={`my-1 mx-2 h-px bg-gray-200 ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  )
}

// Dropdown Label Component
export const DropdownLabel = ({ children, className = '' }: DropdownLabelProps) => {
  return (
    <div
      className={`px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider ${className}`}
      role="presentation"
    >
      {children}
    </div>
  )
}
