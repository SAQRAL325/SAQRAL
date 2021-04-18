//var, let
//let name = 'Muhanad';
//let age = 16;
//console.log(name);
//console.log(age);

// Must be meaningful.
//Cannot start with a number.
//let 2name; error
//let -name; error
//let Full_name; NO error
//let FullName; NO error
//case sensltive.
//let studentname; error to studentName
//Cannot be reseved keywrd (var, let, if, else ...),
//Variables نهاية درس 


//بداية درس الثوابت

// \/المتغير  
//let gravity = 9.18;
//gravity = 10;
//console.log(gravity);

// \/الثوابت  
//const gravity = 9.18;
//gravity = 10; التغير في الثوابت يسبب الاخطاء
//console.log(gravity);

//Constants نهاية درس 


//Primitive Types بداية درس الأنواع البدائية 

//let name = 'Ahmad'; // النص/String "",''
//let age = 20;  //الارقام/Number
//let isStudent = true; //قيمة منطقية/Boolean صحيح/true, خاطئة/false
//let grade;// Undefined
//let empty = null;// قيمه فارغه
//Primitive Types نهاية درس الأنواع البدائية 


// Dynamic Types /بداية درس الأنواع المتغيرة 

//let isStudent = true;
//console.log(typeof isStudent);
//isStudent = 10;
//console.log(typeof isStudent);

//ملحوظة يفضل عدم تغيير محتوايت المتغير لعدم الوصل الى مرحله لا تستطيع ان تخمن فيها مانوع المتغير


// Dynamic Types /نهاية درس الأنواع المتغيرة 


// Arrays / بداية درس المصفوفات

//let students = ['Ahmad', 'Kamal'];
//console.log(students);
//console.log(students[0]);
//students[2] = 'Ali';
//console.log(students);
//students[1] = 'SAQR';
//console.log(students);
//students[3] = 10;
//console.log(students);
//students[5] = 'test';// empty/اذا تم تخطي رقم يظهر مكان الرقم 
//console.log(students);
// Arrays / نهاية درس المصفوفات

// Operators / بداية درس العوامل

//العوامل الرياضية

//(  (+)الجمع
// let sum =2+2;)

//(  (-)الطرح
// let sub =5-1;)

//(  (*)الضرب
// let mul =3*2;)

//(  (/)القسمة
// let div =10/2;)


//عوامل الإسناد

// قيمة = متغير 
// age = 10;

//عوامل المقارنة

// 1===1  < المساواة
// 1!==0  < عدم المساواة
// 2>1  < اكبر من
// 2>=1 < اكبر او يساوي
// 1<2  < اصغر من
// 1<=2 < اصغر او يساوي

//العوامل المنطقية

//  true&&true  <AND تحقق الشرطان
//  true||false  <OR تحقق احد الشروط
//  !true <NOT النفي

//العوامل الثنائية

//1 & 1  <AND 
//1 | 0  <OR


// Operators / نهاية درس العوامل


// Arithmetic Operator / بداية درس العوامل الرياضية

//let x = 100;
//let y = 50;
//console.log(x + y + 2);
//console.log(x - y - 2);
//console.log(x * y * 2);
//console.log(x / y / 2);
//console.log(x % y % 2); //باقي الفسمه الصحيحه
//console.log(x ** y); // عملية الرفع الى قوه

//let x = 7;
//let y = 2;
//console.log(++x); //زيادة رقم واحد
//console.log(x++); //\/الطباعه وبعدها الزياده ولتاكد 
//console.log(x); //test
//console.log(--x);//تنقيص رقم واحد
//console.log(x--);//\/الطباعه وبعدها التنقيص ولتاكد
//console.log(x); //test

//  Arithmetic Operator /نهاية درس العوامل الرياضية 


//  Concatenation /بداية درس الربط  

