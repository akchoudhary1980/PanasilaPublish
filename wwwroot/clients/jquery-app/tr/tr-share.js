// Product Auto Complete
$(document).ready(function () {
    $("#ProductName").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Share/ProductAutoComplete",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.ProductName, value: item.ProductName, id: item.ProductID };
                    }))
                },
            })
        },
        select: function (event, ui) {
            AutoFillData(ui.item.id, "P");
            $("#ProductID").val(ui.item.id);
        }
    });
})
// Service Auto Complete
$(document).ready(function () {
    $("#ServiceName").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Share/ServiceAutoComplete",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.ServiceName, value: item.ServiceName, id: item.ServiceID };
                    }))
                },
            })
        },
        select: function (event, ui) {
            AutoFillData(ui.item.id, "S");
            $("#ServiceID").val(ui.item.id);
        }
    });
})
// Customer Auto Complete
$(document).ready(function () {
    $("#CustomerID").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Share/CustomerNameAutoComplete",
                type: "POST",
                dataType: "json",
                data: { Prefix: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.CustomerName, value: item.CustomerName, id: item.CustomerID };
                    }))
                },
            })
        },
        select: function (event, ui) {
            CustomerDetailsFill(ui.item.id);
            $("#CustomerHiddenID").val(ui.item.id);
        }
    });
})
// Fill Customer
function CustomerDetailsFill(customerid) {
    $.ajax({
        type: "POST",
        url: "/Share/CustomerDetailFill",
        dataType: "json",
        data: { CustomerID: customerid },
        success: function (response) {
            var str = response;
            var res = str.split("^");
            $('#CustomerHiddenID').val(res[0]);
            $('#CustomerName').val(res[1]);
            $('#Address').val(res[2]);
            $('#State').val(res[3]);
            $('#City').val(res[4]);
            $('#Mobile').val(res[5]);
            $('#WhatsApp').val(res[6]);
            $('#Email').val(res[7]);
            $('#ProfessionID').val(res[8]);
            $('#GSTNo').val(res[9]);
            $('#CustomerID').val(res[1]);
        }
    });
}
// Open Customer Model
function addCustomer() {
    $('#CustomerModel').modal('show');
}
// Close Customer Model
function closeCustomer() {
    $('#CustomerModel').modal('hide');
}
// Clear Customer Model
function clearCustomer() {
    $("#CustomerHiddenID").val("0");
    $("#CustomerName").val("");
    $("#Address").val("");
    $("#State").val("");
    $("#City").val("");
    $("#Mobile").val("");
    $("#WhatsApp").val("");
    $("#Email").val("");
    $("#ProfessionID").val("");
}
// Add new Customer 
function newCustomer() {
    $("#CustomerHiddenID").val("0");
    var customername = $("#CustomerName").val();
    $("#CustomerID").val(customername);
    $('#CustomerModel').modal('hide');
}

// Get Update Discount No-- >    
function UpdateDiscount(method) {
    var per = 0; var disamount = 0; var saleamount = 0;
    grandtotal = ClearCulture(grandtotal);
    alert(grandtotal);
    if (method == "P") {
        per = parseFloat($("#DiscountPercent").val());
        disamount = Math.round(grandtotal * per / 100).toFixed(2);
        saleamount = grandtotal - disamount;
        $("#DiscountPercent").val(per);
        $("#DiscountValue").val(ConvertToIndian(disamount));
        $("#Discount").val(ConvertToIndian(disamount));
        $("#GroundTotal").text(ConvertToIndian(saleamount));
    }
    else {
        disamount = ClearCulture($("#DiscountValue").val());
        disamount = parseFloat(disamount);
        per = Math.round(disamount / grandtotal * 100).toFixed(2);
        saleamount = grandtotal - disamount;
        $("#DiscountPercent").val(per);
        $("#DiscountValue").val(ConvertToIndian(disamount));
        $("#Discount").val(ConvertToIndian(disamount));
        $("#GroundTotal").text(ConvertToIndian(saleamount));
    }
}
$(function () {
    $("#DiscountPercent").blur(function () {
        UpdateDiscount("P");
    });
    $("#DiscountValue").blur(function () {
        UpdateDiscount("V");
    });
});





 