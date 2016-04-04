[![Code Climate](https://codeclimate.com/github/HaraldNordgren/transfertrail-player/badges/gpa.svg)](https://codeclimate.com/github/HaraldNordgren/transfertrail-player)

Introduction
============

This Chrome extension plays the Transfer Trail game automatically.

Transfer Trail is an in-browser game that presents you with the transfer history of a football player, one team at a time, and your job is to guess the player as quickly as possible. There are always 3 options offered.

<img src="readme-files/Start-screen.png" height="300" />

I noticed that the game print all of its actions to `console.log`. So by injecting my script and redefining that function we can capture each action:

```
adjustOpacity
Sporting Cp
nextTransfer
Manchester United
addFlightPath
nextTransfer
Real Madrid
addFlightPath
nextTransfer
checkAnswer
moveOn
```

After disregarding certain keywords, we interpret each string as a team, match it to our player database and soon as we get a unique match the correct player is selected.

The sequence above corresponds to Cristiano Ronaldo, starting out in Sporting CP, then going to Manchester United and finally ending up in Real Madrid.

<img src="readme-files/correct.png" height="300" />

Installation
============

There are two scripts for loading the extension: `load-extension.sh` for \*nix and `load-extension.bat` for Windows.

First close Chrome and then run on of the scripts to temporarily load the extension. Then watch how it starts playing the game and scores over 300 points.
