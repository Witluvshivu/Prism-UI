import React from 'react'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  label?: string
  spacing?: 'sm' | 'md' | 'lg'
}

const orientationClasses = {
  horizontal: 'w-full',
  vertical: 'h-full'
}

const variantClasses = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted'
}

const spacingClasses = {
  horizontal: {
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6'
  },
  vertical: {
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-6'
  }
}

const labelSpacingClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6'
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      label,
      spacing = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    if (orientation === 'vertical') {
      const baseClasses = [
        'border-l',
        'border-gray-300',
        variantClasses[variant],
        spacingClasses.vertical[spacing],
        className
      ]
        .filter(Boolean)
        .join(' ')

      return (
        <div
          ref={ref}
          className={`inline-flex ${baseClasses}`}
          aria-orientation="vertical"
          role="separator"
          {...props}
        />
      )
    }

    // Horizontal divider
    if (label) {
      return (
        <div
          ref={ref}
          className={`flex items-center ${spacingClasses.horizontal[spacing]} ${className}`}
          role="separator"
          {...props}
        >
          <div className={`flex-1 border-t border-gray-300 ${variantClasses[variant]}`} />
          <span className={`px-2 text-sm text-gray-500 font-medium ${labelSpacingClasses[spacing]}`}>
            {label}
          </span>
          <div className={`flex-1 border-t border-gray-300 ${variantClasses[variant]}`} />
        </div>
      )
    }

    const baseClasses = [
      'border-t',
      'border-gray-300',
      variantClasses[variant],
      spacingClasses.horizontal[spacing],
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div
        ref={ref}
        className={baseClasses}
        role="separator"
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
