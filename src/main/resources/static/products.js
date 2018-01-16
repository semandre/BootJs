$(document).ready(function () {

    var out = '';
    $.ajax({
        url: '/allCategory',
        type: 'POST',
        success: function (data) {
            for (var obj of data) {
                out += '<option value="' + obj.categoryname + '">' + obj.categoryname + '</option>';
            }
            $('#list').html(out);
        }
    });

});


$('#saveBtn').click(function () {
    var name = $('#name').val();
    var count = $('#count').val();
    var description = $('#descr').val();
    var price = $('#price').val();
    var categoryname = $('#list').val();
    // var addingDate = new Date().toLocaleString();
    var category = {
        categoryname
    };
    var product = {
        name,
        count,
        description,
        price,
        category

        // addingDate
    };


    console.log(product);
    $('.target').empty();
    $.ajax({
        url: '/save',
        type: 'POST',
        data: JSON.stringify(product),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            for (let obj of data) {
                let $p = $("<p/>", {
                    text: obj.id + " " + obj.name + " "+obj.count+" " + obj.price + " " + obj.category.categoryname
                });
                console.log($p);
                $('.target').append($p)
            }
        },
        error: function () {
            console.log("errooorrSAVE")
        }

    })

});

