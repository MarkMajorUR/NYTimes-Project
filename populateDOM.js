//variables needed
var searchTerm
var recordCount
var startYear
var endYear

//create the api call

//for loop to pull multiple articles

//ajax call to print to DOM
.then(function(response){
    var results =response.data;

    for (var i = 0; i < recordCount.length; i++) {
        var li = $("<li>");

        var title = response[i].Title
    }
});