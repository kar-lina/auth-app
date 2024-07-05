export interface LoginUserPayloadInterface {
  email: string
  password: string
}
export interface SignUpUserPayloadInterface extends LoginUserPayloadInterface {
  name: string
}
export interface User extends SignUpUserPayloadInterface {
  id: number
}
