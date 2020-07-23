//==========CHAPTER-1 "ALERTS" ==========STARTS
//1.
alert("Welcome to The English Luggagge");
//2.
alert("Error! Please enter a valid password.");
//3.
alert("Welcome to JS Land...\nHappy Coding!");
//4.
alert("Welcome to JS Land...")
alert("Happy Coding!\n  Prevent this page from creating additional dialogs.");
//5.
//console.log("Hello... I can run JS through my web browser's console");
//==========CHAPTER-1 "ALERTS"==========ENDS
//CHAPTER#2 =========="VARIABLES FOR STRINGS " ==========STARTS
//1.
var username = "abc";
//2.
var myName = "humaira";
alert(myName);
//3.
var message = "Hello World";
alert(message);
//4.
var name = "john Doe";
var age = "15 years old";
var course = "Certified Moblie Application Development";
alert(name);
alert(age);
alert(course);
//5.
var pizza = "pizza\npizz\npiz\npi\np";
alert(pizza);
//6.
var email1 = "My email address is ";
var email2 = "example@example.com";
alert(email1 + email2);
//7.
var book1 = "I am trying to learn from the Book ";
var book = "A smarter way to learn JavaScript";
alert(book1 + book);
//8.
var txt = "Yah! I can write HTML content through JavaScript<br>";
document.write(txt);
//9.
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
//CHAPTER#2 =========="VARIABLES FOR STRINGS " ==========ENDS
//CHAPTER#3 =========="VARIABLES FOR NUMBERS" ==========STARTS
1.
var age = "I am 15 years old";
alert(age);
//2.
//3.
var birthYear = "My birth year is 1990 \nData type of my declared variable in number";
alert(birthYear);
//4.
var visitorName = "<b>John Doe </b>";
var prouduct = "<b>T-shirts (s) </b>";
var quantity = "<b>5 </b>";
document.write(visitorName + " " + "ordered"
  + quantity + prouduct + "on XYZ Clothing Store.<br><br>")
//CHAPTER#3 =========="VARIABLES FOR NUMBERS" ==========ENDS 
//CHAPTER#4 =========="LEGAL AND ILLEGAL" ==========STARTS
// 1. Declare 3 variables in one statement.
// alert total = cost + profit ;
// 2. Declare 5 legal & 5 illegal variable names.
// legal                           illegal
// 1) firstname                    1)first name
// 2) fist_name                    2)20firstname
// 3) first-name                   3)alert
// 4) firstName                    4)not be a keyword
// 5) firstname20                  5)not in quotes

