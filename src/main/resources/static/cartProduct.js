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
                let $br = ("<input type='button' onclick='remove(this)' value='remove' id='" + obj.id + " '>");
                let $bp = ("<input type='button' onclick='increment(this)' value='+' id='" + obj.id + " '>");
                let $bm = ("<input type='button' onclick='decrement(this)' value='-' id='" + obj.id + " '>");

                $('#cartsProduct').append($p).append($br).append($bp).append($bm);
            }
        },
        error:function () {
            window.alert("cartsEROR");
        }
    })
});

function remove() {
    console.log(obj.id);
    var id = obj.id;
    $.ajax({
        url: 'remove/'+obj.id+'',
        type: 'GET',
        data: JSON.stringify(id),
        contentType:'application/json',
        success: function (data) {
            console.log(data);
            $('#cartsProduct').empty();
            for(let obj of data){

                let $p = $('<p/>',{
                    text: "id: "+obj.id + " name: " + obj.name + " price: " + obj.price + " quantity " + obj.quantity
                });
                console.log($p);
                let $br = ("<input type='button' onclick='remove(this)' value='remove' id='" + obj.id + " '>");
                let $bp = ("<input type='button' onclick='increment(this)' value='+' id='" + obj.id + " '>");
                let $bm = ("<input type='button' onclick='decrement(this)' value='-' id='" + obj.id + " '>");

                $('#cartsProduct').append($p).append($br).append($bp).append($bm);
            }
        },
        error: function () {
            console.log("errorREMOVECart");
        }

    });
}