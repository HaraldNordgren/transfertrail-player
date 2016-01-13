var relations = {
    "Steven Gerrard"       : ["Liverpool","LA Galaxy"],
    "Steve McManaman"      : ["Liverpool","Real Madrid","Manchester City"],
    "Ashley Cole"          : ["Arsenal","Crystal Palace","Arsenal","Chelsea","A.S. Roma"],
    "Bacary Sagna"         : ["Auxerre","Arsenal","Manchester City"],
    "Mario Götze"          : ["Borussia Dortmund","Bayern Munich"],
    "Gareth Bale"          : ["Southampton","Tottenham","Real Madrid"],
    "Denis Irwin"          : ["Leeds","Oldham Athletic","Manchester United","Wolverhampton Wanderers"],
    "Pepe Reina"           : ["Barcelona","Villarreal CF","Liverpool","Bayern Munich","Napoli"],
    "Jonathan Walters"     : ["Blackburn Rovers","Bolton Wanderers","Hull City","Crewe Alexandra","Barnsley","Hull City","Scunthorpe United","Wrexham","Chester City","Ipswich Town","Stoke City"],
    "Peter Schmeichel"     : ["Auxerre","Martigues","Marseille","Bordeaux","Gladsaxe-Hero","Hvidovre","Brondby","Manchester United","Sporting Cp","Aston Villa","Manchester City"],
    "Ezequiel Lavezzi"     : ["Club Atlético Independiente","Genoa","San Lorenzo","Napoli","PSG"],
    "Gerard Pique"         : ["Manchester United","Barcelona"],
    "Mark Hughes"          : ["Manchester United","Barcelona","Manchester United","Chelsea","Southampton","Everton","Blackburn Rovers"],
    "Tim Cahill"           : ["Millwall","Everton","New York City FC","Shanghai Shenhua"],
    "Zinedine Zidane"      : ["AS Cannes","Bordeaux","Juventus","Real Madrid"],
    "Rio Ferdinand"        : ["West Ham","Bournemouth","Leeds","Manchester United","QPR"],
    "Frank Lampard"        : ["West Ham","Swansea City","West Ham","Chelsea","Manchester City","New York City FC"],
    "Graeme Le Saux"       : ["Chelsea","Blackburn Rovers","Chelsea","Southampton"],
    "Shay Given"           : ["Blackburn Rovers","Newcastle United","Manchester City","Aston Villa","Stoke City"],
    "Robert Lewandowski"   : ["Znicz Pruszkow","Lech Poznan","Borussia Dortmund","Bayern Munich"],
    "Jermain Defoe"        : ["West Ham","Bournemouth","West Ham","Tottenham","Portsmouth","Tottenham","Toronto FC","Tottenham","Sunderland"],
    "Fernando Torres"      : ["Atlético Madrid","Liverpool","Chelsea","A.C. Milan","Atlético Madrid"],
    "Zlatan Ibrahimović"   : ["Malmo","Ajax","Juventus","Internazionale"],
    "Cristiano Ronaldo"    : ["Sporting Cp","Manchester United","Real Madrid"],
    "Stewart Downing"      : ["Middlesbrough","Aston Villa","Liverpool","West Ham","Middlesbrough"],
    "Pavel Nedvěd"         : ["Dukla Prague","Sparta Prague","S.S. Lazio","Juventus"],
    "Anthony Martial"      : ["Lyon","Monaco","Manchester United"],
    "Mario Balotelli"      : ["Lumezzane","Internazionale","Manchester City","A.C. Milan","Liverpool"],
    "Ángel Di María"       : ["Benfica","Real Madrid","Manchester United","PSG"],
    "David Batty"          : ["Leeds","Blackburn Rovers","Newcastle United","Leeds"],
    "Edwin van der Sar"    : ["Ajax","Juventus","Fulham","Manchester United"],
    "Sol Campbell"         : ["Tottenham","Arsenal","Portsmouth","Notts County","Arsenal","Newcastle United"],
    "Cesc Fabregas"        : ["Arsenal","Barcelona","Chelsea"],
    "James Milner"         : ["Leeds","Newcastle United","Aston Villa","Manchester City","Liverpool"],
    "Edin Džeko"           : ["Zeljeznicar","Teplice","Ústí nad Labem","VfL Wolfsburg","Manchester City","A.S. Roma"],
    "Ian Rush"             : ["Chester City","Liverpool","Juventus","Liverpool","Leeds","Newcastle United","Wrexham","Sydney Olympic"],
    "Hernan Crespo"        : ["River Plate","Parma","S.S. Lazio","Internazionale","Chelsea","A.C. Milan","Internazionale","Genoa","Parma"],
    "Michael Carrick"      : ["West Ham","Tottenham","Manchester United"],
    "Peter Schmeichel"     : ["Gladsaxe-Hero","Hvidovre","Brondby","Manchester United","Sporting Cp","Aston Villa","Manchester City"],
    "Kaká"                 : ["São Paulo FC","A.C. Milan","Real Madrid","A.C. Milan","Orlando City"],
    "Eric Cantona"         : ["Auxerre","Martigues","Marseille","Bordeaux","Montpellier","Nimes","Leeds","Manchester United"],
    "Emmanuel Petit"       : ["Monaco","Arsenal","Barcelona","Chelsea"],
    "Wesley Sneijder"      : ["Ajax","Real Madrid","Internazionale","Galatasaray"],
    "Thierry Henry"        : ["Monaco","Juventus","Arsenal","Barcelona","New York Red Bulls"],
    "Andrea Pirlo"         : ["Brescia","Internazionale","Reggina","Brescia","A.C. Milan","Juventus","New York City FC"],
    "Alan Shearer"         : ["Southampton","Blackburn Rovers","Newcastle United"],
    "Carlos Tevez"         : ["Boca Juniors","Corinthians","West Ham","Manchester United","Manchester City","Juventus","Boca Juniors"],
    "Vincent Kompany"      : ["Anderlecht","Hamburger SV","Manchester City"],
    "Rafael van der Vaart" : ["Ajax","Hamburger SV","Real Madrid","Tottenham","Hamburger SV","Real Betis"],
    "Dennis Bergkamp"      : ["Ajax","Internazionale","Arsenal"],
    "Arjen Robben"         : ["Groningen","PSV Eindhoven","Chelsea","Real Madrid","Bayern Munich"],
    "Clint Dempsey"        : ["New England Revolution","Fulham","Tottenham","Seattle Sounders FC"],
    "Edgar Davids"         : ["Ajax","A.C. Milan","Juventus","Barcelona","Tottenham","Ajax","Crystal Palace","Barnet"],
    "Nani"                 : ["Sporting Cp","Manchester United","Sporting Cp","Fenerbahce"],
    "Miroslav Klose"       : ["FC 08 Homburg","1. FC Kaiserslautern","Werder Bremen","Bayern Munich","Lazio"],
    "Jonathan Woodgate"    : ["Leeds","Newcastle United","Real Madrid","Middlesbrough","Tottenham","Stoke City","Middlesbrough"],
    "Mesut Özil"           : ["Schalke 04","Werder Bremen","Real Madrid","Arsenal"],
    "Radamel Falcao"       : ["River Plate","Porto","Atlético Madrid","Monaco","Manchester United","Chelsea"],
    "Ian Wright"           : ["Crystal Palace","Arsenal","West Ham","Celtic","Burnley"],
    "Bebé"                 : ["Estrela","Vitoria de Guimaraes","Manchester United","Besiktas","Rio Ave","Pacos de Ferreira","Benfica"],
    "Diego Forlán"         : ["Club Atlético Independiente","Manchester United","Villarreal CF","Atlético Madrid","Internazionale","Sport Club Internacional","Cerezo Osaka","Peñarol"],
    "Michael Owen"         : ["Liverpool","Real Madrid","Newcastle United","Manchester United","Stoke City"],
    "Juan Mata"            : ["Real Madrid","Valencia","Chelsea","Manchester United"],
    "Kevin De Bruyne"      : ["Genk","Chelsea","VfL Wolfsburg","Manchester City"],
    "Paul Ince"            : ["West Ham","Manchester United","Internazionale","Liverpool","Middlesbrough","Wolverhampton Wanderers"]


};

