var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var porEstuden = (numberOfStudents * 100) / total;
var porMentors = (numberOfMentors * 100) / total;
var por = " %";

let porE = Math.round(porEstuden);
let porM = Math.round(porMentors);

text1 = "Percentage students is: " + porE + por;
text2 = "Percentage mentors is: " + porM + por;
console.log(text1);
console.log(text2);
