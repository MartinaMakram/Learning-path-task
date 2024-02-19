import useAuth from '~/store/auth'

const middleware = defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  if (to.path === '/account/accountdetails' && !isAuthenticated.value) {
    return '/auth/login'
  } else if (to.path === '/auth/login' && isAuthenticated.value) {
    return '/account/accountdetails'
  }
  return undefined
})

export default middleware
