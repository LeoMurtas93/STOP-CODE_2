export class LoginDto {
    constructor(
        public email: string = "",
        public password: string = ""
      ) { }
  }

  export type User = {
    id: number,
    name: string,
    email: string
}

  export type LoggedUser = {
    accessToken: string,
    user: User
 }