   // Task 1. With Promise____________________________________________________________

   function speedNum(num) {
      return new Promise((resolve) => {
          let randomTime = Math.floor(Math.random() * 5000) + 1000; 
          setTimeout(() => resolve(num), randomTime);
      });
  }
  
  let getNum1 = speedNum(1);
  let getNum2 = speedNum(2);
  let getNum3 = speedNum(3);
  
  Promise.race([getNum1, getNum2, getNum3])
      .then(speed => console.log("The fastest num", speed))

// Task 1. With async/await______________________________________________________________

function speedNum(num) {
   return new Promise((resolve) => {
       let randomTime = Math.floor(Math.random() * 5000) + 1000; 
       setTimeout(() => resolve(num), randomTime);
   });
}

async function getFastNum() {
   let fastNum = await Promise.race([speedNum(1), speedNum(2), speedNum(3)]);
   console.log("The fastest num", fastNum);
}
getFastNum();

// function getNum _______________________________________________________
function getNum(num) {
   return new Promise((resolve) => {
      setTimeout(() => {
         let randomNum = Math.floor(Math.random() * 5) + 1;
         resolve(randomNum);
      }, 3000);
   })
}

async function degreeNum(num) {
   let num1 = await getNum();
   let degreeGottenNUm = num1 ** 2;
   console.log(degreeGottenNUm);
}
degreeNum();

// function getNum 
// function getNum() {
//     return new Promise((resolve) => {
//        setTimeout(() => {
//           let randomNum = Math.floor(Math.random() * 5) + 1;
//           setTimeout(() => {
//              let randomNum1 = Math.floor(Math.random() * 5) + 6;
//              resolve([randomNum, randomNum1]);
//           }, 5000);
//        }, 3000);
//     })
//  }
 
 
//  async function sumRandNums() {
//     let [randomNum, randomNum1] = await getNum();
//     let sumRandNums = randomNum + randomNum1;
//     console.log(sumRandNums);
//  }
//  sumRandNums();