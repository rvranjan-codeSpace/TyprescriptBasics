import {Repo} from './Repo';

export class User{ 
    user: string;
    fullName:string;
    repoUrl:string;
    followers_url:string;
    repos?:Repo[];

    constructor(userInfo:any){
        this.user = userInfo.login;
        this.fullName = userInfo.name;
        this.repoUrl = userInfo.repos_url;
        this.followers_url = userInfo.followers_url;
        this.repos = userInfo.repos;
    }
}