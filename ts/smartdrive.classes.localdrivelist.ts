import * as plugins from './smartdrive.plugins'
import { IDrive } from './smartdrive.interfaces'

let promisifiedDrivelist = plugins.smartq.promisify<any>(plugins.drivelist.list)

export class LocalDriveList {
  private _list: IDrive[] = null

  async getList (): Promise<IDrive[]> {
    if (!this._list) {
      this._list = await promisifiedDrivelist()
    }
    return this._list
  }

  async getUpdatedList (): Promise<IDrive[]> {
    this._list = null
    return await this.getList()
  }
}
