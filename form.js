
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
    /*var typeofinq1=$("input#typeofinq").val();
    var visitor_type1 = $("input#visitor_type").val();
    var company_size1;
    var project_intended_for1;
    var first_name1=$("input#first_name").val();
    var email1 = $("input#email").val();
    var company_website1=$("input#company_website").val();
    var title1=$("input#title").val();
    var country1 = $("#country").val();
    var subscribe1 = $("#subscribe").val();
    //var dataString = '&typeofinq'+typeofinq &'&visitor_type'+visitor_type;
    var question1=$("input#question").val();
    //console.log(typeofinq,visitor_type,first_name,email,country,subscribe,question)
    var dataString={
        typeofinq:typeofinq1,
        visitor_type:visitor_type1,
        first_name:first_name1,
        email:email1,
        company_website:company_website1,
        title:title1,
        country:country1,
        subscribe:subscribe1,
        question:question1
    }
    if(isAdded){
        company_size1=$("input#company_size").val();
        project_intended_for1=$("input#project_intended_for").val();
        dataString.company_size=company_size1;
        dataString.project_intended_for=project_intended_for1;
        //dataString+='&company_size'+company_size+'&project_intended_for'+project_intended_for;
    }*/
    //dataString+='first_name'+first_name+'&email'+email+'&company_website'+company_website+'&title'+title+'&country'+country+'&subscribe'+subscribe+'&question'+question; 
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
       /* beforeSend : function (xhr) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        },*/
        type:   'POST',
        data: serialized ,
        success: function(msg){
            console.log(msg);
            for(var key in msg){
                if(key=="success"){
                    $("#successfull").css("visibility", "visible");
                    $("#failed").css("visibility","hidden");
                    document.getElementById("SubmitButton").disabled = true;
                    break;
                }else{
                    $("#successfull").css("visibility","hidden");
                   $("#failed").css("visibility","visible");
                   document.getElementById("SubmitButton").disabled = false;
                }
            }
            
            //$("#successfull").css("visibility", "visible");
        },
        error: function() {
            $("#failed").css("visibility","visible")
            document.getElementById("SubmitButton").disabled = false;
        }
    });
});
});