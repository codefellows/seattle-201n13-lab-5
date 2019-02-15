'use strict';
// Write your code here
function sum(a, b,) { 
  var questionOne = a + b;
  var answer = ('The sum of ' + a + ' and ' + b + ' is ' + questionOne + '.');
  return [questionOne, answer];

  
   //eslint-disable-line

}
 testSum(4, 7);

// Write your code here
function multiply(a, b,) { 
  var questionTwo = a * b;
  var answerTwo = ('The product of ' + a + ' and ' + b + ' is ' + questionTwo + '.');
  return [questionTwo, answerTwo];

}
 testMultiply(5,9);

// Write your code here
function sumAndMultiply(a, b, c,) { 
  var one = sum(a,b,);
  var two = sum(one[0], c);
  var three = two[0];
  var mOne = multiply(a,b,);
  var mTwo =  multiply(mOne[0], c);
  var mThree = mTwo[0];
  var questionThreeA = (a + ' and ' + b + ' and ' + c + ' sum to ' + three + '.');
  var questionThreeB = ('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + mThree + '.');
  return [three, mThree, questionThreeA, questionThreeB];
}
 testSumAndMultiply(4,7,5);

// Write your code here
var testArray = [2, 3, 4]; 

function sumArray(sumArr) { 
  var one = sum(testArray[0], testArray[1]);
  var two = sum(one[0], testArray[2]);
  var three = two[0];
  var crazyLong = (testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + three + ' is their sum.');
  return [three, crazyLong]; 
}
 testSumArray(testArray);

// Write your code here
/*var multArr = [2, 3, 4];

function multiplyArray(multArr) { 
  var one = multiply(multArr[0], multArr[1]);
  var two = multiply(one[0], multArr[2]);
  var three = two[0]; 
  var youThoughtYouTrickedMe = ('The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + three + '.');
  return [three, youThoughtYouTrickedMe]; 
}
 testMultiplyArray(testArray);

// Write your code here
var testDynamicArray = [1,2,3,4,5]; 

function multiplyAnyArray(testDynamicArray) { 
  var one = multiply(testDynamicArray[0], testDynamicArray[1]);
  var two = multiply(one[0], testDynamicArray[2]);
  var three = multiply(two[0], testDynamicArray[3]);
  var four = multiply(three[0], testDynamicArray[4]);
  var five = four[0];
  var finallyDone = ('The numbers ' + testDynamicArray[0] + ',' + testDynamicArray[1] + ',' + testDynamicArray[2] + ',' + testDynamicArray[3] + ',' + testDynamicArray[4] + ' have a product of ' + five + '.');
  return [five, finallyDone];

}
 testMultiplyAnyArray(testDynamicArray);*/

