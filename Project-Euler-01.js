/**Projet Euler 01 Solution
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.*/

function Euler(sınır) {
    var i = 0;
    var toplam = 0;
    for(i = 3; i < sınır; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
           toplam += i; 
        }
    }
    return toplam;
}
console.log(Euler(1000));
