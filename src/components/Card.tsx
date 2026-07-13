import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg'
  clickable?: boolean
  header?: {
    title: string
    subtitle?: string
    action?: React.ReactNode
  }
  footer?: React.ReactNode
  children: React.ReactNode
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

const bodyPaddingClasses = {
  sm: 'pt-4 pb-4 px-4',
  md: 'pt-6 pb-6 px-6',
  lg: 'pt-8 pb-8 px-8'
}

const footerPaddingClasses = {
  sm: 'p-4 pt-0',
  md: 'p-6 pt-0',
  lg: 'p-8 pt-0'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'md',
      clickable = false,
      header,
      footer,
      children,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'bg-white',
      'rounded-lg',
      'shadow-sm',
      'transition-all',
      'duration-150',
      'ease-in-out'
    ]
      .filter(Boolean)
      .join(' ')

    const clickableClasses = clickable
      ? [
          'cursor-pointer',
          'hover:shadow-md',
          'hover:-translate-y-0.5',
          'active:translate-y-0'
        ]
        .join(' ')
      : ''

    const headerPadding = padding === 'sm' ? 'p-4 pb-3' : padding === 'md' ? 'p-6 pb-4' : 'p-8 pb-5'

    const dividerClasses = 'border-t border-gray-200'

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${clickableClasses} ${className}`.trim()}
        onClick={onClick}
        {...props}
      >
        {/* Header */}
        {header && (
          <div className={`flex items-start justify-between ${headerPadding}`}>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {header.title}
              </h3>
              {header.subtitle && (
                <p className="text-sm text-gray-500 mt-1">
                  {header.subtitle}
                </p>
              )}
            </div>
            {header.action && (
              <div className="ml-4 flex-shrink-0">
                {header.action}
              </div>
            )}
          </div>
        )}

        {/* Body */}
        <div className={header ? bodyPaddingClasses[padding] : paddingClasses[padding]}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className={`${footerPaddingClasses[padding]} ${dividerClasses}`}>
            {footer}
          </div>
        )}
      </div>
    )
  }
)

Card.displayName = 'Card'
