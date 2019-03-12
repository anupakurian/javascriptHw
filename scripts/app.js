// from data.js
var tableData = data;

// Console.log the weather data from data.js

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var submit  = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Getting a reference to the input element on the page with the id property set to 'input-field'
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#cityname");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    
    d3.selectAll(tbody).remove()
    
    // BONUS: Refactor to use Arrow Functions!
    tableData.forEach((ufoData) => {
        var row = tbody.append("tr");
        
            console.log(inputValue)
            console.log(inputValue2)
            
            if ((ufoData["datetime"]==inputValue) && (ufoData["city"]==inputValue2))
            {
                Object.entries(ufoData).forEach(([key, value]) => {
                    var cell = tbody.append("td");
                    cell.text(value);
                });
            }
                    
    });
    
});
