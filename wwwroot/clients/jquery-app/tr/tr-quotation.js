var totalamt = 0; var totalgst = 0; var subtotal = 0; var discount = 0; var grandtotal = 0;
var per = 0; var disamount = 0; var saleamount = 0;

var quill1; var quill2;
// Function Auto Complete
$(document).ready(function () {

    // For Editor 1
    quill1 = new Quill('#editor1', {
        theme: 'snow'
    });
    //Code for Set the value
    var value = $('#QuotationCondition').val();
    var delta = quill1.clipboard.convert(value);
    quill1.setContents(delta, 'silent')
    //  End

    // For Editor 2
    quill2 = new Quill('#editor2', {
        theme: 'snow'
    });
    //Code for Set the value
    var value = $('#QuotationIntro').val();
    var delta = quill2.clipboard.convert(value);
    quill2.setContents(delta, 'silent')
        //  End


    GetQuotationNo();

    $("#QuotationDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });
    $("#ExpactedDate").datepicker({
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

// Get Quotation No
function GetQuotationNo() {
    //Get Quotation No
    $.ajax({
        type: "POST",
        url: "/Quotation/GetQuotationNo",
        dataType: "json",
        data: { CompID: 1 },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });
}
// Set Quotation 
function SetQuotationNo() {
    //Set Quotation No-- >
    var quono = $("#SerialNo").val();
    $.ajax({
        type: "POST",
        url: "/Quotation/SetQuotationNo",
        dataType: "json",
        data: { QuotationNo: quono },
        success: function (response) {
            var str = response;
            $("#SerialNo").val(str);
        }
    });
}

//Customer Auto Complete
GetCustomerList("CustomerID");
//Product Auto Complete
GetProductList("ProductName");
//Service Auto Complete
GetServiceList("ServiceName");
//Charges Auto Complete
GetChargesList("ChargesName");

// Set Indian Curreny
SetDoubleIndian('DiscountPercent');
SetInputNumericIndian('DiscountValue');
SetInputNumericIndian('Discount');
// Set Input Numeric 
SetInputNumeric('PQty');
SetInputNumeric('PRate');
SetInputNumeric('SQty');
SetInputNumeric('SRate');
