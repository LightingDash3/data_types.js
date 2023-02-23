//*let age = 22;

//let isadult = (age >= 18) ? ' is a an adult' :'is not an adult'
//console.log(isadult)

//function BMI (Value) 
//let weight = (cm)
//let height = (kg)
//let age = (years);
// /{
//     return  'healthy'
// }
// {
//     return
// }



// const Free GuyMovie,- {
//     title: 'Free Guy',
//     year:2021,
//     derictby:'Shawn Levy',
//     poster: 'https://www.bing.com/images/search?view=detailV2&ccid=KmjydeY9&id=F660BD035E708B0E9952EB01696B095225BDFBD6&thid=OIP.KmjydeY9GY2eSGmrn3k0AAHaLH&mediaurl=https%3a%2f%2fwww.themoviedb.org%2ft%2fp%2foriginal%2fxmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg&exph=3000&expw=2000&q=free+guy+2021&simid=608055726179301735&FORM=IRPRST&ck=61F787E42994E50F5B78D1B39EEB3EBC&selectedIndex=0&ajaxhist=0&ajaxserp=0',
//     starring:['Ryan Reynolds', 'Jodie Comer', 'Taika Waititi'],
//     plot:'Guy is a non-player character in Free City, a massively multiplayer online role-playing video game developed by Soonami Studios'
// }
// function objectprint(obj) {
//     for (let free guy in obj) {
//       console.log(`${plot}: ${obj[starring]}`);
//     }


    //create your own object with multiple properties
//make sure some are multiple values
//add some functions
//write a function to print out all names/values using for ... in}




function makeCounter () {
    let count = 0;

    return function(){
        return count++;
    };
}

let counter = makeCounter ();
let counter2 = makeCounter();

alret (counter()); //0
alret (counter()); //1

alert (counter2()); //?
alert (counter2()); //?