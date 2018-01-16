$(document).ready(function () {
    console.log("AAAr")
    $("#saveUser").prop("disabled",true);
});

function checkFirst() {
    $("#first_name").empty();
    p_sender = document.myform.firstName.value.toString();
    if (p_sender != '') {
        if (p_sender.length < 3 || p_sender.length > 20) {
            let pp = $('<p>Шмя має складатись віз 3 до 20 літер </p>');
            $("#first_name").append(pp);
            return true;
        }
    } else {
        let pp = $('<p>Внесіть ваше імя</p>');
        $("#first_name").append(pp);
        return false;
    }
}

function checkLast() {
    $("#last_name").empty();
    p_sender = document.myform.firstName.value.toString();
    if (p_sender != '') {
        if (p_sender.length < 3 || p_sender.length > 20) {
            let pp = $('<p>Шмя має складатись віз 3 до 20 літер </p>');
            $("#last_name").append(pp);
            return true;
        }
    } else {
        let pp = $('<p>Внесіть ваше імя</p>');
        $("#last_name").append(pp);
        return false;
    }
}


function phonecheck() {
    $("#phone_number").empty();
    var re = /^[0-9\-\+]{12}$/;
    p_phone = document.myform.phoneNumber.value.toString();
    var valid = re.exec(p_phone);
    if (valid) {
        let p = $('<p>Формат номеру  є корректним</p>');
        $("#phone_number").append(p);
        $("#saveUser").prop("disabled",false);
        return true;
    }
    else {
        let p = $('<p>Неправильний формат номеру </p>');
        $("#phone_number").append(p);
        $("#saveUser").prop("disabled",true);
        return false;
    }
    console.log(valid);
    console.log(p_phone);


}


function checkEmail() {
    $("#email_").empty();
    p_sender = document.myform.email.value.toString();
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

