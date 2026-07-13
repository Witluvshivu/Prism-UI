import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  size?: 'sm' | 'md'
  shape?: 'pill' | 'square'
  withDot?: boolean
  children: React.ReactNode
}

const variantClasses = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  neutral: 'bg-gray-100 text-gray-800'
}

const dotVariantClasses = {
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  info: 'bg-blue-500',
  neutral: 'bg-gray-500'
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs font-medium',
  md: 'px-3 py-1 text-sm font-medium'
}

const shapeClasses = {
  pill: 'rounded-full',
  square: 'rounded-md'
}

const dotSizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size = 'sm',
      shape = 'pill',
      withDot = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'gap-1.5',
      'font-medium',
      'transition-colors',
      'duration-150',
      variantClasses[variant],
      sizeClasses[size],
      shapeClasses[shape],
      className
    ]
      .filter(Boolean)
      .join(' ')

    const dotClasses = [
      'rounded-full',
      'flex-shrink-0',
      dotVariantClasses[variant],
      dotSizeClasses[size]
    ].join(' ')

    return (
      <span ref={ref} className={baseClasses} {...props}>
        {withDot && <span className={dotClasses} />}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
