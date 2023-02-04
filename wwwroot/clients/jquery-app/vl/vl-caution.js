
$(document).ready(function () {    
    // for form validation
    $('form[id="vl-caution-form"]').validate({
        rules: {
            CautionMessage: 'required',
        },
        messages: {           
            CautionMessage: 'Please enter caution message !',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
