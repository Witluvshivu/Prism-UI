import React, { useRef, useEffect } from 'react'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  value?: string
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

const dotSizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3'
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      className = '',
      id,
      value,
      name,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const radioRef = useRef<HTMLInputElement>(null)
    const mergedRef = (node: HTMLInputElement) => {
      if (radioRef.current) {
        radioRef.current = node
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

    const circleBaseClasses = [
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'border-2',
      'rounded-full',
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
          'bg-gray-50',
          'cursor-not-allowed'
        ].join(' ')
      }

      if (checked) {
        return [
          'border-indigo-600',
          'bg-white',
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

    const dotClasses = [
      'rounded-full',
      'bg-indigo-600',
      'transition-all',
      'duration-150',
      'ease-in-out',
      'radio-dot-animate',
      dotSizeClasses[size]
    ]
      .filter(Boolean)
      .join(' ')

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

    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    return (
      <label className={`${baseClasses} ${className}`}>
        <div className={`${circleBaseClasses} ${stateClasses}`}>
          <input
            ref={mergedRef}
            type="radio"
            id={radioId}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            className={inputClasses}
            value={value}
            name={name}
            {...props}
          />

          {checked && !disabled && (
            <div className={dotClasses} />
          )}

          {disabled && checked && (
            <div className={`${dotClasses} bg-gray-400`} />
          )}
        </div>

        {label && <span className={labelClasses}>{label}</span>}
      </label>
    )
  }
)

Radio.displayName = 'Radio'
