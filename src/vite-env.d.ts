/// <reference types="vite/client" />

import * as L from 'leaflet'

import 'vue-router'
import { 
  DefineLocaleMessage,
  DefineDateTimeFormat,
  DefineNumberFormat
} from 'vue-i18n'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    icon?: string
    transition?: string
  }
}

declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    dashboard: string
    operate: {
      edit: string
      delete: string
      detail: string
    }
    message: {
      welcome: string
    }
  }

  export interface DefineDateTimeFormat {
    short: {
      year: 'numeric'
      month: 'short' | '2-digit'
      day: 'numeric'
    }
    long: {
      year: 'numeric'
      month: 'short' | '2-digit'
      day: 'numeric'
      weekday: 'short'
      hour: 'numeric' | '2-digit'
      minute: 'numeric' | '2-digit'
      second: 'numeric' | '2-digit'
    }
  }

  export interface DefineNumberFormat {
    currency: {
      style: 'currency'
      currency: string
      maximumFractionDigits?: number,
      notation?: 'standard'
    }
    decimal: {
      style: 'decimal'
      maximumFractionDigits: number
    }
    percent: {
      style: 'percent'
      maximumFractionDigits: number
      useGrouping: boolean
    },
    unit: {
      style: 'unit'
      unit: string
    }
  }

}


declare module 'leaflet' {
  namespace Control {
    class WaterMark extends Control {
      constructor(option?: ControlOptions)
    }
  }

  namespace control {
    function waterMark(option?: ControlOptions): Control.WaterMark
  }

  interface MapOptions {
    rotate?: boolean
    rotateControl: {
      closeOnZeroBearing?: boolean
      position?: string
    }
    bearing?: number
    touchRotate?: boolean
  }

  interface MarkerOptions {
    rotation?: number | string
  }
}