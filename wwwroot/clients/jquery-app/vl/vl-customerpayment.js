$(document).ready(function () {
            $("#Customer").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: "/Share/CustomerAutoComplete",
                        type: "POST",
                        dataType: "json",
                        data: { Prefix: request.term },
                        success: function (data) {
                            response($.map(data, function (item) {
                                return { label: item.customerName, value: item.customerName, id: item.customerID };
                            }))
                        },
                    })
                },
                select: function (event, ui) {
                    $("#CustomerHiddenID").val(ui.item.id);
                    $("#CustomerName").val(ui.item.value);
                }
            });
    })  

$(document).ready(function () {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    SetInputNumericIndian("Amount");
    $("#TransactionDate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    // for form validation
    $('form[id="vl-customerpayment-form"]').validate({
        rules: {
            TransactionDate: 'required',
            Amount: 'required',
            PaymentMethod: { valueNotEquals: "0" },
            PaymentType: { valueNotEquals: "0" },
            PaymentMode: { valueNotEquals: "0" },
            CustomerName: 'required',
            
        },
        messages: {
            TransactionDate: 'Please select payment date !',
            Amount: 'Please enter payment amount !',
            PaymentMethod: 'Please select payment method !',
            PaymentType: 'Please select payment type !',
            PaymentMode: 'Please select payment mode !',
            CustomerName: 'Please select customer Name !',
        },
        submitHandler: function (form) {
            RemoveIndianCulture("Amount");
            form.submit();            
        }
    });
});
