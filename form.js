$(document).ready(function(){
$('#my_form').on('submit',function(event){
    event.preventDefault();
    var name = $("input#first_name").val();
    var subject = $("input#last").val();
    var email = $("input#mail").val();
    var message = $("input#phnumber").val();
    var dataString = 'email=' + email + '&message=' + message + '&subject=' + subject + '&name=' + name ; 
console.log("ok")
    $.ajax({
        
        url: "http://test.zoiper.com/en/contact",
        beforeSend : function (xhr) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        },
        type:   'POST',
        data: dataString,
        success: function(msg){
            console.log(msg);
            for(var key in msg){
                if(msg[key]=="Value is required"){
                    $("#failed").css("visibility","visible");
                    break;
                }else{
                    $("#successfull").css("visibility", "visible");
                }
            }
            //$("#successfull").css("visibility", "visible");
        },
        error: function() {
            $("#failed").css("visibility","visible")
        }
    });
});
});