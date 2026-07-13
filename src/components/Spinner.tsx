import React from 'react'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'circle' | 'dots' | 'pulse'
  color?: string
  speed?: 'slow' | 'normal' | 'fast'
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

const circleSizeClasses = {
  sm: 'border-2',
  md: 'border-3',
  lg: 'border-4',
  xl: 'border-[5px]'
}

const dotSizeClasses = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
  xl: 'w-2.5 h-2.5'
}

const speedClasses = {
  slow: 'animation-duration-slow',
  normal: 'animation-duration-normal',
  fast: 'animation-duration-fast'
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'md',
      variant = 'circle',
      color,
      speed = 'normal',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'flex-shrink-0'
    ]
      .filter(Boolean)
      .join(' ')

    const colorClass = color || 'currentColor'

    if (variant === 'circle') {
      const spinnerClasses = [
        'rounded-full',
        'border-t-transparent',
        'border-r-transparent',
        'animate-spin',
        circleSizeClasses[size],
        speedClasses[speed]
      ]
        .filter(Boolean)
        .join(' ')

      return (
        <div ref={ref} className={`${baseClasses} ${className}`} {...props}>
          <div
            className={spinnerClasses}
            style={{
              borderColor: `transparent transparent ${colorClass} ${colorClass}`,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      )
    }

    if (variant === 'dots') {
      return (
        <div ref={ref} className={`${baseClasses} ${sizeClasses[size]} ${className}`} {...props}>
          <div className="flex items-center justify-center gap-1 w-full h-full">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`rounded-full ${dotSizeClasses[size]} animate-bounce-dot`}
                style={{
                  backgroundColor: colorClass,
                  animationDelay: `${index * 0.15}s`
                }}
              />
            ))}
          </div>
        </div>
      )
    }

    if (variant === 'pulse') {
      const pulseClasses = [
        'rounded-full',
        'animate-pulse-custom',
        speedClasses[speed]
      ]
        .filter(Boolean)
        .join(' ')

      return (
        <div ref={ref} className={`${baseClasses} ${className}`} {...props}>
          <div
            className={`${pulseClasses} ${sizeClasses[size]}`}
            style={{
              backgroundColor: colorClass,
              opacity: '0.6'
            }}
          />
        </div>
      )
    }

    return null
  }
)

Spinner.displayName = 'Spinner'
