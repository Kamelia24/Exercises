$(document).ready(function(){
$('#my_form').on('submit',function(event){
    event.preventDefault();
    var name = $("input#first").val();
    var subject = $("input#last").val();
    var email = $("input#mail").val();
    var message = $("input#phnumber").val();

    var dataString = 'email=' + email + '&message=' + message + '&subject=' + subject + '&name=' + name ; 
console.log("ok")
    $.ajax({
        url: "http://test.zoiper.com/en/contact",
        type:   'POST',
        data: dataString,
        success: function(msg){
            $("#successfull").css("visibility", "visible");
        },
        error: function() {
            $("#failed").css("visibility","visible")
        }
    });
});
});