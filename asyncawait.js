(async function displaycommits(){

    try{
        const user=await getUser(1);
        console.log(user)
        const repo=await getRepo(user.name);
        const commits=await getCommits(repo.name);
        console.log(commits[0]);
    }
    catch{
        console.log('error')
    }
    

})();

function getUser(id){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({id:id,name:'shubham'})
        }, 2000);})
    }

function getRepo(username){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({repo:['repo1'],name:username})
        }, 2000);})
}
function getCommits(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['commit1'])
        }, 2000);
    })
}
