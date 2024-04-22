// FOR VAZIFALARI

// let n = 10;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }
// let names = ["bunyod", "bekzod", "mavlon", "anvar", "lobar", "mirzohid"];

// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i].charAt().toUpperCase()}${names[i].slice(1)}`);
// }
// let sum = 0;
// const number = 100;
// for (let i = 0; i <= number; i++) {
//   sum += i;
//   console.log("sum:", sum);
// }
// let number = Number(prompt("biror son kiriting"));
// for (let i = 1; i <= number; i++) {
//   console.log(i);
// }
// let number = Number(prompt("kattaroq son kiriting"));
// console.log(number);
// for (let i = number; i >= 1; i--) {
//   console.log(i);
// }
// let son = Number(
//   prompt(
//     "siz biron son kiriting men sizga shu songacha bolgan sonlar yegindisini chiqaraman"
//   )
// );

// let n = 0;
// for (let i = 0; i <= son; i++) {
//   n += i;
//   console.log(n);
// }

// JUFT SONLAR

// let n = Number(
//   prompt(
//     "son kiriting va men sizga siz kiritgan songacha bolgan sonlarning juftini qaytarib beraman"
//   )
// );
// let y = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     y += i;
//   }
// }
// console.log("umumiy yegindi", y);

// TOQ SONLAR

// let n = Number(
//   prompt(
//     "son kiriting va men sizga siz kiritgan songacha bolgan sonlarning toqini qaytarib beraman"
//   )
// );
// let y = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//     y += i;
//   }
// }
// console.log("umumiy yegindi", y);

// BO'LUVCHILARI
// let n = Number(
//   prompt(
//     "son kiriting va men sizga siz kiritgan songacha bolgan sonlarning bo'linuvchisini qaytarib beraman"
//   )
// );

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

// BO'LINUVCHILARI YEGINDISI

// let n = Number(
//   prompt(
//     "son kiriting va men sizga siz kiritgan songacha bolgan sonlarning bo'linuvchisini qaytarib beraman"
//   )
// );
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log(sum);

// let n = Number(
//   prompt("son kiriting men sizga u tubmi yoku tubsizmi bilib beraman")
// );
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     sum++;
//   }
// }
// if (sum == 2) {
//   console.log("tub son");
// } else {
//   console.log("tub son emas");
// }

// IF VAZIFALARI

// let number = Number(prompt("biron son kiriting"));
// if (number > 0) {
//   number++;
//   console.log(number);
// } else {
//   console.log(number);
// }

// 2)
// let number = Number(prompt("biron son kiriting"));
// if (number > 0) {
//   number++;
//   console.log(number);
// } else {
//   console.log(number - 2);
// }

// 3)
// let n = Number(prompt("son kiriting"));
// if (n > 0) {
//   n++;
//   console.log(n);
// } else if (n < 0) {
//   n - 2;
//   console.log(n);
// } else if (n == 0) {
//   n + 10;
//   console.log(n);
// }

// 4)

// let n1 = Number(prompt("birinchi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// let n3 = Number(prompt("uchinchi sonni kiriting"));
// let sum = 0;
// if (n1 > 0) {
//   sum++;
// }
// if (n2 > 0) {
//   sum++;
// }
// if (n3 > 0) {
//   sum++;
// }
// console.log(`jami ${sum} ta musbat son bor`);

// 5)
// let n1 = Number(prompt("birinchi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// let n3 = Number(prompt("uchinchi sonni kiriting"));
// let sum = 0;
// let manfiy = 0;
// if (n1 > 0) {
//   sum++;
// } else if (n1 < 0) {
//   manfiy++;
// }
// if (n2 > 0) {
//   sum++;
// } else if (n2 < 0) {
//   manfiy++;
// }
// if (n3 > 0) {
//   sum++;
// } else if (n3 < 0) {
//   manfiy++;
// }
// console.log(`jami ${sum} ta musbat son ${manfiy} ta manfiy son bor`);

// 6)
// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 > n2) {
//   console.log(`${n1} kattaroq`);
// } else {
//   console.log(`${n2} kattaroq`);
// }

// 7)

// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 > n2) {
//   console.log("ikkinchi son kichik");
// } else {
//   console.log("birinchi son kichik");
// }

// 8.

// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 > n2) {
//   console.log(`${n1}, ${n2}`);
// } else {
//   console.log(`${n2}, ${n1}`);
// }

// 9.
// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 > n2) {
//   console.log(`${n2}, ${n1}`);
// } else {
//   console.log(`${n1}, ${n2}`);
// }

// 10.
// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 != n2) {
//   let result = n1 + n2;
//   n1 = result;
//   n2 = result;
//   console.log(n1, n2);
// } else if (n1 == n2) {
//   console.log(0);
// }

// 11.
// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// if (n1 > n2) {
//   n2 = n1;
//   console.log(n1, n2);
// } else if (n1 < n2) {
//   n1 = n2;
//   console.log(n1, n2);
// }else if(n1 == n2){
//     console.log(0)
// }

// 12.
// let n1 = Number(prompt("birnichi sonni kiriting"));
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// let n3 = Number(prompt("uchunchi sonni kiriting"));
// if (n1 <= n2 && n1 <= n3) {
//   console.log(n1);
// } else if (n2 <= n1 && n2 <= n3) {
//   console.log(n2);
// } else if (n3 <= n1 && n3 <= n2) {
//   console.log(n2);
// } else {
//   console.log(0);
// }

