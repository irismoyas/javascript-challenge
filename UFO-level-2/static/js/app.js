var tableData=data;
console.log(tableData);

var tbody = d3.select("tbody");


data.forEach((x) => {
  var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
button.on("click",function() {
  


 
  var user_datetime=d3.select("#datetime");
  var user_city=d3.select("#city");
  var user_state=d3.select("#state");
  var user_country=d3.select("#country");
  var user_shape=d3.select("#shape");
  
  
  var value_datetime = user_datetime.property("value").trim();
  var value_city=user_city.property("value").toLowerCase().trim();
  var value_state=user_state.property("value").toLowerCase().trim();
  var value_country=user_country.property("value").toLowerCase().trim();
  var value_shape=user_shape.property("value").toLowerCase().trim();
  
  var filter_datetime=tableData.filter(tableData =>tableData.datetime === value_datetime);
  var filter_city=tableData.filter(tableData =>tableData.city === value_city);
  var filter_state=tableData.filter(tableData =>tableData.state === value_state);
  var filter_country=tableData.filter(tableData =>tableData.country === value_country);
  var filter_shape=tableData.filter(tableData =>tableData.shape === value_shape);

  filterCombined=tableData.filter(ufo=>ufo.datetime===value_datetime || ufo.city ===value_city || ufo.state ===value_state ||ufo.country===value_country || ufo.shape === value_shape );
 
  tbody.html("");


  
    console.log(filterCombined);
    
  filterCombined.forEach(function(selections) {

    console.log(selections);
    
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});