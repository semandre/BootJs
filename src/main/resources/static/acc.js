// $(document).ready(function () {
//     var out = '';
//     $.ajax({
//         url: '/showCity',
//         type: 'POST',
//         success: function (data) {
//             for (var obj of data) {
//                 out += '<option value="' + obj.cityName + '">' + obj.cityName + '</option>';
//             }
//             $('#list').html(out);
//         }
//     });
// });

$('#saveUser').click(function () {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var phoneNumber = $('#phone').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var cityName = $('#list').val();
    var carts = JSON.parse(localStorage.getItem("carts"));
    var city = {
        cityName
    };
    var customer = {
        firstName,
        lastName,
        phoneNumber,
        address,
        email,
        city,
        carts
    };

    $('.targetcus').empty();
    $.ajax({
        url: '/saveUser',
        type: 'POST',
        data: JSON.stringify(customer),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            // document.getElementById('clear').reset();
            // for (let obj of data) {
            //     let $p = $("<p/>", {
            //         text: obj.id + " " + obj.firstName + " " + obj.lastName + " "
            //         + obj.phoneNumber + " " + obj.address + " " + obj.email + " " + obj.city.cityName
            //     });
            //     console.log($p);
            //     $('.targetcus').append($p)
            //
            // }
        },
        error: function () {
            console.log("errooorrSAVE")
        }

    })

});








