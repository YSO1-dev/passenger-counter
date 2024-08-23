// document.getElementById("count-el").innerText = 5
// cmd+k+c - to make the // for all the lines
// cmd+k+u - to uncomment the selected lines of code by removing the // comment markers.

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 21 
// let humanDogRatio = 7 
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// // Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50 
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50 
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75 
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints) 

// // intialize the count as 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked
// // change the count-el in the HTML to reflect the new count

// let count = 0 
// function increment() {
//     console.log("the button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // Setting up the the race 🏎 🏎 🏎

// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()

// // Create a function (you decide the name) that logs out the number 42 to the console
// // Call/invoke the function

// function Testing() {
//     console.log("42")
// }

// Testing()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// // When creating a variable within the {} function, you have to do console.log within the parenthesis i.e. if you put console.log(totalTime) after {}
// // If not, it will show reference error, stating totalTime is not defined

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// // Why no need to include "let" as in let lapsCompleted = lapsCompleted + 1


// // document.getElementById("count").innerText = 5
// // let count = 5
// // count = count + 1
// console.log(count)
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// let count = 0 

// function increment() {
//     count = count + 1 
//     console.log(count)
// }

// increment()


// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase - this is a convention way to write JS code by capitalize the first letter of second word
// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

//Developers often refer to the technique of document.getElementById as "working with the DOM (Document Object Model"

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// // 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count)
// }

// //This section we introduce Strings and Numbers. HTML can only treat everything as numbers, and cant read strings

// let username = "per"

// // Create a variable, message, that stores the string: "You have tree new notifications"

// let message = "You have tree new notifications"

// console.log(message + ", " + username + "!") //the + sign concatenates the characters together 


// // Create two variables, name and greeting. The name variable should store your name,
// // and the greeting should store e.g. "Hi, my name is "

// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console

// let name = "Per Harald Borgen"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// // console.log(myGreeting)

// // let points = 4
// // let bonusPoints = "10"
// // Answer will be 410 - the string ("") always wins against the number

// // let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText = welcomeEl.innerText + "👋" OR welcomeEl.innerText += "👋" //they are the same thing

// //Changing the usual count = count + 1 to count += 1 (shorter version)
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }


//including the p-tag to document previous entries


// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     let countStr = count + " - "
//     2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     3. Render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }


// //Changing the innerText to textContent using Google search or mdn
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
// }

// Google:
// innerText alternative mdn

// To make the counter start from 0 and increase by 1 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
