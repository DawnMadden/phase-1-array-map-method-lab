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
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map(function(element){
//In each element, capitalize the first letter of each word
const wordSeparator =  element.split(' ');
const stringSeparatingThing = wordSeparator.map(function(word){
  return word[0].toUpperCase() + word.slice(1)
  })
  return stringSeparatingThing.join(' ')
})

}

titleCased()



// function titleCased() {
//   // Access the global tutorials variable
//   let tutorials = window.tutorials;

//   // Create an empty array to store the title case tutorial names
//   let titleCasedTutorials = [];

//   // Loop through each tutorial name
//   for (let i = 0; i < tutorials.length; i++) {
//     let tutorial = tutorials[i];

//     // Convert the tutorial name to title case
//     let titleCasedTutorial = tutorial.toLowerCase().split(' ').map(function(word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//     // Push the title case tutorial name into the new array
//     titleCasedTutorials.push(titleCasedTutorial);
//   }

//   // Return the array with title case tutorial names
//   return titleCasedTutorials;
// }

// // Test the titleCased function
// console.log(titleCased());