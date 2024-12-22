//  "1 masala ";
// function app(str) {
//     const sozlar = str.split(' ');
//     for (let i = 0; i < sozlar.length; i++) {
//       const soz = sozlar[i]; 
//       const json = sozlar.filter(w => w === soz).length;
//       if (json === 1) {
//         return soz;
//       }
//     }
//     return "unday so'z yo'q!";
// }
// console.log(app("zokir zokir bino rizo qoy"), ": birinchi takrorlanmagan so'z");
  

// "2 masala ";
// function toq(arr) {
//     function app(n) {
//       if (n <= 1){ 
//         return "1 dan katta";
//       } 
//       if (n === 2) {
//         return "2 sondan katta";
//       } 
//       if (n % 2 === 0) {
//         return "juft son";
//       } 
//       for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) {
//           return "toq son";
//         }
//       }
//       return "natija";
//     }
//     return arr.filter(n => app(n) === "natija");
// }
// console.log(toq([12 , 13 ,124 ,5452, 5555, 783, 5 , 11, 3 ]));
  

// "4 masala ";
// function app(str) {
//     const num = str.split(" ").filter(item => !isNaN(item) && item !== '').map(Number);  
//     num.sort((a, b) => a - b);
//     return num;
// }
// let res = app("erka 23 121 45 tovuq 3 2");
// console.log(" ! " , ...res , ": natija");


// "5 masala ";
// function app(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] <= '0' || str[i] >= '9') {
//             res += str[i];
//         }
//     }
//     return res;
// }
// console.log(app("salom1253674oshna"),": natija faqat sonlarsiz");
