import React, { useEffect, useRef } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl'
}

export const Modal = ({
  isOpen,
  onClose,
  size = 'md',
  title,
  children,
  footer,
  closeOnBackdropClick = true,
  closeOnEscape = true
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeOnEscape])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 animate-modal-fade-in" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size]} bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-out animate-modal-scale-in`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

// Sub-components for convenience
export const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between p-6 border-b border-gray-200">{children}</div>
}

export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6">{children}</div>
}

export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">{children}</div>
}
