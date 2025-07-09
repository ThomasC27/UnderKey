// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
  createdAt: Date
  updatedAt: Date
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Common UI types
export interface ButtonVariant {
  variant: 'primary' | 'secondary' | 'outline' | 'destructive'
  size: 'sm' | 'md' | 'lg'
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  icon?: string
  disabled?: boolean
  external?: boolean
}

// Form types
export interface FormField {
  id: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select'
  label: string
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

// Database types
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
} 