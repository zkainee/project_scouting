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

function questions()
{
    alert("Welkom bij de vragenlijst\nWe stellen een aantal vragen bij welke rang jij hoort.\nHiermee kunnen we je indelen bij een rang.\nSucces!");
    /* Vraag aan gebruiker */
    var name_question = prompt("Wat is je naam? ");
    alert("Welkom " + name_question);
    var age_question = prompt("Wat is je leeftijd? ");
    
    /* Checkt of de gebruiker lager dan een bepaalde leeftijd is en daarop zegt die bij welke rang je hoort. */ 
    /* Bijv. iemand die 9 is komt bij de Welpen en iemand die 16 is komt bij de Scouts */
    if (age_question < 11) 
    {
        document.getElementById("age_text").innerHTML = "Je hoort bij de Welpen!";
    } 
    else if (age_question < 15) 
    {
        document.getElementById("age_text").innerHTML = "Je hoort bij de Scouts!";
    } 
    else if (age_question < 18) 
    {
        document.getElementById("age_text").innerHTML = "Je hoort bij de Explorers!";  
    } 
    else if (age_question < 25) 
    {
        document.getElementById("age_text").innerHTML = "Je hoort bij de Pivo's!";
    } 
    else if (age_question > 25) 
    {
        document.getElementById("age_text").innerHTML = "Je hoort bij de stam!";
    } 
    else 
    {
        document.getElementById("age_text").innerHTML = "Foutief antwoord";
    }

    alert("Je bent " + age_question + " jaar");

    /* Logging in console */
    console.log(name_question);
    console.log(age_question);
}

/* Variable die berekent hoeveel jaar de scouting is vanaf het jaartal 1980 */
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
