// from data.js
var tableData = data;
// YOUR CODE HERE!
console.log(tableData);

function appendData(data){
    var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments"];
    data.forEach(sighting => {
        var row = d3.select("tbody").append("tr");
        columns.forEach(column => row.append("td").text(sighting[column]))
    });
}

appendData(tableData);


var inputdateField = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");
var clearFilterButton = d3.select("#clearFilter-btn");
filterButton.on("click", () =>{
    d3.event.preventDefault();
    var filterDate = inputdateField.property("value").trim();
    console.log(filterDate);

    var filtereredData = tableData.filter( tableData => tableData.datetime === filterDate );

    d3.select("tbody").html("");

    if ( filtereredData.length > 0 ){
        appendData(filtereredData);
    }
    else{
        d3.select("tbody").append("tr").append("td").text("No UFO sighting in this date")
    }
});

clearFilterButton.on("click", () => {
    document.getElementById('datetime').value = "";
    appendData(tableData);
});


