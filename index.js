function longestWord(str){
    let words=str.split(" ");
    longest="";
    for(el in words){
        if(longest.length<words[el].length){
            longest=words[el];
        }
    }
    console.log(longest)
}
longestWord("obelka dinq kutiq");

 function firstThreeUpper(str){
    let eddited=str.substr(0, 3).toUpperCase()+str.substr(3,);
    console.log(eddited);
 }
 firstThreeUpper("kolko imam?");

 function occurances(str,letter){
     let howMany=0;
     let sliced=str.split("");
     for(let br in sliced){
         if(sliced[br]==letter){
             howMany++;
         }
     }
     console.log(howMany);
 }
occurances('some test here, yoo', 'o');

function primeOrNot(number){
    let isPrime=true;
    number=Number(number);
    for(let i=2;i<number/2;i++){
        if(number%i==0){isPrime=false;}
    }
    console.log(isPrime);
}
primeOrNot("10");

function sortArray(arr){
//arr=Number(arr);
    for(let i=0;i<arr.length;i++){
        for(let f=i+1;f<arr.length;f++){
            if(arr[i]>arr[f]){
                let swap=arr[i];
                arr[i]=arr[f];
                arr[f]=swap;
            }
        }
    }
    let output="";
    for(br in arr){
        output+=arr[br]+" ";
    }
    console.log(output)
}
sortArray([-3,8,7,6,5,-4,3,1,2])
/*function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s;
    if(s!=today.getSeconds){
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var output=h + ":" + m + ":" + s;
    console.log(output);
    var t = setTimeout(startTime, 1000);
}
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime();*/
var date=new Date();
var clock={
    
    hour:date.getHours(),
    minute:date.getMinutes(),
    second:date.getSeconds(),
    start:function(){
        var output=this.hour+":";
        if(this.minute<10){
            output+="0";
        }
        output+=this.minute+":";
        if(this.second<10){
            output+="0";
        }
        output+=this.second;
        console.log(output);
    }
}
var t=setInterval(clock.start,1000);