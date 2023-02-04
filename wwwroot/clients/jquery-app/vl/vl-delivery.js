$(document).ready(function () {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");
    // end
    // for form validation
    $('form[id="vl-sales-form"]').validate({
        rules: {
            DeliveryDate: 'required',
            CustomerHiddenID: { valueNotEquals: "0" },
        },
        messages: {           
            SalesDate: 'Please enter delivery date !',
            CustomerHiddenID: 'Please select customer name !',           
        },
        submitHandler: function (form) {
            // Remove Indian Culture 
            RemoveIndianCulture("DiscountValue");
            RemoveIndianCulture("Discount");
            RemoveIndianCulture("DiscountPercent");
            // 
            // Set the Value           
            form.submit();
        }
    });
});
