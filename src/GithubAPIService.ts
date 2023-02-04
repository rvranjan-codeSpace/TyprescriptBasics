    import * as request from "request";
    import { Repo } from "./Repo";
    import { User } from "./User";

    let OPTIONS:any= {
        headers:{
            'User-Agent': 'request'
        },
        json:true
    }

    export class GithubAPIService {
        
        getUserInfo(userName: string,cb:(p:User)=>any) {
        
            request.get("https://api.github.com/users/" + userName, OPTIONS, (error:any,response:any,body:any) => {
            let userInfo = new User(body)
                cb(userInfo);
            })
        }

            getRepos(userName:string,cb:(repoArray:Repo[])=>any) {
            request.get("https://api.github.com/users/" + userName+"/repos", OPTIONS, (error:any,response:any,body:any) => {
                 let newArrayRepo:Repo[] =  body.map((repo:any)=> new Repo(repo));
                 console.log("Printing the repo array")
                  cb(newArrayRepo);
            })

        }
    }