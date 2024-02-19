import type {
  UserData,
  UserChangePasswordData,
  ApiResponse,
  ErrorResponse,
} from '~/types'

export default function useAuth() {
  let isAuthenticated = ref(false)
  let userToken: string | null = null

  if (process.client) {
    userToken = localStorage.getItem('token')
    if (userToken) {
      isAuthenticated.value = true
    }
  }

  async function login(
    email: string,
    password: string,
  ): Promise<{ token: string }> {
    try {
      const response = (await $fetch(
        'https://joulia-app.dashboard.hbm.studio/api/v1/sanctum-token',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            device_name: 'password',
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )) as ApiResponse<{ token: string }> | ErrorResponse

      if ('data' in response && response.data.token) {
        userToken = response.data.token
        isAuthenticated.value = true

        if (process.client) {
          localStorage.setItem('token', userToken)
          localStorage.setItem('isAuthenticated', 'true')
        }
        return response.data
      } else {
        if (process.client) {
          localStorage.setItem('isAuthenticated', 'false')
        }
        throw new Error('Unexpected response structure')
      }
    } catch (error: any) {
      if (process.client) {
        localStorage.setItem('isAuthenticated', 'false')
      }
      console.error('Error Logging in', error)
      throw new Error('Error logging in')
    }
  }

  async function showAccountDetails(
    token: string,
  ): Promise<UserData | undefined> {
    try {
      if (!token) {
        return
      }
      const response = (await $fetch(
        'https://joulia-app.dashboard.hbm.studio/api/v1/me',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )) as ApiResponse<UserData> | ErrorResponse

      if ('data' in response) {
        return response.data
      } else {
        throw new Error('Error showing the account details data')
      }
    } catch (error) {
      throw new Error('Error showing the account details data')
    }
  }

  async function updateAccountDetails(updatedData: UserData, token: string) {
    try {
      const response = (await $fetch(
        'https://joulia-app.dashboard.hbm.studio/api/v1/me',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        },
      )) as ApiResponse<object> | ErrorResponse

      return response
    } catch (error) {
      throw error
    }
  }
  async function changePassword(
    userChangePasswordData: UserChangePasswordData,
    token: string,
  ): Promise<boolean> {
    try {
      const response = (await $fetch(
        'https://joulia-app.dashboard.hbm.studio/api/v1/me/password/reset',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userChangePasswordData),
        },
      )) as ApiResponse<void> | ErrorResponse

      return !('error' in response)
    } catch (error) {
      throw error
    }
  }

  async function logout(token: string): Promise<void> {
    try {
      const response = (await $fetch(
        'https://joulia-app.dashboard.hbm.studio/api/v1/logout',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )) as Response

      if (response.ok) {
        localStorage.clear()
        isAuthenticated.value = false
      } else {
        throw new Error('Failed to logout')
      }
    } catch (error) {
      throw error
    }
  }

  return {
    login,
    isAuthenticated,
    showAccountDetails,
    logout,
    changePassword,
    updateAccountDetails,
  }
}
