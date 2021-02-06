export default function () {
  return {
    isLoggedIn:
      typeof window !== 'undefined'
        ? !!localStorage.getItem('csm-token') || false
        : false,
    token:
      typeof window !== 'undefined'
        ? localStorage.getItem('csm-token') || ''
        : ''
  }
}
