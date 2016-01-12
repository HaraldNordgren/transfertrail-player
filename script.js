var relations = {
    "Steven Gerrard"   : ["Liverpool","LA Galaxy"],
    "Steve McManaman"  : ["Liverpool","Real Madrid","Manchester City"],
    "Ashley Cole"      : ["Arsenal","Crystal Palace","Arsenal","Chelsea","A.S. Roma"],
    "Bacary Sagna"     : ["Auxerre","Arsenal","Manchester City"],
    "Mario Götze"      : ["Borussia Dortmund","Bayern Munich"],
    "Gareth Bale"      : ["Southampton","Tottenham","Real Madrid"],
    "Denis Irwin"      : ["Leeds","Oldham Athletic","Manchester United","Wolverhampton Wanderers"],
    "Pepe Reina"       : ["Barcelona","Villarreal CF","Liverpool","Bayern Munich","Napoli"],
    "Jonathan Walters" : ["Blackburn Rovers","Bolton Wanderers","Hull City","Crewe Alexandra","Barnsley","Hull City","Scunthorpe United","Wrexham","Chester City","Ipswich Town","Stoke City"],
    "Dani Alves"       : ["Bahia","Sevilla","Barcelona"],
    "Peter Schmeichel" : ["Auxerre","Martigues","Marseille","Bordeaux","Gladsaxe-Hero","Hvidovre","Brondby","Manchester United","Sporting Cp","Aston Villa","Manchester City"],
    "Ezequiel Lavezzi" : ["Club Atlético Independiente","Genoa","San Lorenzo","Napoli","PSG"],
    "Gerard Pique"     : ["Manchester United","Barcelona"],
    "Mark Hughes"      : ["Manchester United","Barcelona","Manchester United","Chelsea","Southampton","Everton","Blackburn Rovers"]
};

//    "" : clubs,


var clubs     = [];
var exhausted = false;

var originalTitle = document.title;
var players   = document.getElementsByClassName("sidebar-qa-content__answers")[0].getElementsByTagName("a");

console.log = function(msg) {
    if (msg == "adjustOpacity" || msg == "nextTransfer" || msg == "addFlightPath" || msg == "checkAnswer" || msg == "gameOver" ||
        /^You have answered \d+ out of \d+ correctly.$/.test(msg)) {

        return;
    }

    if (msg == "moveOn") {
        
        /*
        window.prompt("", "[" + clubs + "]");

        var p = "";
        for (var i = 0; i < players.length; i++) {
            p += players[i].firstChild.nodeValue + " ";
        }
        window.prompt("", p);
        */

        document.title = originalTitle;
        clubs = [];
        exhausted = false;

        return;
    }

    if(exhausted) {
        return;
    }

    //clubs.push('"' + msg + '"');
    clubs.push(msg);

    var matches = [];
    for (var player in relations) {
        playerClubs = relations[player];
        if (clubs.length <= playerClubs.length && JSON.stringify(playerClubs.slice(0,clubs.length)) == JSON.stringify(clubs)) {
            matches.push(player);
        }
    }

    document.title = "matches: " + matches.length;

    if (matches.length == 0) {
        exhausted = true;
    } else if (matches.length == 1) {
        document.title = "Player is " + matches[0];
        exhausted = true;

        for (var i = 0; i < players.length; i++) {
            if (matches[0] == players[i].firstChild.nodeValue) {
                players[i].click();
                break;
            }
        }
    }

};