import React, { createContext, useContext, useState, useCallback } from 'react'

// Types
export interface TableProps {
  children: React.ReactNode
  variant?: 'default' | 'striped' | 'borderless'
  className?: string
}

export interface TableHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface TableHeaderCellProps {
  children: React.ReactNode
  sortable?: boolean
  sortDirection?: 'asc' | 'desc' | null
  onSort?: () => void
  className?: string
  align?: 'left' | 'center' | 'right'
}

export interface TableBodyProps {
  children: React.ReactNode
  className?: string
}

export interface TableRowProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export interface TableCellProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export interface TableLoadingProps {
  rowCount?: number
  columnCount?: number
}

export interface TableEmptyProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  action?: React.ReactNode
}

// Context Type
interface TableContextType {
  variant: 'default' | 'striped' | 'borderless'
}

const TableContext = createContext<TableContextType | undefined>(undefined)

const useTable = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('Table subcomponents must be used within Table')
  }
  return context
}

// Sort Icon Component
const SortIcon = ({ direction }: { direction: 'asc' | 'desc' | null }) => (
  <svg
    className={`
      w-4 h-4 ml-2 inline-block text-gray-400
      transition-transform duration-200
      ${direction === 'asc' ? 'transform rotate-180' : ''}
      ${direction === 'desc' ? 'transform rotate-0' : ''}
      ${direction === null ? 'opacity-0' : 'opacity-100'}
    `}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
)

// Default Empty Icon
const DefaultEmptyIcon = () => (
  <svg
    className="w-12 h-12 text-gray-400 mx-auto mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

// Main Table Component
export const Table = ({
  children,
  variant = 'default',
  className = ''
}: TableProps) => {
  const variantClasses = {
    default: 'divide-y divide-gray-200',
    striped: '',
    borderless: ''
  }

  const contextValue: TableContextType = {
    variant
  }

  return (
    <TableContext.Provider value={contextValue}>
      <div className={`w-full overflow-x-auto ${className}`}>
        <table className={`w-full border-collapse ${variantClasses[variant]}`}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  )
}

// Table Header Component
export const TableHeader = ({ children, className = '' }: TableHeaderProps) => {
  return (
    <thead className={`
      sticky top-0 z-10 bg-white
      border-b border-gray-200
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-200
      ${className}
    `}>
      {children}
    </thead>
  )
}

// Table Header Cell Component
export const TableHeaderCell = ({
  children,
  sortable = false,
  sortDirection = null,
  onSort,
  className = '',
  align = 'left'
}: TableHeaderCellProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const baseClasses = [
    'px-4 py-3',
    alignClasses[align],
    'text-xs font-semibold',
    'text-gray-700 uppercase tracking-wider',
    'transition-colors duration-150'
  ]

  const sortableClasses = sortable
    ? ['cursor-pointer hover:bg-gray-50']
    : []

  const allClasses = [...baseClasses, ...sortableClasses, className].join(' ')

  const getAriaSort = () => {
    if (!sortable) return undefined
    if (sortDirection === 'asc') return 'ascending'
    if (sortDirection === 'desc') return 'descending'
    return 'none'
  }

  return (
    <th
      scope="col"
      className={allClasses}
      onClick={sortable ? onSort : undefined}
      aria-sort={getAriaSort()}
    >
      <div className="flex items-center gap-2">
        <span className={sortable ? 'flex-1' : ''}>{children}</span>
        {sortable && <SortIcon direction={sortDirection} />}
      </div>
    </th>
  )
}

// Table Body Component
export const TableBody = ({ children, className = '' }: TableBodyProps) => {
  return <tbody className={`bg-white ${className}`}>{children}</tbody>
}

// Table Row Component
export const TableRow = ({
  children,
  onClick,
  className = ''
}: TableRowProps) => {
  const { variant } = useTable()

  const baseClasses = [
    'transition-colors duration-150',
    'hover:bg-gray-50',
    onClick ? 'cursor-pointer' : ''
  ]

  const variantClasses = {
    default: '',
    striped: '',
    borderless: ''
  }

  // For striped variant, we handle the alternating colors via CSS nth-child
  const stripedClasses = variant === 'striped' ? '' : ''

  const allClasses = [
    ...baseClasses,
    variantClasses[variant],
    stripedClasses,
    className
  ].filter(Boolean).join(' ')

  return (
    <tr
      className={allClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {children}
    </tr>
  )
}

// Table Cell Component
export const TableCell = ({
  children,
  className = '',
  align = 'left'
}: TableCellProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <td className={`
      px-4 py-3
      text-sm text-gray-900 whitespace-nowrap
      ${alignClasses[align]}
      ${className}
    `}>
      {children}
    </td>
  )
}

// Table Loading Component
export const TableLoading = ({
  rowCount = 5,
  columnCount = 4
}: TableLoadingProps) => {
  return (
    <tbody>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columnCount }).map((_, cellIndex) => (
            <td key={cellIndex} className="px-4 py-3">
              <div className="h-4 table-skeleton rounded" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

// Table Empty Component
export const TableEmpty = ({
  icon = <DefaultEmptyIcon />,
  title = 'No data found',
  description = 'There are no items to display',
  action
}: TableEmptyProps) => {
  return (
    <tbody>
      <tr>
        <td colSpan={1000} className="px-4 py-12 text-center">
          <div className="flex flex-col items-center justify-center">
            {icon}
            <h3 className="text-sm font-medium text-gray-900 mt-2">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
            {action && <div className="mt-4">{action}</div>}
          </div>
        </td>
      </tr>
    </tbody>
  )
}
