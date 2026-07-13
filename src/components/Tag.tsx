import React from 'react'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md'
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  treatment?: 'subtle' | 'solid'
  removable?: boolean
  onRemove?: () => void
  leftIcon?: React.ReactNode
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm'
}

const subtleVariantClasses = {
  success: 'bg-green-100 text-green-800 hover:bg-green-200',
  warning: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
  danger: 'bg-red-100 text-red-800 hover:bg-red-200',
  info: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  neutral: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
}

const solidVariantClasses = {
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-amber-600 text-white hover:bg-amber-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  info: 'bg-blue-600 text-white hover:bg-blue-700',
  neutral: 'bg-gray-700 text-white hover:bg-gray-800'
}

// Close Icon for removable tags
const CloseIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      size = 'md',
      variant = 'neutral',
      treatment = 'subtle',
      removable = false,
      onRemove,
      leftIcon,
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
      'rounded-full',
      'transition-colors',
      'duration-150',
      'ease-in-out'
    ]
      .filter(Boolean)
      .join(' ')

    const variantClass = treatment === 'subtle'
      ? subtleVariantClasses[variant]
      : solidVariantClasses[variant]

    const tagClasses = [
      baseClasses,
      sizeClasses[size],
      variantClass,
      className
    ]
      .filter(Boolean)
      .join(' ')

    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (onRemove) {
        onRemove()
      }
    }

    return (
      <span ref={ref} className={tagClasses} {...props}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span className="flex-shrink-0">{children}</span>
        {removable && (
          <button
            type="button"
            onClick={handleRemoveClick}
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity rounded-full p-0.5 hover:bg-black/10"
            aria-label="Remove tag"
          >
            <CloseIcon />
          </button>
        )}
      </span>
    )
  }
)

Tag.displayName = 'Tag'
