import React, { useState, useRef, useEffect } from 'react'

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onClear?: () => void
  showShortcut?: boolean
  shortcutText?: string
  fullWidth?: boolean
}

const sizeClasses = {
  sm: 'h-9',
  md: 'h-10',
  lg: 'h-12'
}

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-5 h-5'
}

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const chipSizeClasses = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm'
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      size = 'md',
      placeholder = 'Search...',
      value: controlledValue,
      defaultValue = '',
      onValueChange,
      onClear,
      showShortcut = false,
      shortcutText = '⌘K',
      fullWidth = false,
      className = '',
      disabled = false,
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue)
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const inputRef = useRef<HTMLInputElement>(null)
    const mergedRef = (node: HTMLInputElement) => {
      if (inputRef.current) {
        inputRef.current = node
      }
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (!isControlled) {
        setInternalValue(newValue)
      }
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('')
      }
      if (onValueChange) {
        onValueChange('')
      }
      if (onClear) {
        onClear()
      }
      // Focus input after clearing
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    // Handle keyboard shortcut
    useEffect(() => {
      if (!showShortcut) return

      const handleKeyDown = (e: KeyboardEvent) => {
        // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [showShortcut])

    const hasValue = value.length > 0

    const containerClasses = [
      'relative',
      'flex',
      'items-center',
      fullWidth ? 'w-full' : '',
      className
    ]
      .filter(Boolean)
      .join(' ')

    const wrapperClasses = [
      'relative',
      'flex',
      'items-center',
      'w-full',
      'bg-white',
      'border',
      'border-gray-300',
      'rounded-lg',
      'transition-all',
      'duration-150',
      'ease-in-out',
      'hover:border-gray-400',
      'focus-within:border-indigo-500',
      'focus-within:ring-2',
      'focus-within:ring-indigo-500',
      'focus-within:ring-offset-2',
      disabled && 'opacity-60',
      disabled && 'cursor-not-allowed',
      disabled && 'bg-gray-50'
    ]
      .filter(Boolean)
      .join(' ')

    const inputClasses = [
      'flex-1',
      'bg-transparent',
      'border-none',
      'outline-none',
      'text-gray-900',
      'placeholder:text-gray-400',
      textSizeClasses[size],
      disabled && 'cursor-not-allowed'
    ]
      .filter(Boolean)
      .join(' ')

    const searchIcon = (
      <svg
        className={`${iconSizeClasses[size]} text-gray-400 flex-shrink-0`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    )

    const clearIcon = (
      <button
        type="button"
        onClick={handleClear}
        className={`
          ${iconSizeClasses[size]}
          text-gray-400
          hover:text-gray-600
          transition-colors
          duration-150
          flex-shrink-0
          cursor-pointer
          p-1
          rounded
          hover:bg-gray-100
        `}
        aria-label="Clear search"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    )

    const shortcutChip = (
      <div
        className={`
          ${chipSizeClasses[size]}
          bg-gray-100
          text-gray-500
          rounded
          font-medium
          flex-shrink-0
          select-none
        `}
      >
        {shortcutText}
      </div>
    )

    const searchBarId = id || `searchbar-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className={containerClasses}>
        <div className={wrapperClasses}>
          {/* Search Icon */}
          <div className="pl-3 flex-shrink-0">
            {searchIcon}
          </div>

          {/* Input */}
          <input
            ref={mergedRef}
            type={type}
            id={searchBarId}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClasses}
            aria-label="Search"
            {...props}
          />

          {/* Right Side */}
          <div className="pr-2 flex items-center gap-1 flex-shrink-0">
            {hasValue && !disabled && clearIcon}
            {showShortcut && shortcutChip}
          </div>
        </div>
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'
