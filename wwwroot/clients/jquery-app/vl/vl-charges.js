$(document).ready(function () {
    SetInputNumericIndian('Charge');
    // for form validation
    $('form[id="vl-charges-form"]').validate({
        rules: {
            ChargesName: 'required',
            Charge: 'required',
        },
        messages: {           
            ChargesName: 'Please enter charges name !',
            Charge: 'Please enter charge amount !',
        },
        submitHandler: function (form) {
            RemoveIndianCulture("Charge");
            form.submit();
        }
    });
});