//3.
var text = ("<b>Rules for Naming JS Variables</b><br><br>");
document.write(text);
var text1 = ("Variable names can only contain numbers,$,and_.For example $my_1stVariable<br>Variables must begin with a letter, or_. For example $name, _name or name<br>Variable names are case sensitive.<br>Variable names should not be JS keywords.<br></br>")
document.write(text1);
//CHAPTER#4 =========="LEGAL AND ILLEGAL" ==========ENDS
//CHAPTER#5 =========="MATH EXPRESSIONS" ==========STARTS
//1.
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c);
//2.=====subtraction======
var a = 13;
var b = 5;
var c = a - b;
document.write("<br>Difference of " + a + " and " + b + " is " + c);
//  =====multiplication======
var a = 4;
var b = 2;
var c = a * b;
document.write("<br>Product of " + a + " and " + b + " is " + c);
//  =====division======
var a = 16;
var b = 2;
var c = a / b;
document.write("<br>Quotient of " + a + " and " + b + " is " + c);
//  =====modulus======
var a = 16;
var b = 2;
var c = a % b;
document.write("<br>Modulus of " + a + " and " + b + " is " + c);
//3.
//4.
var ticket = 600;
var buy = 5;
var total = ticket * buy;
document.write("<br>Total cost to buy 5 tickets to a movie is " + total + "PKR<br><br>");
//5.
var u = +prompt("Enter Your Number");
for (var s = 1; s < 11; s++) {
  document.write(u + "x" + s + "=" + u * s + "<br>");
}
//CHAPTER#5 =========="MATH EXPRESSIONS" ==========ENDS
//CHAPTER#6-9 =========="MATH EXPRESSIONS" ==========STARTS
//3.
var userName = prompt("Enter your Name");
alert("Welcome " + userName + " Glad to see you!");
//6.
//(A)
var subject1 = prompt("Enter subject 1");
alert(subject1);
var subject2 = prompt("Enter subject 2");
var subject3 = prompt("Enter subject 3");
//(b)
var total = 100;
//(c)
var obtain1 = +prompt("enter your " + subject1 + " marks");
//(d)
var obtain2 = +prompt("enter your " + subject2 + " marks");
var obtain3 = +prompt("enter your " + subject3 + " marks");
var totObt = obtain1 + obtain2 + obtain3;
var per1 = obtain1 / total * 100;
var per2 = obtain2 / total * 100;
var per3 = obtain3 / total * 100;
var totPer = per1 + per2 + per3;
//(e)
document.write("<b>Subject</b><br>" + subject1 + "<br>" + subject2 + "<br>" + subject3);
document.write("<br><b>Total</b><br>" + total + "<br>" + total + "<br>" + total + "<br>");
document.write("<br><b>Obtained Marks</b><br>" + obtain1 + "<br>" + obtain2 + "<br>" + obtain3 + "<br>" + totObt);
document.write("<br><b>Percentage</b><br>" + per1 + "<br>" + per2 + "<br>" + per3 + "<br>" + totPer);
//CHAPTER#6-9 =========="MATH EXPRESSIONS" ==========ENDS
//CHAPTER#9-11 =========="USER INPUT & CONDITIONAL STATEMENT" ==========STARTS
//1.
var cityName = prompt("Enter Your City ");
if (cityName = "karachi") {
  document.write("Welcome to city of Lights!");
};
//2.
var m = "male";
var f = "female";
var gender = prompt("Enter your gender");
if (gender == m) {
  alert("Good Morning Sir")
} else {
  alert("Good Morning Ma'am")
};
//3.
var r = "red";
var g = "green";
var y = "yellow";
var signalColor = prompt("enter signalcolor");
if (signalColor == r) {
  console.table("Must Stop")
  if (signalColor == g) {
    console.table("Move Now")
    if (signalColor == y) {
      console.table("Ready to Move")
    }
  }
};
//CHAPTER#9-11 =========="USER INPUT & CONDITIONAL STATEMENT" ==========ENDS
//CHAPTER#12-13 =========="IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS" ==========STARTS
//CHAPTER#14-16 =========="ARRAYS" ==========STARTS

//  1
var students = [];

//  2
var students = new Array();

//  3
var colors = ["Yellow", "Orange", "Red", "Purple", "Blue"];
document.write("String Array: " + colors + "<br/>" + "<br/>" + "<br/>");

//  4
var marks = [203, 212, 288, 233, 264];
document.write("Number Array: " + marks + "<br/>" + "<br/>" + "<br/>");

//  5
var bool = [true, false, false, true];
document.write("Boolean Array: " + bool + "<br/>" + "<br/>" + "<br/>");

//  6
var data = ["Masood", "Humaira", 32, true];
document.write("Mixed Array: " + data + "<br/>" + "<br/>" + "<br/>");

//  7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
var count = 0;
var i = 0;

