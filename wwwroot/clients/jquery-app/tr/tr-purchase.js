var totalamt = 0;var totalgst = 0;var subtotal = 0;var discount = 0;var grandtotal = 0;
var per = 0; var disamount = 0; var saleamount = 0;

// Onload Function
$(document).ready(function () {   

    $("#PurchaseDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    $("#InvoiceDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    $("#DiscountPercent").blur(function () {
        UpdateDiscount("P");
    });

    $("#DiscountValue").blur(function () {
        UpdateDiscount("V");
    });
})

// Set Indian
SetDoubleIndian('DiscountPercent');
SetInputNumericIndian('DiscountValue');
SetInputNumericIndian('Discount');
// Set Input Numeric
SetInputNumeric('PQty');
SetInputNumeric('PRate');
SetInputNumeric('CCharge');



function GetPurchaseNo() {    
    $.ajax({
        type: "POST",
        url: "/Purchase/GetPurchaseNo",
        dataType: "json",
        data: { CompID: 1 },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });   
}
function SetPurchaseNo() {    
    var purno = $("#SerialNo").val();
    $.ajax({
        type: "POST",
        url: "/Purchase/SetPurchaseNo",
        dataType: "json",
        data: { PurchaseNo: purno },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });
}

// for Vender Auto Complete-- >
GetVenderList("VenderID");
//Product Auto Complete
GetProductList("ProductName");
//Charges Auto Complete
GetChargesList("ChargesName");

