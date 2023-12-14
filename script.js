

// const myPromise = new Promise(function(resolve,reject){
//     const x = false;
//     if(x){
//         resolve('I LOVE YOU');
//     }
//     else if(x === false){
//         reject('I HATE YOU');
//     }
// });
// myPromise.then(function(val){
//     setTimeout(function(){console.log(val,0);},1500);
// },function(error){
//     setTimeout(function(){console.log(error,1);},1500);
// });

// const myPromise = new Promise(function(resolve,reject){
//     const bool = false;
//     if(bool){
//         resolve(`I Love You !`);
//     }
//     else if(bool === false){
//         reject(`I Hate You !`);
//     };
// });
// myPromise.then(function(val){
//     console.log(val);
// },function(val){
//     console.log(val);
// });

// const str = 'mohamed Guenfoudi.';
// function run(stn=''){
//     let sentence = stn.toLowerCase().trim();
//     if(sentence.length >= 1){
//         let counterLetters = 0;
//         let counterVowels = 0;
//         let counterWords = 1;
//         for(let i = 0;i<sentence.length;i++){
//             if(sentence[i] !== ' '){
//                 counterLetters++;
//             }
//             switch(sentence[i]){
//                 case 'a':
//                 case 'e':
//                 case 'i':
//                 case 'u':
//                 case 'o':
//                 case 'y':
//                     counterVowels++;
//             }
//         }
//         console.log('number of Letters is : ',counterLetters);
//         console.log('number of Vowels is : ',counterVowels);
//         for(let i = 0;i<sentence.length;i++){
//             if(sentence[i] === ' '){
//                 counterWords++;
//             }
//         }
//         console.log('number of words is : ',counterWords);
//     }
// }
// run(str);


// function run(){
//     return new Promise(function(resolve,reject){

//         const val = 1;
//         if(val === 3){
//             reject({
//                 name:'med',
//                 val: 'Error 404'
//             });
//         }
//         if(val === 4){
//             reject({
//                 name:'adnane',
//                 val: 'Error 405'
//             });
//         }
//         if(val < 3){
//             resolve('success');
//         }
//     });
// };
// run().then(function(msg){
//     console.log(msg);
// }).catch((error) => {
//     console.log(error.name,` : `,error.val);
// });
// function run(){
//     return new Promise(function(resolve,reject){
//         const value = 'false';
//         if(value === true){
//             resolve({name:'adnane',age:13});
//         }
//         else if(value === false){
//             resolve({name:'mohamed',age:26});
//         }
//         else{
//             reject({name:'Hubal',age:10});
//         }
//     });
// };
// run().then(function(obj){
//     console.log(`this guy ${obj.name} is legend, he have ${obj.age} years old`);
// }).catch(function(obj){
//     console.log(`this guy ${obj.name} is crazy, he have ${obj.age} years old`);
// });

// function SERVER(request){
//     return new Promise(function(resolve,reject){
//         if(request === 'telegram'){
//             console.log(`hello ${request}!`);
//             resolve(request);
//         }else{    
//             reject('only we can talking with TELEGRAM !');
//         }
//     });
// }
// function processRequest(request){
//     return new Promise(function(resolve,reject){
//         // console.log('Processing Response');
//         resolve(`extra information + ${request}`)
//     });
// }

// SERVER('telegram').then(function(val){
//     console.log('run !');
//     return processRequest(val);
// }).then(function(val){
//     console.log(val);
// }).catch(erorr => {
//     console.log(erorr);
// });



// function Server(objUser){
//     return new Promise(function(resolve,reject){
//         if(objUser.primaryKey === '0641577616' && objUser.password === 'moh2009*'){
//             objUser.color = 'red';
//             objUser.favoriteSport = 'footBall';
//             objUser.favoriteLanguage = 'JavaScript';
//             setTimeout(function(){resolve(objUser);},3000);
//         }else{
//             setTimeout(function(){reject();},3000);
//         }
//         return 'true';
//     });
// }
// function accessAccount(primaryKey,password){
//     return new Promise(async function(resolve,reject){
//         console.log(10)
//         await Server({primaryKey:primaryKey,password:password}).then(function(user){
//             resolve(user);
//         }).catch(function(){
//             // reject(`primaryKey or Password not incorrect !`);
//             console.log(`primaryKey or Password not incorrect !`);
//         });
//         console.log(12)
//     });
// }
// function Color(user){
//     return new Promise(function(resolve,reject){
//         if(user.color === `blue`){
//             resolve(`Same color`);
//         }else{
//             reject(`not Same Color !`);
//         }
//     });
// }
// accessAccount('0641577616','moh2 009*').then(function(user){
//     console.log(user);
//     return Color(user);
// }).then(function(bool){
//     console.log(bool);
// })
// .catch(function(msg){
//     console.log(msg);
// });


