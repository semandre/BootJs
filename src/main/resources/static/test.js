
function checkout() {
    $("#first_name").empty();
    p_sender = document.myform.firstName.value.toString();
    if (p_sender != '') {
        if (p_sender.length < 3 || p_sender.length > 20) {
            let pp = $('<p>Enter name from 3 to 20 symboll</p>');
            $("#pp").append(pp);
            document.myform.firstName.focus();
            return false;
        }
    } else {
        alert("Enter your name");
        document.myform.firstName.focus();
        return false;
    }
}


function phonecheck() {
    $("#number").empty();
    var re = new RegExp("\\w+");
    p_phone = document.myform.phoneNumber.value.toString();
    if (re.test(p_phone)) {
        let $p = $('<p>Correct number format</p>');
        $("#number").append($p);
            document.myform.firstName.focus();
            return false;
        }
        else {
        let $p = $('<p>Incorrect number format</p>');
        $("#number").append($p);
        document.myform.firstName.focus();
        return false;
    }
}