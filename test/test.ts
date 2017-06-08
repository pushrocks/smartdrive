import * as smartdrive from '../dist/index'

import { expect, tap } from 'tapbundle'

let myLocalDriveList: smartdrive.LocalDriveList
let driveList: smartdrive.IDrive[]

tap.test('should create a new LocalDriveList', async () => {
  myLocalDriveList = new smartdrive.LocalDriveList()
  expect(myLocalDriveList).to.be.instanceof(smartdrive.LocalDriveList)
})

tap.test('should deliver a local drivelist', async () => {
  driveList = await myLocalDriveList.getList()
})

tap.test('drivelist should contain drives', async () => {
  console.log(driveList)
})

tap.start()
