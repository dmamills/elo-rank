# Elo-Rank

[![Build Status](https://secure.travis-ci.org/dmamills/elo-rank.png)](http://travis-ci.org/dmamills/elo-rank)

A simple implementation of the elo-ranking system, in javascript.

For information about elo see [here](http://en.wikipedia.org/wiki/Elo_rating_system)


### Usage
```javascript

//create object with K-Factor(without it defaults to 32)
var elo = require('elo-rank')(15);

var playerA = 1200;
var playerB = 1400;


//Gets expected score for first parameter
var expectedScoreA = elo.getExpected(playerA,playerB);
var expectedScoreB = elo.getExpected(playerB,playerA);

//update score, 1 if won 0 if lost
playerA = elo.updateRating(expectedScoreA,1,playerA);
playerB = elo.updateRating(expectedScoreB,0,playerB);
```