document.write("Qualification" + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(
  ++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>"
);

//  8
var studentNames = ["huma", "humaira", "nadia"];
var studentMarks = [467, 475, 389];
var index = 0;

document.write(
  "Score of " +
  studentNames[index] +
  " is " +
  studentMarks[index] +
  ". Percentage: " +
  (studentMarks[index++] / 500) * 100 +
  "<br/>"
);
document.write(
  "Score of " +
  studentNames[index] +
  " is " +
  studentMarks[index] +
  ". Percentage: " +
  (studentMarks[index++] / 500) * 100 +
  "<br/>"
);
document.write(
  "Score of " +
  studentNames[index] +
  " is " +
  studentMarks[index] +
  ". Percentage: " +
  (studentMarks[index++] / 500) * 100 +
  "<br/>"
);
document.write("<br/>" + "<br/>");

//  9
var colorNames = [];

var input = prompt("What color you wants to add to the beginning?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

input = prompt("What color you wants to add to the end?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

input = prompt("Add two more color to the beginning/nEnter first color: ");
colorNames.unshift(input);
input = prompt("Add two more color to the beginning/nEnter second color: ");
colorNames.unshift(input);

document.write("Updated array: " + colorNames + "<br/>");

colorNames.shift();

document.write("Updated array: " + colorNames + "<br/>");

colorNames.pop();

document.write("Updated array: " + colorNames + "<br/>");

var indexNo = +prompt("Which index you wants to add a color: ");
input = prompt("Please enter your color name: ");
colorNames.splice(indexNo, 0, input);

document.write("Updated array: " + colorNames + "<br/>");

indexNo = +prompt("At which index you wants to delete a color: ");
var deleteCount = +prompt("how many colors you want to delete ");
colorNames.splice(indexNo, deleteCount);

document.write("Updated array: " + colorNames + "<br/>");

//  10
var studentMarks = [45, 98, 34, 53, 67, 88];
document.write("Score of Students: " + studentMarks + "<br/>");
document.write(
  "Ordered Score of Students: " +
  studentMarks.sort() +
  "<br/>" +
  "<br/>" +
  "<br/>"
);

//  11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>");
var selectedCities = [];
selectedCities = cities.slice(2, 5);
document.write(
  "Selected cities List:" +
  "<br/>" +
  selectedCities +
  "<br/>" +
  "<br/>" +
  "<br/>"
);

//  12
var arr = ["This", "is", "my", "cat"];
document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>");
var joinarr = arr.join(" ");
document.write("String:" + "<br/>" + joinarr + "<br/>" + "<br/>" + "<br/>");

//  13
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

//  14
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

//  15
var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");
//CHAPTER#14-16 =========="ARRAYS" ==========ENDS
//CHAPTER#17-20 =========="ARRAYS AND LOOP" ==========STARTS

//  1
var arr = [];

// 2
var arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

//  3
for (i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

//  4
var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");
for (i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " X " + i + " = " + tableNumber * i + "<br>");
}

//  5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}
for (j = 0; j < fruits.length; j++) {
  document.write("Element at index " + j + " is " + fruits[i] + "<br>");
}

//  6
document.write("<h4>" + "Counting" + "</h4>");
for (i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h4>" + "Reverse Counting" + "</h4>");
for (i = 10; i > 0; i--) {
  document.write(i + ", ");
}

document.write("<h4>" + "Even" + "</h4>");
for (i = 0; i <= 20; i = i + 2) {
  document.write(i + ", ");
}

document.write("<h4>" + "Odd" + "</h4>");
for (i = 1; i <= 20; i = i + 2) {
  document.write(i + ", ");
}

document.write("<h4>" + "Series" + "</h4>");
for (i = 2; i <= 20; i = i + 2) {
  document.write(i + "k, ");
}

//  7
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var check = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
for (i = 0; i < arr.length; i++) {
  if (check === arr[i]) {
    document.write(arr[i] + " is available at index " + i + " in our bakery");
    break;
  } else {
    document.write("We are sorry." + check + " is not avaible in our bakery");
    break;
  }
}

//  8
var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);

//  9
var arr = [24, 53, 78, 91, 12];
var smallestNumber = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] < smallestNumber) {
    smallestNumber = arr[i];
  }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);

//  10
for (i = 5; i <= 100; i = i + 5) {
  document.write(i + ", ");
}
//CHAPTER#17-20 =========="ARRAYS AND LOOP" ==========ENDS
//==========CHAPTER 21-25 "STRING METHODS"==========STARTS
//1.
var fname = prompt("Enter your First Name");
var lname = prompt("Enter your Last Name");
var fullName = (fname + " " + lname);
alert("Welcome" + " " + fullName + "!");
//2.
var fMob = prompt("Enter your favourite mobile phone model name");
var result = fMob.length;
document.write("My favorite phone is : " + fMob +
  " <br>Length of string : " + result);
//3.
var text = "Pakistani";
var result = text.indexOf("n");
document.write("String : " + text + " <br>Index of 'n' : " + result);
//4.
var text1 = "Hello World";
var result = text1.lastIndexOf("l");
document.write("String : " + text1 + " <br>Last Index of 'l': " + result);
//5.
var text2 = "Pakistani";
var result = text2.charAt(3);
document.write("String : " + text2 + " <br>Character at Index 3: " + result);
//6.
var firstName = prompt("Enter your first Name ");
var lastName = prompt("Enter your last Name ");
var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName + " !");
//7.
var city = "Hyderabad";
var result = city.replace("Hyder", "Islam");
document.write("City : " + city + " <br>After replacement : " + result);
//8.
var message =
  "<br>Ali and Sami are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");
document.write(result);
//9.
var numString = "472";
var onlyNum = 472;
var result = Number(numString);
var type1 = typeof numString;
var type2 = typeof onlyNum;
document.write("<br>Value: " + result +
  " <br>Type: " + type1 +
  "<br>Value: " + onlyNum +
  " <br>Type: " + type2);
