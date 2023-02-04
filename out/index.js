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
const _ = __importStar(require("lodash"));
const GithubAPIService_1 = require("./GithubAPIService");
/// <reference path= "CustomerNameSpace" />
console.log("Process arguments:" + process.argv[2]);
let userName = process.argv[2];
var api = new GithubAPIService_1.GithubAPIService();
api.getUserInfo("koushikkothagal", (user) => {
    api.getRepos("koushikkothagal", (repoArray) => {
        let sortedArray = _.sortBy(repoArray, (repo) => repo.forkCount * -1);
        let firtFiveRepos = _.take(sortedArray, 5);
        user.repos = firtFiveRepos;
        console.log(user);
    });
});
//learning exports and imports
//console.log(obj.add(3,4))
//console.log(obj.studentObj.address.getCompleteAdd())
//learning namespace : for namespaces we can import  but we have to add the triple hash : below not working peraps needs to compile with some module 
// module like AMD 
