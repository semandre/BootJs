$(document).ready(function () {

    $.ajax({
        url: "/show",
        type: "GET",
        success: function (data) {
            for (let obj of data) {
                let $p = $("<p/>", {
                    text: obj.id + " " + obj.name + " " + obj.price
                });
                console.log($p);
                $('.target').append($p);
                $('.target p').addClass("span");


            }
        },
        error: function () {
            alert("error");
        }

    });


});


$('#saveBtn').click(function () {
    var name = $('#name').val();
    var description = $('#descr').val();
    var price = $('#price').val();
    // var addingDate = new Date().toLocaleString();

    var product = {
        name,
        description,
        price
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
                    text: obj.id + " " + obj.name + " " + obj.price
                });
                console.log($p);
                $('.target').append($p)
            }
        },
        error: function () {
            console.log("errooorr")
        }

    })

});




$('#SortByLowPrice').click(function () {
    $('.target').empty();
    $.ajax({
        url:'/SortByLowPrice',
        type:'GET',
        success:function (data) {
            for(let obj of data){
                let $p = $("<p>",{
                    text: obj.id+" "+obj.name+" "+obj.price
                });
                console.log($p);
                $('.target').append($p);
            }
        },
        error:function () {
            console.log("sortbylowpriceERROR")
        }
    })
});

$('#SortByHighPrice').click(function () {
    $('.target').empty();
    $.ajax({
        url:'/SortByHighPrice',
        type:'GET',
        success:function (data) {
            for(let obj of data){
                let $p = $("<p>",{
                    text: obj.id+" "+obj.name+" "+obj.price
                });
                console.log($p);
                $('.target').append($p);
            }
        },
        error:function () {
            console.log("sortbyhighpriceERROR")
        }
    })
});

$('#SortByAddingDate').click(function () {
    $('.target').empty();
    $.ajax({
        url:'/SortByAddingDate',
        type:'GET',
        success:function (data) {
            for(let obj of data){
                let $p = $('<p>',{
                   text: obj.id+" "+obj.name+" "+obj.price
                });
                console.log($p);
                $('.target').append($p);
            }
        },
        error: function () {
            console.log("sortbyaddingdateERROR")
        }
    })
});