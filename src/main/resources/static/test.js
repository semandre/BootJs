// ///////////////////////
// var str=[2,5,3,9];
// // console.log((str[0]*str[1])+(str[2]*str[3]));
// ///////////////////////
// var week={
//     1:"monday",
//     2:"tuesday",
//     3:"wednesday",
//     4:"thursday",
//     5:"friday",
//     6:"saturday",
//     7:"sunday",
// };
//
// var day=3;
// for (obj in week ){
//     if (obj==day) {
//         // console.log(week[obj]);
//     }
// }
// ////////////////////////
// var days={
//     "ru":{0:"ПН",1:"ВТ"},
//     "en":{0:"MD",1:"TU"},
// };
//
// // console.log(days.ru[1]);
// ////////////////////////
// var number = '123456';
// var a=0;
// var b=0;
// for(var i in number){
//     if (i<3){
//         b+=parseInt(number[i]);
//     }else {
//         a+=parseInt(number[i]);
//     }
// }
// // console.log(a==b);
// // console.log(a);
// // console.log(b);
// /////////////////////////
//
// function f(y) {
//     var x=parseInt(y);
//     if (x==0){
//         return 1;
//     }
//     else {
//         return x*f(x-1);
//     }
// }
// // console.log(f(5));
// /////////////////////////
// var s='30-11-1996';
// // console.log(s.replace(/-/g,'/'));
// /////////////////////////
//
// var st='index.html';
// st=st.split('.');
// for(var i in st){
//     // console.log(st[i]);
//     if (st[i]=='html'){
//         // console.log("+");
//     }else {
//         // console.log('-');
//     }
// }
// //////////////////////////
//
// var num=4
//
// function findDay(num) {
//     var x=['md','ts','wd','th','fd','sd','sun'];
//     return x[num-1];
// }
// // console.log(findDay(num));
// /////////////////////////////
// function getDivisors(num){
//     var a=[];
//     for(var i=0;i<=num;i++){
//         if (num%i==0){
//             a.push(i);
//         }
//     }
//     return a;
// }
//
// // console.log(getDivisors(17));
// ////////////////////////////////
// function ucFirst(str) {
//     return str[0].toUpperCase()+str.substr(1);
// }
// // console.log(ucFirst("asd"));
// /////////////////////////////////
// var x='var_text_hello';
//
// // console.log(x.replace(/_/g,''));
// /////////////////////////////////
// var arr=[4,2,5,7,3];
//
//
// function f(arr) {
//     // console.log(arr[0]);
//     arr.splice(0,1);
//     if (arr.length>0){
//         f(arr);
//     }
//
// }
// f(arr);
// ////////////////////////////////
// var c=431135;
//
// function rec(num) {
//     var sum=0,tmp;
//     while(num){
//         tmp = num % 10;
//         num = (num - tmp) / 10;
//         sum += tmp;
//     }
//     // console.log(sum);
//     if(sum>9){
//         rec(sum);
//
//     }
// }
// rec(c);

/////////////////////////
//     document.getElementById('bat').onclick=function () {
//         this.innerHTML=parseInt(this.innerHTML)+1;
//     };

    // document.getElementById('bat').addEventListener('click',function () {
    //     this.innerHTML=parseInt(this.innerHTML)+1;
    // });


// document.getElementById('bat').addEventListener('click',function () {
//     var a =document.getElementById('name');
//     var a1=a.value;
//     var b=document.getElementById('descr');
//     var b1=b.value;
//     b.value=a1;
//     a.value=b1;
// });
// var a=document.getElementById('name');
// document.getElementById('bat1').addEventListener('click',function () {
//     a.value+='*';
//     this.disabled=true;
// });
// document.getElementById('bat2').addEventListener('click',function () {
//     a.value+='+';
//     this.disabled=true;
// });
// document.getElementById('bat3').addEventListener('click',function () {
//     a.value+='-';
//     this.disabled=true;
// });

// var a=document.getElementById('name').value;
// var b=document.getElementById('descr').value;
//
// document.getElementById('bat3').addEventListener('click',function () {
//     this.innerHTML=a+b;
// });


var $p=document.createElement('p');
$p.className="clock";
$p.innerHTML="00:00:00";
var $target=document.getElementsByClassName("target")[0];
$target.appendChild($p);
window.onload=
    function go() {
        window.timerId=window.setInterval(time,500);
    };

function time() {
    var date = new Date();
    var clock = document.getElementsByClassName('clock')[0];
    clock.innerHTML=addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}

function addZero(num) {
    if(num <=9) return '0'+num;
    else return num;
}







