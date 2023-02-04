$(document).ready(function () {
    SetInputNumericIndian('Charge2');
    // for form validation
    $('form[id="vl-charges-json-form"]').validate({
        rules: {
            ChargesName2: 'required',
            Charge2: 'required',
        },
        messages: {           
            ChargesName2: 'Please enter charges name !',
            Charge2: 'Please enter charge amount !',
        },
        submitHandler: function (form) {            
            form.submit();
        }
    });
});
