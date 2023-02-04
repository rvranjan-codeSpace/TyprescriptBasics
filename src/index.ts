import * as _ from 'lodash'
import { User } from './User'
import {GithubAPIService} from './GithubAPIService'
import { Repo } from './Repo';
import * as obj from './Add'

/// <reference path= "CustomerNameSpace" />

console.log("Process arguments:"+process.argv[2]);
let userName = process.argv[2];

var api = new GithubAPIService();

api.getUserInfo("koushikkothagal",(user:User)=>{
    api.getRepos("koushikkothagal",(repoArray:Repo[])=>{
        let sortedArray:Repo[] = _.sortBy(repoArray,(repo:Repo)=>repo.forkCount * -1);
        let firtFiveRepos = _.take(sortedArray,5)
       user.repos = firtFiveRepos;
       console.log(user)
    });
    
});

//learning exports and imports
//console.log(obj.add(3,4))
//console.log(obj.studentObj.address.getCompleteAdd())

//learning namespace : for namespaces we can import  but we have to add the triple hash : below not working peraps needs to compile with some module 
// module like AMD 



