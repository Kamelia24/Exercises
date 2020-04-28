
var comp=document.getElementsByClassName("company");
comp[0].addEventListener("click",add)
var isAdded=false;
function add(){
//if(comp.id=="company"){
    var output=`<input type="radio" id="company_size" value="1-10"><label >1-10</label>
    <input type="radio" id="company_size" value="10-50"><label >10-50</label><br>
    <input type="radio" id="project_intended_for" value="employees_of_my_company"><label >employees of the company</label>
    <input type="radio" id="project_intended_for" value="business_clients"><label >business clients</label>`
    document.getElementById("comp").innerHTML=output;
    isAdded=true;
}
//}

$(document).ready(function(){
$('#my_form').on('submit',function(event){
    event.preventDefault();
    var dataString={};
    var inputs=document.getElementsByTagName("input");
    var selected=document.getElementsByTagName("select");
    form=document.getElementsByTagName("form");
    for(let i=0;i<inputs.length-1;i++){
        dataString[inputs[i].id]=inputs[i].value;
        

    }
    for(let i=0;i<selected.length;i++){
        dataString[selected[i].id]=selected[i].value;
        
    }
    //console.log(dataString);
    var serialized=$( "form" ).serialize();
    //console.log( serialized );
    $.ajax({
        
        url: "http://localhost:3000/contact",
        type:   'POST',
        data: serialized ,
        success: function(msg){
            console.log(msg);
            for(var key in msg){
                if(key=="success"){
                    $("#successfull").css("visibility", "visible");
                    $("#failed").css("visibility","none");
                    document.getElementById("SubmitButton").disabled = true;
                    break;
                }else{
                    document.getElementById("failed").innerHTML=`<p> ${msg[key]}</p>`
                    $("#successfull").css("visibility","hidden");
                   $("#failed").css("visibility","visible");
                   document.getElementById("SubmitButton").disabled = false;
                }
            }
        },
        error: function() {
            $("#failed").css("visibility","visible")
            document.getElementById("SubmitButton").disabled = false;
        }
    });
});
});