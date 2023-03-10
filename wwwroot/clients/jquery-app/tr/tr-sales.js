var totalamt = 0;var totalgst = 0;var subtotal = 0;var discount = 0;var grandtotal = 0;
var per = 0; var disamount = 0; var saleamount = 0;

// Onload Function
$(document).ready(function () {   

    $("#SalesDate").datepicker({
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
SetInputNumeric('SQty');
SetInputNumeric('SRate');
SetInputNumeric('CCharge');



function GetSalesNo() {    
    $.ajax({
        type: "POST",
        url: "/Sales/GetSalesNo",
        dataType: "json",
        data: { CompID: 1 },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });   
}
function SetSalesNo() {    
    var salesno = $("#SerialNo").val();
    $.ajax({
        type: "POST",
        url: "/Sales/SetSalesNo",
        dataType: "json",
        data: { SalesNo: salesno },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });
}

// for Vender Auto Complete-- >
GetCustomerList("CustomerID");
//Product Auto Complete
GetProductList("ProductName");
//Service Auto Complete
GetServiceList("ServiceName");
//Charges Auto Complete
GetChargesList("ChargesName");

