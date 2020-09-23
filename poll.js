const IDSearchTerm = "#searchTerm";
const IDNumberOfRecords = "#recordCount";
const IDStartYear = "#startYear";
const IDEndYear = "#endYear";
const IDSearchButton = "#startSearch";
const BaseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//PLEASE DONT STEAL MY API KEY 
const APIKey = "zlBVKZ9XwjwqFZGgW4Nr1tio2xSGivCK";

var articleCount = 5;

var returns = [
	{
		Title: "XYZ",
		Author: "MOO",
		url: "example.com"
	},
	{
		Title: "abc",
		Author: "billy",
		url: "example2.com"
	}
];

function validDate(date){
	if(isNaN(date)){
		return false;
	}
	if(date > new Date().getFullYear){
		return false;
	}
	if(date <= 0){
		return false;
	}
	return true;
}

function dataParase(response){
	console.log(response);
	var datas = response.response.docs;
	var articles = [];
	for(var i = 0; i<articleCount; i++){
		articles[i] = {};
		articles[i].Title = datas[i].headline.main;
		var author = datas[i].byline.person[0];
		if(author){
			var name = `${author.firstname} ${author.middlename} ${author.lastname}`
			articles[i].Author = name;
		}else{
			articles[i].Author = "";
		}
		articles[i].url = datas[i].web_url;
	}

	console.log(articles);

	PostArticles(articles);
}

function startSearch(){
	var url = BaseURL;
	var searchTerm = $(IDSearchTerm).val();
	if(searchTerm.trim() === ""){
		alert("NO DATAS HERE BROSKI");
		return;
	}
	url += `q=${searchTerm}`;

	var recCount = parseInt($(IDNumberOfRecords).val());
	if(isNaN(recCount)){
		alert("invalid record count!");
		return;
	}
	articleCount = recCount;

	var startYear = parseInt($(IDStartYear).val());
	if(validDate(startYear)){
		url += `&begin_date=${startYear}0101`;
	}

	var endYear = $(IDEndYear).val();
	if(validDate(endYear)){
		url += `&end_date=${endYear}0101`;
	}

	url+=`&api-key=${APIKey}`;

	console.log(`URL: ${url}`);
	$.ajax({url: url}).then(dataParase);
}

$(document).ready(function (){
	$(IDSearchButton).click(function(ev){
		ev.preventDefault();
		startSearch();
	});
});