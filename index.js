const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = () => {
//   let splitWords = tutorials.map(function(sentence) {
//     let sentenceSplit = sentence.split(' ');
//     // console.log(sentenceSplit);
//     let capSentence = [];
//     for (let i = 0; i < sentenceSplit.length; i++) {
//       capSentence.push(sentenceSplit[i][0].toUpperCase() + sentenceSplit[i].slice(1));
//    }
//     return capSentence.join(' ');
//   })
//     return splitWords;


//   }

const titleCased = () => {
  let splitWords = tutorials.map(function(sentence) {
    let sentenceSplit = sentence.split(' ');
    // console.log(sentenceSplit);
    let capSentence = sentenceSplit.map(function(word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    return capSentence.join(' ');
   })


    return splitWords;

  }







// itereate through array
    // mapping a split string on each element (each word will equal element)
        // map each element so that each element of that is isolated
            // first element