//    "" : clubs,


var clubs     = [];
var exhausted = false;

var originalTitle = document.title;
var players   = document.getElementsByClassName("sidebar-qa-content__answers")[0].getElementsByTagName("a");

var DEBUG     = true;


function findMatches() {
    var matches = [];
    for (var player in relations) {
        playerClubs = relations[player];
        if (clubs.length <= playerClubs.length && JSON.stringify(playerClubs.slice(0,clubs.length)) == JSON.stringify(clubs)) {
            matches.push(player);
        }
    }
    return matches;
}

console.log = function(msg) {
    if (msg == "adjustOpacity" || msg == "nextTransfer" || msg == "addFlightPath" || msg == "checkAnswer" || msg == "gameOver" ||
        /^You have answered \d+ out of \d+ correctly.$/.test(msg)) {

        return;
    }

    if (msg == "moveOn") {
        
        if (DEBUG && findMatches().length == 0) {

            var clubsPadded = [];
            for (var i = 0; i < clubs.length; i++) {
                clubsPadded.push('"' + clubs[i] + '"');
            }
            window.prompt("", "[" + clubsPadded + "]");

            var p = "";
            for (var i = 0; i < players.length; i++) {
                p += players[i].firstChild.nodeValue + " ";
            }
            window.prompt("", p);
        }

        document.title = originalTitle;
        clubs = [];
        exhausted = false;

        return;
    }

    clubs.push(msg);
    
    if(exhausted) {
        return;
    }

    matches = findMatches();
    document.title = "Matches: " + matches.length;

    if (matches.length == 0) {
        exhausted = true;
    } else if (matches.length == 1) {
        document.title = matches[0];
        exhausted = true;

        for (var i = 0; i < players.length; i++) {
            if (matches[0] == players[i].firstChild.nodeValue) {
                players[i].click();
                break;
            }
        }
    }
};