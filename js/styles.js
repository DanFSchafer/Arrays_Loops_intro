$(document).ready(function() {
   $("#blanks form").submit(function(event) {
    event.preventDefault();
    var value1 = $("#animal").val();
    var value2 = $("#iceCream").val();



    var array = [];
    array[0] =value1;
    array.push(value2);
    var arraystring = array.toString();
    $("#output").text(arraystring);

    });

});