//10.
var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.toUpperCase();
document.write("<br>User input : " + userInput + " <br>Upper case : " + result);
//11.
var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("<br>User input : " + userInput + " <br>Title case : " + result);
//12.
var num = 35.36;
var result = parseInt(num.toString().replace(".", ""));
document.write("<br>Number : " + num + " <br>Result : " + result);
//13.

//14.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_value = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/madam?"
);
var reqItem = user_value.toLowerCase();
var found;
var indexOfOrder;
for (var i = 0; i < a.length; i++) {
  if (a[i] == reqItem) {
    found = a[i];
    indexOfOrder = i;
  }
}
if (!found) {
  document.write(
    "We are sorry. " + user_value + " is <b>not available</b> in our bakery<br>"
  );
} else {
  document.write(
    found + " is <b>available</b> at index " + indexOfOrder + " in our bakery<br>"
  );
}
//15.

//16.
var university = "University of Karachi";
var result = university.split("");
for (var i = 0; i < result.length; i++) {
  document.write(result[i] + "<br>");
}
//17.
var userInput = prompt("Write a text");
var result = userInput.substr(-1);
document.write("User input : " + userInput +
  " <br>Last character of input : " + result
);
//18.
var temp = "The quick brown fox jumps over the lazy dog";
var result = (temp.match(/the/gi) || []).length;
document.write("<br>Text : " + temp +
  " <br>There are " + result + " occurrences of word 'the'");
//==========CHAPTER 21-25 "STRING METHODS"==========ENDS
//==========CHAPTER 26-30 "MATH METHODS "==========STARTS
//1.
var num = prompt("Enter a positive number for e.g: 3.45214");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
  "<br>number : " +
  num +
  "<br>round off value : " +
  round +
  "<br>floor value : " +
  floor +
  "<br>ceil value : " +
  ceil
);
//2.
var num = prompt("Enter a negative number for e.g: -2.673");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
  "number : " +
  num +
  "<br>round off value : " +
  round +
  "<br>floor value : " +
  floor +
  "<br>ceil value : " +
  ceil
);
//3.
var value = -8;
var result = Math.abs(value);
document.write("The absolute value of " + value + " is " + result);
//4.
var result = Math.floor(Math.random() * 6);
document.write("Random dice value : " + result);
var result = Math.floor(Math.random() * 6);
document.write("<br>Random dice value : " + result);
//5.
var result = Math.floor(Math.random() * 2);
document.write("Random coin value heads: " + result);
var result = Math.floor(Math.random() * 2);
document.write("<br>Random coin value tails : " + result);
//6.
var rand = Math.floor(Math.random() * 100);
document.write("random number between 1 and 100 : " + rand);
//7.
var userWeight = prompt("Enter your weight in kilograms :  ");
var result = userWeight.replace(/\D/g, "");
document.write("The weight of user is : " + result + " kilograms");
//8.
var rand = Math.floor(Math.random() * 10);
var pro = parseInt(prompt("Enter a number between 1 to 10"));
if (pro == rand) {
  alert("Congratulations your guess is correct");
} else {
  alert("Try again!");
}
//==========CHAPTER 26-30 "MATH METHODS "==========ENDS
//==========CHAPTER 31-34 "DATE METHODS "==========STARTS
//1.
var d = new Date();
document.write(d);
//2.
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var d = new Date();
alert("Current month : " + monthNames[d.getMonth()]);
//3.
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var d = new Date();
alert("Today is " + weekday[d.getDay()] + ".");
//4.
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var d = new Date();
var n = weekday[d.getDay()];
if (n == "Sat" || n == "Sun") {
  alert("Its Fun day");
} else {
  alert("Working day");
}
//5.
var date = new Date();
var onlyDate = date.getDate();
if (onlyDate > 15) {
  document.write("<br>Last days of the month");
} else {
  document.write("<br>First fifteen days of the month");
}
//6.

//7.
var d = new Date();
var hour = d.getHours();
if (hour > 12) {
  alert("Its PM");
} else {
  alert("Its AM");
}
//8.
var laterDate = new Date(2020, 12, 0);
document.write("Later date: " + laterDate);
//9.
var ramzan = new Date(2020, 6, 17);
var d = new Date(2015, 6, 18);

var diffTime = Math.abs(d - ramzan);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.write(diffDays + " days have passed since 1st Ramadan,2015");
//10.

