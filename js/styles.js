$(document).ready(function() {
   $("#blanks form").submit(function(event) {
    event.preventDefault();
    var icecreams = ["icecream1", "icecream2", "icecream3", "icecream4"];
    icecreams.forEach(function(icecream) {
      var list = $('input#' + icecream).val();
      $("." + icecream).text(list);
    });
      $("#story").show(list);
    });

});
