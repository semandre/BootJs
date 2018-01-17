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


                // let $b = ("<button id='" + obj.id + " '>buy");
                // $b.attachEvent('onclick', this.getId);


                var btn = document.createElement('input')
                btn.id = obj.id;
                btn.type = 'button';
                btn.value = 'buy';
                btn.setAttribute('onclick', 'getId(this)');
                // document.body.appendChild(btn)


                $('.target').append($p).append(btn);
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


function getId(obj) {
    console.log(obj.id);
    var id = obj.id;
    $.ajax({
        url: 'addCart/'+obj.id+'',
        type: 'GET',
        data: JSON.stringify(id),
        contentType:'application/json',
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log("errorAddCart");
        }

    });


}

