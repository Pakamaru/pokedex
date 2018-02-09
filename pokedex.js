var fetch = require('node-fetch')
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var path = "http://pokeapi.co/api/v2/pokemon/";

const test = (name) =>{
  fetch(path+name)
  .then(e=>e.json())
  .then(e=>{
    console.log("You want to know more about "+e.name)
    console.log("height: "+e.height);
    console.log("weight: "+e.weight);
  })
}

const allPokemon = (name) =>{
  fetch("http://pokeapi.co/api/v2/pokemon/?limit=1000")
  .then(e=>e.json())
  .then(e=>{

     e.results.filter(b=>b.name.indexOf(name)>-1)
        .forEach(pokemon=>{
        console.log(`Do you mean this pokemon: ${pokemon.name}`)
      })
    // for(var i=0; i<e.results.length; i++){
    //   if(e.results[i].name.indexOf(name) > -1){
    //     console.log("Do you mean this pokemon: "+e.results[i].name);
    //   }
    // }
  })
}
rl.question("What pokemon would you like to know about (AC) ", function(answer2){
      allPokemon(answer2);
      rl.close();
  });

// rl.question("Would you like to use our auto complete (Y/N) ", function(answer1){
//   if(answer1.toLowerCase() === "y"){
//     rl.question("What pokemon would you like to know about (AC) ", function(answer2){
//       console.log("test1");
//       allPokemon(answer2);
//       console.log("test2");
//       rl.close();
//     });
//   }else if (answer1.toLowerCase() === "n") {
//     rl.question("What pokemon would you like to know about (A) ", function(answer2){
//       var pokemons = answer2.split(" ");
//       for(var i=0; i<pokemons.length; i++){
//         test(pokemons[i]);
//       }
//
//       rl.close();
//     });
//   } else {
//     console.log("An error has occured! Please restart the app");
//   }
//   rl.close();
// });