//let greeting = 1 + 1 + "SAQR" + ' ' + "AL " + (5 + 5); // اذ تم عمليه رياضيه قبل النص فسوفا تتم العمليه اما في حال عمل عمليه رياضيه بعد النص سوف يعتبر الجافا سكربت على انهو نص وفي حالو وضع الاقواس يتم فصلها عن النص
//console.log(greeting);
//let name = 'SAQR';
//console.log('Hello ' + name);

//  Concatenation /نهاية درس الربط  

//  Assignment Operator /بداية درس عوامل الإسناد  

//قيمة =+ متغير
//let x = 8
//x += 2;
//console.log(x) //الجمع بالإسناد

//قيمة =+ متغير
//let x = 8;
//x -= 2;
//console.log(x); //الطرح بالإسناد

//قيمة =+ متغير
//let x = 3;
//x *= 2;
//console.log(x); //الضرب بالإسناد

//قيمة =+ متغير
//let x = 4;
//x /= 2;
//console.log(x); //القسمة بالإسناد

//  Assignment Operator /نهاية درس عوامل الإسناد  

//  Comparison Operator /بداية درس عوامل المقارنة  

//let age = 12;
//console.log('Equal', age === 12);
//console.log('Not Equal', age !== 12);
//console.log('Larger', age > 12);
//console.log('Larger or equal', age >= 12);
//console.log('Less', age < 12);
//console.log('Less or equal', age <= 12);
//  Comparison Operator /نهاية درس عوامل المقارنة


//  Equality Operator /بداية درس عامل المساواة

//console.log(1 === '1');// اذا تم وضع ثلاث من= فيتم التحقق من بيناتها
//console.log(1 == "1");// اذا تم وضع اثنان من= فيتم التحقق من انهم نفس الشيء ولايتم التحقق من بيناتها
//console.log(true == 1);//true = 1 , 0 = false
//  Equality Operator /نهاية درس عامل المساواة

//  Logical Operators /بداية درس العوامل المنطقية

//AND
//console.log(true && false)//=false
//console.log(true && true)//=true
//let JAVA = true;
//let Ruby = false;
//let canjoin = JAVA && Ruby;
//console.log('Approved', canjoin);

//OR
//console.log(true || false)//=true
//console.log(true || true)//=true
//console.log(false || false)//=false
//let JAVA = true;
//let Ruby = false;
//let canjoin = JAVA || Ruby;
//console.log('Approved', canjoin);

//NOT
// =false =true
// =true =false
//let JAVA = true;
//let Ruby = false;
//let canjoin = JAVA || Ruby;
//console.log('Approved', !canjoin);

//  Logical Operators /نهاية درس العوامل المنطقية

//  Bitwise Operators /بداية درس العوامل الثنائية

//const read = 4;

//const write = 2;

//const exe = 1;

//let userPermission = read | write;

//console.log(userPermission & read);
//console.log(userPermission & exe); = 0 exe ليس لديه خاصية

//  Bitwise Operators /نهاية درس العوامل الثنائية

//  Control Flow /بداية بنى التحكم

//الجمل الشرطية
//حلقات التكرار
//...

// If...else/التعبير الشرطي 

//if (1 !== 2) {
// Statement
// console.log('Test');
//}
//let age = 12;
//if (age > 14) {
//console.log('العمر اكبر من 14');
//} else if (age > 10) {
//  console.log('العمر اكبر من 10');
//} else {
// console.log('العمر اصغر من 10');
//}

//}
//} else {
//  if (age > 10) {
//    console.log('العمر اكبر من 10');
//} else {
//  console.log('العمر اصغر من 10')
//}
//}

//let mark = 80;

//تم تاخير بعض الدروس وعدم كتبتها بسبب تبديل الجهاز

