"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userInfo) {
        this.user = userInfo.login;
        this.fullName = userInfo.name;
        this.repoUrl = userInfo.repos_url;
        this.followers_url = userInfo.followers_url;
        this.repos = userInfo.repos;
    }
}
exports.User = User;
