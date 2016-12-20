"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dist_1 = require("../../dist");
var UserModel = {
    findById: function (userId) {
        return new Promise(function (resolve, reject) {
            if (userId) {
                var userObjet = {
                    id: userId,
                    notificationsEnabled: true
                };
                return resolve(userObjet);
            }
            reject('Data is missing');
        });
    }
};
var TaskModel = function (_a) {
    var userId = _a.userId, name = _a.name;
    return new Promise(function (resolve, reject) {
        if (userId && name) {
            var newTask = {
                assignedUser: {
                    id: userId
                }
            };
            return resolve(newTask);
        }
        reject('Data is missing');
    });
};
var NotificationService = {
    sendNotification: function (userId, name) {
        return new Promise(function (resolve, reject) {
            if (userId && name)
                return resolve('Success');
            reject('Data is missing');
        });
    }
};
function asyncTask(userId, cb) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, err, user, _b, err, savedTask, err_1, _c, err_2, notification;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, dist_1["default"](UserModel.findById(userId))];
                case 1:
                    _a = _d.sent(), err = _a[0], user = _a[1];
                    if (!(user && user.id))
                        return [2 /*return*/, cb('No user found')];
                    return [4 /*yield*/, dist_1["default"](TaskModel({ userId: user.id, name: 'Demo Task' }))];
                case 2:
                    _b = _d.sent(), err = _b[0], savedTask = _b[1];
                    if (err)
                        return [2 /*return*/, cb('Error occurred while saving task')];
                    if (!user.notificationsEnabled)
                        return [3 /*break*/, 4];
                    return [4 /*yield*/, dist_1["default"](NotificationService.sendNotification(user.id, 'Task Created'))];
                case 3:
                    err_1 = (_d.sent())[0];
                    if (err_1)
                        return [2 /*return*/, cb('Error while sending notification')];
                    _d.label = 4;
                case 4:
                    if (!(savedTask.assignedUser.id !== user.id))
                        return [3 /*break*/, 6];
                    return [4 /*yield*/, dist_1["default"](NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'))];
                case 5:
                    _c = _d.sent(), err_2 = _c[0], notification = _c[1];
                    if (err_2)
                        return [2 /*return*/, cb('Error while sending notification')];
                    _d.label = 6;
                case 6:
                    cb(null, savedTask);
                    return [2 /*return*/];
            }
        });
    });
}
asyncTask(1, function (err, newTask) {
    console.log('new task created');
    console.log(err);
    console.log(newTask);
});
asyncTask(null, function (err, newTask) {
    console.log('fail');
    console.log(err);
    console.log(newTask);
});
