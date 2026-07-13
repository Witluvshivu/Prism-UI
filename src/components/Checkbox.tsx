import React, { useState, useRef } from 'react'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  indeterminate?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

const labelSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const iconSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5'
}

// Check Icon Component
const CheckIcon = ({ size }: { size: 'sm' | 'md' | 'lg' }) => (
  <svg
    className={`w-full h-full ${iconSizeClasses[size]} animate-check-in`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
)

// Minus Icon Component for Indeterminate State
const MinusIcon = ({ size }: { size: 'sm' | 'md' | 'lg' }) => (
  <svg
    className={`w-full h-full ${iconSizeClasses[size]} animate-check-in`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 12h14"
    />
  </svg>
)

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      indeterminate = false,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const checkboxRef = useRef<HTMLInputElement>(null)
    const mergedRef = (node: HTMLInputElement) => {
      if (checkboxRef.current) {
        checkboxRef.current = node
      }
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      if (onCheckedChange) {
        onCheckedChange(newChecked)
      }
    }

    // Handle indeterminate state
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    const baseClasses = [
      'relative',
      'inline-flex',
      'items-center',
      'gap-3',
      'cursor-pointer',
      'select-none',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
    ]
      .filter(Boolean)
      .join(' ')

    const boxBaseClasses = [
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'border-2',
      'rounded',
      'transition-all',
      'duration-150',
      'ease-in-out',
      'flex-shrink-0',
      sizeClasses[size]
    ]
      .filter(Boolean)
      .join(' ')

    const stateClasses = (() => {
      if (disabled) {
        return [
          'border-gray-300',
          'bg-gray-100',
          'cursor-not-allowed'
        ].join(' ')
      }

      if (checked || indeterminate) {
        return [
          'border-indigo-600',
          'bg-indigo-600',
          'hover:border-indigo-700',
          'focus:ring-indigo-500',
          'focus:ring-2',
          'focus:ring-offset-2'
        ].join(' ')
      }

      return [
        'border-gray-300',
        'bg-white',
        'hover:border-indigo-400',
        'focus:ring-indigo-500',
        'focus:ring-2',
        'focus:ring-offset-2'
      ].join(' ')
    })()

    const inputClasses = [
      'absolute',
      'opacity-0',
      'w-0',
      'h-0',
      'pointer-events-none'
    ].join(' ')

    const labelClasses = [
      'text-gray-700',
      'font-medium',
      'transition-colors',
      'duration-150',
      labelSizeClasses[size],
      disabled && 'text-gray-400'
    ]
      .filter(Boolean)
      .join(' ')

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <label className={`${baseClasses} ${className}`}>
        <div className={`${boxBaseClasses} ${stateClasses}`}>
          <input
            ref={mergedRef}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            className={inputClasses}
            aria-checked={indeterminate ? 'mixed' : checked}
            {...props}
          />

          {(checked || indeterminate) && !disabled && (
            <div className="text-white">
              {indeterminate ? (
                <MinusIcon size={size} />
              ) : (
                <CheckIcon size={size} />
              )}
            </div>
          )}

          {disabled && (checked || indeterminate) && (
            <div className="text-gray-400">
              {indeterminate ? (
                <MinusIcon size={size} />
              ) : (
                <CheckIcon size={size} />
              )}
            </div>
          )}
        </div>

        {label && <span className={labelClasses}>{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
