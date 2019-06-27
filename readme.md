# elo-rank-typescript

A simple implementation of the elo-ranking system, in typescript.

For information about elo see [here](http://en.wikipedia.org/wiki/Elo_rating_system)

### Usage

```js
//create object with K-Factor(without it defaults to 32)
var EloRank = require("elo-rank").default;
var elo = new EloRank(15);

var playerA = 1200;
var playerB = 1400;

//Gets expected score for first parameter
var expectedScoreA = elo.getExpected(playerA, playerB);
var expectedScoreB = elo.getExpected(playerB, playerA);

//update score, 1 if won 0 if lost
playerA = elo.updateRating(expectedScoreA, 1, playerA);
playerB = elo.updateRating(expectedScoreB, 0, playerB);
```
