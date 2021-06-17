
// Number of dogs:
const dogForm = document.querySelector('#doggo')

dogForm.addEventListener('submit', function(event){
  event.preventDefault()

  //ONE input- user inputs number of dogs that they think is too many:
  const userInput = document.querySelector('#doggo .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

  if(!isNaN(userNumber)){
    //ONE output- their input gets multiplied by 125 with a fun message:
  const text = document.createTextNode(`Oh yeah? Imagine if it was ${userNumber * 125}! I multiplied your entry by 125. There's no such thing as too many dogs, but I just have two.`)

  const p = document.createElement('p')
  p.appendChild(text)
  dogForm.appendChild(p)

}

})

// Amount of food:
const foodForm = document.querySelector('#food')

foodForm.addEventListener('submit', function(event){
  event.preventDefault()

  //ONE input-- user inputs a number they think is correct
  const userInput = document.querySelector('#food .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

  if(!isNaN(userNumber)){
    //ONE output-- user number is repeated back with message appended to form
  const text = document.createTextNode(`You guessed ${userNumber}! Louie eats about 6 cups of food a day- WOWZA!`)

  const p = document.createElement('p')
  p.appendChild(text)
  foodForm.appendChild(p)

}

})


//Amount of pounds:
const poundsForm = document.querySelector('#pounds')
poundsForm.addEventListener('submit', function(event){
  event.preventDefault()
  const array = [80, 95, 100, 125, 140, 160];
  let array2 = array.filter(function(weight){
    return weight > 130;
  });
console.log(array2);

  // input-- User inputs guess for how much louie will weigh
  const userInput = document.querySelector('#pounds .input').value
  const userNumber = parseInt(userInput)

  console.log(userNumber)

  if(!isNaN(userNumber)){
    // output-- console logs numbers higher than 130 in array, returns message to user
  const text = document.createTextNode(`You guessed ${userNumber}! This output returns numbers higher than 130 in the console, Louie himself could weigh up to 160 pounds as an adult!`)

  const p = document.createElement('p')
  p.appendChild(text)
  poundsForm.appendChild(p)

}

})


//Amount of sleep:
const sleepForm = document.querySelector('#sleep')
sleepForm.addEventListener('submit', function(event){
  event.preventDefault()
  const array = [4, 2, 10, 13, 8, 100];
  let sum = array.reduce(function(sum, value){
    return sum + value;
  });
console.log(sum);

  // input-- user inputs number to guess amount of naps
  const userInput = document.querySelector('#sleep .input').value
  const userNumber = parseInt(userInput)

  console.log(userNumber)

  if(!isNaN(userNumber)){
    // output-- array of numbers is summed up and returned to user with fun message
  const text = document.createTextNode(`You guessed ${userNumber}! But I wish it was ${sum}, this is the sum of all the available numbers in the array.`)

  const p = document.createElement('p')
  p.appendChild(text)
  sleepForm.appendChild(p)

}

})
