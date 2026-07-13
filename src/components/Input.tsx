import React from 'react'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: boolean
  errorMessage?: string
  fullWidth?: boolean
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

const baseClasses = [
  'block',
  'w-full',
  'rounded-md',
  'border',
  'transition-colors',
  'duration-150',
  'ease-in-out',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
]

const stateClasses = {
  default: [
    'border-gray-300',
    'bg-white',
    'text-gray-900',
    'placeholder:text-gray-400',
    'hover:border-gray-400',
    'focus:border-indigo-500',
    'focus:ring-indigo-500'
  ],
  disabled: [
    'border-gray-200',
    'bg-gray-50',
    'text-gray-500',
    'placeholder:text-gray-400',
    'cursor-not-allowed',
    'opacity-60'
  ],
  readonly: [
    'border-gray-200',
    'bg-gray-50',
    'text-gray-700',
    'placeholder:text-gray-400',
    'cursor-default'
  ],
  error: [
    'border-red-500',
    'bg-white',
    'text-gray-900',
    'placeholder:text-gray-400',
    'hover:border-red-600',
    'focus:border-red-500',
    'focus:ring-red-500'
  ]
}

const iconColorClasses = {
  default: 'text-gray-400',
  hover: 'text-gray-500',
  focus: 'text-indigo-500',
  disabled: 'text-gray-300',
  readonly: 'text-gray-400',
  error: 'text-red-500'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      leftIcon,
      rightIcon,
      error = false,
      errorMessage,
      fullWidth = false,
      disabled = false,
      readOnly = false,
      className = '',
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    const state = error ? 'error' : disabled ? 'disabled' : readOnly ? 'readonly' : 'default'

    const inputClasses = [
      ...baseClasses,
      ...stateClasses[state],
      sizeClasses[size],
      fullWidth && 'w-full',
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      className
    ]
      .filter(Boolean)
      .join(' ')

    const iconClasses = [
      'absolute',
      'pointer-events-none',
      'transition-colors',
      'duration-150',
      iconSizeClasses[size],
      iconColorClasses[state]
    ].join(' ')

    const wrapperId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={iconClasses}>{leftIcon}</span>
            </div>
          )}

          <input
            ref={ref}
            type={type}
            id={wrapperId}
            className={inputClasses}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={error}
            aria-describedby={error && errorMessage ? `${wrapperId}-error` : undefined}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className={iconClasses}>{rightIcon}</span>
            </div>
          )}
        </div>

        {error && errorMessage && (
          <p
            id={`${wrapperId}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
