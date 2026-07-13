import React, { useState } from 'react'
import { Radio } from './Radio'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  name: string
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  label?: string
  description?: string
}

const orientationClasses = {
  horizontal: 'flex-row flex-wrap items-center gap-6',
  vertical: 'flex-col gap-3'
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      options,
      value: controlledValue,
      defaultValue,
      onValueChange,
      orientation = 'vertical',
      size = 'md',
      disabled = false,
      className = '',
      label,
      description
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '')
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    const containerClasses = [
      'flex',
      orientationClasses[orientation],
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className="space-y-1">
        {(label || description) && (
          <div className="mb-3">
            {label && (
              <h3 className="text-base font-medium text-gray-900 mb-1">
                {label}
              </h3>
            )}
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}

        <div className={containerClasses} role="radiogroup" aria-label={label || name}>
          {options.map((option) => (
            <Radio
              key={option.value}
              name={name}
              value={option.value}
              label={option.label}
              checked={currentValue === option.value}
              disabled={disabled || option.disabled}
              size={size}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleValueChange(option.value)
                }
              }}
            />
          ))}
        </div>
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
