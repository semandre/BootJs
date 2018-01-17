$(document).ready(function () {
    $.ajax({
        url: 'findBySessionId',
        type: 'GET',
        success: function (data) {
            console.log(data);
            for (let obj of data){
                let $p = $('<p/>',{
                    text: "id: "+obj.id + " name: " + obj.name + " price: " + obj.price + " quantity " + obj.quantity
                });
                console.log($p);
                $('#cartsProduct').append($p);
            }
        },
        error:function () {
            window.alert("cartsEROR");
        }
    })
});