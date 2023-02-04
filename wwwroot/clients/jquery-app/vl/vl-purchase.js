$(document).ready(function () {    
    // for form validation
    $('form[id="vl-purchase-form"]').validate({
        rules: {
            InvoiceDate: 'required',
            PurchaseDate: 'required',
        },
        messages: {           
            InvoiceDate: 'Please select invoice date !',
            PurchaseDate: 'Please select purchase date expacted date !',
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
