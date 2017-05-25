# elo-rank

[![Build Status](https://secure.travis-ci.org/dmamills/elo-rank.png)](http://travis-ci.org/dmamills/elo-rank)
[![codecov.io](https://codecov.io/github/dmamills/elo-rank/coverage.svg?branch=master)](https://codecov.io/github/dmamills/elo-rank?branch=master)

A simple implementation of the elo-ranking system, in javascript.

For information about elo see [here](http://en.wikipedia.org/wiki/Elo_rating_system)


### Usage
```javascript

//create object with K-Factor(without it defaults to 32)
var EloRank = require('elo-rank');
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

### License

(The MIT License)

Copyright (c) 2017 Daniel Mills mills.dma@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

