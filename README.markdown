[![Code Climate](https://codeclimate.com/github/HaraldNordgren/transfertrail-player/badges/gpa.svg)](https://codeclimate.com/github/HaraldNordgren/transfertrail-player)

Introduction
============

This Chrome extension plays the Transfer Trail game automatically. Transfer Trail is an in-browser game that presents you with a football players transfer history incrementally, and your job is to guess the player out of 3 options as quickly as possible.

![Start screen](readme-files/Start-screen.png)

I noticed that the game print all of its actions to `console.log`. So by injecting my script and redefining that function we can capture each action. After disregarding certain keywords, we interpret each string as a team, match it to our database of players and if we get a unique match we select the correct player.

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
The sequence above corresponds to Cristiano Ronaldo, starting out in Sprting CP, then going to Macnhester United and ending up in Real Madrid.

Installation
============

Close down Chrome. Then run the `load-extension.sh` or `load-extension.bat` depending on your platform to load the extension and start playing the game. Just like that!
