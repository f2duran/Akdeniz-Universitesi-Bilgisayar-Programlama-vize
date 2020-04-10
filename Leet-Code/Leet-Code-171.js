//Leet Code 171 solution

/** Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
 */

var titleToNumber = function(s) {
    var total = 0;
    var len = s.length;
    var base = 26;
    
    for(var i = 0; i < len; i++){
        var pow = len - i - 1;
        var num = getNumber(s[i]);
        
        total += Math.pow(base,pow)*num;
    }
    
    return total;
};

var getNumber = function(c){
    var charCodeOfA = 'A'.charCodeAt(0);
    var charCodeOfTarget = c.charCodeAt(0);
    
    return charCodeOfTarget - charCodeOfA + 1;
};