//11.
var cur = new Date();
document.write("<br>Current date : " + cur);
var d = new Date();
d.setHours(d.getHours() - 1);
document.write("<br>1 hour ago, it was " + d);
//12.
var cur = new Date();
var d = new Date();
d.setFullYear(d.getFullYear() - 100);
alert("Current date :" + cur + "\n100 years back, it was " + d);
//13.
var age = +prompt("Enter your age : ");
var d = new Date();
var birth = d.getFullYear() - age;
document.write("<br>Your age is " + age + "<br>Your birth year is " + birth);
//14.
var customerName = "ABC Customer";
var month = "February";
var unit = 410;
var per_unit = 16;
var Net_amount_payable = unit * per_unit;
var surcharge = 350;
var Gross = Net_amount_payable + surcharge;
document.write(
  "<h1>K-Electric Bill</h1><br>Customer Name: <b>" + customerName +
  "</b><br>Month: <b>" + month +
  "</b><br>Number of units: <b>" + unit +
  "</b><br>Charges per unit: <b>" + per_unit +
  "</b><br><br>Net Amount Payable (within Due Date): <b>" + Net_amount_payable +
  "</b><br>Late payment surcharge: <b>" + surcharge +
  "</b><br>Gross Amount Payable (after Due Date): <b>" + Gross + "</br>");

//==========CHAPTER 31-34 "DATE METHODS "==========ENDS
//==========CHAPTER 35-38 "FUNCTION "==========STARTS
//1.
var d = new Date();
document.write(d);
//2.
var first = prompt("Enter Your First Name");
var second = prompt("Enter Your Last Name");
var total = this.first + " " + this.second;
function fullName(first, second) {
  return total;
  //var total = this.first + this.second;
}
alert("Hello " + fullName(first, second));
//3.
var a = +prompt("Enter Your First Num");
var b = +prompt("Enter Your Last Num");
var sum = this.a + this.b;
function fullNum(a, b) {
  return sum;
}
alert(fullNum(a, b));
//4.

//5.
function square(value) {
  newValue = value ** 2
  alert(newValue)
}
square(8);

//5.
var sqr = +prompt("Enter number whose square is required");
function square() {
  newValue = sqr ** 2
  return newValue;
}
document.writeln('The square of ' + sqr + " " + 'is ' + square(newValue));
//6.
function fact(n) {
  if (n > 0 && n <= 1) {
    return 1;
  }
  else {
    return n * fact(n - 1);
  }
}
fact(5);
alert(fact(5));
//7.
function counting() {
  var num1;
  var num2;
  var i;
  num1 = prompt("Please enter first number");
  num2 = prompt("Please enter last number");
  for (i = num1; i < num2; i++)
    document.write(i + "<br>");
  return i;
}
document.write(counting());
//8.
function area() {
  var width;
  var height;
  var area;
  width = prompt("Please enter width of rectangle ");
  height = prompt("Please enter height of rectangle ");
  area = width * height;
  return area;
}
document.write(area());

//9.
var length = prompt("Enter length.");
var width = prompt("Enter width.");
function area(length, width) {
  return length * width;
}
document.writeln('The area is ' + area(length, width));
//10.  
var word = prompt("Enter a word: ")
function palandrome(word) {
  var pal = "";
  for (var i = word.length - 1; i >= 0; i--) {
    pal += word[i];
  }
  if (pal === word) {
    document.write("It's a palandrome!")
  }
  else {
    document.write("It's not a palandrome!")
  }
}
var result = palandrome(word);
document.write(result)
//11.
var data = 'the quick brown fox';

function capital(str) {
  return str.replace(/\b\w/g, function (x) {
    return x.toUpperCase(x);
  });
}
alert(capital(data));
//12.
function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function (str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}
alert(longestWord("Web Development Tutorial"));
//13.
var str = window.prompt("Please enter the string ");
var letter = window.prompt("Please enter the world ");
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}
document.write("Sample arguments : " + "'" + str + "'" + "," + "\n " + "'" + letter + "'" + "<br>")
document.write(char_count(str, letter));

//14.

radius = window.prompt("Please enter the radius of circle ");
var radius;
var circumference;
var area;


function calcCircumference(radius) {
  circumference = 2 * 3.142 * radius;
  return circumference;
}

function calcArea(radius) {
  area = 3.142 * radius * radius;
  return area;
}

