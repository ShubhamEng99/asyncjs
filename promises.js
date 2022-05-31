getUser(1)
.then(res=>getRepo(res.name))
.then(res=>getCommits(res.name))
.then(res=>console.log(res))

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


//promises in paralles

const prom1=new Promise((resolve,reject)=>{
  setTimeout(() => {
      console.log('async ope-1');
      resolve(1);
  }, 2000);
})
const prom2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('async ope-2');
        resolve(2);
    }, 2000);
})

const data=Promise.all([prom1,prom2]);
data.then(res=>
    console.log(res))