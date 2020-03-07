var tableData=data;
console.log(tableData);
// Get a reference to the table body
var tbody = d3.select("tbody");


data.forEach((x) => {
  var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(wow => wow.datetime === inputValue); 
    
  console.log(filteredData);

  filteredData.forEach(function(selections) {

    console.log(selections);
    
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});