$(document).ready(function () {

    $.ajax({
        url: "/show",
        type: "GET",
        success: function (data) {
            for (let obj of data) {
                let $p = $("<p/>", {
                    text: obj.id + " " + obj.name + " " + obj.price+" "+ obj.category.categoryname
                });
                console.log($p);
                $('.target').append($p);
                $('.target p').addClass("span");


            }
        },
        error: function () {
            alert("errorSHOW");
        }

    });
var out ='';
$.ajax({
    url:'/allCategory',
    type:'POST',
    success:function(data){
        for (var obj of data){
        out+='<option value="'+obj.id+'">'+obj.categoryname+'</option>';
        }
        $('#list').html(out);
    }
});

});


$('#saveBtn').click(function () {
    var name = $('#name').val();
    var description = $('#descr').val();
    var price = $('#price').val();
    var categoryname = $('#list').val();
    // var addingDate = new Date().toLocaleString();
    var category = {
        categoryname
    }
    var product = {
        name,
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
                    text: obj.id + " " + obj.name + " " + obj.price+" "+ obj.category.categoryname
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