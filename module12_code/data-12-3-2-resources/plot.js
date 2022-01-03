//d3.json("samples.json").then(function(data){
    //console.log("hello there!....General Kenobi!!...ackh...hngg")
//});

//d3.json("samples.json").then(function(data){
    //console.log(data)
//});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
    //console.log(data);

});