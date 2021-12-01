"use strict";

/**
 * The document object allows you to select and
 * modify elements from the html files on the browser
 * The document object is a tree based object containing
 * the html webpage.
 * Using methods we can access certain properties of the
 * document and manipulate them.
 * Here we make use of the querySelector() which alllows
 * us to retrieve a tag based on some identifier like
 * className, id, name, etc
 * The textContent property gives us only the text content
 * which is present in between the tags we selected
 */
// console.log(document.querySelector('.message').textContent);

/**
 * We access the DOM through the 'document' object in JS
 * DOM object and methods are not a part of JS,
 * They are APIs exposed by the browsers which JS uses
 * to interact with the HTML pages.
 */

/**
 * The text content can be changed by assigning a new value
 * to it
 */
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

/**
 * For input fields (tags) we can manipulate the number/data
 * being entered by using the 'value' property of the querySelector
 * method
 * We can set the value which will enter a value into the
 * input field
 * We can fetch and perform operations based on the value
 * using the 'value' property
 *
 */
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

/**
 * Handling Click Events
 * ---------------------
 * For this we need to make use of an EventListener which is
 * used to check for any events such as mouse click, mouse scroll
 * key strokes etc.
 * We can then wait for a certain event to occur and perform
 * actions after the event occurs
 * - We select an element using the 'querySelector()' method
 * - We then add an event listener using the
 *  'addEventListener()' method to check for any event on the
 *  element
 *      The 'eventListener()' method takes as arguments
 *      1. The selector
 *      2. A function which performs the actions we require if the
 *          event occurs. This is a function expresssion. It
 *          is called only when the event occurs.
 * - From the input fields, we get string values
 *
 * Manipulating CSS styles
 * ------------------------
 *
 * - We use the querySelector() method to target the
 *  element
 * - We then use the 'style' property to change the
 *  CSS style properties
 * - the properties of a CSS style in javascript are
 *  represented through camel cases and are not
 *  hyphen seperated like in the CSS file.
 *  for eg:- background-color property is selected as
 *          .backgroundColor
 * - When we manipulate a style property, it is always
 *  assigned a STRING
 * - To select an entire tag (body,p,div etc)  we just
 *  have to specify the name of the tag without
 *  any specifiers
 *
 * Code Refactoring
 * -------------------
 *
 * - Means to restructure the coed without changing the functionality
 * - First step is to identify duplicate or almost same pieces of code
 * -
 */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// // Function to display message
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// // Function to set the score
// const setScore = function (score) {
//   document.querySelector('.score').textContent = score;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // when there is no input
//   if (!guess) {
//     displayMessage('No Numbers!');
//   } else if (guess === secretNumber) {
//     // When player wins
//     displayMessage('Correct Number!');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;
//     console.log(score);
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }

//   // When guess is wrong
//   else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
//       score--;
//       setScore(score);
//     } else {
//       setScore(0);
//       displayMessage('You lost the game!');
//     }
//   }
// });

// // Event listener for game reset button
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   setScore(score);
//   displayMessage('Start guessing...');
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
// });

let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6],
  m = 3,
  n = 3;

const mergeArray = function (nums1, m, nums2, n) {
  nums1 = [].concat(nums1.splice(0, m));
  console.log(nums1);
  let i = 0,
    j = 0,
    temp = [];
  if (m === 0 && n === 0) {
    nums1 = [];
  } else if (m === 0) {
    nums1 = nums2;
  } else if (n === 0) {
    nums1 = nums1.splice(0, m);
  } else if (m !== 0 && n !== 0) {
    while (i !== m || j !== n) {
      if (i === m) {
        temp.push(nums2[j]);
        j++;
      } else if (j === n) {
        temp.push(nums1[i]);
        i++;
      } else {
        if (nums1[i] < nums2[j]) {
          temp.push(nums1[i]);
          i++;
        } else if (nums1[i] > nums2[j]) {
          temp.push(nums2[j]);
          j++;
        } else if (nums1[i] === nums2[j]) {
          temp.push(nums1[i]);
          i++;
          temp.push(nums2[j]);
          j++;
        }
      }
    }
    nums1 = temp;
    console.log(nums1);
  }
  console.log(nums1);
};

mergeArray(nums1, m, nums2, n);
