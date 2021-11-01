/*
    Authors: Kaine van Ommeren, Elise Rijkers & Nick de Rooij
    Date: 08-10-2021
    Subject: Website Scouting Jan van Hoof
*/

// Berekent leeftijd Scouting Jan van Hoof vanaf het jaar 1980
function getAge(year)
{
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - year;
    return age;
}

function vraagnaam()
{
var user_name = prompt("Wat is je naam?");
console.log("Hallo " + user_name);
var user_age = prompt("Wat is je leeftijd");
console.log("U bent " + user_age + "jaren jong");

}

var yearCreated = 1980;
var d = new Date();
var n = d.getFullYear();

var calulatedAge = getAge(yearCreated);

document.getElementById("year_age").innerHTML = calulatedAge;

// Authenticatie systeem om bots tegen te gaan
var choice = confirm("Welkom\nVerifieer uw identiteit door op 'OK' te klikken");
if (choice != true)
{
    location.href="pages/notverified.html";
}

logo = document.getElementById("logo");
logo.onclick = vraagnaam;

