// var salom = 'Hello My Friend,welcome'
// console.log(salom)

// // 1 masala 

// var a = 10;
// var P = a * 4 ;
// console.log(P)

// // 2 masala

// var a = 5;
// var S = a ** 2
// console.log(S)


// // 3 masala

// var a = 2
// var b = 3
// var S = a * b
// var P = 2 * (a + b);
// console.log(S);
// console.log(P);

// // 4 masala

// var d = 2
// var P = 3.14
// var L = P * d

// console.log(L)

// // 5 masala

// var a = 5
// var V = a ** 3
// var S = 6 * a ** 2
// console.log(V)
// console.log(S)

// // 6 masala

// var a = 7
// var b = 14
// var c = 21
// var V = a * b * c;
// var S = 2 * (a * b + b * c + a * c);
// console.log(V)
// console.log(S)

// // 7 masala

// var P = 3.14
// var R = 4
// var L = 2 * P * R
// var S = P * R ** 2
// console.log(L)
// console.log(S)

// // 8 masala

// var a = 3
// var b = 6
// var C = (a + b ) / 2
// console.log(C)

// // 9 masala

// var a = 6
// var b = 10
// var Urtageometriya = (a + b) ** 0.5
// console.log(Urtageometriya)

// // 10 masala

// var a = 2
// var b = 5
// var P = a + b
// var K = a * b
// var Kv = (a + b) **2

// console.log(P)
// console.log(K)
// console.log(Kv)

// // 11 masala

// var a = 3
// var b = 7
// var Y = 3 + 7
// var K = 3 * 7

// // 12 masala

// var a = 4
// var b = 16
// var C = (a + b) 
// // console.log(C)   qoldi

// // 13 masala
// var R1 = 30
// var R2 = 10
// var P = 3.14
// var S1 = P * R1
// var S2 = 3.14 * R2
// var S3 = P * (R1 - R2)
// console.log(S1)
// console.log(S2)
// console.log(S3)

// // 14 masala

// var P = 3.14
// var R = 5
// var L = 2 * P * R
// var S = P * (R ** 2)
// console.log(L)
// console.log(S)

// // 15 masala

// var P = 3.14
// var R = 4
// var L = 2 * P * R
// var S = P * R **2
// console.log(L)
// console.log(S)

// // 16 masala

// var X1 = 20
// var X2 = 30

// var Masofa = X2 - X1
// console.log(Masofa)


// // 17 masala

// var A = 3
// var B = 6
// var C = 9

// // uzimi yulim

// var AC = C - A
// var BC = C - B
// var Javob = AC + BC
// console.log(Javob)

// // 18 masala

// var A = 3
// var B = 9
// var C = 6
// var AC = C - A
// var BC = B - C
// var Kupaytma = AC * BC
// console.log(Kupaytma)

// // 19  masala

// var a = 35
// var b = 40
// var P = 2 * (a + b)
// var Yuza = a * b

// console.log(P)
// console.log(Yuza)

// // 20 masaldaa

// var X1 = 22
// var X2 = 33
// var Y1 = 21
// var Y2 = 35

// var Masofa = ((X2 - X1) + (Y2-Y1) ** 0.5 )
// console.log(Masofa)


// 21 masala
// var chup = 22
// var uy = 4
// var urta = chup / uy
// var uycha = urta
// var foydalanuvchi = 5 * 5 + 1
// console.log(foydalanuvchi)



// var a = 30;
// var b = Number('129');
// var c = (a + b);

// console.log (c.toString().length);

// var a = '30'
// var b = '60'
//  var c = +a * +b;
//  console.log(c.toString().length);







/*************** Task №1 ************** */
// Function for Method pow

// function pow(a, b) {
//     return a ** b;
// }

// console.log(pow(4, 2));

// Function for Method sqrt

// function sqrt(a) {
//     return a ** 0.5;
// }

// console.log(sqrt(81));

// Function for Method cbrt

// function cbrt(a) {
//   return (a ** (1/3));
// }

//  console.log(cbrt(27));

// Function for Method abs

// function abs(a) {
// return (a** 2) ** 0.5 
// }
// console.log(abs(-12.5));

// Function for Method round

// function round(a) {
//    return (a).toFixed(0);

// }
// console.log(round(1.5))

// Function for Method floor 

// function floor(a) {
//     return parseInt(a);
// }
// console.log(floor(8.9))

// Function for Method floor2 

// function floor(a) {
//   return (a - 0.5).toFixed(0);
// }
// console.log(floor(6.001));



// Function for Method ceil

// function ceil(a) {
//     return (a + 0.5).toFixed(0);
// }
// console.log(ceil(1.001));


/2-masala
var weCount = 0;
var aCount = 0;
var bCount = 0;

let text = 'welcome webbrain';
text=text.repeat(10);

function weSanagich(text){
    var index = text.indexOf("we"); 
    weCount++;
    text=text.slice(index+2);
    text.includes('we') && weSanagich(text);
}
weSanagich(text);

function a_Sanagich(text){
    var index = text.indexOf("a"); 
    aCount++;
    text=text.slice(index+1);
    text.includes('a') && a_Sanagich(text);
}
a_Sanagich(text);

function b_Sanagich(text){
    var index = text.indexOf("b"); 
    bCount++;
    text=text.slice(index+1);
    text.includes('b') && b_Sanagich(text);
}
b_Sanagich(text);

console.log(`we: ${weCount}ta 
a: ${aCount}ta
b: ${bCount}ta`);