// console.log(`before`);
// getUser(10,'Mohamed Guenfoudi',function(userObj){
//     let user = userObj;
//     console.log(user);
//     getProducts(function(products){
//         user.products = products;
//         console.log(user);
//     });
// });
// // console.log(user);
// console.log(`between`);
// console.log(`after`);
// function getUser(id,userName,callBack){
//     setTimeout(function(){
//         return callBack({id: id,userName: userName});
//     },2000);
// }
// function getProducts(callBack){
//     setTimeout(function(){
//         const products = [`products0`,`products1`,`products2`];
//         return callBack(products);
//     },2000);
// }






// function getUser(id,userName){
//     return new Promise( function(resolve,reject){
//         const bool = true;
//         setTimeout(() => {
//             if(bool){
//                     resolve({id:id,userName:userName});
//                 }else{
//                     reject('user not found !')
//                 }
//         }, 2000);
//     });
// };

// function getProducts(user){
//     const bool = true;
//     return new Promise( function(resolve,reject){
//         setTimeout(() => {
//             if(bool){
//                 const products = [`product0`,`product1`,`product2`];
//                 user.products = products;
//                 return resolve(`products : ${user.products}`);
//             }else{
//                 return reject(`products not found !!`)
//             }
//         },3000);
//     });
// }

// async function run(){
//     console.log(`before`);
//     const t1 = await getUser(10,'Mohamed Guenfoudi').then(async function(user){
//         console.log(user);
//         await getProducts(user).then(function(product){console.log(product);}).catch(function(error){console.log(`erorr : `, error);});
//     }).catch(function(error){
//         console.log(error);
//     });
//     console.log(`between`);
//     console.log(`after`);
// }
// run();


// function run(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(function(){
//             if(id === 10){
//                 resolve({id:id,name:'mohamed guenfoudi',age:26});
//             }
//             else{
//                 reject('user not found');
//             }
//         },2000);
//     });
// };

// function calc(res){
//     return new Promise(function(resolve,reject){
//         const bool = false;
//         setTimeout(() => {
//             if(bool){
//                 resolve(`yearBirth : ${2023-res.age}`);
//             }else{
//                 reject('age !!')
//             }
//         }, 2000);
//     }); 
// }

// (async function(){
//     console.log(9);
//     try{
//         await run(10).then(async function(result){
//             console.log(result);
//             return await calc(result);
//         }).then(function(birthDay){
//             console.log(birthDay);
//         });
//     }catch(error){
//         console.log(error);
//     }
//     console.log(11);
//     console.log(12);
// }())



// function server(value){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(value === true){
//                 resolve();
//             }else if(value == false){
//                 reject();
//             }
//         },5000);
//     });
// }

// function sendRquest(value){
//     return new Promise( function(resolve,reject){
//         setTimeout(async function(){
//             console.log(`the operation it's progress !!! wait`);
//             if(value === value){
//                 await server(value).then(() => {
//                     console.log(`the operation it's susses`);
//                     resolve(11);
//                 }).catch(() => {
//                     console.log(`the operation it's field`);
//                     reject(0);
//                 });
//             }
//         },3000);
//     });
// }
// (async function(){
//     console.log(10);
//     await sendRquest(true).then((num) => {console.log(num);}).catch((num) => {console.log(num);});
//     console.log(12);
//     console.log(13);
// }());


// ====== Exercices Stars


    // exercice 0

// function create(numStar){
//     let star = '';
//     for(let i = 0;i<numStar;i++){
//         for(let x = 0;x<numStar;x++){
//             if(i== 0 || i == numStar-1){
//                 star+='*';
//             }else{
//                 if(x == 0 || x == numStar-1){
//                     star+='*';
//                 }else{
//                     star+='&nbsp;&nbsp;';
//                 }
//             }
//         }
//         const li = document.createElement('li');
//         li.innerHTML = `<li>${star}</li>`;
//         document.body.querySelector('#container').appendChild(li);
//         star = '';
//     }
// }
// create(9);


    // exercice 1

// function create(numLine){
//     let value = '';
//     let numSpace = numLine-1;

//     for(let i = 1;i<=numLine;i++){
        
//         for(let y = numSpace;y>0;y--){
//             value+=' ';
//         }
//         numSpace--;
//         for(let x = 0;x<i;x++){
//             if(x === (i-1)){
//                 value+=`${i}`;
//             }else{
//                 value+=`${i} `;
//             }
//         }
//         console.log(value);
//         value = '';
//     }
// }
// create(9);


    // exercice 2

// function create(numberLine=4){
//     let value = '';
//     for(let i = 1;i<=numberLine;i++){
//         for(let x = 0;x<i;x++){
//             value+=`${x+1}`;
//         }
//         console.log(value);
//         value='';
//     }
// }
// create(10);


    // exercice 3

// function create(numberLine=4){
//     let value = '';
//     for(let i = numberLine;i>0;i--){
//         for(let x = 0;x<i;x++){
//             value += `${x+1} `; 
//         }    
//         console.log(value);
//         value='';
//     }
// }
// create(5);

    
    // exercice 4

// function create(numberLine=4){
//     let counter = 1;
//     let value = '';
//     for(let i = 1;i<=numberLine;i++){
//         for(let x = 0;x<i;x++){
//             value += `${counter} `;
//             counter++;
//         }
//         console.log(value);
//         value = '';
//     }
// }
// create(4);


    // exercice 5

