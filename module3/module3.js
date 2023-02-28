// // "1" + 1 + 0
// // "0" - 1 + 0
// // true + false
// // !true
// // 6 / "3"
// // "2" * "3"
// // 4 + 5 + "px"
// // "$" + 4 + 5
// // "4" - 2
// // "4px" - 2
// // " -9 " + 5
// // " -9 " - 5
// // null + 1
// // undefined + 1
// // undefined == null
// // undefined === null
// // " \t \n" - 2

// // console.log("1" + 1 + 0);
// // console.log("0" - 1 + 0);
// // console.log(true + false);
// // console.log(!true);
// // console.log(6 / "3");
// // console.log("2" * "3");
// // console.log(4 + 5 + "px");
// // console.log("9" + 4 + 5);
// // console.log("4" - 2);
// // console.log("4px" - 2);
// // console.log(" -9 " + 5);
// // console.log(" -9 " - 5);
// // console.log(null + 1)
// // console.log(undefined + 1)
// // console.log(undefined == null)
// // console.log(undefined === null)
// // console.log(" \t \n" - 2)

// // let three = "3"
// // let four = "4"
// // let thirty = "30"
// // //what is the value of the following expressions?
// // let addition = three + four
// // let multiplication = three * four
// // let division = three / four
// // let subtraction = three - four
// // let lessThan1 = three < four
// // let lessThan2 = thirty < four

// // console.log(addition = three + four)
// // console.log(multiplication = three * four)
// // console.log(division = three / four)
// // console.log(subtraction = four - three)
// // console.log(lessThan1 = three < four)
// // console.log(lessThan2 = thirty > four)

// // if ("0") console.log('#1 zero is true')
// // if ("0") console.log('#2 zero is true')
// // if (null) console.log('null is true')
// // if (-1) console.log('negative is true')
// // if (1) console.log('positive is true')


// // let a = 13, b = 22;
// // let result = `${a} + ${b} is `;
// // if (result < 10) {
// // result += 'less than 10';
// // } else {
// // result += 'greater than 10';
// // }
// // console.log( result += 'less than 10')
// // console.log(result += 'greater than 10')

// // function getGreeting(Jason) {
// //     return 'Hello ' + Jason + '!';
// //     }

// //     const harmi = {
// //         name: 'harmi',
// //         lastname:'green',
// //         numFingers: 5
// //         }
// //         const kia = {
// //         name: 'kia',
// //         lastname: 'blue',
// //         numFingers: 6
// //         }
// //         const marie = {
// //         firstName: 'marie',
// //         lastname: 'yellow',
// //         numFingers: 6,
// //         greeting(person) {
// //         let greeting = `Hello ${person.name} ${person.lastname}, my name is ${this.firstName} ${this.lastname} `;
// //         console.log(greeting + this.getCatchPhrase(kia));
        
        
// //         },
// //         getCatchPhrase(any){
// //         return 'fire in the hole';
// //         }}
        
// //         marie.greeting(harmi)
// //         marie.greeting(kia)
        




// class Score {
//     constructor(value) {
//       this.value = value;
//     }
  
//     add(score) {
//       return new Score(this.value + score.value);
//     }
  
//     subtract(score) {
//       return new Score(this.value - score.value);
//     }
  
//     multiply(score) {
//       return new Score(this.value * score.value);
//     }
  
//     divide(score) {
//       return new Score(this.value / score.value);
//     }
  
//     toString() {
//       return `${this.value}`;
//     }
//   }
  
//   // Create some scores
//   const score1 = new Score(10);
//   const score2 = new Score(5);
//   const score3 = new Score(2);
  
//   // Chain the scores together
//   const result = score1.add(score2).subtract(score3).multiply(score2).divide(score3);
  
// // Define the variables for the score
// var hours = 10;
// var minutes = 25;
// var seconds = 50;

// // Format the score as a string with leading zeros
// var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

// // Print the score to the console
// console.log("Full-time score: " + timeString);

  


// const basketballGame = {
//     score: 0,
//     callout: 0,
//     freeThrow() {
//     this.score++;
//     return  this
//     },
//     basket() {
//     this.score += 66;
//     return this
//     },
//     threePointer() {
//     this.score += 77;
//     return this
//     },
//     foul(){
//     this.callout += 10; 
//     return this   

