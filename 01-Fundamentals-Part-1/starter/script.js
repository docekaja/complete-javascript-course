// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");

// let firstName = "Honza";
// console.log(firstName);

// let javasriptIsFun = true;
// console.log(javasriptIsFun)

// javasriptIsFun = "YES";
// console.log(javasriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1993
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1993;
// // birthYear = 1994;

// const curretYear = 2022;
// const ageJan = curretYear - 1993;
// const ageJana = curretYear - 1995;
// console.log(ageJan, ageJana);
// console.log(ageJan * 2, ageJana / 10, 2**3);

// const firstName = "Jan";
// const secondName = "Dočekal";
// console.log(firstName + " " + secondName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJan > ageJana);
// console.log(ageJana >= 18);

// const curretYear = 2022;
// const ageJan = curretYear - 1993;
// const ageJana = curretYear - 1995;

// console.log(curretYear - 1993 > curretYear - 1995);
// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5
// console.log(x, y);

// const averageAge = (ageJan + ageJana) / 2;
// console.log(ageJan, ageJan, averageAge);

// const markWeight = [78, 95];
// const markHeight = [1.69, 1.88];
// const johnWeight = [92, 85];
// const johnHeight = [1.95, 1.76];

// let markBMI1 = (markWeight[0] / markHeight[0] ** 2);
// let johnBMI1 = (johnWeight[0] / johnHeight[0] ** 2);

// let markBMI2 = (markWeight[1] / markHeight[1] ** 2);
// let johnBMI2 = (johnWeight[1] / johnHeight[1] ** 2);

// let markHigherBMI1 = (markBMI1>johnBMI1);
// let markHigherBMI2 = (markBMI2>johnBMI2);

// console.log(markHigherBMI1);
// console.log(markHigherBMI2);

// const firstName = "Jan";
// const job = "coder";
// const birthYear = 1993;
// const year = 2022;

// const honza = "I am " + firstName + ", a " + (year - birthYear) + " year old " + job;
// console.log(honza)

// const honza2 = `I am ${firstName}, a ${year - birthYear} year old ${job}.`
// console.log(honza2)

// const age = 17;

// if (age >= 18) {
//     console.log("Saras can start driving a car.")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Saras have to wait ${yearsLeft} years to drive a car.`)
// }

// const birthYear = 1991;
// let century;
// if (birthYear<=2000) {
//     century = 20;    
// } else {
//     entury = 21;
// }

// console.log(century)

// const markWeight = [78, 95];
// const markHeight = [1.69, 1.88];
// const johnWeight = [92, 85];
// const johnHeight = [1.95, 1.76];

// let markBMI1 = (markWeight[0] / markHeight[0] ** 2);
// let johnBMI1 = (johnWeight[0] / johnHeight[0] ** 2);

// let markBMI2 = (markWeight[1] / markHeight[1] ** 2);
// let johnBMI2 = (johnWeight[1] / johnHeight[1] ** 2);

// let markHigherBMI1 = (markBMI1>johnBMI1);
// let markHigherBMI2 = (markBMI2>johnBMI2);

// console.log(markHigherBMI1);
// console.log(markHigherBMI2);


// if(markHigherBMI1){
//     console.log(`Mark's BMI ${markBMI1} is higher than John's ${johnBMI1}!`);
// }else{
//     console.log(`John's BMI ${johnBMI1} is higher than Mark's ${markBMI1}!`);
// }

// if(markHigherBMI2){
//     console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}!`);
// }else{
//     console.log(`John's BMI ${johnBMI2} is higher than Mark's ${markBMI2}!`);
// }

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear);


// console.log(inputYear);

// const hasDrivingLicense = true;
// const hasGoodVision = true;
// const isTired = true;


// console.log(hasDrivingLicense || hasGoodVision);
// console.log(hasDrivingLicense && hasGoodVision);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log ("Sarah should drive");
// } else {
//     console.log ("Sarah should not drive");

// }

// const numberOfGames = 3;

// const dolphinesScore1 = 96;
// const dolphinesScore2 = 108;
// const dolphinesScore3 = 89;

// const koalasScore1 = 88;
// const koalasscore2 = 91;
// const koalasscore3 = 110;

// const dolphinesAverage = (dolphinesScore1 + dolphinesScore2 + dolphinesScore3) / numberOfGames;
// const koalasAverage = (koalasScore1 + koalasscore2 + koalasscore3) / numberOfGames;

// if (dolphinesAverage === koalasAverage) {
//     console.log(`Wow, both teams have the same score of ${dolphinesAverage}`);
// } else if (dolphinesAverage > koalasAverage) {
//     console.log(`Dolphines have won! They have a score off ${dolphinesAverage} and Koalas had only ${koalasAverage}`);
// } else {
//     console.log(`Koalas have won! They have a score off ${koalasAverage} and Dolphiones had only ${dolphinesAverage}`);
// }

// const day = "monday";

// switch (day) {
//     case "monday":
//         console.log(`It is ${day}!`);
//         break;
//     case "tueday":
//         console.log(`On ${day} you have to clean the flat!`);
//         break;
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log(`Take a break!`);
//         break;
//     default:
//         console.log("Not a valid day");
// }
// const age = 17;
// const drink = age >= 18 ? "wine 🍷" : "milk 🍼";

// console.log(drink);

// console.log(`I like to drink a ${age >= 18 ? "wine 🍷" : "milk 🍼"}`)

// const bill1 = 300;
// const bill2 = 301;
// const bill3 = 430;

// const tip1 = bill1 * (bill1 >= 50 && bill1 <=300 ? 0.15 : 0.20);  
// const tip2 = bill2 * (bill1 >= 50 && bill1 <=300 ? 0.15 : 0.20);  
// const tip3 = bill3 * (bill1 >= 50 && bill1 <=300 ? 0.15 : 0.20); 

// console.log(`The bill was ${bill1} the tip was ${tip1}, and the total value was ${bill1 + tip1}`);
// console.log(`The bill was ${bill2} the tip was ${tip2}, and the total value was ${bill2 + tip2}`);
// console.log(`The bill was ${bill3} the tip was ${tip3}, and the total value was ${bill3 + tip3}`);