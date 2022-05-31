getUser(1,(user)=>{
    console.log(user)
    getRepo(user.name,(data)=>{
        console.log(data)
        getCommits(data.name,(data)=>{
            console.log(data);
        })
    })
});

function getUser(id,callback){
    setTimeout(() => {
     callback({id:id,name:'shubham'});
    }, 1000);
}

function getRepo(username,callback){
    setTimeout(() => {
        callback({name:username,repo:['repo1','repo2','repo3']})
    }, 2000);
}
function getCommits(username,callback){
    setTimeout(() => {
        callback(['commit1','commit2'])
    }, 2000);
}