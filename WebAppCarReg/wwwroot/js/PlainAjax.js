﻿console.log("SimpelText");
$.get("PlainAjax/SimpelText", function (responseData, statusCode) {
    console.log("Status Code:", statusCode);
    console.log("data:", responseData);
});

console.log("CantFindIt");
$.get("PlainAjax/CantFindIt", function (responseData, statusCode) {
    /* console.log("Status Code:", statusCode);//this will not run becouse of 404 is considerd a fail
     console.log("data:", responseData);*/
}).fail(function (responseData, statusCode) {
    console.log("Fail Status Code:", statusCode);
    console.log("Fail data:", responseData);
});

console.log("GiveMeJSON");
$.get("PlainAjax/GiveMeJSON", function (responseData, statusCode) {
    console.log("Status Code:", statusCode);
    console.log("data:", responseData);
}).fail(function (responseData, statusCode) {
    /*  console.log("Fail Status Code:", statusCode); will sucssed
      console.log("Fail data:", responseData);*/
});

function AjaxCalcPost(event) {
    //event.preventDefualt();

    console.log("numA:", $("#numA").val());
    console.log("numB:", $("#numB").val());

    $.post("PlainAjax/CalcAddition",
        {
            numberA: $("#numA").val(),
            numberB: $("#numB").val()
        },
        function (responseData, statusCode) {
            console.log("Status Code:", statusCode);
            console.log("data:", responseData);
            $("#divToTarget").text(responseData);
        }
    );
};