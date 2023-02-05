// JS Program to finds the longest common subString between teo strings

const str1 = "qweraLongeststr";
const str2 = "qwereLongest";

const str1Length = str1.length
const str2Length = str2.length
let i=0;
let testStr = "";
let LongestSubString = "";
while (i < str1Length && i < str2Length) {
    if(str1.charAt(i) === str2.charAt(i)) {
        testStr += str1.charAt(i);
    } else {
        if(testStr.length > LongestSubString.length) {
            LongestSubString = testStr;
            testStr = ""
        }
    }

    i++;
}

if(testStr.length > LongestSubString.length) {
    LongestSubString = testStr;
    testStr = ""
}

console.log(LongestSubString)