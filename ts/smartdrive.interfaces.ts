import * as plugins from './smartdrive.plugins'

export interface IDrive {
  device: string
  description: string
  size: number,
  mountpoints: IMountpoint[]
  raw: string
  protected: boolean
  system: boolean
}

export interface IMountpoint {
  path: string
}
