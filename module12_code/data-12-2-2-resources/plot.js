// sort the cities in descending order of population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// select only the top five cities
// for skill drill top seven change 5 to 7 and rename variables accordingly.
var topFiveCities = sortedCities.slice(0,5);

// create array of city names and growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// use Plotly to create a bar chart with previous arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,  
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  
  console.log(cityGrowths);

