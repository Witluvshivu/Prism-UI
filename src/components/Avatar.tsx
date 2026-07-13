import React from 'react'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  initials?: string
  status?: 'online' | 'offline' | 'away'
  fallbackColor?: string
}

const sizeClasses = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl'
}

const shapeClasses = {
  circle: 'rounded-full',
  square: 'rounded-md'
}

const statusClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-amber-500'
}

const statusSizeClasses = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5'
}

const statusPositionClasses = {
  xs: 'bottom-0 right-0',
  sm: 'bottom-0 right-0',
  md: 'bottom-0 right-0',
  lg: 'bottom-0 right-0',
  xl: 'bottom-0 right-0'
}

// Generate soft background colors based on initials
const generateColor = (initials: string): string => {
  const colors = [
    'bg-blue-100 text-blue-700',
    'bg-green-100 text-green-700',
    'bg-amber-100 text-amber-700',
    'bg-red-100 text-red-700',
    'bg-purple-100 text-purple-700',
    'bg-pink-100 text-pink-700',
    'bg-indigo-100 text-indigo-700',
    'bg-teal-100 text-teal-700',
    'bg-cyan-100 text-cyan-700',
    'bg-emerald-100 text-emerald-700',
  ]

  // Simple hash function to determine color index
  let hash = 0
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % colors.length
  return colors[index]
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      src,
      alt = 'Avatar',
      size = 'md',
      shape = 'circle',
      initials,
      status,
      fallbackColor,
      className = '',
      ...props
    },
    ref
  ) => {
    const avatarSize = sizeClasses[size]
    const avatarShape = shapeClasses[shape]
    const statusColor = status ? statusClasses[status] : ''
    const statusSize = statusSizeClasses[size]
    const statusPosition = statusPositionClasses[size]

    // Generate initials from alt text if not provided
    const displayInitials = initials || (alt && !src
      ? alt
          .split(' ')
          .map(word => word.charAt(0).toUpperCase())
          .slice(0, 2)
          .join('')
      : ''
    )

    const initialsColor = fallbackColor || generateColor(displayInitials)

    return (
      <div className={`relative inline-block ${className}`}>
        <div className={`${avatarSize} ${avatarShape} overflow-hidden flex items-center justify-center font-medium`}>
          {src ? (
            <img
              ref={ref}
              src={src}
              alt={alt}
              className={`w-full h-full object-cover ${avatarShape}`}
              onError={(e) => {
                // Fallback to initials on image error
                e.currentTarget.style.display = 'none'
                const parent = e.currentTarget.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="${avatarSize} ${avatarShape} ${initialsColor} flex items-center justify-center font-medium">${displayInitials}</span>`
                }
              }}
              {...props}
            />
          ) : (
            <span className={`${avatarSize} ${avatarShape} ${initialsColor} flex items-center justify-center`}>
              {displayInitials}
            </span>
          )}
        </div>

        {status && (
          <div
            className={`absolute ${statusPosition} ${statusSize} ${statusColor} ${avatarShape} border-2 border-white`}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'
