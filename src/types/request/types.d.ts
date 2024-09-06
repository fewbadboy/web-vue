declare interface PostData {
  name: string
  age?: number
}

declare interface GetData {
  id: number
}

// User
declare interface UserLogIn {
  username: string
  password: string
}

// Menu
declare interface ResMenu {
  name: string
  path?: string
  parent?: string
}