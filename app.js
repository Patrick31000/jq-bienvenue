$("input").keypress(function(x) {
    var firstname = $("#first_name").val();
    var lastname = $("#last_name").val();
    var city = $("#city").val();
    if (x.which == 13) {
        console.log("I'm" + " " + firstname + " " + lastname + " from " + city);
        $("#username").replaceWith(firstname + " " + lastname);
    }

});