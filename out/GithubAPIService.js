"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubAPIService = void 0;
const request = __importStar(require("request"));
const Repo_1 = require("./Repo");
const User_1 = require("./User");
let OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
class GithubAPIService {
    getUserInfo(userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error, response, body) => {
            let userInfo = new User_1.User(body);
            cb(userInfo);
        });
    }
    getRepos(userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (error, response, body) => {
            let newArrayRepo = body.map((repo) => new Repo_1.Repo(repo));
            console.log("Printing the repo array");
            cb(newArrayRepo);
        });
    }
}
exports.GithubAPIService = GithubAPIService;
