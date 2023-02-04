function addtocart(ItemID) {       
    // call Ajax Method
    /*alert(ItemID);*/
        $.ajax({
            type: 'POST',
            url: '/Home/InsertShopingTrans',
        dataType: 'json',
            data: { pid: ItemID, qty: 1},
        success: function (data) {
            window.location.href = "Shopping-Cart";
            }
        });
    }

function updatecartitem(id) {
    var ItemID, Qty;
    ItemID = id;
    Qty = $("#text" + id).val();
    // call Ajax Method
    $.ajax({
        type: 'POST',
        url: '/Home/RefreshShoppingTrans',
        dataType: 'json',
        data: { id: ItemID, qty: Qty },
        success: function (data) {           
            window.location.href = "Shopping-Cart";
        }
    });
}

function deletecartitem(id) {
    var ItemID;
    ItemID = id;  
    // call Ajax Method
    $.ajax({
        type: 'POST',
        url: '/Home/RemoveShoppingTrans',
        dataType: 'json',
        data: { id: ItemID },
        success: function (data) {
            window.location.href = "Shopping-Cart";
        }
    });
}