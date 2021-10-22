import request from '@/utils/axios.js'
/*  
false 为get
true 或不填为post
*/
export const login = (data) => request('/user/signin', data)

export const signup = (data) => request('/user/signup', data)

