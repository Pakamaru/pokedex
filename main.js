function getHttp(url){
  var xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open("GET", url, false);
  xmlHTTP.send(null);
  console.log(xmlHTTP.responseText);
}

getHttp("http://pokeapi.co/api/v2/pokemon/1/");
console.log("test");
