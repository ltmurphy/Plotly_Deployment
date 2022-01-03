const url = "https://api.spacexdata.com/v2/launchpads";

// full data set
d3.json(url).then(receivedData => console.log(receivedData));

// full name of Vandenberg (first entry)
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
