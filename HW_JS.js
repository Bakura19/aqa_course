// 1. Дана строка из четного количества цифр. Проверьте, что сумма первой половины цифр равняется сумме второй половине цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

let testNum = 38046855;
let testStr = testNum.toString(); 

let firstHalf = testStr.slice(0, 4); 
let secondHalf = testStr.slice(4);   

function sumNumbers(str) {
    return str
        .split('')           
        .reduce((sum, numbers) => sum + Number(numbers), 0); 
}

let sumFirstHalf = sumNumbers(firstHalf);
let sumSecondHalf = sumNumbers(secondHalf);

if (sumFirstHalf === sumSecondHalf) {
    console.log('Да')
} else {
    console.log('Нет')
}


// 2. Дано число n=1000 (может быть заданное любое число). Делите его на 2 столько раз, пока результат деления не станет меньше 50 (может быть любое заданное число). 
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

const testNum1 = 50;
let iteration = 1;

for (let n = 1000; n >= testNum1; n /= 2) {
  console.log(`Итерация номер - ${iteration}`);
  iteration++;
};

// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];
let arrLength = arr.length;
let arrSum = arr.reduce(function(a, b) {
    return a + b
})

arrAvg = arrSum / arrLength;
console.log(arrAvg);


// 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr1 = [1, 2, 3, 4, 5];

function addItemsToArr(arr1, ind, ...items) {
    arr1.splice(ind, 0, ...items);
    return arr1;
}

let finalArr = console.log(addItemsToArr(arr1, 3, 'a', 'b', 'c')); 

// 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. Дан массив [1, 2, 3, 4, 5]. 
// Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// Option 1

let arr2 = [1, 2, 3, 4, 5];

function addItemsToArr(arr2, ind, ...items) {
    arr2.splice(1, 0, 'a', 'b'); 
    arr2.splice(6, 0, 'c');      
    arr2.splice(8, 0, 'e'); 
    return arr2;
}

console.log(addItemsToArr(arr2));

// Option 2

let arr3 = [1, 2, 3, 4, 5];

function addItemsToArr(arr3, ind, ...items) {
    arr3.splice(ind, 0, ...items); 
    return arr3;
}

let firstAdd = addItemsToArr(arr3, 1, 'a', 'b');  
let secondAdd = addItemsToArr(arr3, 6, 'c');        
let finalAdd = addItemsToArr(arr3, 8, 'e');

console.log(finalAdd);

// 6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его

let arr4 = [3, 4, 1, 2, 7, 30, 50];
arr4.sort((a, b) => a - b);
console.log(arr4); 
arr4.sort((a, b) => b - a);
console.log(arr4);