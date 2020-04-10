/**Projet Euler 31 Solution
 In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 It is possible to make £2 in the following way:

 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 How many different ways can £2 be made using any number of coins?*/
 
 var COINS = [1, 2, 5, 10, 20, 50, 100, 200];

function ways(sum) {
	var memo = [];
	for (var i = 0; i <= sum; i++) {
		memo[i] = 0;
	}
	memo[0] = 1;
	for (i = 0; i < COINS.length; i++) {
		for (var j = COINS[i]; j <= sum; j++) {
			memo[j] += memo[j - COINS[i]];
		}
	}
	return memo[sum];
}

console.log( ways(200) );