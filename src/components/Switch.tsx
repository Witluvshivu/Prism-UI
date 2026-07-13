import React, { useState, useRef } from 'react'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  labelPosition?: 'left' | 'right'
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

const sizeClasses = {
  sm: {
    track: 'w-8 h-5',
    thumb: 'w-3 h-3',
    translate: 'translate-x-3',
    label: 'text-sm'
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-4 h-4',
    translate: 'translate-x-5',
    label: 'text-base'
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-5 h-5',
    translate: 'translate-x-7',
    label: 'text-lg'
  }
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      label,
      labelPosition = 'right',
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

    const switchRef = useRef<HTMLInputElement>(null)
    const mergedRef = (node: HTMLInputElement) => {
      if (switchRef.current) {
        switchRef.current = node
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

    const sizeConfig = sizeClasses[size]

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

    const trackBaseClasses = [
      'relative',
      'inline-flex',
      'flex-shrink-0',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-500',
      'focus:ring-offset-2',
      sizeConfig.track
    ]
      .filter(Boolean)
      .join(' ')

    const trackStateClasses = (() => {
      if (disabled) {
        return checked ? 'bg-gray-300' : 'bg-gray-200'
      }
      return checked ? 'bg-indigo-600' : 'bg-gray-300'
    })()

    const thumbBaseClasses = [
      'pointer-events-none',
      'inline-block',
      'rounded-full',
      'bg-white',
      'shadow-md',
      'transform',
      'transition-transform',
      'duration-200',
      'ease-in-out',
      'ring-0',
      sizeConfig.thumb
    ]
      .filter(Boolean)
      .join(' ')

    const thumbTranslateClass = checked ? sizeConfig.translate : 'translate-x-0'

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
      sizeConfig.label,
      disabled && 'text-gray-400'
    ]
      .filter(Boolean)
      .join(' ')

    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`

    const labelElement = label && (
      <span className={labelClasses}>{label}</span>
    )

    const switchElement = (
      <div className={trackBaseClasses}>
        <input
          ref={mergedRef}
          type="checkbox"
          id={switchId}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={inputClasses}
          role="switch"
          aria-checked={checked}
          {...props}
        />
        <span
          aria-hidden="true"
          className={`${thumbBaseClasses} ${thumbTranslateClass}`}
        />
      </div>
    )

    return (
      <label className={`${baseClasses} ${className}`} htmlFor={switchId}>
        {labelPosition === 'left' ? (
          <>
            {labelElement}
            {switchElement}
          </>
        ) : (
          <>
            {switchElement}
            {labelElement}
          </>
        )}
      </label>
    )
  }
)

Switch.displayName = 'Switch'
