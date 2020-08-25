// code for displaying the category(select/option) and handling the empty  and applying corresponding colours

var tobedisplayed=document.querySelectorAll(".selected");

var div=document.querySelectorAll(".second");



for(var i =0; i<tobedisplayed.length;i++) {
    console.log(tobedisplayed[i].innerHTML);  
    if(tobedisplayed[i].innerHTML==="empty"){
        tobedisplayed[i].innerHTML="";
    }
    else if(tobedisplayed[i].innerHTML=="personal"){
        console.log("HI");
        div[i].style.backgroundColor="#026aa7";
        console.log( div[i].style.backgroundColor);
    }

    else if(tobedisplayed[i].innerHTML=="school"){
        console.log("HI");
        div[i].style.backgroundColor="orange";
        console.log( div[i].style.backgroundColor);
    }

    else if(tobedisplayed[i].innerHTML=="work"){
        console.log("HI");
        div[i].style.backgroundColor="purple";
        console.log( div[i].style.backgroundColor);
    }
    else if(tobedisplayed[i].innerHTML=="cleaning"){
        // console.log("HI");
        div[i].style.backgroundColor="green";
        console.log( div[i].style.backgroundColor);
    }
}







//code for date  formatting 

var dateplace=document.querySelector("#date");
console.log("dateplace",dateplace);
var dates=document.querySelectorAll(".dates");
var date
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
for(var i=0;i<dates.length;i++){
var date_today=new Date();
var date_Shown=dates[i].innerHTML;
var dateVisible=date_Shown.split("-");
 if(dateVisible[0]==1970 ){
     dates[i].innerHTML="No deadline"
 }
 else if(date_today.valueOf()>dateplace.valueAsNumber){
alert("Please check the date!");
 }
 else{
dateVisible=date_Shown.split("-");
console.log("date is",dateVisible);
var  date_to_be_displayed=months[Number(dateVisible[1])-1]+" "+dateVisible[2]+","+" "+dateVisible[0];
dates[i].innerHTML=date_to_be_displayed;
}
}








// code for handling the empty date  and the date before  today;

var addButton=document.querySelector("#one");
var dateplace=document.querySelector("#date");

addButton.addEventListener("click", function(event){
    var date_today=new Date();
    var dateplace=document.querySelector("#date");
    var a =new Date(0);
    if(dateplace.value==""){
        dateplace.valueAsDate=new Date(0);
    }
    else if(date_today.valueOf()>dateplace.valueAsNumber){
        alert("I think you cannot do this work on an older day. OK! Lets do it Today!");
        dateplace.valueAsDate=new Date();


         };

});











// code for striking all the data corresponding to all checked boxes when checked 

var checkBox =document.querySelectorAll(".checkbox");
var text=document.querySelectorAll(".text");
var dates=document.querySelectorAll(".dates");
for(let i=0;i<checkBox.length;i++) {
    checkBox[i].addEventListener("click",function(){
        if(checkBox[i].checked){
        text[i].style.textDecoration = "line-through";
        dates[i].style.textDecoration = "line-through";
        }
        else{
            text[i].style.textDecoration = "none";
            dates[i].style.textDecoration = "none";
        }
    })
}

















// code for auto fill upon clicking the delete button

//values
var checkBox =document.querySelectorAll(".checkbox");
var dates=document.querySelectorAll(".dates");
var text=document.querySelectorAll(".text");
var category=document.querySelectorAll(".selected");
var id1=document.querySelectorAll(".id1")

//places
var textplace=document.querySelector("#textplace");
var select=document.querySelector("#select");
var dateplace=document.querySelector("#date");
var id=document.querySelector("#id");
var deletebutton=document.querySelector("#two");

// console.log(checkBox,dates,text,category);
// console.log(textplace,select,dateplace);

deletebutton.addEventListener("click",function(){
    let nothing_is_Checked=true;
    console.log("level 0");
    if(checkBox.length>0){
        console.log("level 1");     // checking whether  any check box exists or not
    
        for(var j=0;j<checkBox.length;j++){
        if(checkBox[j].checked){
        
            console.log("level 2");         // checking whether any checkbox got checked
            nothing_is_Checked=false;

            id.value=id1[j].innerHTML;
           // console.log(id.value);
           document.getElementById('date').valueAsDate = new Date();
            textplace.value=text[j].innerHTML;
           
     break;
}

 }
 if(nothing_is_Checked){
    alert("select atleast one checkbox");
}
}
else {
    console.log("level 3");
    alert("You haven't created a checkbox")
}

});

