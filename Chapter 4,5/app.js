// chapter4
var a = 124, b = 421, c = 241;
// legal variables
let hello;
let _1;
let myWorld;
let my_World;
let $;
// illegal variables
// let if;
// let 123;
// let typeof;
// let @my;
// let me&my;
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, _. For Example=$my_1stVariable<br>")
document.write("Variables must begin with a letter, $, _. For Example=$name, _name or name<br>")
document.write("Variable names are case sensitive<br>")
document.write("Variable names should not be JS keywords<br>")





// chapter5
let num1 = 3;
let num2 = 7;
let result = num1 + num2;
document.write("Sum of " , num1 , " and " , num2 , " is " , result, "<br>");
let sub = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
document.write(" Subtraction of " , num1 , " and " , num2 , " is " , sub, "<br>");
document.write(" Multiply of " , num1 , " and " , num2 , " is " , multi, "<br>");
document.write(" Divide of " , num1 , " and " , num2 , " is " , div, "<br>");
let name;
document.write("Value after variable declaration is:", typeof(name), "<br>");
name = 5;
document.write("Initial Value:", name, "<br>")
name++;
document.write("Value after increment is:", name, "<br>");
let num = name + 7; 
document.write("Value after addition is:", num, "<br>");
num--;
document.write("Value after decrement is:", num, "<br>");
let rem = num % 3;
document.write("The remainder is :", rem, "<br>");

let ticket = 600;
let quantity = 5;
let output = ticket * quantity;
document.write("Total Cost to buy ", quantity, " tickets to a movie is ", output, "<br>");


let multip = 4;
document.write("<h3>Table of 4</h3>")
document.write("4x1= ",multip*1, "<br>")
document.write("4x2= ",multip*2, "<br>")
document.write("4x3= ",multip*3, "<br>")
document.write("4x4= ",multip*4, "<br>")
document.write("4x5= ",multip*5, "<br>")
document.write("4x6= ",multip*6, "<br>")
document.write("4x7= ",multip*7, "<br>")
document.write("4x8= ",multip*8, "<br>")
document.write("4x9= ",multip*9, "<br>")
document.write("4x10= ",multip*10, "<br>")

let cel = 22;
let celIntofar = (cel * 9 / 5) +32;
document.write(cel,"C is ",celIntofar, " F <br>");
let far = 30;
let farIntocel =(far-32)*5/9;
document.write(far,"F is ",farIntocel, " C <br>");

let item1 = 200;
let item2 = 500;
let QI1 = 3;
let QI2 = 7;
let ship = 150;
document.write("Price of Item 1 is ", item1, "<br>");
document.write("Price of Item 2 is ", item2, "<br>");
document.write("Quantity of Item 1 is ", QI1, "<br>");
document.write("Quantity of Item 2 is ", QI2, "<br>");
document.write("Shipping Charges ", ship, "<br>")
document.write("Total Cost of you order is ", (item1*QI1)+(item2*QI2)+ship, "<br>");
let totmarks = 550;
let obtmarks = 282;
document.write("Total Marks: ",totmarks, "<br>");
document.write("Obtain Marks: ",obtmarks, "<br>");
document.write("Percantage: ",obtmarks/totmarks*100, "<br>");
let dol = 10;
let riy = 25;
let pdol = dol*280;
let priy = riy*75;
document.write("<h3>Currency in PKR</h3><br>");
document.write("Total Currency in PKR: ", pdol+priy, "<br>");
let calc = 3+5*10/2;
document.write("<h3>Age Calculator</h3>");
let cury = 2024;
let biry =2000;
let age= cury-biry;
document.write("Current Year: ",cury, "<br>");
document.write("Birth Year: ",biry, "<br>");
document.write("Your Age: ",age, "<br>");
let r = 20;
const pi = 3.142;
document.write("<h3>The Geometrizer</h3>");
document.write("Radius of a Circle: ", r, "<br>");
let circu = 2*pi*r;
document.write("Circumference of a Circle: ", circu, "<br>");
let area = pi*(r*2);
document.write("Area of a Circle: ", area, "<br>");
document.write("<h3>The Lifetime Supply Calculator</h3>");
let snack= chocolate;
document.write("Favourite Snack: ", snack , "<br>");
let cage = 24;
document.write("Current Age: ", cage , "<br>");
let mage = 50;
document.write("Estimated Maximum Age: ", mage , "<br>");
let pday = 2;
document.write("Amount of Snack per day: ", pday , "<br>");
let res = (mage-cage)*365*2;
document.write("You will need ", res , " to last you until the ripe old age of ", mage);