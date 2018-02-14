<<<<<<< HEAD
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



=======
$(document).ready(function () {
    console.log("AAAr");
>>>>>>> 450e6dc192b8f396a6b6e1e0a494762ef2cd9f71

    $("#saveUser").prop("disabled", true);


});

$('#inputsCustomer').keyup(function () {
    mainCheck();
});


function checkFirst() {
    $("#first_name").empty();
    p_sender = $('#first').val();
    var b = true;
    if (p_sender != '') {
        if (p_sender.length < 3 || p_sender.length > 20) {
            let pp = $('<p>Імя має складатись від 3 до 20 літер </p>');
            $("#first_name").append(pp);
            // $("#saveUser").prop("disabled",false);
            b = false;
            return b;
        }
    } else {
        let pp = $('<p>Внесіть ваше імя</p>');
        $("#first_name").append(pp);
        // $("#saveUser").prop("disabled",true);
        b = false;
        return b;

    }
    return b;
    console.log(b);
}

function checkLast() {
    $("#last_name").empty();
    p_sender = $('#last').val();
    var b = true;
    if (p_sender != '') {
        if (p_sender.length < 3 || p_sender.length > 20) {
            let pp = $('<p>Імя має складатись від 3 до 20 літер </p>');
            $("#last_name").append(pp);
            // $("#saveUser").prop("disabled",false);
            b = false;
            return b;
        }
    } else {
        let pp = $('<p>Внесіть ваше імя</p>');
        $("#last_name").append(pp);
        // $("#saveUser").prop("disabled",true);
        b = false;
        return b;
    }
    return b;

}


function phonecheck() {
    $("#phone_number").empty();
    var re = /^[0-9\-\+]{12}$/;
    p_phone = $('#phone').val();
    var valid = re.exec(p_phone);
    if (valid) {
        let p = $('<p>Формат номеру  є корректним</p>');
        $("#phone_number").append(p);
        // $("#saveUser").prop("disabled",false);
        return true;
    }
    else {
        let p = $('<p>Неправильний формат номеру </p>');
        $("#phone_number").append(p);
        // $("#saveUser").prop("disabled",true);
        return false;
    }

    console.log(valid);
    console.log(p_phone);
}


function checkEmail() {
    $("#email_").empty();
    p_sender =$('#email').val();

    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
    var valid = re.exec(p_sender);
    if (valid) {
        let pp = $('<p>Email є корректним</p>');
        $("#email_").append(pp);
        return true;
    } else {
        let pp = $('<p>Невірний формат email</p>');
        $("#email_").append(pp);
        return false;
    }
}


function mainCheck() {
    var ck = (checkEmail() && checkFirst() && phonecheck() && checkLast());
    console.log(ck);
    $("#saveUser").prop("disabled",!ck);

}
