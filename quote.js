window.onload = function (){
var http = new XMLHttpRequest();
var getQuote = document.getElementById('quote-button');
var quoteText = document.getElementById('quote');
var backC = document.getElementById('backgroundC');
var name = document.getElementById('name');
var tweet = document.getElementById('tweet');
function load(){
  http.open('GET', "https://cors-anywhere.herokuapp.com/http://www.quotzzy.co/api/quote", true);
  http.send();
}

http.onload = function(){
  if(http.status >= 200 && http.status  < 400){
    var data = JSON.parse (http.response);
    var author = data.author['name']; //access to objects key 'name', of object author
    var quote = data.text;
    quoteText.innerHTML = quote;
    name.innerHTML ="- " + author;
    console.log(data);
    tweet.onclick = function(){
      tweet.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes,programming&related=freecodecamp&text='
      + encodeURIComponent('"' + quote + '" ' + '- ' + author));
    };

  }else{
    console.log("Error loading");
  }
};

getQuote.onclick = function(event){
  load();
//Change background and button colors
  var colors = ["#FDD692", "#EC7357", "#1F5673", "#463730", "#B9B8D3", "#754668", "#4DAA57",
  "#BA1F33", "#1C1C54", "#5EFC8D", "#93BEDF", "#1D0E2A", "#6D5A72", "#C82647", "#E3000E", "#0E142A",
   "#4D1A19", "#B03B98", "#3DB864", "#42BF40", "#0E2A14", "#B96ACD",
  "#6A7CCD", "#C69653", "#A7B3E2", "#DACE90", "#501B28", "#3DB849", "#EC7357", "#4281A4", "#020122",
  "#F4442E", "#353535", "#058ED9", "#E8AE68"];
  var color = colors[Math.floor(Math.random() * colors.length)];
  getQuote.style.backgroundColor = color;
  backC.style.backgroundColor = color;
}
load();
}
