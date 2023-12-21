// ====== Exercices 


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
//     const space = ' ';
//     const star = '*';
//     const arrStars = [];
//     const arrSpace = [];
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
// create(21);


    // exercice 10

    // function create(numberOfLine=5){
    //     let value = '';
    //     for(let i = 0;i<numberOfLine;i++){
    //         for(let j = 0;j<numberOfLine;j++){
    //             value+='*';
    //         }
    //         console.log(value);
    //         console.log();
    //         value='';
    //     }
    // }
    // create();


    // exercice 11

    // function create(numberOfLine=5){
    //     let value = '';
    //     for(let i = 1;i<=numberOfLine;i++){
    //         for(let j = 0;j<i;j++){
    //             value+='* ';
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create();


    // exercice 12

    // function create(numberOfLine=5){
    //     let value = '';
    //     let counter = numberOfLine;
    //     for(let i = 1;i<=numberOfLine;i++){
    //         for(let j = counter;j>0;j--){
    //             value+='* ';
    //         }
    //         counter--;
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create();


    // exercice 13

    // function create(numberOfLine=5){
    //     let value = '';
    //     let counter = 1;
    //     for(let i = 1;i<=numberOfLine;i++){
    //         for(let s = numberOfLine-counter;s>0;s--){
    //             value+=' ';
    //         }
    //         counter++;
    //         for(let j = 0;j<i;j++){
    //             value+=`*`;
    //         }
    //         console.log(value);
    //         value = '';
    //     }
    // }
    // create();


    // exercice 14

    // function create(numberOfLine=5){
    //     let value = '';
    //     let counter = numberOfLine;
    //     for(let i = 0;i<numberOfLine;i++){
    //         for(let s = 0;s<i;s++){
    //             value+=' ';
    //         }
    //         for(let j = counter;j>0;j--){
    //             value+='*';
    //         }
    //         counter--;
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(10);


    // exercice 15

    // function create(numberOfLine=4){
    //     let value = '';
    //     const star = '*';
    //     counter = 2;
    //     for(let i =0;i<(numberOfLine*2)-1;i++){
    //         if(i < (numberOfLine)){
    //             for(let j = 0;j<numberOfLine-i;j++){
    //                 value+=star;
    //             }
    //         }
    //         else if(i >= (numberOfLine)){
    //             for(let j = 0;j<counter;j++){
    //                 value+=star;
    //             }
    //             counter++;
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create();


    // exercice 16

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counter = 1;
    //     for(let i = 0;i<numberOfLine;i++){
    //         for(let s = 0;s<numberOfLine-counter;s++){
    //             value+=' ';
    //         }
    //         counter++;
    //         for(let j = -1;j<i;j++){
    //             if(j === (i-1)){
    //                 value+='*';
    //             }else if(j!==i-1){
    //                 value+='* ';
    //             }
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(9);


    // exercice 17

    // function create(numberOfLine=4){
    //     let value = '';
    //     for(let i =0;i<numberOfLine;i++){
    //         for(let s = 0;s<i;s++){
    //             value+=' ';
    //         }
    //         for(let j = (i+1);j<=numberOfLine;j++){
    //             if(j===numberOfLine){
    //                 value+=j;
    //             }else if(j!==numberOfLine){
    //                 value+=`${j} `;
    //             }
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(9);


    // exercice 18

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counterSpace = 2;
    //     let counterNumber = 1;
    //     for(let i =0;i<(numberOfLine*2)-1;i++){
    //         if(i<numberOfLine){
    //             for(let s = 0;s<i;s++){
    //                 value+=' ';
    //             }
    //             for(let j = (i+1);j<=numberOfLine;j++){
    //                 if(j===numberOfLine){
    //                     value+=j;
    //                 }else if(j!==numberOfLine){
    //                     value+=`${j} `;
    //                 }
    //             }
    //         }else if(i>=numberOfLine){
    //             for(let s = 0;s<numberOfLine-counterSpace;s++){
    //                 value+=' ';
    //             }
    //             counterSpace++;
    //             for(let s = numberOfLine-counterNumber;s<=numberOfLine;s++){
    //                 if(s===numberOfLine){
    //                     value+=`${s}`;
    //                 }else if(s!==numberOfLine){
    //                     value+=`${s} `;
    //                 }
    //             }
    //             counterNumber++;
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(9);


    // exercice 19

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counterSpace = 1;
    //     for(let i = 0;i<numberOfLine;i++){
    //         for(let s = 0;s<numberOfLine-counterSpace;s++){
    //             value+=' ';
    //         }   
    //         counterSpace++;
    //         for(let j = -1;j<i;j++){
    //             if(i===0||i===numberOfLine-1){
    //                 if(j===-1 && j==i-1){
    //                     value+='*';
    //                 }
    //                 else if(j===-1){
    //                     value+='* ';
    //                 }
    //                 else if(j!==-1 && j!==i-1){
    //                     value+='* ';
    //                 }
    //                 else if(j===i-1){
    //                     value+='*';
    //                 }
    //             }else if(i!==0 && i!==numberOfLine-1){
    //                 if(j===-1){value+='*';}
    //                 else if(j!=-1&&j!=i-1){value+='  ';}
    //                 else if(j===i-1){value+=' *';}
    //             }
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(9);


    // exercice 20

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counter = numberOfLine;

    //     for(let i = 0;i<numberOfLine;i++){
    //         for(let s = 0;s<numberOfLine-counter;s++){
    //             value+=' ';
    //         }
    //         counter--;
    //         for(let j = 1;j<=numberOfLine-i;j++){
    //             if(i===0){
    //                 if(j===1){value+='*';continue;}
    //                 value+=' *';
    //             }
    //             else if(j===1){
    //                 value+='*';
    //             }
    //             else if(j != numberOfLine-i){
    //                 value+='  ';
    //             }
    //             else if(j == numberOfLine-i){
    //                 value+=' *';
    //             }
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(5);


    // exercice 21

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counterSpace = 1;
    //     let counterStar = 0;

    //     for(let i =1;i<=((numberOfLine*2)-1);i++){
    //         if(i<=numberOfLine){
    //             for(let s = numberOfLine-i;s>0;s--){
    //                 value+=' ';
    //             }
    //             for(let j = 0;j<i;j++){
    //                 if(j===i-1){
    //                     value+='*';
    //                     continue;
    //                 }
    //                 else if(j!=0){
    //                     value+='  ';continue;
    //                 }
    //                 value+='* ';
    //             }
    //         }else if(i>numberOfLine){
    //             for(let s = 0;s<counterSpace;s++){
    //                 value+=' ';
    //             }
    //             counterSpace++;
    //             for(let j = numberOfLine-counterStar-1;j>0;j--){
    //                 if(j===numberOfLine-counterStar-1){value+='*';continue;}
    //                 else if(j===1){value+=' *';}
    //                 else if(j!=numberOfLine-counterStar-1){value+='  ';continue;}
    //             }
    //             counterStar++;
    //         }
    //         console.log(value);
    //         value='';
    //     }
    // }
    // create(5);


    // exercice 22

    // function create(numberOfLine=4){
    //     let value = '';
    //     let counterSpace = 1;
    //     let counterStar = 2;

    //     for(let i =0;i<((numberOfLine*2)-1);i++){
    //         if(i<numberOfLine){
    //             for(let s = 0;s<i;s++){
    //                 value+=' ';
    //             }
    //             for(let j = numberOfLine-i;j>0;j--){
    //                 if(i==0){if(j===numberOfLine-i){value+='*';continue}value+=' *';}
    //                 else if(j===numberOfLine-i){value+='*';}
    //                 else if(j===1){value+=' *'}
    //                 else if(j!==numberOfLine-i && j!=1){value+='  ';}
    //             }
    //             console.log(value);
    //             value='';
    //         }else if(i>=numberOfLine){
    //             for(let s = numberOfLine-counterSpace-1;s>0;s--){
    //                 value+=' ';
    //             }
    //             counterSpace++;
    //             for(let j =0;j<counterStar;j++){
    //                 if(i===(numberOfLine*2)-2){if(j===0){value+='*';continue;}value+=' *';}
    //                 else if(j===0){value+='*';}
    //                 else if(j!==counterSpace-1 && j!==0){value+='  ';}
    //                 else if(j===counterSpace-1){value+=' *';}
    //             }
    //             counterStar++;
    //             console.log(value);
    //             value='';
    //         }
    //     }
    // }
    // create(9);


    // exercice 23
        // Pascal's triangle
    // exercice 23
        // Pascal's triangle
    function create(numberOfLine){
        let value = 0;
        let valuespace = '';
        let counterSpace = 1;
        let arrStock = [];
        const arrResult = [];
        for(let i = 1;i<=numberOfLine;i++){
            for(let j=1;j<=i;j++){
                if(j===1 || j===i){
                    arrResult.push(1);
                    continue;
                }
                value = arrStock[j-2]+arrStock[j-1];
                arrResult.push(value);
            }
            // add espace
            for(let s = numberOfLine-counterSpace;s>0;s--){
                valuespace+=' ';
            }
            console.log(`${valuespace}${arrResult.join(' ')}`);
            valuespace='';
            counterSpace++;
            arrStock = [...arrResult];
            arrResult.length = 0;
        }
    }
    create(4);


    // exercice 24
        
    // function create(numberOfLine=4){
    //     let value = '';
    //     let counterStar = 1;
    //     for(let i =0;i<numberOfLine*2-1;i++){
    //         if(i<numberOfLine){
    //             for(let j = -1;j<i;j++){
    //                 if(j!==i-1){
    //                     value+='* ';
    //                 }
    //                 else if(j===i-1){
    //                     value+='*';
    //                 }
    //             }
    //             console.log(value);
    //             value = '';
    //         }else if(i>=numberOfLine){
    //             for(let j = numberOfLine-counterStar;j>0;j--){
    //                 if(j!==1){
    //                     value+='* ';
    //                 }
    //                 else if(j===1){
    //                     value+='*';
    //                 }
    //             }
    //             counterStar++;
    //             console.log(value);
    //             value = '';
    //         }
    //     }
    // }
    // create(9);
