declare module 'leaflet-ant-path' {
  import { PolylineOptions, LatLngExpression } from 'leaflet'

  export interface AntPathOptions extends PolylineOptions {
    paused?: boolean
    reverse?: boolean
    hardwareAccelerated?: boolean
    delay?: number
    dashArray?: [number, number]
    pulseColor?: string
    pausedColor?: string
    pulseColor?: string
  }

  export function antPath(
    latLngs: LatLngExpression[] | LatLngExpression[][],
    options?: AntPathOptions
  ): L.Polyline
}

declare module 'leaflet-rotate'

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