// المعاملات الافتراضية Default parameters
/*
function sum(multiply, ...args/*x, y = 1\*){
//   console.log(args);
    // if(y === undefined) y = 1;
   //console.log(arguments);
    //return x + y;
    let total = 0;
    for(let num of args /*arguments\*)total += num;
    return multiply * total;
}

const result = sum(2, 2, 3, 5, 10, 30);//NaN اذا لم يتم وضع الرقم الثاني فسوف ينتج لديناا /النتيجه
console.log(result);

// Gobal Scope/المجال العام
const msg = "Hello";

function hello() {
     // Local Scope. /المجال الخاص
     const msg = "Hello";
     console.log(msg);

     
}

function bye() {
    // Local Scope. /المجال الخاص
    const msg = "Bye";
    console.log(msg);

    
}
hello();
bye();

// Declaration
start();
function start() {
    console.log('Started');
}
stop();
// Expression
let stop = function(){
    console.log('Stopped')
}


//stop(); يجب وضع الداله التي تلي  المتغير و الدول داخلها بعد المتغير ولايتم قبول ايشيء قبلها

console.log(name);
var name ='SAQR';


function run() {
    for(var i=  0 ; i < 50; i++){
        console.log(i);
    }
    //console.log(i); var = no erorr/let = error
}
run()


//  لتحل اكثر الأمور var عن letملاحظه يفضل استخدام


// داله لفحص الاعداد الاوليه
function isPrime(num){
    for(let i = 2; i < num; i++){

    if(num % i === 0) return false;

    }
    return num > 1;
}


function primes(max) {
    for ( let i = 2; i < max; i ++)
    if (isPrime (i)) console.log (i);
}

let num = prompt('ادخل الاعدد لتححق من ان كان اولي او لا');
primes(num);

//التعاود
function factorial(n){

    return n === 0 ? 1 : n * factorial(n- 1);

}

*/


// ARRAYS / المصفوفات

// اضافة عنصر الى المصفوفات

// let alqhabet = ['c', 'd'];
// alqhabet[alqhabet.length] = 'e';
// alqhabet.push('f');//اضافة من الاسفل
// alqhabet.unshift('a','b');//اضافة من الاعلى
// alqhabet.splice(3,0, 'run','stop');//اضافة عنصر من المنتصف
// console.log(alqhabet);
// console.log(alqhabet.length);// معرفة عدد المصفوفه

// حذف عنصر الى المصفوفات

// let numbers = [1, 2, 3, 4, 5];
// const last = numbers.pop();// حذف عنصر من الاسفل
// console.log(last);
// console.log(numbers);

// const first = numbers.shift();// حذف عنصر من الاعلى
// console.log(first);
// console.log(numbers);

// const middle = numbers.splice(0, 2)//حذف عنصر او اكثر من اي مكان وتحديد عدد الحذف
// console.log(middle);
// console.log(numbers);


//  أفراغ المصفوفة

// let langs =['JS', 'PHP', 'C++'];
// let clone = langs;
// langs = [];//افراغ ولاكن ...الخ
// langs.length = 0;// افراغ جميع محتوى المصفوفه في اي مكان..الخ
// console.log(langs);
// console.log(clone);

// عكس المصفوفات

// let numbers = [1, 2, 3, 4, 5];

// function reverse(arr){
//     let temp = [];
//     for(let i in arr)
//        arr.splice(i, 0, arr.pop());
//     return arr;

// }

// console.log(reverse(numbers));


// التوابع في المصفوفات

//  let numbers = [5, 12, 8, 130, 44];

//  console.log(numbers.includes(5));// معرفة وجود العنصر في المصفوفه

//  console.log(numbers.indexOf(12));// معرفة وجود العنصر في المصفوفه وكم رقمه

// let result = numbers.filter/*find  فقط لايجاد قيمه واحده فقط */(function(number){// اطبع مافوق 10
//     return number > 10;
// })
// console.log(result);

// let index = numbers.findIndex(function(number){ // لايجاد اول رقم يتطابق مع الشروط
//     return number > 20;
// });
// console.log(index);


// الدوال السهمية

// let log = msg => console.log(msg);
// log('Hello');

// let numbers = [ 5, 8, 12, 130, 44];
// let result = numbers.find(number => number > 10);
// console.log(result);

// العبور على عناصر المصفوفة

// let langs = ['JS', 'PHP', 'Ruby'];

