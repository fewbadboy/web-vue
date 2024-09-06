// request 

type APIParams = {
  page?: number
  sortField?: string
  sortOrder?: number
  [key: string]: any
}

type APIResult = {
  data: TableDataItem[]
}


// Table Demo 
type TableDataItem = {
  uuid: string
  name: string
  age: number
  gender: 'female' | 'male'
  birthday: Date
  phone: string
  email: string
  address: string
  avatar: string
  color: string
  cron: string
  version: string
  money: number
}