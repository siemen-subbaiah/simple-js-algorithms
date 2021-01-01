//STRING REVERSAL!

const reverseString = (str) => {
  // 1.   return str.split('').reverse('').join('')
  //   ------------------------------------------------
  // 2.  let reversedStr = ''
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i]
  //   }
  //   return reversedStr
  // --------------------------------------------------
  // 3.   let reversedStr = ''
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     reversedStr = str[i] + reversedStr
  //   }
  //   return reversedStr
  // --------------------------------------------------
  // 4.   let reversedStr = ''
  //    str.split('').forEach((st) => {
  //      reversedStr = st + reversedStr
  //    })
  //    return reversedStr
};

// const output = reverseString('lisa');
// console.log(output);

//VALIDATE PALINDROME!

const validatePalindrome = (str) => {
  //1.   const str1 = str;
  //   const str2 = str.split('').reverse().join('');
  //   str1 === str2 ? console.log('palindrome!') : console.log('not a palindrome!');
  // --------------------------------------------------
  //2. let newStr = '';
  //   const str1 = str;
  //   str.split('').forEach((st) => (newStr = st + newStr));
  //   str1 === newStr
  //     ? console.log('palindrome!')
  //     : console.log('not a palindrome!');
};

// const output = validatePalindrome('mom');

//VALIDATE PALINDROME - DIGIT!

const validateDigitPalindrome = (int) => {
  //   const number1 = int;
  //   const number2 = parseInt(int.toString().split('').reverse().join(''));
  //   number1 === number2
  //     ? console.log('palindrome!')
  //     : console.log('not a palindrome!');
};

// const output = validateDigitPalindrome(222);

//CAPITALIZE THE FIRST LETTER OF A STRING!

const capitalizeStr = (str) => {
  //   return str
  //     .toLowerCase()
  //     .split(' ')
  //     .map((st) => st[0].toUpperCase() + st.substr(1))
  //     .join(' ');
};

// const output = capitalizeStr('i love js bruh!');
// console.log(output);

//FIZZBUZZ!

function fizzBuzz() {
  //   for (i = 1; i <= 100; i++) {
  //     if (i % 3 === 0 && i % 5 === 0) {
  //       console.log('FizzBuzz');
  //     } else if (i % 3 === 0) {
  //       console.log('Fizz');
  //     } else if (i % 5 === 0) {
  //       console.log('Buzz');
  //     } else {
  //       console.log(i);
  //     }
  //   }
}
// const output = fizzBuzz();
