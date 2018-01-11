$(document).ready(function () {

    $.ajax({
        url:"/show",
        type:"GET",
        success:function (data) {
            var a=[1,3,2];
            a.sort();
            console.log(a);
            var a = 5;
            for(let obj of data){
                let $p=$("<p/>",{
                    text:obj.id+" "+obj.name+" "+obj.price
                });
                console.log($p);
                $('.target').append($p);
                $('.target p').addClass("span");
                // $('.target p').css("background-color","red");

            }
        },
        error:function () {
            alert("error");
        }

    });


});






$('#saveBtn').click(function () {
    var name=$('#name').val();
    var description=$('#descr').val();
    var price=$('#price').val();
    console.log(name);
    console.log(description);
    var product={
        name,
        description,
        price
    };
    console.log(product);
    $('.target').empty();
    $.ajax({
        url:'/save',
        type:'POST',
        data:JSON.stringify(product),
        contentType:'application/json',
        success:function (data) {
            console.log(data);
            for(let obj of data){
                let $p=$("<p/>",{
                    text:obj.id+" "+obj.name+" "+obj.price
                });
                console.log($p);
                $('.target').append($p)
            }
        },
        error:function () {
            console.log("errooorr")
        }

    })

})















