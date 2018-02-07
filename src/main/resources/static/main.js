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

                let $b = ("<input type='button' onclick='getId(this)' value='buy' id='" + obj.id + " '>");


                $('.target').append($p).append($b);
                $('.target p').addClass("span");
                // $('#btn').html($b);
            }
        },
        error: function () {
            alert("errorSHOW");
        }

    });
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




var carts = [];
carts = JSON.parse(localStorage.getItem("carts"));
if (carts == null) {
    carts = [];
}





function getId(obj) {

    carts = JSON.parse(localStorage.getItem("carts"));
    console.log(obj.id);
    var id = obj.id;
    console.log("buy");

    $.ajax({
        url: 'addCart/' + obj.id + '',
        type: 'GET',
        data: JSON.stringify(id),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            console.log(data.name);
            var a = 0;
            var checked = false;

            if (carts == null || carts.length == 0) {
                carts.push(data);
            }else {

                for (let i in carts) {
                    a = a + 1;
                    if ((carts[i].name == data.name)) {
                        carts[i].quantity = (carts[i].quantity + 1);
                        console.log("1log");

                    } else {
                        checked = true;
                        for (let y in carts) {
                            if (carts[y].name == data.name) {
                                checked = false;
                            }
                        }
                        if (a == carts.length) {
                            if (checked) {
                                carts.push(data);
                                checked = false;
                            }
                        }
                    }
                    if (a == carts.length) {
                        console.log("i==carts.length");
                    }
                    console.log(a);
                    console.log(carts.length);

                }
            }


            console.log(carts);
            localStorage.setItem("carts", JSON.stringify(carts));
            // localStorage.removeItem("carts");
            var storedNames = JSON.parse(localStorage.getItem("carts"));
            console.log(storedNames);

        },
        error: function () {
            console.log("errorAddCart");
        }
    });


};

