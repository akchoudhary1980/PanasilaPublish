$(document).ready(function () {    
    // for form validation
    $('form[id="vl-quotation-form"]').validate({
        rules: {
            QuotationDate: 'required',
            ExpactedDate: 'required',
        },
        messages: {           
            QuotationDate: 'Please select quotation date !',
            ExpactedDate: 'Please select quotation expacted date !',
        },
        submitHandler: function (form) {
            // Remove Indian Culture 
            RemoveIndianCulture("DiscountValue");
            RemoveIndianCulture("Discount");
            RemoveIndianCulture("DiscountPercent");
            // 
            // Set the Value
            var editor_content1 = quill1.root.innerHTML;
            $('#QuotationCondition').val(editor_content1);

            // Set the Value
            var editor_content2 = quill2.root.innerHTML;
            $('#QuotationIntro').val(editor_content2);
            form.submit();
        }
    });
});
