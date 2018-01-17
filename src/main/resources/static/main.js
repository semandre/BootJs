$(document).ready(function () {

    $.ajax({
        url: "/showProduct",
        type: "GET",
        success: function (data) {
            for (let obj of data) {
                console.log(data);
                let $p = $("<p/>", {
                    text: obj.name + " " + obj.price
                });
                // let $b = ("<button id='" + obj.id + "'>buy");
                let $b = ("<button class='cartbtn'>buy");
                // console.log($p);
                $('.target').append($p).append($b);
                $('.target p').addClass("span");

            }
        },
        error: function () {
            alert("errorSHOW");
        }

    });

});

$('.cartbtn').click(function () {



    console.log("fuck");
    window.alert("fuck");
});

$('#SortByLowPrice ').click(function () {
    $('.target').empty();
    $.ajax({
        url: '/SortByLowPrice',
        type: 'GET',
        success: function (data) {
            for (let obj of data) {
                let $p = $("<p>", {
                    text: obj.name + " " + obj.price
                });
                $('.target').append($p);
            }
        },
        error: function () {
            console.log("sortbylowpriceERROR")
        }
    })
});


$("#SortByHighPrice").click(function () {
    $('.target').empty();
    $.ajax({
        url: '/SortByHighPrice',
        type: 'GET',
        success: function (data) {
            for (let obj of data) {
                let $p = $("<p>", {
                    text: obj.name + " " + obj.price
                });
                console.log($p);
                $('.target').append($p);
            }
        },
        error: function () {
            console.log("sortbyhighpriceERROR")
        }
    })
});


$('#SortByDate').click(function () {
    $('.target').empty();
    $.ajax({
        url: '/SortByAddingDate',
        type: 'GET',
        success: function (data) {
            for (let obj of data) {
                let $p = $('<p>', {
                    text: obj.id + " " + obj.name + " " + obj.price
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


$('#search').click(function () {
    var name = $("#name").val();
    var product = {
        name
    };

    console.log(product);
    $('.target').empty();
    $.ajax({
        url: '/findProduct',
        method: 'POST',
        data: JSON.stringify(product),
        // async: true,
        contentType: 'application/json',
        success: function (data) {
            for (let obj of data) {
                let $p = $('<p/> ', {
                    text: obj.name + " " + obj.price
                });
                $('.target').append($p);
            }

        }, error: function () {
            alert("find error");
        }
    });
});