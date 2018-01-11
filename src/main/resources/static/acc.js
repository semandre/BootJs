
$(document).ready(function () {
    var out = '';
    $.ajax({
        url:'/showCity',
        type:'GET',
        success: function (data) {
            for (let obj of data) {
                out+='<option value ="'+obj.city+'">'+obj.city+'<option>';
            }
            $('#city').html(out);
            console.log(out);
        },
        error: function () {
            alert("error");
        }
    });
});

$('#saveUser').click(()=>{
    // let login = $('#login').val();
    // console.log(login);
    // let password = $('#pass').val();
    let firstName = $('#firs').val();
    let lastName = $('#las').val();
    let phoneNumber = $('#phon').val();
    let city = $('#city').val();
    let address = $('#add').val();
    let email = $('#email').val();

    let user = {
        // login,
        // password,
        firstName,
        lastName,
        phoneNumber,
        city,
        address,
        email
    };
    console.log(user);
    $('.show').empty();
    $.ajax({
        url:'/saveUser',
        type:'POST',
        data:JSON.stringify(user),
        contentType:'application/json',
        success: function (res) {

            for (let obj of res) {
                let $p = $("<p/>", {
                    text: obj.firstName + " " + obj.lastName + " " +
                    obj.phoneNumber + " "+obj.city+" " + obj.address + " " + obj.email
                });
                $('.show').append($p);
            }
        },
        error:function () {
            alert("error");
        }
    });
});








