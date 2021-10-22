/*
    Authors: Kaine van Ommeren, Elise Rijkers & Nick de Rooij
    Date: 08-10-2021
    Subject: Website Scouting Jan van Hoof
*/

// Berekent leeftijd Scouting Jan van Hoof  vanaf het jaar 1980
var yearCreated = 1980;
var d = new Date();
var n = d.getFullYear();

function getAge(year)
{
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - year;
    return age;
}
var calulatedAge = getAge(yearCreated);

document.getElementById("year_age").innerHTML = calulatedAge;