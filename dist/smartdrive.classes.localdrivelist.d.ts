import { IDrive } from './smartdrive.interfaces';
export declare class LocalDriveList {
    private _list;
    getList(): Promise<IDrive[]>;
    getUpdatedList(): Promise<IDrive[]>;
}
