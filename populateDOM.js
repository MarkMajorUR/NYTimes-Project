function PostArticles(articles) {
  
  //Convert to forof loop 
  for (var i =0; i < articles.length; i++) {
    $("#article-list").append(articles[i].Title+"  "+articles[i].Author+"  "+articles[i].articleUrl +"<br>");
  }
}