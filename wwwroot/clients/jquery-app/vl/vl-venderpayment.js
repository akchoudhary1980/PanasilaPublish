$(document).ready(function () {
            $("#Vender").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: "/Share/VenderAutoComplete",
                        type: "POST",
                        dataType: "json",
                        data: { Prefix: request.term },
                        success: function (data) {
                            response($.map(data, function (item) {
                                return { label: item.venderName, value: item.venderName, id: item.venderID };
                            }))
                        },
                    })
                },
                select: function (event, ui) {
                    $("#VenderHiddenID").val(ui.item.id);
                    $("#VenderName").val(ui.item.value);
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
    $('form[id="vl-venderpayment-form"]').validate({
        rules: {
            TransactionDate: 'required',
            Amount: 'required',
            PaymentMethod: { valueNotEquals: "0" },
            PaymentType: { valueNotEquals: "0" },
            PaymentMode: { valueNotEquals: "0" },
            VenderName: 'required',
        },
        messages: {           
            TransactionDate: 'Please select payment date !',
            Amount: 'Please enter payment amount !',
            PaymentMethod: 'Please select payment method !',
            PaymentType: 'Please select payment type !',
            PaymentMode: 'Please select payment mode !',
            VenderName: 'Please select vender Name !',
        },
        submitHandler: function (form) {
            RemoveIndianCulture("Amount");
            form.submit();            
        }
    });
});
