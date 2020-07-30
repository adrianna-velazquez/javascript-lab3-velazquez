"use strict";

// 1. 
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];


// 2.
const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
    };
    array.push(newSubmission);
};

addSubmission(submissions, "Adrianna", 59, "2020-07-29")

console.log(submissions);


// 3.
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

const findIndex = (array, name) => {
    let index = array.findIndex((item) => {
        return item.name === name;
    });
     return  index;
};


// 4.
const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((submission) => {
        return submission.name === name;
    });
       array.splice(index, 1);
};

   deleteSubmissionByName(submissions, "Adrianna");
   console.log(submissions);


// 5. 
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};

editSubmission(submissions, 2, 95);
console.log(submissions);



// 6. 
const findSubmissionByName = (array, name) => {
    let found = array.find((item) => {
        return item.name === name;
    });
        return found;
};

console.log(findSubmissionByName(submissions, "Jane"));


// 7.
const findLowestScore = (array) => {
 let lowestScore = array[0];
 array.forEach((student) => {
   if (student.score < lowestScore.score) {
     lowestScore = student;
   }
 });
 return lowestScore;
};

console.log(findLowestScore(submissions));

// 8.
const findAverageScore = (array) => {
    let sum = 0; //should be outside of loop
        for (let item of array) {
            sum += item.score;
         console.log (sum / array.length);
        };
    };



// 9.
const filter90AndAbove = (array) => {
             let scoresGreaterThan90 = array.filter((scores) => {
               return scores.score >= 90;
             });
            return scoresGreaterThan90;
           };
           console.log(filter90AndAbove(submissions));


// 10.
const filterPassing = (array) => {
          let studentsPassed = array.filter((success) => {
          return success.passed === true;
         });
         return studentsPassed;
         };
        console.log(filterPassing(submissions));