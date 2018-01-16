$(document).ready(function () {
    $.ajax({
        url: "/show",
        type: "GET",
        success: function (data) {
            for (let obj of data) {
                console.log(data);
                let $p = $("<p/>", {
                    text: obj.name + " " + obj.price+" "+obj.count+" "+obj.description+" "+obj.category.categoryname
                });
                console.log($p);
                $('#listprod').append($p);
                $('#listprod p').addClass("span");
            }
        },
        error: function () {
            alert("errorSHOW");
        }
    });
});



$('#SortByAddingDate').click(function () {
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