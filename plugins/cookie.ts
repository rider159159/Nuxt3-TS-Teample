import Cookies from 'js-cookie'

const TokenKey = 'test'
const inSevenDays = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      GET_TOKEN: () => Cookies.get(TokenKey),
      SET_TOKEN: (token: string) => Cookies.set(TokenKey, token, {
        expires: inSevenDays,
      }),
      REMOVE_TOKEN: () => Cookies.get(TokenKey),
    },
  }
})