document.write("The circumference is " + calcCircumference(radius) + "<br>");
document.write("The area is " + calcArea(radius))
//==========CHAPTER 35-38 "FUNCTION "==========ENDS
//==========CHAPTER 38-42 "FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  "==========STARTS
//1
function customPower(base, exponent) {
  var result = 1;
  for (var i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

document.write("Power: " + customPower(3, 3));
//2
function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}
console.log(isLeapYear(2016))
console.log(isLeapYear(2017))
//3
let side1 = prompt('Enter side1: ');
let side2 = prompt('Enter side2: ');
let side3 = prompt('Enter side3: ');
// calculate the semi-perimeter
let s = (side1 + side2 + side3) / 2;
//calculate the area
let areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);
console.log(
  `The area of a triangle with side length ${side1}, ${side2}  and ${side3} is ${areaValue}`
);
//4
//5
//6
function removeVowels(str) {
  var vowels = "aieuo";
  var strArr = str.toLowerCase().split("");
  var newArr = strArr.filter(function (letter) {
    if (vowels.indexOf(letter) == -1) {
      return letter;
    }
  });
  var string = "";
  newArr.forEach(function (letter) {
    string += letter;
  });
  return string;
}
console.log(removeVowels('TIM'));
//7
//8
//9
//10
//====CHAPTER 38-42 "FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  "====ENDS
//==========CHAPTER 43-48 "EVENTS"==========STARTS
//3
function deleteRow(btn) {
  var row = btn.parentNode.parentNode; row.parentNode.removeChild(row);
}
//4
function rollover(img) {
  img.scr = 'car2.jpg';
}
function mouseaway(img) {
  img.src = 'image/car1.jpg';
}

//5
var button = document.getElementById("clickmecounter"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "Click me: " + count;
};


//==========CHAPTER 43-48 "EVENTS"==========ENDS
//==========CHAPTER 49-52 "EVENTS"==========STARTS
//1
function showInput() {
  document.getElementById('display').innerHTML = document.getElementById("user_input").value;
}
//3
function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var country = document.getElementById("country_row" + no);
  var age = document.getElementById("age_row" + no);

  var name_data = name.innerHTML;
  var country_data = country.innerHTML;
  var age_data = age.innerHTML;

  name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
  age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
  var name_val = document.getElementById("name_text" + no).value;
  var country_val = document.getElementById("country_text" + no).value;
  var age_val = document.getElementById("age_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("country_row" + no).innerHTML = country_val;
  document.getElementById("age_row" + no).innerHTML = age_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
  var new_name = document.getElementById("new_name").value;
  var new_country = document.getElementById("new_country").value;
  var new_age = document.getElementById("new_age").value;

  var table = document.getElementById("data_table");
  var table_len = (table.rows.length) - 1;
  var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

  document.getElementById("new_name").value = "";
  document.getElementById("new_country").value = "";
  document.getElementById("new_age").value = "";
}

//==========CHAPTER 49-52 "EVENTS"==========ENDS
//==========CHAPTER 52-57 "MODAL"==========STARTS
function showImage(e) {
  var modalImage = document.getElementById("modalImage");
  modalImage.src = e.src
}
//==========CHAPTER 52-57 "MODAL"==========ENDS
//==========CHAPTER 58-67 "DOM"==========STARTS

//1 (i)
var main_content = document.getElementById("main-content");
//1 (ii)
var x = document.getElementById("main-content");
var y = x.childNodes;
for (var i = 0; i < y.length; i++) {
  document.write(y[1].innerHTML);
}

//1 (iii)
var j = document.getElementsByClassName("render");
for (var i = 0; i < y.length; i++) {
  console.log(j[1].innerHTML)
}
//1 (iv)
var t = document.getElementById("first-name");
t.value = "huma"
//1 (v)
var l = document.getElementById("last-name");
l.value = "masood"
var m = document.getElementById("email");
m.value = "humamasood@gmail.com"

//2 (i)
var x = document.getElementById("form-content");
console.log(x.nodeType)
//2 (ii)
var q = document.getElementById("last-name");
console.log(q.nodeType)
console.log(q.nodeType.childNodes)
//2 (iii)
var q = document.getElementById("last-name");
console.log(q.childNodes = "sarah")

//2 (iv)
var z = document.getElementById("main-content");
console.log(z.firstChild)
console.log(z.lastChild)
//2 (v)
var x = document.getElementById("last-name");
console.log(x.previousSibling)
console.log(x.nextSibling)
//2 (vi)
var o = document.getElementById("email");
console.log(o.parentNode.nodeType)
//==========CHAPTER 58-67 "DOM"==========ENDS