// function create(numberLine=4){
//     let ziroOne = 1;
//     let firstLetter = 0;
//     let value = '';
//     for(let i = 1;i <= numberLine;i++){
//         firstLetter = firstLetter == 1 ? firstLetter = 0: firstLetter = 1;
//         ziroOne = firstLetter;
//         for(let j = 0;j<i;j++){
//             value+=`${ziroOne}`;
//             ziroOne = ziroOne == 1 ? ziroOne = 0: ziroOne = 1;
//         }
//         console.log(value);
//         value = '';
//     }
// }
// create(6);


    // exercice 6

// function create(numberLine=4){
//     let space = '';
//     let value = '';
//     let counterLoop = 0;
//     for(let i = 1;i<=numberLine;i++){
//         let val = i;
//         for(let y = numberLine-i;y>0;y--){
//             space+=' ';
//         }
//         value=space;
//         for(let j = i+counterLoop;j>0;j--){
//             if(val>=1){
//                 value+=val--;
//             }else if(val<1){
//                 value+=`${((val*(-1)) + 2)}`;
//                 val--;
//             }
//         }
//         counterLoop++;
//         console.log(value);
//         value = '';
//         space = '';
//     }
// }
// create(5);


    // exercice 7

// function create(numberLine=4,numberOfStars=4){
//     let space = '';
//     let value = '';
//     let j = 0;
//     for(let i = 0;i<numberLine;i++){
//         for(let s = 0;s<i;s++){
//             if(i != 0 && j == 0){
//                 continue;
//             }else if(i!=0){
//                 space+=' ';  
//             }
//         }
//         value+=space;
//         for(j = 0;j<numberOfStars;j++){
//             value+='* ';
//         }
//         console.log(value);
//         space = '';
//         value = '';
//     }
// }
// create(9);


    // exercice 8

// function create(numberLine=4){
//     let space = '';
//     let value = '';
//     let counter = 1;
//     let counterSpace = 1;
//     let count = 0;

//     for(let i = 1;i<=(numberLine*2-1);i++){
//         if(i <= numberLine){
//             for(let s = numberLine-i;s>0;s--){
//                 space+=' ';
//             }
//             value=space;
//             for(let j = 0;j<i+counter-1;j++){
//                 value+='*';
//             }
//             counter++;
//             count = i+counter-2;
//         }
//         else if(i>numberLine){
//             count = count-2;
//             for(let s = 0;s<counterSpace;s++){
//                 space+=' ';
//             }
//             counterSpace++;
//             value=space;
//             for(let j = count;j>0;j--){
//                 value+='*';
//             }
//         }
//         console.log(value);
//         space='';
//         value='';
//     }
// }
// create(10);


    // exercice 9

// function create(numberLine=4){
//     numberLine = numberLine % 2 == 0? ++numberLine : numberLine; 
//     let counter = 2;
//     let counterSpace = numberLine-2;
//     let space = ' ';
//     let star = '*';
//     let arrStars = [];
//     let arrSpace = [];
//     let arrResult = [];
//     let arrStock = [];
//     for(let i = 0;i<numberLine;i++){
//         // fill space 
//         for(let s = 0;s<counterSpace;s+=1){
//             arrSpace.push(space);
//         }
//         counterSpace-=2;
//         // fill star
//         counter = counter===numberLine+1? numberLine  :counter; 
//         for(let x = 0;x<counter;x++){
//             arrStars.push(star)
//         }
//         // sort element in array
//         if(arrStars.length % 2 === 0){
//             arrStock = arrStars.slice(0,(arrStars.length/2));
//             arrResult = [...arrStock];
//             arrStock = arrSpace.slice(0,arrSpace.length);
//             arrResult = arrResult.concat(arrStock);
//             arrStock = arrStars.slice(arrStars.length/2,arrStars.length);
//             arrResult = arrResult.concat(arrStock);
//         }else if(arrStars.length % 2 === 1){
//             arrResult = [...arrStars];
//         }
//         console.log(arrResult.join(''));
//         arrSpace.length = 0;
//         arrStars.length = 0;
//         if(counter===numberLine){counter=2;break;}
//         counter+=2;
//     }
//     counter = numberLine-1;
//     counterSpace = 1;
//     for(let i = 0;i<Math.floor(numberLine/2);i++){
//         // fill star
//         for(let x = 0;x<counter;x++){
//             arrStars.push(star);
//         }
//         counter-=2;
//         // fill space
//         for(let s = 0;s<counterSpace;s++){
//             arrSpace.push(space);
//         }
//         counterSpace+=2;
//         // displayResult
//         arrStock = arrStars.slice(0,(arrStars.length/2));
//         arrResult = [...arrStock];
//         arrStock = arrSpace.slice(0,arrSpace.length);
//         arrResult = arrResult.concat(arrStock);
//         arrStock = arrStars.slice(arrStars.length/2,arrStars.length);
//         arrResult = arrResult.concat(arrStock);
//         console.log(arrResult.join(''));
//         arrStars.length = 0;
//         arrSpace.length = 0;
//     }
// }
// create(10);