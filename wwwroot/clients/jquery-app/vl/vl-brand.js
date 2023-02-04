$(document).ready(function () {    
    // for form validation
    $('form[id="vl-brand-form"]').validate({
        rules: {
            BrandName: 'required',           
        },
        messages: {           
            BrandName: 'Please enter brand name !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
