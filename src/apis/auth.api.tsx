type LoginReq = {
  email: string
  password: string
  repeatPassword: string
}

type LoginRes = {
  token: string
}

export const login = async (payload: LoginReq): Promise<LoginRes> => {
  console.log(payload)
  const res: LoginRes = { token: 'TOKEN_STRING' }
  return res

  // return axios.post<LoginRes>('/api/login', payload).then((res) => res.data)
}