// for(let lang of langs)
//     console.log(lang);

// langs.forEach((value, index) => console.log(value, index));


// ترتيب عناصر المصفوفات 

//  const numbers = [4, 1, 3, 2, 18, 12];
//  numbers.sort((a, b) =>a - b);
//  console.log(numbers);
//  numbers.sort((a, b) =>b - a);
//  console.log(numbers);

// الكائنات Objects

// let student = {
//     name: 'Ahmad',
//     age: 12,
//     level: 6
// };
// student.level = 7; // تغير في الكائنات
// console.log(student);

// // Dot Notation
// console.log(student.name);// تحديد ماتريد طباعته في الكائنات

// // Bracet Notation
// const attribute = 'age';
// console.log(student[attribute]);// تحديد ماتريد طباعته في الكائنات بتحديد الاسم او اضافة متغير واضافة الاسم

// التوابع في الكائنات

// let student = {
//     name: 'Ahmad',
//     age: 12,
//     level: 6,
//     hello: function(){
//         console.log(this.name + ' ' + this.age);
//     },
//     pass: function(){
//         this.age++;
//         this.level++;
//     }
// };
// student.hello();
// student.pass();
// student.hello();


// التابع الباني

// function Student(name, age, level){
//     this.name = name;
//     this. age =  age;
//     this.level =  level;
//     this.hello = function(){
//         console.log(this.name + ' ' + this.age);
//     }
//     this.pass = function(){
//         this.age++;
//         this.level++;
//     }
// }
// let students =[
//     new Student("Ahmed", 12, 6),
//     new Student("SAQR", 11, 100)
// ]
// console.log(students);


// كائن التاريخ

// let myDate = new Date(2006, 10, 12, 1, 1,00);
// console.log(myDate);

// let dob = new Date('2006-10-12 01:01:00');
// let dob2 = new Date('2006-10-12 01:01:00');
// console.log(dob);
// console.log(dob.getFullYear());
// console.log(dob.getMonth());
// console.log(dob.getDate());
// console.log(dob.getHours());
// // UNIX Timesamp
// console.log(dob.getTime());

// if(dob.getTime() === dob2.getTime()){
//     console.log('dob اكبر')
// }else{
//     console.log('dob اصغر')
// }



// التعابير النظامية

// const msg = 'Hello there! My name is SAQR and my age is 16';

// const regex = /name is ([a-zA-Z]+)/;
// const match = regex.exec(msg);
// console.log(match);

// const regex2 = /age is [0-19]+/;
// const isMatched = regex2.test(msg);
// console.log(isMatched);




// أنواع الأخطاء

// Syntax Errors الاخطاء القواعدية

// 1 . تحدث عند تفسير الشيفرة

// 2 . معظم الاحيان تكون ناتجة عن خطأ كتابي في الشيفرة
// مثال 2 console.log('hello'; حدث الخطاء بسبب عدم وجود تسكيرت الاقواس



// Runtime Errors أخطاء زمن التشغيل

// 1 . (بعد التفسير) تحدث أثناء التنفيذ

// 2 . توقف البرنامج عند حدوثها



// Logical Errors أخطاء منطقية

// 1 . من أصعب أنواع الأخطاء التي يمكن تعقبها

// 2 . تحدث عند ارتكاب خطأ في منطق البرنامج

// 3 . البرنامج يعمل ولاكن لاتحصل على النتائج المطلوبة




// كيف تنقح برامجك

// 1 . Print statement أوامر الطباعة

// 2 . Comments تعليق الشيفرت 

// 3 . Errors handling معالجة الأخطاء 
// 3 مثال
// try{
//     riskyCode();
// } catch(error){
//     console.log(error);
// }

// 4 . Debugging Tools ادوات التقيح 
// Breakpoint // الشرح https://www.youtube.com/watch?v=jhDFmUC0xG4&t=1031s

// اسأل المطورين الاخرين



//  العبارة try...catch

