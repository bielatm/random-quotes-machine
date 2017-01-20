var colours = {"0": ["#FC354C", "#0ABFBC"], "1": ["#ED4264", "#FFEDBC"],
"2": ["#3D7EAA", "#FFE47A"], "3": ["#43C6AC", "#191654"],
"4": ["#093028", "#237A57"], "5": ["#43C6AC", "#F8FFAE"],
"6": ["#E8CBC0", "#636FA4"], "7": ["#DCE35B", "#45B649"],
"8": ["#c0c0aa", "#1ce"], "9": ["#67B26F", "#4ca2cd"],
"10": ["#F3904F", "#3B4371"], "11": ["#ee0979", "#ff6a00"],
"12": ["#fffc00", "#ffffff"], "13": ["#ff00cc", "#333399"],
"14": ["#ef32d9", "#89fffd"], "15": ["#3a6186", "#89253e"],
"16": ["#4ECDC4", "#556270"], "17": ["#A1FFCE", "#FAFFD1"],
"18": ["#BE93C5", "#7BC6CC"], "19": ["#ffd89b", "#19547b"]};
var quote = "";
var author = "";

function getAndPrintQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
    success: function(response) {
      var json = JSON.parse(response);
      quote = json.quote;
      author = json.author;

      var numberOfColor = Math.floor(Math.random() * (Object.keys(colours).length));

      $("#quote-text").html(quote);
      $("#quote-author").html(author);

      $("#new-quote").css({"border-color": colours[numberOfColor][1]});

      $("body").css({
        "background-color": colours[numberOfColor][1],
        "background-image": "linear-gradient(to left, " + colours[numberOfColor][0]
        + ", " + colours[numberOfColor][1] +")"});
      $("#tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + '"'
      + quote + '" ' + author);
    }
  });
};

$(document).ready(function() {
  getAndPrintQuote();
  $("#new-quote").on("click", function() {
    getAndPrintQuote();
  });
});
