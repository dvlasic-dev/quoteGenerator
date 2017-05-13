function getQuote(){
  var http = new XMLHttpRequest();
  var result = document.getElementById('quote');
  http.onreadystatechange = function(){
    if(http.readystate === 4 && http.status === 200){

    }
  };
  http.open("GET", "https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", true);
  http.responseType = 'json';
  http.send();
}


$(document).ready(function(){
  $("#quote-button").on("click", function(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data){
      var html = "";
      data.forEach(function(val){
        var keys = Object.keys(val);
        html += "<div class= 'quotes'>";
        keys.forEach(function(key){
          html += "<strong>" + key +"</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
      });

      $("#quote").html(html);
    });
  });
});
