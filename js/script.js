$(document).ready(function(){
  
    function getQuote(){
    //var quotes = ["The only time success comes before work is in the dictionary", "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact", "Even if you’re on the right track, you’ll get run over if you just sit there", "Don’t worry about failures, worry about the chances you miss when you don’t even try.", "Don’t spend time beating on a wall, hoping to transform it into a door", "If the plan doesn’t work, change the plan, but never the goal", "A comfort zone is a beautiful place, but nothing ever grows there", "Winners don´t blame the ball, or the rim, or the wind speed", "It’s the possibility of having a dream come true that makes life interesting.", "It's not the assurance but the possibility that keeps me going", "When you’re backed against the wall, break the goddamn thing down.", "When we strive to become better than we are, everything around us becomes better too" ];
   
   // var authors = ["-Harvey Specter", "-Wiiliam James", "-Will Rogers", "-Jack Canfield", "-Coco Chanel", "-Unknown", "-Unknown", "-Harvey Specter", "-Paulo Coleho", "Vishad Tomar", "-Harvey Specter", "-Paulo Coleho" ];
    
    //randomNum = Math.floor(Math.random()*quotes.length);
    
    //randomQuote = quotes[randomNum];
    //randomAuthor = authors[randomNum];
    
    //$(".quote").text(randomQuote);
    //$(".author").text(randomAuthor);
    
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en&format=jsonp&jsonp=?";
    
    $.getJSON(url, function(data){
      $(".quote").html("'" + data.quoteText + "'");
      $(".author").html("-" + data.quoteAuthor);
    })
    
  }
  
  $("#newQuote").on("click", function(){
    getQuote();
 
  });
  $("#tweet").on("click", function(){
    window.open("https://twitter.com");
     });
  
  
  $("#facebook").on("click", function(){
    window.open("https://www.facebook.com");
  });
  
  $("#tweet").mouseover(function(){ 
    
    $(this).addClass("btn btn-default"); 
                          
     });
  
   $("#tweet").mouseout(function(){ 
    
    $(this).addClass("btn btn-default"); 
                          
     });
  
});