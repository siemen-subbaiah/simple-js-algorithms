// Capitalize First letter of each word (different solution)!

const capitalizeFirstLetter = (str) => {
  return str
    .split(' ')
    .map((st) => (st = st[0].toUpperCase() + st.slice(1)))
    .join(' ');
};
console.log(capitalizeFirstLetter('javascript is the best!'));

// Anagram Check:
// Check if two different words are made using same letters. eg. str1 = 'below', str2 = 'elbow'
// (My Solution!)

const anagramCheck = (str1, str2) => {
  let st1 = [];
  let st2 = [];
  for (let i = 0; i < str1.length; i++) {
    st1.push(str1.toUpperCase().charCodeAt(i));
  }
  for (let i = 0; i < str2.length; i++) {
    st2.push(str2.toUpperCase().charCodeAt(i));
  }
  const ans1 = st1.sort((a, b) => a - b);
  const ans2 = st2.sort((a, b) => a - b);
  if (JSON.stringify(ans1) === JSON.stringify(ans2)) {
    console.log('it is an anagram!');
  } else {
    console.log('it is not an anagram!');
  }
};
anagramCheck('mant', 'tman');

//Most common SOLUTION (TWO LINER😢)

const anagramCheck2 = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};
console.log(anagramCheck2('Agentleman', 'Elegantman'));

//TO FIND THE SECOND LARGEST NUMBER IN THE ARRAY!

const getSecondLargest = (nums) => {
  const arr = nums.sort((a, b) => b - a);
  const setArr = new Set(arr);
  const newArr = [...setArr];
  return newArr[1];
};
console.log(getSecondLargest([100, 21, 233, 56, 239, 21]));

// ALTERNATIVE SOLUTION!
const getSecondLargest2 = (nums) => {
  return [...new Set(nums)].sort((a, b) => b - a)[1];
};
console.log(getSecondLargest2([100, 21, 233, 56, 239, 21]));

//VOWELS AND CONSONANTS!

const vowelsAndConsonants = (s) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  s.split('').forEach((a) => {
    if (vowels.includes(a)) {
      console.log(a);
    }
  });
  s.split('').forEach((i) => {
    if (!vowels.includes(i)) {
      console.log(i);
    }
  });
};
vowelsAndConsonants('javascriptloops');

//LONGEST WORD IN AN ARRAY!
const longestWord = (arr) => {
  let word = '';
  arr.forEach((a) => {
    if (word.length < a.length) {
      word = a;
    }
  });
  console.log(word.length);
};
longestWord(['javascript', 'react', 'css']);
