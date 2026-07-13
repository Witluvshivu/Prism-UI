import React, { ReactNode } from 'react'

export interface FormFieldProps {
  label?: string
  required?: boolean
  error?: string
  helperText?: string
  children: ReactNode
  className?: string
}

export const FormField = ({
  label,
  required = false,
  error,
  helperText,
  children,
  className = ''
}: FormFieldProps) => {
  const labelColorClass = error ? 'text-red-600' : 'text-gray-700'
  const hasHelperOrError = error || helperText

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label className={`text-base font-medium ${labelColorClass}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input/Child */}
      <div>{children}</div>

      {/* Helper Text or Error Message */}
      {hasHelperOrError && (
        <p className={`text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}
