import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const variantClasses = {
  primary: 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-400',
  ghost: 'bg-transparent text-gray-700 border-transparent hover:bg-gray-100 focus:ring-gray-400',
  danger: 'bg-red-600 text-white border-transparent hover:bg-red-700 focus:ring-red-500'
}

const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none'

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      fullWidth = false,
      disabled = false,
      children,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'rounded-md',
      'border',
      'transition-all',
      'duration-150',
      'ease-in-out',
      'hover:-translate-y-0.5',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'shadow-sm',
      'hover:shadow-md',
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && 'w-full',
      (disabled || loading) && disabledClasses,
      className
    ]
      .filter(Boolean)
      .join(' ')

    const iconOrSpinner = (icon?: React.ReactNode) => {
      if (loading) return <Spinner />
      return icon
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseClasses}
        disabled={disabled || loading}
        {...props}
      >
        {leftIcon && <span className="mr-2">{iconOrSpinner(leftIcon)}</span>}
        {children}
        {rightIcon && <span className="ml-2">{iconOrSpinner(rightIcon)}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
