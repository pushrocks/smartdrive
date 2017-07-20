"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartdrive.plugins");
let promisifiedDrivelist = plugins.smartq.promisify(plugins.drivelist.list);
class LocalDriveList {
    constructor() {
        this._list = null;
    }
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._list) {
                this._list = yield promisifiedDrivelist();
            }
            return this._list;
        });
    }
    getUpdatedList() {
        return __awaiter(this, void 0, void 0, function* () {
            this._list = null;
            return yield this.getList();
        });
    }
}
exports.LocalDriveList = LocalDriveList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRkcml2ZS5jbGFzc2VzLmxvY2FsZHJpdmVsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRkcml2ZS5jbGFzc2VzLmxvY2FsZHJpdmVsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnREFBK0M7QUFHL0MsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNFO0lBQUE7UUFDVSxVQUFLLEdBQWEsSUFBSSxDQUFBO0lBYWhDLENBQUM7SUFYTyxPQUFPOztZQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFBO1lBQzNDLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0Y7QUFkRCx3Q0FjQyJ9