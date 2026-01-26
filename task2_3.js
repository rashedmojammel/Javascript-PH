/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let grade = 70;

if ( grade >= 90 && grade <= 100)
{
    console.log("Your grade is A");
}
else if(grade >= 80 && grade < 90)
{
    console.log("Your grade is B");
}
else if(grade >= 70 && grade < 80)
{
    console.log("Your grade is C");
}
else if(grade >= 60 && grade < 70)
{
    console.log("Your grade is C");
}
else if(grade >= 50 && grade < 60)
{
    console.log("Your grade is D");
}
else
{
    console.log("You are fail");
}