// function sum(num1, num2){
//     if(typeof num1 !== 'number') throw new Error('The first parameter mut be a number');
//     if(typeof num2 !== 'number') throw new Error('The second parameter mut be a number');
//     return num1 + num2;
// }

// Runtime Errors.
// try{
//     // Code may produce errors.

//    /* console.log('Start of try');
//     unkniwnCode;
//     console.log('End of try');*/

//     console.log(sum("1",1));

// }catch(error){
//     // Handle errors.
//     console.log('Oops! there is an error', error);

// //} //ليست اجباريه finally{
//     // Do something after try and catch.
// //     console.log('Reached the finally statement.');

// }



// البيانات Data

// مجموعة من الارقام والحقائق والقياسات والتي تكون مجردة من اي معنى


// المعلومات Information

// البينات ذاتها ولكن بعد ان تتم معالجتها وتنظيفها واستنتاج ما تعنيه وبالتالي فهي تمتلك معنى


// أنماط التخزين

// .التخزين طويل الامد
// Herd Disk - CD - Flash Drive 

// . التخزين قصير الامد
// RAM 


// ترميز البيانات Data Encoding

// ASCII نظام الترميز 

// UNICODE مجموعة 

// UTF-8 نظام الترميز 
 
// تخزين الصور



// قواعد البيانات Databases

// Flat File 
// . من ابسط أنواع البينات
// . تنظيم البينات داخل ملف بشكل معين
// . تعتبر خيارًا شائعًا لخزين كمية صغيرة البينات 
// . CSV مثال على هذا النوع هو ملفات

// Relational
// . من اكثر أنظمة قواعد البينات شيوعاً
// . تعتمد بشكل اساسي على ال جدول وتحتوي هذه الجداول على سجلات
// . للتعامل مع البينات SQL تستخدم لغة الاستعلام المهيكلة
// . RDMS تدار عن طريق
// . (MySQL, SQL Server, Oracle) أمثلة

// Non - Relational
// . أكثر الطرق الواعدة للاستخدام في المدى القريب
// . MongoDB - Redis - Cassandra - BigTable 
// . Documents على مايسمى مستندات MongoDB تعتمد 
// . Objects البينات داخل المستندات على شكل كائنات MongoDB تخزين 
// . توفرها قاعدة البينات API يتم الوصول للبينات عن طريق واجهة برمجية


// قراءة الملفات Files Reading

// const fs = require("fs");

// fs.readFile('./messages.txt', 'UTF8', (error, data)  => {
//     if(error) console.log(error);
//     else{
//     const messages = data.split(',');
//      console.log(messages);
//     }
// });

// console.log('Executed after read file.')


// كتابة الملفات Files Writing
/*
const fs = require("fs");
 const content = "\nWelcome in SAQR";
const messages =[
    'message1', 'message2', 'message3', 'message4'
];
const content = messages.join(' , ')
fs.appendFile('./new.txt', content, 'utf8', error => {
    if(error) console.log(error);
    else console.log('File written');
});

fs.rename('./messages.txt', 'msgs.txt',error => {
    if(error) console.log(error);
    else console.log('Rename.')
});

fs.unlink('./msgs.txt' , error => {
if(error) console.log(error);
else console.log('Deleted.');
});*/



// I/O الإدخال والإخراج 

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('name?', answer => {
//     console.log(`Hello: ${answer}`);
//     rl.close();
// });


// خوارزمية الفرز الفقاعي Bubble Sort (شرح)

let BubbleSort = [5, 1, 4, 2, 8, 100];

BubbleSort.sort(((a, b) =>a - b));

console.log(BubbleSort);



// خوارزمية الفرز الفقاعي Bubble Sort (تنفيذ)

function bubbleSort(array){
    let swappad;
    do{
        swappad = false;
        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i + 1]){
                let tmp = array[i];
                array[i]  = array[i + 1];
                array[i + 1] = tmp;
                swappad = true;
            }
        }
    }while(swappad)
    return array;
}

let sorted = bubbleSort([5, 1, 4, 2, 8]);
console.log(sorted);



