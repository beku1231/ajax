'use strict';
$( document ).ready( function() {
    
var przycisk = $('#przycisk');
var przycisk2 = $('#przycisk2');
var doDanych = $('#doDanych');
$( przycisk ).click( function() {
    
$.ajax({
url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
dataType: 'json',
success: function (resultJSON) {
console.log(resultJSON);
$(doDanych).append(resultJSON.userID);
$(doDanych).append(resultJSON.userName);
$(doDanych).append(resultJSON.userURL);
},
onerror: function (msg) {
console.log(msg);
}
});
    
//$.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
//// wyswietl w konsoli
//console.log(data);
//data.forEach(function(element, index){
//console.log(element);
//console.log(index);
//});
//});
var scrolling = $('scrolling');
});
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        pobierzDane();
           // ajax call get data from server and append to the div
    }
});    
    
});

function pobierzDane(){
    $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
// wyswietl w konsoli
            console.log(data);
            data.forEach(function(element, index){
            $(scrolling).append("<p>"+element.name+"</p>");
               
});
});
}
pobierzDane();
pobierzDane();

    

