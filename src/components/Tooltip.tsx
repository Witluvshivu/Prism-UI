import React, { useState, useRef, useEffect } from 'react'

export interface TooltipProps {
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
  delay?: number
  offset?: number
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      children,
      delay = 200,
      offset = 8,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    const showTooltip = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      const id = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      setTimeoutId(id)
    }

    const hideTooltip = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        setTimeoutId(null)
      }
      setIsVisible(false)
    }

    // Handle keyboard accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        hideTooltip()
      }
    }

    // Position classes for tooltip
    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    }

    // Arrow position and rotation
    const arrowClasses = {
      top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full rotate-180',
      bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full',
      left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full -rotate-90',
      right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full rotate-90'
    }

    return (
      <div
        ref={triggerRef}
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}

        {isVisible && (
          <div
            ref={tooltipRef || ref}
            className={`absolute z-50 ${positionClasses[position]} animate-tooltip-appear`}
            role="tooltip"
          >
            <div className="relative bg-gray-900 text-white px-3 py-1.5 rounded-md shadow-lg text-sm font-medium whitespace-nowrap">
              {content}

              {/* Arrow */}
              <div
                className={`absolute ${arrowClasses[position]} w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900`}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
)

Tooltip.displayName = 'Tooltip'
