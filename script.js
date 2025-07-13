const internName = 'Obumuneme Christian';
console.log(internName)

//task 1 score
let scoreOne =  10;
console.log('Task one:', scoreOne)

let scoreTwo = 8;
console.log('Task two:', scoreTwo)

let scoreThree = 6;
console.log('Task three:', scoreThree)

let bidmas = 10+8+6;
console.log('Total:', bidmas)

var answer = (10+8+6)/3;
console.log('Average:', answer)

    if (answer >=9){
        console.log('A')
    }else if (answer >=8){
      console.log('B')
    }else if (answer >=7){
    console.log('C')
    }else if (answer >=6){
    console.log('D')
    }else if (answer <6){
    console.log('E')
    }
   

  let firstName = 'Obumuneme';
  let lastName = 'Christian';
  let task1 = 10;
  let task2 = 8;
  let task3 = 6;
  let average = 8.00;
  let finalGrade = 'pass';
  let results = `${firstName} ${lastName} had ${task1}, ${task2} & ${task3}, with an average of ${average}.00. Final grade is ${finalGrade} .`;
  console.log(results)

 const getGradeFeedback = (grade) => {
  switch (grade.toUpperCase()) {
    case 'A': return "Excellent performance!";
    case 'B': return "Great job! Keep aiming high.";
    case 'C': return "Good effort. Try to improve.";
    case 'D': return "You're close. Keep working at it.";
    case 'E': return "Don't give up. You can do better next time.";
    default:  return "Invalid grade";
  }
 };
 console.log(getGradeFeedback('B'));