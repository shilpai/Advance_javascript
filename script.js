// Basic example
const x = 'shilpa';
const y = 'shilpa';

let promise = new Promise(function(resolve, reject){
if(x === y){
resolve('promise is solved');
}else{
reject('promise is not resolve')
}
})

promise.then((resolve) => {
console.log(resolve);
}).catch((err) => {
console.log(err);
})

// Promise methods
//Promise.all:
/*const a = 1;

const prom1 = new Promise((res, rej)=>{
    if(a == 1){
        res('resolved promise 1')
    }
    rej('Rejected promise 1')
})
const prom2 = new Promise((res, rej)=>{
    if(a == 1){
        res('resolved promise 2')
    }
    rej('Rejected promise 2')
})
const prom3 = new Promise((res, rej)=>{
    if(a == 1){
        res('resolved promise 3')
    }
    rej('Rejected promise 3')
})
const prom4 = new Promise((res, rej)=>{
    if(a == 1){
        res('resolved promise 4')
    }
    rej('Rejected promise 4')
})
const prom5 = new Promise((res, rej)=>{
    if(a == 1){
        res('resolved promise 5')
    }
    rej('Rejected promise 5')
})
 
Promise.all([prom1,prom2,prom3,prom4,prom5]).then((res)=>{
    console.log(res);
}).catch((err)=> {
    console.log(err);
})*/

///
/*
Promise.allSettled:
const a = 1;

const prom1 = new Promise(function(resolve, reject){
    if(a === 1){
        resolve('promise 1 is resolved');
    }else{
        reject('promise 1 is not resolved');
    }
});
const prom2 = new Promise(function(resolve, reject){
    if(a === 0){
        resolve('promise 2 is resolved');
    }else{
        reject('promise 2 is not resolved');
    }
});
const prom3 = new Promise(function(resolve, reject){
    if(a === 1){
        resolve('promise 3 is resolved');
    }else{
        reject('promise 3 is not resolved');
    }
});
const prom4 = new Promise(function(resolve, reject){
    if(a === 1){
        resolve('promise 4 is resolved');
    }else{
        reject('promise 4 is not resolved');
    }
});
const prom5 = new Promise(function(resolve, reject){
    if(a === 1){
        resolve('promise 5 is resolved');
    }else{
        reject('promise 5 is not resolved');
    }
});

Promise.allSettled([prom1,prom2,prom3,prom4,prom5]).then((resolve)=>{
    console.log(resolve);
}).catch((err)=> {
    console.log(err);
})

output :
[{
  status: "fulfilled",
  value: "promise 1 is resolved"
}, {
  reason: "promise 2 is not resolved",
  status: "rejected"
}, {
  status: "fulfilled",
  value: "promise 3 is resolved"
}, {
  status: "fulfilled",
  value: "promise 4 is resolved"
}, {
  status: "fulfilled",
  value: "promise 5 is resolved"
}]

*/

// Promise.race
const a = 1;

const prom1 = new Promise(function(resolve, reject){
   setTimeout(()=>{
    if(a === 0){
        resolve('promise 1 is resolved');
    }else{
        reject('promise 1 is not resolved');
    }
   },5000)
})
const prom2 = new Promise(function(resolve, reject){
  setTimeout(()=>{
    if(a === 0){
        resolve('promise 2 is resolved');
    }else{
        reject('promise 2 is not resolved');
    }
  },3000)
});
const prom3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        if(a === 0){
            resolve('promise 3 is resolved');
        }else{
            reject('promise 3 is not resolved');
        }
      },4000)
    });
const prom4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        if(a === 1){
            resolve('promise 4 is resolved');
        }else{
            reject('promise 4 is not resolved');
        }
      },1000)
    });


Promise.race([prom1,prom2,prom3,prom4]).then((resolve)=>{
    console.log(resolve);
}).catch((err)=> {
    console.log(err);
})