//     },
//     halfTime() {
//      console.log('Halftime score is '+this.score + ' foul is '+this.callout);
//      return this
//     },
//     fullTime(){
//            console.log ('fulltime score is '+this.score + ' foul is '+ this.callout)

//     }
     
    
    
//     }
//     //modify each of the above object methods to enable function chaining as below:
//     basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().fullTime();

        










// const Townsville = {
//     name: 'Townsville',
//     population: 203620,
//     state: 'QLD',
//     founded: '27 May 1865',
//     timezone: 'Australia/Brisbane'
//     }

// function objectLoop(City){
// for (let cityprop in City) {
  
//   console.log(City.population)
   
// }
// }
// objectLoop(Townsville)








// const Cairns = {
//     name: 'Ca',
//     population: 203620,
//     state: 'QLD',
//     founded: '27 May 1865',
//     timezone: 'Australia/Brisbane'
//     }

// function objectLoop(City){
// for (let cityprop in City) {
  
//   console.log(City.population)
   
// }
// }
// objectLoop(Townsville)
 
   


















// let pi = 3.14159
// let amount = 25.3333333

// console.log(pi.toFixed(3))
// console.log(parseFloat(amount.toFixed(3)) + 10.50)
// console.log(parseInt(pi))

// console.log(Number.isInteger(pi))

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

// function truncate(fullString, maxChars) {
//     //return a truncated version of fullString that is maxChars characters long

//     const longstring = 'Hello i have come around to visit your town and go site seeing.';
    
//     fullString.substring(0,maxChars)


//     const shortstring = 'hello';
    



//     console.log(truncate)(longstring, 20)
    
// }


















// function countWords(string){
//     let words = string-split( )
//     console.log(words)
//     return words.length;  
// }



// const sports = {
//     sportsteam: 'melbourne storm',
//     Wins: '13',
//     toString(){
//         return `wins: ${this.Wins} sportsteam: ${this.sportsteam}`
//     }
// }
// console.log("teamis"+ sports)







// const product = {
//     name1: Jason,
//     catagory: shoes,
//     Price: 359.29,
//     discount-percent: 5,
//     vauleOf(){
//         return this.Price - (this.price * this.discount_percent/100) + (this.price * (this.gst_percent/100))
//     },
//     toString() {
//         (return `${this.name} (${this catagory})`
//     }
// }
// console.log(${producut) 'with quantiy' 5 costs $${((product *5))}.`)
// }

// const product2 = {
//     name: 'JS',
//     category: 'shoes',
//     price: 320.00,
//     discount_percent: 5,
//     gst_percent: 20,
//     //defines how this object is treated as a number
//     valueOf() {
//         //take the discount and gst into account
//         return this.price - (this.price * (this.discount_percent/100)) + (this.price * (this.gst_percent/100))
//     },
//     //defines how this object is represented as a string
//     toString() {
//         return `${this.name} (${this.category})`
//     }    
// }

// let billion = 1_000_000_000
// let million = 1_000_000

// console.log(billion)
// console.log(million)











let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports
console.log (teamSports)
moreSports.unshift ('Netball')
console.log (teamSports)

let moreSports2 = [...teamSports]
moreSports2.push ('moreSports')
console.log (teamSports)

// const Sports = teamSports.concat (moreSports)
// console.log (Sports)

zx




let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Ringo';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1 
cat2.name = 'Rain'


console.log (dog1)
console.log (cat1)


// const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
// const cities_nz = ['Auckland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

// cities_au.shift ('Perth')
// console.log (cities_au)

// let first4NZCities= cities_nz.slice (0,3)
// console.log(first4NZCities)

// cities_au.splice(4, 0, 'Townsville')
// console.log(cities_au)

// cities.forEach ((cities) => console.log(${cities}))



// const people = [
//     {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
//     {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
//     {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
//     {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
//     {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
// ]
// people.forEach(person, index) => {
//     console.log (index)
//     console.log (person.location);
//     console.log (person.age);
// }

// let VICPerson = people.find(person => person.location = 'VIC')