// 13.
// let n1 = Number(prompt("birnichi sonni kiriting"));
// 1;
// let n2 = Number(prompt("ikkinchi sonni kiriting"));
// 2;
// let n3 = Number(prompt("uchunchi sonni kiriting"));
// 3;
// if (n1 >= n2 && n1 <= n3) {
//   console.log(`${n1} ${n3}`);
// } else if ((n2 >= n1 && n2 <= n3) || (n2 <= n1 && n2 >= n3)) {
//   console.log(`${n1} ${n3}`);
// } else if ((n3 >= n1 && n3 <= n2) || (n3 <= n1 && n3 >= n2)) {
//   console.log(`${n3} ${n1}`);
// } else {
//   console.log(0);
// }

// 14.

// let n1 = 5;
// let n2 = 8;
// let n3 = 1;

// let max = 0;
// let min = 0;

// if (n1 > n2 && n1 > n3) {
//   max = n1;
// } else if (n2 > n1 && n2 > n3) {
//   max = n2;
// } else if (n3 > n1 && n3 > n2) {
//   max = n3;
// }

// if (n1 < n2 && n1 < n3) {
//   min = n1;
// } else if (n2 < n1 && n2 < n3) {
//   min = n2;
// } else if (n3 < n1 && n3 < n2) {
//   min = n3;
// }

// console.log(`Max = ${max}, min = ${min}`);

// BOOLEN MASALALRI

// 1-masala
// let a = 5;
// if (a > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2-masala
// let a = 5;
// if (a % 2 == 0) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// 3-masala
// let a = 5;
// if (a % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 4-masala
// let a = 2;
// let b = 3;
// if ((a) => 2 && b <= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 5 - masala;
// let a = 2;
// let b = -3;
// if ((a) => 2 && b <= -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 6- masala;
// let a = 2;
// let b = 4;
// let c = 5;
// if (a <= b && b <= c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 7-masala
// let a = 1;
// let b = 2;
// let c = 3;

// if (b > a && b < c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 8-masala
// let a = 5;
// let b = 7;
// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9-masala

// let a = 5;
// let b = 4;
// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10-masala;
// let a = 5;
// let b = 4;

// if(a % 2 == 1 && b % 2 == 0 ){
//     console.log(true)
// }else{
//     console.log(false)
// }

// 11-masala

// let a = 5;
// let b = 6;
// if (a % 2 == 0 || (a % 2 == 1 && b % 2 == 0) || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 12-masala;
// let a = 5;
// let b = 10;
// if (a > 0 && b > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 13-masala
// let a = -1;
// let b = 5;
// let c = -8;
// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 14-masala;
// let a = 1;
// let b = -5;
// let c = -6;
// if (a > 0 && b < 0 && c < 0) {
//   console.log(true);
// } else if (b > 0 && a < 0 && c < 0) {
//   console.log(true);
// } else if (c > 0 && a < 0 && b < 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15-masala
// let a = -1;
// let b = 5;
// let c = 6;
// if (a > 0 && b > 0 && c < 0) {
//   console.log(true);
// } else if (b > 0 && a > 0 && c < 0) {
//   console.log(true);
// } else if (c > 0 && a > 0 && b < 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 16-masala;
// let a = 21;
// if (a > 10 && a % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 17-masala;
// let a = 123;
// if (a > 100 && a % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 18-masala
// let a = 15;
// let b = 15;
// let c = 1;
// if (a == b || a == c) {
//   console.log(true);
// } else if (b == a || b == c) {
//   console.log(true);
// } else if (c == a || c == b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda hech bo'lmaganda 2 tasi bir biriga qarama qarshi  bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 == -num2  num2 == -num3  num1 == -num3) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 20-masala

// alert("3 xonali son kiriting, kiritgan sonning raqamlari o'zaro farq qilsin");

// let num = prompt("Sonni kiriting:");

// if (
//   (num - (num % 100)) / 100 != ((num % 100) - (num % 10)) / 10 &&
//   ((num % 100) - (num % 10)) / 10 != num % 10 &&
//   (num - (num % 100)) / 100 != num % 10
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 21-masala

// alert("3 xonali son kiriting kiritgan, soningiz ketma ket o'suvchi bo'lsin.");

// let num = prompt("Sonni kiriting:");

// if (
//   (num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
//   ((num % 100) - (num % 10)) / 10 < num % 10
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 22-masala

// alert("3 xonali son kiriting, kiritgan soningiz ketma ket o'suvchi yoki ketma ket kamayuvchi son  bo'lsin.");

// let num = prompt("Sonni kiriting:");

// if (
//   ((num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
//     ((num % 100) - (num % 10)) / 10 < num % 10) ||
//   ((num - (num % 100)) / 100 > ((num % 100) - (num % 10)) / 10 &&
//     ((num % 100) - (num % 10)) / 10 > num % 10)
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 23-masala

// alert(
//   "3 xonali son kiriting, kiritgan soningiz o'ngdan o'qilganda ham chapdan o'qilganda ham bir xil  bo'lsin."
// );

// let num = prompt("Sonni kiriting:");

// if (num < 1000 && num > 99 && (num - (num % 100)) / 100 == num % 10) {
//   alert(true);
// } else {
//   alert(false);
// }
