//SUM OF NUMBERS OF A FUNCTION!-NOT AN ARRAY!

const addAll = (...rest) => {
  //   const arr = rest;
  //   let sum = 0;
  //   arr.forEach((n) => (sum += n));
  //   return sum;
};
// const output = addAll(1, 1, 1, 1);
// console.log(output);

//SUM OF ALL PRIMES!

const primeSum = (n) => {
  //   let sum = 0;
  //   const checkForPrime = (i) => {
  //     for (j = 2; j < i; j++) {
  //       if (i % j === 0) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   };
  //   for (let i = 2; i <= n; i++) {
  //     if (checkForPrime(i)) {
  //       sum += i;
  //     }
  //   }
  //   console.log(sum);
};
// const output = primeSum(10);
// console.log(output);

//SEEK AND DESTORY!
const seekAndDestory = (arr, ...rest) => {
  //DELETING FOR A SINGLE ITEM!
  // const array = arr;
  // const ans = array.filter((numb) => {
  //   return numb !== dest;
  // });
  // console.log(ans);
  //2
  // const ans = arr.filter((i) => !rest.includes(i));
  // console.log(ans);
};
// const output = seekAndDestory(['hello', 2, 3, 4, 6, 6], 'hello', 2);

//SORT BY HEIGHT!
const sortByHeight = (a) => {
  // const arr1 = [];
  // const arr2 = [];
  // a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  // const sortedArr = arr2.sort((a, b) => a - b);
  // arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));
  // return sortedArr;
};

// const a = [-1, 150, 190, 170, -1, -1, 176, 180];
// console.log(sortByHeight(a));

//SUM OF EVEN AND ODD!
const evenOddSums = (arr) => {
  // let oddSum = 0;
  // let evenSum = 0;
  // const ans = [];
  // arr.forEach((i) => (i % 2 === 0 ? (evenSum += i) : (oddSum += i)));
  // ans.push(evenSum, oddSum);
  // console.log(ans);
};
// evenOddSums([50, 60, 60, 45, 71]);

//AMSTRONG NUMBER!
const checkAmstrongNumber = (n) => {
  const number = n.toString().split('');
  let sum = 0;
  let ans;
  number.forEach((numb) => {
    const check = numb * numb * numb;
    ans = sum += check;
  });
  ans === n
    ? console.log('it is an amstrong number!')
    : console.log('it is not an amstrong number!');
};

checkAmstrongNumber(153);
