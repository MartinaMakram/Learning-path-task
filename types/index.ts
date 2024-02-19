export interface UserData {
  first_name: string
  last_name: string
  email: string
  mobile: string
}

export interface EditMode {
  first_name: boolean
  last_name: boolean
  email: boolean
  mobile: boolean
}

export interface UserChangePasswordData {
  old_password: string
  password: string
  password_confirmation: string
}

export type ApiResponse<T> = {
  success: boolean
  data: T
  error?: string
}

export type ErrorResponse = {
  success: boolean
  error: string
}
